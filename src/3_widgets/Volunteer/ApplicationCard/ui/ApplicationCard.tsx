'use client';

import { FC } from "react";
import { useRouter } from "next/navigation";
import classNames from "classnames";
import {
  Calendar,
  CheckCircle2,
  Clock4,
  MapPin,
  MinusCircle,
  Users,
  XCircle,
} from "lucide-react";
import { RegistrationStatus } from "../../../../../app/generated/prisma";

import { formatEventDate, formatEventTime } from "@shared/lib";
import { PAGES } from "@shared/constants";
import { ActivityTypeBadge, Button, Typography } from "@shared/ui";
import type { VolunteerApplication } from "@shared/types/volunteer";

import s from "./ApplicationCard.module.scss";

type StatusTone = "success" | "warning" | "danger" | "muted";

type StatusMeta = {
  label: string;
  tone: StatusTone;
  icon: React.ReactNode;
};

const STATUS_META: Record<RegistrationStatus, StatusMeta> = {
  [RegistrationStatus.approved]: {
    label: "Одобрено",
    tone: "success",
    icon: <CheckCircle2 size={16} />,
  },
  [RegistrationStatus.pending]: {
    label: "Ожидает одобрения",
    tone: "warning",
    icon: <Clock4 size={16} />,
  },
  [RegistrationStatus.rejected]: {
    label: "Отклонено",
    tone: "danger",
    icon: <XCircle size={16} />,
  },
  [RegistrationStatus.cancelled]: {
    label: "Отменено",
    tone: "muted",
    icon: <MinusCircle size={16} />,
  },
  [RegistrationStatus.completed]: {
    label: "Завершено",
    tone: "muted",
    icon: <CheckCircle2 size={16} />,
  },
};

const getStatusNote = (application: VolunteerApplication) => {
  switch (application.status) {
    case RegistrationStatus.approved:
      return {
        title: "Ваша заявка одобрена",
        text: "Не забудьте прийти вовремя. Ждём вас на мероприятии! Часы будут засчитаны после того, как организатор подтвердит ваше участие.",
      };
    case RegistrationStatus.pending:
      return {
        title: "Заявка на рассмотрении",
        text: "Организатор рассматривает вашу заявку. Вы получите уведомление о решении.",
      };
    case RegistrationStatus.rejected:
      return {
        title: "Причина отклонения",
        text:
          application.rejectionReason ??
          "Организатор отклонил заявку. Спасибо за интерес к мероприятию.",
      };
    case RegistrationStatus.cancelled:
      return {
        title: "Заявка отменена",
        text: "Вы отменили участие. Можно подать новую заявку, если набор открыт.",
      };
    case RegistrationStatus.completed:
    default:
      return {
        title: "Участие завершено",
        text: "Спасибо за участие! Ваши часы учтены",
      };
  }
};

const formatDuration = (schedule: VolunteerApplication["event"]["schedule"]) => {
  if (schedule.requiredHours > 0) {
    return `${schedule.requiredHours} часов`;
  }

  const start = new Date(schedule.startTime).getTime();
  const end = new Date(schedule.endTime).getTime();

  if (Number.isNaN(start) || Number.isNaN(end) || end <= start) {
    return "";
  }

  const minutes = Math.round((end - start) / 60000);
  const hours = Math.max(Math.round((minutes / 60) * 10) / 10, 0);

  return hours > 0 ? `${hours} часов` : "";
};

type ApplicationCardProps = {
  application: VolunteerApplication;
  appliedAtLabel?: string;
  onCancel?: (registrationId: string) => Promise<void> | void;
  
  isCancelling?: boolean;
};

export const ApplicationCard: FC<ApplicationCardProps> = ({
  application,
  appliedAtLabel,
  onCancel,
 
  isCancelling = false,
}) => {
  const router = useRouter();
  const statusMeta = STATUS_META[application.status];
  const note = getStatusNote(application);

  const eventDate = formatEventDate(application.event.schedule.eventDate);
  const startTime = formatEventTime(application.event.schedule.startTime);
  const endTime = formatEventTime(application.event.schedule.endTime);
  const duration = formatDuration(application.event.schedule);

  const locationName = application.event.location.name;
  const locationDetail = application.event.location.address;
  const participantsCurrent = application.event.participants.current ?? 0;
  const participantsMax = application.event.participants.max;
  const participantsLabel =
    typeof participantsMax === "number" && participantsMax > 0
      ? `${participantsCurrent} / ${participantsMax} участников`
      : `${participantsCurrent} участников`;

  const showCancelButton =
    application.status === RegistrationStatus.pending ||
    application.status === RegistrationStatus.approved;

 
  const handleOpenEvent = () => {
    router.push(PAGES.VOLUNTEER_EVENT(application.event.id));
  };

  const handleCancel = () => {
    if (onCancel) {
      void onCancel(application.id);
    }
  };

  return (
    <article className={s.card}>
      <div className={s.card__header}>
        <div className={s.card__title}>
          <Typography variant="h3" as="h3">
            {application.event.title}
          </Typography>
          {application.event.description ? (
            <Typography variant="body" color="gray">
              {application.event.description}
            </Typography>
          ) : null}
          <div className={s.tags}>
            <ActivityTypeBadge activityType={application.event.activityType} />
            {application.event.tags.map((tag) => (
              <span key={tag} className={s.tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className={classNames(s.status, s[`status_${statusMeta.tone}`])}>
          {statusMeta.icon}
          <Typography variant="bodyBold" as="span">
            {statusMeta.label}
          </Typography>
        </div>
      </div>

      <div className={s.meta}>
        <div className={s.metaItem}>
          <Calendar size={18} />
          <Typography color="gray">{eventDate}</Typography>
        </div>
        <div className={s.metaItem}>
          <Clock4 size={18} />
          <Typography color="gray">
            {startTime} - {endTime} {duration ? `(${duration})` : null}
          </Typography>
        </div>
        <div className={s.metaItem}>
          <MapPin size={18} />
          <Typography color="gray">
            {locationDetail ? `${locationName}, ${locationDetail}` : locationName}
          </Typography>
        </div>
        <div className={s.metaItem}>
          <Users size={18} />
          <Typography color="gray">{participantsLabel}</Typography>
        </div>
      </div>

      <div className={s.details}>
        <Typography color="gray">
          Организатор: <span className={s.highlight}>{application.event.organizer.name}</span>
        </Typography>
        <Typography color="gray">
          Дата подачи заявки:{" "}
          <span className={s.highlight}>{appliedAtLabel ?? eventDate}</span>
        </Typography>
      </div>

      <div className={classNames(s.note, s[`note_${statusMeta.tone}`])}>
        <Typography variant="bodyBold" className={s.noteTitle}>
          {note.title}
        </Typography>
        <Typography color="gray">{note.text}</Typography>
      </div>

      <div className={s.actions}>
        <Button color="white" onClick={handleOpenEvent}>
          Перейти к мероприятию
        </Button>

        {showCancelButton ? (
          <Button
            variant="delete"
            onClick={handleCancel}
            disabled={!onCancel || isCancelling}
          >
            {isCancelling ? "Отменяем..." : "Отменить заявку"}
          </Button>
        ) : null}
      </div>
    </article>
  );
};
