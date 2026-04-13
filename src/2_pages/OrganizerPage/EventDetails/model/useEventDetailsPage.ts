"use client";

import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { isAxiosError } from "axios";

import { EventStatus } from "../../../../../app/generated/prisma";
import { useDeleteEvent, useFetchEvent, useUpdateEvent } from "@shared/api";
import { mapEventStatusToLabel, useModalState } from "@shared/lib";
import { PAGES } from "@shared/constants";

import { useVolunteerActions } from "./useVolunteerActions";

const ORGANIZER_STATUS_OPTIONS: EventStatus[] = [
  EventStatus.draft,
  EventStatus.active,
  EventStatus.completed,
  EventStatus.suspended,
];

type UseEventDetailsPageParams = {
  eventId: string;
};

export const useEventDetailsPage = ({ eventId }: UseEventDetailsPageParams) => {
  const router = useRouter();
  const deleteModalState = useModalState<void>();
  const {
    data: event,
    isLoading,
    isError,
    refetch,
    isFetching,
  } = useFetchEvent(eventId);
  const { approveVolunteer, rejectVolunteer, completeVolunteer, isProcessing } = useVolunteerActions({
    eventId,
  });
  const deleteEventMutation = useDeleteEvent();
  const updateEventStatusMutation = useUpdateEvent(eventId);

  const availableStatuses = event ? ORGANIZER_STATUS_OPTIONS : [];

  const statusOptions = availableStatuses.map((status) => ({
    value: status,
    label: mapEventStatusToLabel(status),
  }));

  const [statusOverride, setStatusOverride] = useState<EventStatus | null>(null);
  const statusValue = statusOverride ?? event?.status ?? null;

  const isDeleteDisabled = event?.status === EventStatus.completed;
  const isCompleteDisabled = !event || updateEventStatusMutation.isPending;

  const handleOpenDeleteModal = useCallback(() => {
    if (isDeleteDisabled) {
      return;
    }

    deleteModalState.open();
  }, [deleteModalState, isDeleteDisabled]);

  const handleCloseDeleteModal = useCallback(() => {
    if (deleteEventMutation.isPending) {
      return;
    }

    deleteModalState.close();
  }, [deleteEventMutation.isPending, deleteModalState]);

  const handleConfirmDelete = useCallback(async () => {
    if (isDeleteDisabled) {
      return;
    }

    try {
      await deleteEventMutation.mutateAsync(eventId);
      deleteModalState.close();
      toast.success("Мероприятие успешно удалено");
      router.push(PAGES.ORGANIZER_EVENTS);
    } catch (error) {
      console.error("Delete event error", error);
      if (isAxiosError(error)) {
        toast.error(error.response?.data?.message ?? "Ошибка удаления мероприятия");
        return;
      }
      toast.error("Ошибка удаления мероприятия");
    }
  }, [deleteEventMutation, deleteModalState, eventId, isDeleteDisabled, router]);

  const handleStatusChange = useCallback(
    async (nextValue: string) => {
      if (!event) {
        return;
      }

      const nextStatus = nextValue as EventStatus;

      if (nextStatus === event.status) {
        setStatusOverride(nextStatus);
        return;
      }

      setStatusOverride(nextStatus);

      try {
        await updateEventStatusMutation.mutateAsync({ status: nextStatus });
        toast.success(
          nextStatus === EventStatus.pending_moderation
            ? "Мероприятие отправлено на модерацию"
            : nextStatus === EventStatus.completed
              ? "Мероприятие завершено"
              : "Статус мероприятия успешно изменен"
        );
        await refetch();
      } catch (error) {
        console.error("Update event status error", error);
        toast.error("Ошибка изменения статуса мероприятия");
        setStatusOverride(event.status);
      }
    },
    [event, refetch, updateEventStatusMutation]
  );

  const handleCompleteEvent = useCallback(async () => {
    await handleStatusChange(EventStatus.completed);
  }, [handleStatusChange]);

  const rawMaxParticipants = event?.capacity.maxParticipants;
  const maxParticipants = typeof rawMaxParticipants === "number" ? rawMaxParticipants : null;
  const currentParticipants = event?.capacity.currentParticipants ?? 0;
  const fillRate =
    event?.capacity.fillRate ??
    (maxParticipants ? Math.round((currentParticipants / maxParticipants) * 100) : 0);
  const availableSeats = maxParticipants ? Math.max(maxParticipants - currentParticipants, 0) : null;

  return {
    event,
    isLoading,
    isError,
    refetch,
    isFetching,
    statusControl: {
      options: statusOptions,
      value: String(statusValue ?? ""),
      onChange: handleStatusChange,
      isUpdating: updateEventStatusMutation.isPending,
      isVisible: event?.status !== EventStatus.pending_moderation,
    },
    completeAction: {
      complete: handleCompleteEvent,
      isDisabled: isCompleteDisabled,
      isLoading: updateEventStatusMutation.isPending,
    },
    deleteDialog: {
      state: deleteModalState.state,
      open: handleOpenDeleteModal,
      close: handleCloseDeleteModal,
      confirm: handleConfirmDelete,
      isDeleting: deleteEventMutation.isPending,
      isDeleteDisabled,
    },
    volunteerActions: {
      approveVolunteer,
      rejectVolunteer,
      completeVolunteer,
      isProcessing,
    },
    capacityStats: {
      fillRate,
      availableSeats,
      maxParticipants,
    },
    moderationInfo: {
      submittedForModerationAt: event?.moderation.submittedForModerationAt ?? null,
      lastModeratedAt: event?.moderation.lastModeratedAt ?? null,
      rejectionReason: event?.moderation.rejectionReason ?? null,
      suspensionReason: event?.moderation.suspensionReason ?? null,
      canResubmit:
        event?.status === EventStatus.rejected || event?.status === EventStatus.suspended,
      resubmit: () => handleStatusChange(EventStatus.pending_moderation),
      isSubmittingToModeration: updateEventStatusMutation.isPending,
    },
  };
};
