'use client';

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Button, Container, EventDeleteDialog, EventStatusBadge, Select, Typography } from "@shared/ui";
import styles from "./EventDetailsPage.module.scss";
import { PAGES } from "@shared/constants";
import { EventDetailsSkeleton } from "./EventDetailsSkeleton";
import { EventInfoWidget, EventStatsWidget, OrganizerCardWidget, RegisteredVolunteersWidget } from "@widgets/Organizer/EventPage";
import { useEventDetailsPage } from "../model/useEventDetailsPage";

type EventDetailsPageProps = {
  eventId: string;
};

export const EventDetailsPage = ({ eventId }: EventDetailsPageProps) => {
  const {
    event,
    isLoading,
    isError,
    refetch,
    isFetching,
    statusControl,
    deleteDialog,
    volunteerActions,
    capacityStats,
  } = useEventDetailsPage({ eventId });

  if (isLoading && !event) {
    return <EventDetailsSkeleton />;
  }

  if (isError || !event) {
    return (
      <Container className={styles.page}>
        <Typography variant="body" color="secondary">
          Не удалось загрузить информацию о мероприятии.
        </Typography>
        <Button color="primary" onClick={() => refetch()}>
          Попробовать снова
        </Button>
      </Container>
    );
  }

  return (
    <Container className={styles.page}>
      <Link href={PAGES.ORGANIZER_EVENTS} className={styles.backLink}>
        <ArrowLeft size={18} />
        Вернуться к мероприятиям
      </Link>

      <header className={styles.header}>
        <div className={styles.header__titleBlock}>
          <Typography as="h1" variant="h2">
            {event.title}
          </Typography>
          <div className={styles.header__statusControls}>
            <EventStatusBadge status={event.status} />
            <Select
              options={statusControl.options}
              value={statusControl.value}
              onChange={statusControl.onChange}
              disabled={statusControl.isUpdating}
              className={styles.header__statusSelect}
              placeholder="Выберите статус"
            />
          </div>
        </div>

        <div className={styles.header__actions}>
          <Link href={PAGES.EDIT_EVENT(eventId)}>
            <Button color="white" icon="edit">
              Редактировать
            </Button>
          </Link>
          <Button variant="delete" onClick={deleteDialog.open} disabled={deleteDialog.isDeleteDisabled}>
            Удалить
          </Button>
        </div>
      </header>
      {isFetching ? (
        <div className={styles.updatingBanner}>
          <Typography variant="body" color="gray">
            Данные обновляются...
          </Typography>
        </div>
      ) : null}

      <div className={styles.layout}>
        <div className={styles.layout__left}>
          <EventInfoWidget
            description={event.description}
            schedule={event.schedule}
            location={event.location}
            capacity={event.capacity}
            requirements={event.requirements}
            skillsNeeded={event.skillsNeeded}
          />

          <RegisteredVolunteersWidget
            volunteers={event.volunteers}
            registrations={event.stats.registrations}
            onApprove={volunteerActions.approveVolunteer}
            onReject={volunteerActions.rejectVolunteer}
            onComplete={volunteerActions.completeVolunteer}
            isProcessing={volunteerActions.isProcessing}
          />
        </div>

        <aside className={styles.layout__right}>
          <EventStatsWidget
            fillRate={capacityStats.fillRate}
            maxParticipants={capacityStats.maxParticipants}
            registrations={event.stats.registrations}
            availableSeats={capacityStats.availableSeats}
          />

          <OrganizerCardWidget organizer={event.organizer} />
        </aside>
      </div>
      <EventDeleteDialog
        open={!deleteDialog.isDeleteDisabled && deleteDialog.state.open}
        onCancel={deleteDialog.close}
        onConfirm={deleteDialog.confirm}
        isLoading={deleteDialog.isDeleting}
        eventTitle={event.title}
      />
    </Container>
  );
};
