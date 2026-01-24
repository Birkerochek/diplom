"use client";

import classNames from "classnames";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { PAGES } from "@shared/constants";
import { formatEventDate } from "@shared/lib";
import { ActivityTypeBadge, Button, Container, EventStatusBadge, Input, Modal, Typography } from "@shared/ui";
import { EventInfoWidget, EventStatsWidget, OrganizerCardWidget } from "@widgets/Organizer/EventPage";
import { REGISTRATION_STATUS_LABELS } from "@pages/OrganizerPage/EventDetails";

import { useVolunteerEventDetailsPage } from "../model/useVolunteerEventDetailsPage";
import { VolunteerEventDetailsSkeleton } from "./VolunteerEventDetailsSkeleton";
import s from "./VolunteerEventDetailsPage.module.scss";

const MOTIVATION_MAX_LENGTH = 1000;

type VolunteerEventDetailsPageProps = {
  eventId: string;
};

export const VolunteerEventDetailsPage = ({ eventId }: VolunteerEventDetailsPageProps) => {
  const {
    event,
    isLoading,
    isError,
    refetch,
    isFetching,
    registration,
    motivationLetter,
    setMotivationLetter,
    registrationModal,
    isRegistering,
    isCancelling,
    canRegister,
    canCancel,
    isRegistrationOpen,
    isFull,
    availableSeats,
    onRegister,
    onCancel,
  } = useVolunteerEventDetailsPage({ eventId });

  if (isLoading && !event) {
    return <VolunteerEventDetailsSkeleton />;
  }

  if (isError || !event) {
    return (
      <Container className={s.page}>
        <Typography variant="body" color="secondary">
          Не удалось загрузить событие. Попробуйте обновить страницу.
        </Typography>
        <Button color="primary" onClick={() => refetch()}>
          Обновить данные
        </Button>
      </Container>
    );
  }

  const motivationLength = motivationLetter.length;
  const isMotivationTooLong = motivationLength > MOTIVATION_MAX_LENGTH;

  const headerDate = formatEventDate(event.schedule.eventDate);
  const registrationLabel = registration ? REGISTRATION_STATUS_LABELS[registration.status] : null;
  const fillRate =
    event.capacity.fillRate ??
    (event.capacity.maxParticipants
      ? Math.round(
          ((event.capacity.currentParticipants ?? 0) / event.capacity.maxParticipants) * 100
        )
          : 0);

  const canOpenRegistration = canRegister && !isRegistering;
  const handleCloseModal = () => {
    registrationModal.close();
    setMotivationLetter("");
  };

  return (
    <Container className={s.page}>
      <Link href={PAGES.VOLUNTEER_EVENTS} className={s.backLink}>
        <ArrowLeft size={18} />
        Назад к мероприятиям
      </Link>

      <header className={s.header}>
        <div className={s.header__top}>
          <div className={s.header__title}>
            <Typography as="h1" variant="h2">
              {event.title}
            </Typography>
            <Typography variant="body" color="gray">
              {headerDate}
            </Typography>
            <div className={s.header__chips}>
              <ActivityTypeBadge activityType={event.activityType} />
              {event.tags.map((tag) => (
                <span key={tag} className={s.tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className={s.statusRow}>
            <EventStatusBadge status={event.status} />
            {registrationLabel ? (
              <span
                className={classNames(
                  s.registrationBadge,
                  s[`registrationBadge_${registration?.status ?? ""}`]
                )}
              >
                {registrationLabel}
              </span>
            ) : null}
          </div>
        </div>
      </header>

      <section className={s.actions}>
        <div className={s.actions__row}>
          <div className={s.actions__info}>
            <Typography variant="bodyBold">
              {registration
                ? "Ваша заявка успешно оставлена, можете посмотреть её статус на странице \"Мои заявки\""
                : "Запишитесь, чтобы принять участие"}
            </Typography>
            <Typography variant="body" color="gray" className={s.actions__note}>
              {availableSeats !== null
                ? availableSeats > 0
                  ? `Свободных мест: ${availableSeats}`
                  : "Все места уже заняты"
                : "Количество мест не ограничено"}
            </Typography>
          </div>

          <div className={s.actions__buttons}>
            {canCancel ? (
              <Button variant="delete" onClick={onCancel} disabled={isCancelling}>
                {isCancelling ? "Отменяем..." : "Отменить участие"}
              </Button>
            ) : null}

            {canRegister ? (
              <Button
                color="primary"
                onClick={() => registrationModal.open()}
                disabled={!canOpenRegistration}
              >
                {isRegistering ? "Отправляем..." : registration ? "Подать снова" : "Записаться"}
              </Button>
            ) : null}
          </div>
        </div>

        {!isRegistrationOpen ? (
          <Typography variant="body" color="secondary" className={s.actions__note}>
            Регистрация закрыта для этого мероприятия.
          </Typography>
        ) : null}
        {isFull ? (
          <Typography variant="body" color="secondary" className={s.actions__note}>
            Все места заняты, следите за обновлениями.
          </Typography>
        ) : null}
        {registration && !canCancel && !canRegister ? (
          <Typography variant="body" color="gray" className={s.actions__note}>
            Текущий статус: {registrationLabel}.
          </Typography>
        ) : null}
      </section>

      {isFetching ? (
        <div className={s.banner}>
          <Typography variant="body" color="gray">
            Обновляем данные...
          </Typography>
        </div>
      ) : null}

      <div className={s.layout}>
        <div className={s.layout__left}>
          <EventInfoWidget
            description={event.description}
            schedule={event.schedule}
            location={event.location}
            capacity={{
              maxParticipants: event.capacity.maxParticipants,
              currentParticipants: event.capacity.currentParticipants,
            }}
            requirements={event.requirements}
            skillsNeeded={event.skillsNeeded}
          />
        </div>

        <aside className={s.layout__right}>
          <EventStatsWidget
            fillRate={fillRate}
            maxParticipants={event.capacity.maxParticipants}
            registrations={event.stats.registrations}
            availableSeats={availableSeats}
          />

          <OrganizerCardWidget organizer={event.organizer} />
        </aside>
      </div>

      <Modal
        open={registrationModal.state.open}
        onOpenChange={(open) => {
          if (!open) {
            handleCloseModal();
          } else if (canOpenRegistration) {
            registrationModal.open();
          }
        }}
        title={<Typography variant="h3">Записаться на мероприятие</Typography>}
        description={
          <Typography color="gray">
            Расскажите, почему хотите участвовать. Это поможет организатору принять решение.
          </Typography>
        }
        footer={
          <div className={s.modalFooter}>
            <Button color="white" onClick={handleCloseModal} disabled={isRegistering}>
              Отмена
            </Button>
            <Button
              color="primary"
              onClick={onRegister}
              disabled={isRegistering || isMotivationTooLong}
            >
              {isRegistering ? "Отправляем..." : "Записаться"}
            </Button>
          </div>
        }
      >
        <div className={s.modalField}>
          <Input
            isTextarea
            label="Мотивационное письмо (необязательно)"
            placeholder="Поделитесь, почему хотите присоединиться и чем сможете помочь"
            value={motivationLetter}
            onChange={(event) => setMotivationLetter(event.target.value)}
            maxLength={MOTIVATION_MAX_LENGTH}
          />
          <Typography
            variant="body"
            color={isMotivationTooLong ? "secondary" : "gray"}
            className={s.modalCounter}
          >
            {motivationLength}/{MOTIVATION_MAX_LENGTH}
          </Typography>
          {isMotivationTooLong ? (
            <Typography variant="body" color="secondary">
              Текст слишком длинный. Сократите, пожалуйста.
            </Typography>
          ) : null}
        </div>
      </Modal>
    </Container>
  );
};
