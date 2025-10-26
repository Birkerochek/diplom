'use client';

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { toast } from "react-toastify";

import { useDeleteEvent, useFetchEvent, useUpdateEvent } from "@shared/api";
import { Button, Container, EventDeleteDialog, EventStatusBadge, Select, Typography } from "@shared/ui";
import { EventInfoWidget } from "@widgets/Organizer/EventPage/EventInfoWidget";
import { EventStatsWidget } from "@widgets/Organizer/EventPage/EventStatsWidget";
import { OrganizerCardWidget } from "@widgets/Organizer/EventPage/OrganizerCardWidget";
import { RegisteredVolunteersWidget } from "@widgets/Organizer/EventPage/RegisteredVolunteersWidget";
import { useVolunteerActions } from "../model/useVolunteerActions";
import styles from "./EventDetailsPage.module.scss";
import { PAGES } from "@shared/constants";
import { EventDetailsSkeleton } from "./EventDetailsSkeleton";
import { EventStatus } from "../../../../../app/generated/prisma";
import { mapEventStatusToLabel, useModalState } from "@shared/lib";

type EventDetailsPageProps = {
  eventId: string;
};

export const EventDetailsPage = ({ eventId }: EventDetailsPageProps) => {
  const router = useRouter();
  const { state: deleteModalState, open: openDeleteModal, close: closeDeleteModal } = useModalState<void>();
  const {
    data: event,
    isLoading,
    isError,
    refetch,
    isFetching,
  } = useFetchEvent(eventId);
  const { approveVolunteer, rejectVolunteer, completeVolunteer, isProcessing } = useVolunteerActions({ eventId });
  const { mutateAsync: deleteEvent, isPending: isDeleting } = useDeleteEvent();
  const { mutateAsync: updateEventStatus, isPending: isUpdatingStatus } = useUpdateEvent(eventId);

  const statusOptions = useMemo(
    () =>
      Object.values(EventStatus).map((status) => ({
        value: status,
        label: mapEventStatusToLabel(status),
      })),
    []
  );

  const [statusValue, setStatusValue] = useState<EventStatus | null>(null);

  useEffect(() => {
    if (event?.status) {
      setStatusValue(event.status);
    }
  }, [event?.status]);

  const handleOpenDeleteModal = useCallback(() => {
    openDeleteModal();
  }, [openDeleteModal]);

  const handleCloseDeleteModal = useCallback(() => {
    if (isDeleting) {
      return;
    }

    closeDeleteModal();
  }, [closeDeleteModal, isDeleting]);

  const handleConfirmDelete = useCallback(async () => {
    try {
      await deleteEvent(eventId);
      closeDeleteModal();
      toast.success("Мероприятие удалено");
      router.push(PAGES.ORGANIZER_EVENTS);
    } catch (error) {
      console.error("Delete event error", error);
      toast.error("Не удалось удалить мероприятие");
    }
  }, [closeDeleteModal, deleteEvent, eventId, router]);

  const handleStatusChange = useCallback(
    async (nextValue: string) => {
      if (!event) {
        return;
      }

      const nextStatus = nextValue as EventStatus;

      if (nextStatus === event.status) {
        setStatusValue(nextStatus);
        return;
      }

      setStatusValue(nextStatus);

      try {
        await updateEventStatus({ status: nextStatus });
        toast.success("Статус события обновлён");
        await refetch();
      } catch (error) {
        console.error("Update event status error", error);
        toast.error("Не удалось обновить статус события");
        setStatusValue(event.status);
      }
    },
    [event, refetch, updateEventStatus]
  );

  if (isLoading && !event) {
    return (
     <EventDetailsSkeleton/>
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
  const fillRate =
    event.capacity.fillRate ??
    (maxParticipants ? Math.round((currentParticipants / maxParticipants) * 100) : 0);
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
          <div className={styles.header__statusControls}>
            <EventStatusBadge status={event.status} />
            <Select
              options={statusOptions}
              value={String(statusValue ?? event.status)}
              onChange={handleStatusChange}
              disabled={isUpdatingStatus}
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
          <Button variant="delete" onClick={handleOpenDeleteModal}>
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
            onComplete={completeVolunteer}
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

            <EventDeleteDialog
        open={deleteModalState.open}
        onCancel={handleCloseDeleteModal}
        onConfirm={handleConfirmDelete}
        isLoading={isDeleting}
        eventTitle={event.title}
      />
    </Container>
  );
};
