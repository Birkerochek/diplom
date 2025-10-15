'use client';

import { useMemo, type ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Calendar,
  Clock4,
  MapPin,
  Users,
  Mail,
  Phone,
  Clock,
  UserRound,
} from "lucide-react";

import { useFetchEvent } from "@shared/api";
import { api } from "@shared/api/axios";
import {
  Button,
  Container,
  EventStatusBadge,
  ProgressBar,
  Tabs,
  Typography,
} from "@shared/ui";
import { formatEventDate, formatEventTime } from "@shared/lib";
import type { EventVolunteer } from "@shared/api/event/fetchEvent";
import {
  PRIMARY_REGISTRATION_STATUSES,
  REGISTRATION_STATUS_COLORS,
  REGISTRATION_STATUS_LABELS,
  REGISTRATION_STATUS_PRIORITY,
} from "../model/constants";
import { useVolunteerActions } from "../model/useVolunteerActions";
import styles from "./EventDetailsPage.module.scss";
import { RegistrationStatus } from "../../../../../app/generated/prisma";

type EventDetailsPageProps = {
  eventId: string;
};

const MAILTO_PREFIX = "mailto:";
const TEL_PREFIX = "tel:";

export const EventDetailsPage = ({ eventId }: EventDetailsPageProps) => {
  const router = useRouter();
  const {
    data: event,
    isLoading,
    isError,
    refetch,
    isFetching,
  } = useFetchEvent(eventId);
  const { approveVolunteer, rejectVolunteer, isProcessing } = useVolunteerActions({ eventId });

  const volunteersByStatus = useMemo(() => {
    const map = new Map<RegistrationStatus, EventVolunteer[]>();

    if (!event) {
      return map;
    }

    for (const volunteer of event.volunteers) {
      const bucket = map.get(volunteer.status);

      if (bucket) {
        bucket.push(volunteer);
      } else {
        map.set(volunteer.status, [volunteer]);
      }
    }

    return map;
  }, [event]);

  const statusesForTabs = useMemo(() => {
    if (!event) {
      return [] as RegistrationStatus[];
    }

    const counts = event.stats.registrations;

    return REGISTRATION_STATUS_PRIORITY.filter((status) => {
      if (PRIMARY_REGISTRATION_STATUSES.has(status)) {
        return true;
      }

      return (counts[status] ?? 0) > 0;
    });
  }, [event]);

  const handleEdit = () => {
    router.push(`/organizer/events/${eventId}/edit`);
  };

  const handleDelete = async () => {
    const confirmed = window.confirm("Удалить мероприятие? Действие необратимо.");

    if (!confirmed) {
      return;
    }

    try {
      await api.delete(`/api/events/${eventId}`);
      router.push("/organizer/events");
    } catch (error) {
      console.error("Delete event error", error);
      window.alert("Не удалось удалить мероприятие. Попробуйте снова.");
    }
  };

  if (isLoading || isFetching) {
    return (
      <Container className={styles.page}>
        <Typography variant="body">Загружаем данные мероприятия...</Typography>
      </Container>
    );
  }

  if (isError || !event) {
    return (
      <Container className={styles.page}>
        <Typography variant="body" color="secondary">
          Не удалось загрузить мероприятие.
        </Typography>
        <Button color="primary" onClick={() => refetch()}>
          Повторить попытку
        </Button>
      </Container>
    );
  }

  const formattedDate = formatEventDate(event.schedule.eventDate);
  const formattedStart = formatEventTime(event.schedule.startTime);
  const formattedEnd = formatEventTime(event.schedule.endTime);
  const maxParticipants = event.capacity.maxParticipants ?? 0;
  const currentParticipants = event.capacity.currentParticipants ?? 0;
  const fillRate = event.capacity.fillRate ?? (maxParticipants
    ? Math.round((currentParticipants / maxParticipants) * 100)
    : 0);
  const availableSeats = maxParticipants
    ? Math.max(maxParticipants - currentParticipants, 0)
    : null;

  const tabStatuses = statusesForTabs.length
    ? statusesForTabs
    : [RegistrationStatus.approved, RegistrationStatus.pending];

  return (
    <Container className={styles.page}>
      <Link href="/organizer/events" className={styles.backLink}>
        <ArrowLeft size={18} />
        Назад к мероприятиям
      </Link>

      <header className={styles.header}>
        <div className={styles.header__titleBlock}>
          <Typography as="h1" variant="h2">
            {event.title}
          </Typography>
          <EventStatusBadge status={event.status} />
        </div>

        <div className={styles.header__actions}>
          <Button color="white" onClick={handleEdit} icon="edit">
            Редактировать
          </Button>
          <Button variant="delete" onClick={handleDelete}>
            Удалить
          </Button>
        </div>
      </header>

      <div className={styles.layout}>
        <div className={styles.layout__left}>
          <section className={styles.section}>
            <header className={styles.section__header}>
              <Typography variant="h3">Информация о мероприятии</Typography>
            </header>
            {event.description ? (
              <Typography variant="body" className={styles.section__description}>
                {event.description}
              </Typography>
            ) : null}

            <div className={styles.infoGrid}>
              <InfoItem icon={<Calendar size={20} />} label="Дата" value={formattedDate} />
              <InfoItem
                icon={<Clock4 size={20} />}
                label="Время"
                value={`${formattedStart} – ${formattedEnd} • ${event.schedule.requiredHours} ч`}
              />
              <InfoItem
                icon={<MapPin size={20} />}
                label="Место"
                value={event.location.name}
                helper={event.location.address ?? undefined}
              />
              <InfoItem
                icon={<Users size={20} />}
                label="Волонтёры"
                value={`${currentParticipants} из ${maxParticipants || "—"}`}
              />
            </div>

            <div className={styles.requirementsBlock}>
              <Typography variant="h4">Требования</Typography>
              <Typography variant="body" color="gray">
                {event.requirements ?? "Организатор не указал требования."}
              </Typography>
            </div>
          </section>

          <section className={styles.section}>
            <header className={styles.section__header}>
              <Typography variant="h3">Зарегистрированные волонтёры</Typography>
            </header>

            <Tabs
              defaultValue={tabStatuses[0]}
              listClassName={styles.tabs__list}
              tabClassName={styles.tabs__tab}
              contentClassName={styles.tabs__panel}
            >
              {tabStatuses.map((status) => {
                const volunteers = volunteersByStatus.get(status) ?? [];
                const count = event.stats.registrations[status] ?? 0;
                const label = `${REGISTRATION_STATUS_LABELS[status]} (${count})`;

                return (
                  <Tabs.Item key={status} value={status} label={label}>
                    {volunteers.length === 0 ? (
                      <div className={styles.emptyState}>
                        <Typography variant="body" color="gray">
                          Пока нет волонтёров в этой категории.
                        </Typography>
                      </div>
                    ) : (
                      <div className={styles.volunteerList}>
                        {volunteers.map((registration) => (
                          <VolunteerCard
                            key={registration.id}
                            registration={registration}
                            onApprove={approveVolunteer}
                            onReject={rejectVolunteer}
                            isProcessing={isProcessing}
                          />
                        ))}
                      </div>
                    )}
                  </Tabs.Item>
                );
              })}
            </Tabs>
          </section>
        </div>

        <aside className={styles.layout__right}>
          <section className={styles.section}>
            <Typography variant="h3" className={styles.section__headerTitle}>
              Статистика
            </Typography>

            <div className={styles.progressBlock}>
              <div className={styles.progressBlock__header}>
                <Typography variant="body">Заполненность</Typography>
                <Typography variant="bodyBold">{fillRate}%</Typography>
              </div>
              <ProgressBar value={fillRate} />
            </div>

            <dl className={styles.statsList}>
              <StatRow label="Всего мест" value={maxParticipants || "—"} />
              <StatRow label="Зарегистрировано" value={event.stats.registrations.total} />
              <StatRow
                label="Одобрено"
                value={event.stats.registrations.approved ?? 0}
                color={REGISTRATION_STATUS_COLORS[RegistrationStatus.approved]}
              />
              <StatRow
                label="Ожидают"
                value={event.stats.registrations.pending ?? 0}
                color={REGISTRATION_STATUS_COLORS[RegistrationStatus.pending]}
              />
              <StatRow
                label="Свободно мест"
                value={availableSeats ?? "—"}
                color="gray"
              />
            </dl>
          </section>

          <section className={styles.section}>
            <Typography variant="h3" className={styles.section__headerTitle}>
              Организатор
            </Typography>

            <div className={styles.organizer}>
              <div className={styles.organizer__avatar}>
                <UserRound size={28} />
              </div>
              <div className={styles.organizer__info}>
                <Typography variant="bodyBold">{event.organizer.name}</Typography>
                <Typography variant="body" color="gray">
                  Организатор
                </Typography>
              </div>
            </div>

            <div className={styles.contactList}>
              <ContactLink
                icon={<Mail size={16} />}
                label="Email"
                value={event.organizer.email}
                href={`${MAILTO_PREFIX}${event.organizer.email}`}
              />
            </div>
          </section>
        </aside>
      </div>
    </Container>
  );
};

type InfoItemProps = {
  icon: ReactNode;
  label: string;
  value: string;
  helper?: string;
};

const InfoItem = ({ icon, label, value, helper }: InfoItemProps) => {
  return (
    <div className={styles.infoItem}>
      <div className={styles.infoItem__icon}>{icon}</div>
      <div className={styles.infoItem__content}>
        <Typography variant="bodyBold">{label}</Typography>
        <Typography variant="body" color="gray">
          {value}
        </Typography>
        {helper ? (
          <Typography variant="body" color="gray">
            {helper}
          </Typography>
        ) : null}
      </div>
    </div>
  );
};

type StatRowProps = {
  label: string;
  value: string | number;
  color?: "green" | "gray" | "secondary" | "black";
};

const StatRow = ({ label, value, color = "black" }: StatRowProps) => {
  return (
    <div className={styles.statRow}>
      <Typography variant="body" color="gray">
        {label}
      </Typography>
      <Typography variant="bodyBold" color={color === "black" ? "black" : color}>
        {value}
      </Typography>
    </div>
  );
};

type VolunteerCardProps = {
  registration: EventVolunteer;
  onApprove: (registrationId: string) => Promise<void> | void;
  onReject: (registrationId: string, reason?: string) => Promise<void> | void;
  isProcessing: boolean;
};

const VolunteerCard = ({ registration, onApprove, onReject, isProcessing }: VolunteerCardProps) => {
  const { volunteer, motivationLetter, totalVolunteerHours } = registration;
  const hasAvatar = Boolean(volunteer.avatarUrl);

  const handleApprove = () => {
    onApprove(registration.id);
  };

  const handleReject = () => {
    const reason = window.prompt("Укажите причину отказа (необязательно)") ?? undefined;
    onReject(registration.id, reason?.trim() ? reason.trim() : undefined);
  };

  return (
    <article className={styles.volunteerCard}>
      <div className={styles.volunteerCard__header}>
        <div className={styles.volunteerCard__avatar}>
          {hasAvatar ? (
            <Image
              src={volunteer.avatarUrl as string}
              alt={volunteer.name}
              fill
              sizes="56px"
            />
          ) : (
            <span>{volunteer.name.slice(0, 1).toUpperCase()}</span>
          )}
        </div>
        <div className={styles.volunteerCard__meta}>
          <Typography variant="bodyBold">{volunteer.name}</Typography>
          <Typography variant="body" color="gray">
            {registration.status === RegistrationStatus.approved
              ? "Одобрен"
              : REGISTRATION_STATUS_LABELS[registration.status]}
          </Typography>
        </div>
      </div>

      <div className={styles.volunteerCard__infoRow}>
        <InfoBadge icon={<Mail size={15} />} value={volunteer.email} href={`${MAILTO_PREFIX}${volunteer.email}`} />
        {volunteer.phone ? (
          <InfoBadge icon={<Phone size={15} />} value={volunteer.phone} href={`${TEL_PREFIX}${volunteer.phone}`} />
        ) : null}
      </div>

      <div className={styles.volunteerCard__stats}>
        <InfoBadge icon={<Clock size={15} />} value={`${totalVolunteerHours} ч волонтёрства`} />
      </div>

      {motivationLetter ? (
        <Typography variant="body" color="gray" className={styles.volunteerCard__note}>
          “{motivationLetter}”
        </Typography>
      ) : null}

      {registration.status === RegistrationStatus.pending || registration.status === RegistrationStatus.rejected ? (
        <div className={styles.volunteerCard__actions}>
          <Button
            color="primary"
            disabled={isProcessing}
            onClick={handleApprove}
          >
            Одобрить
          </Button>
          {registration.status === RegistrationStatus.pending ? (
            <Button
              variant="delete"
              disabled={isProcessing}
              onClick={handleReject}
            >
              Отклонить
            </Button>
          ) : null}
        </div>
      ) : null}
    </article>
  );
};

type InfoBadgeProps = {
  icon: ReactNode;
  value: string;
  href?: string;
};

const InfoBadge = ({ icon, value, href }: InfoBadgeProps) => {
  const content = (
    <span className={styles.infoBadge}>
      {icon}
      {value}
    </span>
  );

  if (href) {
    return (
      <Link href={href} className={styles.infoBadgeLink}>
        {content}
      </Link>
    );
  }

  return content;
};

type ContactLinkProps = {
  icon: ReactNode;
  label: string;
  value: string;
  href: string;
};

const ContactLink = ({ icon, label, value, href }: ContactLinkProps) => {
  return (
    <Link href={href} className={styles.contactItem}>
      <span className={styles.contactItem__icon}>{icon}</span>
      <div className={styles.contactItem__content}>
        <Typography variant="bodyBold">{label}</Typography>
        <Typography variant="body" color="gray">
          {value}
        </Typography>
      </div>
    </Link>
  );
};
