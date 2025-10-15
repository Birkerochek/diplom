'use client';

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { useFetchEvent } from "@shared/api";
import { api } from "@shared/api/axios";
import { Button, Container, EventStatusBadge, Typography } from "@shared/ui";
import { EventInfoWidget } from "@widgets/Organizer/EventPage/EventInfoWidget";
import { EventStatsWidget } from "@widgets/Organizer/EventPage/EventStatsWidget";
import { OrganizerCardWidget } from "@widgets/Organizer/EventPage/OrganizerCardWidget";
import { RegisteredVolunteersWidget } from "@widgets/Organizer/EventPage/RegisteredVolunteersWidget";
import { useVolunteerActions } from "../model/useVolunteerActions";
import styles from "./EventDetailsPage.module.scss";
import { PAGES } from "@shared/constants";

type EventDetailsPageProps = {
  eventId: string;
};


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

  

  const handleDelete = async () => {
    const confirmed = window.confirm("Удалить мероприятие? Действие необратимо.");

    if (!confirmed) {
      return;
    }

    try {
      await api.delete(`/api/events/${eventId}`);
      router.push(PAGES.ORGANIZER_EVENTS);
    } catch (error) {
      console.error("Delete event error", error);
      window.alert("Не удалось удалить мероприятие. Попробуйте снова.");
    }
  };

  if (isLoading && !event) {
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

  const maxParticipants = event.capacity.maxParticipants ?? 0;
  const currentParticipants = event.capacity.currentParticipants ?? 0;
  const fillRate = event.capacity.fillRate ?? (maxParticipants
    ? Math.round((currentParticipants / maxParticipants) * 100)
    : 0);
  const availableSeats = maxParticipants
    ? Math.max(maxParticipants - currentParticipants, 0)
    : null;

  return (
    <Container className={styles.page}>
      <Link href={PAGES.ORGANIZER_EVENTS} className={styles.backLink}>
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
          <Link href={PAGES.EDIT_EVENT(eventId)}>
          <Button color="white"  icon="edit">
            Редактировать
          </Button>
          </Link>
          <Button variant="delete" onClick={handleDelete}>
            Удалить
          </Button>
        </div>
      </header>
      {isFetching ? (
        <div className={styles.updatingBanner}>
          <Typography variant="body" color="gray">
            Обновляем данные...
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
          />

          <RegisteredVolunteersWidget
            volunteers={event.volunteers}
            registrations={event.stats.registrations}
            onApprove={approveVolunteer}
            onReject={rejectVolunteer}
            isProcessing={isProcessing}
          />
        </div>

        <aside className={styles.layout__right}>
          <EventStatsWidget
            fillRate={fillRate}
            maxParticipants={event.capacity.maxParticipants}
            registrations={event.stats.registrations}
            availableSeats={availableSeats}
          />

          <OrganizerCardWidget organizer={event.organizer} />
        </aside>
      </div>
    </Container>
  );
};
