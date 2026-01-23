"use client";

import { useCallback, useState } from "react";

import { EventStatus } from "../../../../../app/generated/prisma";
import { useFetchEvents } from "@shared/api";

type StatusTabValue = "all" | EventStatus;

const STATUS_TABS: Array<{ value: StatusTabValue; label: string }> = [
  { value: "all", label: "Все" },
  { value: EventStatus.draft, label: "Черновики" },
  { value: EventStatus.active, label: "Активные" },
  { value: EventStatus.completed, label: "Завершенные" },
  { value: EventStatus.cancelled, label: "Отменённые" },
];

const EVENTS_PER_PAGE = 6;

export const useOrganizerEventsPage = () => {
  const [statusFilter, setStatusFilter] = useState<StatusTabValue>("all");
  const [page, setPage] = useState(1);

  const statusParam = statusFilter === "all" ? undefined : [statusFilter as EventStatus];
  const safePage = page < 1 ? 1 : page;

  const {
    data: eventsResponse,
    isLoading,
    isError,
  } = useFetchEvents({
    sortBy: "eventDate",
    sortDir: "asc",
    status: statusParam,
    page: safePage,
    perPage: EVENTS_PER_PAGE,
  });

  const events = eventsResponse?.data ?? [];
  const meta = eventsResponse?.meta;
  const totalPages = meta?.totalPages ?? 1;
  const currentPage = meta?.page ?? page;
  const hasEvents = events.length > 0;

  const handleStatusChange = useCallback((nextValue: string) => {
    setStatusFilter(nextValue as StatusTabValue);
    setPage(1);
  }, []);

  const handlePageChange = useCallback((nextPage: number) => {
    setPage(nextPage);
  }, []);

  return {
    statusTabs: STATUS_TABS,
    statusFilter,
    onStatusChange: handleStatusChange,
    pagination: {
      page: currentPage,
      totalPages,
      isVisible: totalPages > 1,
      onChange: handlePageChange,
    },
    eventsState: {
      events,
      hasEvents,
      isLoading,
      isError,
    },
    messages: {
      error: "Не удалось загрузить список мероприятий.",
      empty: "Мероприятий пока нет.",
    },
  };
};

export type { StatusTabValue };
