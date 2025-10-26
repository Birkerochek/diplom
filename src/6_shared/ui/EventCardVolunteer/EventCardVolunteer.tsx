'use client'
import { FC, useCallback, useState } from "react";
import { Calendar, Clock4, MapPin, Users } from "lucide-react";

import { EventBase } from "@shared/types/event";
import { formatEventDate, formatEventTime, useModalState } from "@shared/lib";

import { ActivityTypeBadge } from "../ActivityTypeBadge/ActivityTypeBadge";
import { Button } from "../Button";
import { EventStatusBadge } from "../EventStatusBadge";
import { Input } from "../Input";
import { Modal } from "../Modal";
import { Typography } from "../Typography";
import s from "./EventCardVolunteer.module.scss";

type EventCardVolunteerProps = EventBase & {
  onRegister?: (eventId: string, motivationLetter?: string) => Promise<void> | void;
  isRegistering?: boolean;
  disableRegistration?: boolean;
};

const MOTIVATION_MAX_LENGTH = 1000;

export const EventCardVolunteer: FC<EventCardVolunteerProps> = ({
  id,
  title,
  description,
  organizer,
  status,
  activityType,
  schedule,
  location,
  capacity,
  onRegister,
  isRegistering = false,
  disableRegistration = false,
}) => {
  const hasParticipantLimit =
    typeof capacity.maxParticipants === "number" && capacity.maxParticipants > 0;
  const maxParticipants = capacity.maxParticipants ?? 0;
  const currentParticipants = capacity.currentParticipants ?? 0;
  const freeSeats = hasParticipantLimit
    ? Math.max(maxParticipants - currentParticipants, 0)
    : null;

  const formattedEventDate = formatEventDate(schedule.eventDate);
  const formattedStartTime = formatEventTime(schedule.startTime);
  const formattedEndTime = formatEventTime(schedule.endTime);

  const { state: confirmState, open: openConfirmModal, close: closeConfirmModal } = useModalState<void>();
  const [motivationLetter, setMotivationLetter] = useState("");

  const registrationDisabled =
    disableRegistration || isRegistering || (hasParticipantLimit && freeSeats === 0);

  const handleOpenModal = useCallback(() => {
    if (!registrationDisabled) {
      openConfirmModal();
    }
  }, [openConfirmModal, registrationDisabled]);

  const handleCloseModal = useCallback(() => {
    if (isRegistering) {
      return;
    }

    closeConfirmModal();
    setMotivationLetter("");
  }, [closeConfirmModal, isRegistering]);

  const handleConfirm = useCallback(async () => {
    if (!onRegister) {
      closeConfirmModal();
      setMotivationLetter("");
      return;
    }

    const trimmedLetter = motivationLetter.trim();

    try {
      await onRegister(id, trimmedLetter ? trimmedLetter : undefined);
      closeConfirmModal();
      setMotivationLetter("");
    } catch (error) {
      // Ошибка уже обработана в хуке, просто оставляем модалку открытой
      console.error("Volunteer confirmation error", error);
    }
  }, [closeConfirmModal, id, motivationLetter, onRegister]);

  const motivationLength = motivationLetter.length;
  const isMotivationTooLong = motivationLength > MOTIVATION_MAX_LENGTH;

  return (
    <div className={s.card}>
      <div className={s.card__top}>
        <div className={s.card__top_left}>
          <Typography variant="h4">{title}</Typography>
          <Typography variant="body" color="gray">
            {organizer.name}
          </Typography>
        </div>

        <div className={s.card__top_right}>
          <ActivityTypeBadge activityType={activityType} />
          <div className={s.card_status}>
            <EventStatusBadge status={status} />
          </div>
        </div>
      </div>

      <div className={s.card__info}>
        {description ? (
          <div className={s.card__info_top}>
            <Typography color="gray">{description}</Typography>
          </div>
        ) : null}

        <div className={s.card__info_bottom}>
          <div className={s.card__info_item}>
            <Calendar size={18} />
            <Typography color="gray">{formattedEventDate}</Typography>
          </div>
          <div className={s.card__info_item}>
            <Clock4 size={18} />
            <Typography color="gray">
              {formattedStartTime} — {formattedEndTime} ({schedule.requiredHours} ч.)
            </Typography>
          </div>
          <div className={s.card__info_item}>
            <MapPin size={18} />
            <Typography color="gray">
              {location.name ?? "Локация уточняется"}
            </Typography>
          </div>
          <div className={s.card__info_item}>
            <Users size={18} />
            <Typography color="gray">
              {currentParticipants} из {hasParticipantLimit ? maxParticipants : "∞"}
            </Typography>
          </div>
        </div>
      </div>

      <div className={s.card__bottom}>
        <div className={s.card__bottom_left}>
          <Typography color="gray">Свободных мест:</Typography>
          <Typography color="green" variant="bodyBold">
            {hasParticipantLimit ? freeSeats : "Не ограничено"}
          </Typography>
        </div>

        <Button color="primary" onClick={handleOpenModal} disabled={registrationDisabled}>
          {isRegistering ? "Отправляем..." : "Записаться"}
        </Button>
      </div>

      <Modal
        open={confirmState.open}
        onOpenChange={(open) => {
          if (!open) {
            handleCloseModal();
          } else if (!registrationDisabled) {
            openConfirmModal();
          }
        }}
        title={<Typography variant="h3">Подтвердить участие?</Typography>}
        description={<Typography color="gray">После подтверждения заявка будет передана организатору мероприятия.</Typography>}
        footer={
          <div className={s.confirmFooter}>
            <Button color="white" onClick={handleCloseModal} disabled={isRegistering}>
              Отмена
            </Button>
            <Button
              color="primary"
              onClick={handleConfirm}
              disabled={isRegistering || isMotivationTooLong}
            >
              Подтвердить
            </Button>
          </div>
        }
      >
        <div className={s.motivation}>
          <Input
            isTextarea
            label="Мотивационное письмо (необязательно)"
            placeholder="Напишите, почему хотите помочь или чем будете полезны."
            value={motivationLetter}
            onChange={(event) => setMotivationLetter(event.target.value)}
            maxLength={MOTIVATION_MAX_LENGTH}
          />
          <Typography variant="body" color={isMotivationTooLong ? "secondary" : "gray"}>
            {motivationLength}/{MOTIVATION_MAX_LENGTH}
          </Typography>
          {isMotivationTooLong ? (
            <Typography variant="body" color="secondary">
              Превышено допустимое количество символов.
            </Typography>
          ) : null}
        </div>
      </Modal>
    </div>
  );
};
