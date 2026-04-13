"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import { EventStatus } from "../../../../../app/generated/prisma";
import { useFetchEvents, useUpdateEvent } from "@shared/api";
import { useModalState } from "@shared/lib";
import type { EventListItem } from "@shared/types/event";

type RejectFormState = {
  eventId: string;
  reason: string;
};

const DEFAULT_REJECT_STATE: RejectFormState = {
  eventId: "",
  reason: "",
};

export const useAdminEventsPage = () => {
  const [searchInput, setSearchInput] = useState("");
  const [search, setSearch] = useState("");
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);
  const [currentTimestamp] = useState(() => Date.now());
  const rejectModal = useModalState<RejectFormState>({ initialData: DEFAULT_REJECT_STATE });

  const eventsQuery = useFetchEvents({
    status: [EventStatus.pending_moderation],
    sortBy: "createdAt",
    sortDir: "asc",
    search: search || undefined,
    perPage: 24,
  });

  const events = eventsQuery.data?.data;
  const eventList = events ?? [];
  const resolvedSelectedEventId = eventList.some((event) => event.id === selectedEventId)
    ? selectedEventId
    : (eventList[0]?.id ?? null);
  const selectedEvent = eventList.find((event) => event.id === resolvedSelectedEventId) ?? null;
  const updateMutation = useUpdateEvent(selectedEvent?.id ?? "");

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSearch(searchInput.trim());
  };

  const handleApprove = async () => {
    if (!selectedEvent) {
      return;
    }

    try {
      await updateMutation.mutateAsync({ status: EventStatus.active });
      toast.success("Мероприятие одобрено и опубликовано");
      await eventsQuery.refetch();
    } catch (error) {
      console.error("Approve event error", error);
      toast.error("Не удалось одобрить мероприятие");
    }
  };

  const openRejectModal = () => {
    if (!selectedEvent) {
      return;
    }

    rejectModal.open({
      eventId: selectedEvent.id,
      reason: selectedEvent.moderation.rejectionReason ?? "",
    });
  };

  const closeRejectModal = () => {
    rejectModal.close();
  };

  const setRejectReason = (reason: string) => {
    rejectModal.setData({
      eventId: rejectModal.state.data?.eventId ?? selectedEvent?.id ?? "",
      reason,
    });
  };

  const handleReject = async () => {
    const modalState = rejectModal.state.data;

    if (!selectedEvent || !modalState?.reason.trim()) {
      toast.error("Укажите причину отклонения");
      return;
    }

    try {
      await updateMutation.mutateAsync({
        status: EventStatus.rejected,
        rejectionReason: modalState.reason.trim(),
      });
      toast.success("Мероприятие отклонено, комментарий сохранён");
      rejectModal.close();
      await eventsQuery.refetch();
    } catch (error) {
      console.error("Reject event error", error);
      toast.error("Не удалось отклонить мероприятие");
    }
  };

  const summary = {
    total: eventsQuery.data?.meta.total ?? eventList.length,
    urgent: eventList.filter((event) => {
      const diff = new Date(event.schedule.eventDate).getTime() - currentTimestamp;
      return diff > 0 && diff <= 1000 * 60 * 60 * 24 * 3;
    }).length,
    needsReview: eventList.filter((event) => !event.description || !event.requirements).length,
  };

  return {
    searchInput,
    setSearchInput,
    selectedEvent,
    selectedEventId: resolvedSelectedEventId,
    setSelectedEventId,
    events: eventList,
    eventsQuery,
    handleSearchSubmit,
    approveAction: {
      onApprove: handleApprove,
      isPending: updateMutation.isPending,
    },
    rejectAction: {
      modal: rejectModal.state,
      open: openRejectModal,
      close: closeRejectModal,
      setReason: setRejectReason,
      submit: handleReject,
      isPending: updateMutation.isPending,
    },
    summary,
  };
};
