"use client";

import { useEffect, useState } from "react";
import { EventStatus } from "../../../../app/generated/prisma";
import { useFetchEvents } from "@shared/api";
import { Container, Tabs } from "@shared/ui";
import { EventCard } from "@shared/ui/EventCard/EventCard";
import { EventsPageSkeleton } from "./EventsPageSkeleton";
import s from "./EventsPage.module.scss";
import { Pagination } from "@shared/ui/Pagination/Pagination";

type StatusTabValue = "all" | EventStatus;

const STATUS_TABS: Array<{ value: StatusTabValue; label: string }> = [
  { value: "all", label: "Все" },
  { value: EventStatus.active, label: "Активные" },
  { value: EventStatus.published, label: "Опубликованные" },
  { value: EventStatus.completed, label: "Завершённые" },
  { value: EventStatus.cancelled, label: "Отменённые" },
];

const EVENTS_PER_PAGE = 6;

export const EventsPage = () => {
  const [statusFilter, setStatusFilter] = useState<StatusTabValue>("all");
  const [page, setPage] = useState(1);

  const statusParam = statusFilter === "all" ? undefined : (statusFilter as EventStatus);

  const {
    data: eventsResponse,
    isLoading,
    isError,
  } = useFetchEvents({
    sortBy: "eventDate",
    sortDir: "asc",
    status: statusParam ? [statusParam] : undefined,
    page,
    perPage: EVENTS_PER_PAGE,
  });

  useEffect(() => {
    setPage(1);
  }, [statusFilter]);

  const events = eventsResponse?.data ?? [];
  const hasEvents = events.length > 0;
  const meta = eventsResponse?.meta;
  const totalPages = meta?.totalPages ?? 1;
  const currentPage = meta?.page ?? page;

  useEffect(() => {
    if (!isLoading && totalPages > 0) {
      setPage((prev) => (prev > totalPages ? totalPages : prev));
    }
  }, [isLoading, totalPages]);

  if (isLoading) {
    return <EventsPageSkeleton />;
  }

  if (isError) {
    return (
      <Container>
        <div className={s.empty}>Не удалось загрузить мероприятия организатора.</div>
      </Container>
    );
  }

  const content = hasEvents ? (
    <>
      <div className={s.events}>
        {events.map((event) => (
          <EventCard
            key={event.id}
            id={event.id}
            title={event.title}
            status={event.status}
            schedule={{
              startTime: event.schedule.startTime,
              endTime: event.schedule.endTime,
              eventDate: event.schedule.eventDate,
              requiredHours: `${event.schedule.requiredHours} ч.`,
            }}
            capacity={{
              maxParticipants: event.capacity.maxParticipants,
              currentParticipants: event.capacity.currentParticipants,
            }}
            location={event.location}
          />
        ))}
      </div>
      {totalPages > 1 ? (
        <Pagination
          className={s.pagination}
          page={currentPage}
          totalPages={totalPages}
          onChange={setPage}
        />
      ) : null}
    </>
  ) : (
    <div className={s.empty}>Мероприятий пока нет.</div>
  );

  return (
    <Container>
      <Tabs
        value={statusFilter}
        onValueChange={(nextValue) => {
          setStatusFilter(nextValue as StatusTabValue);
        }}
        className={s.tabs}
        contentClassName={s.tabContent}
      >
        {STATUS_TABS.map((tab) => (
          <Tabs.Item key={tab.value} value={tab.value} label={tab.label}>
            {content}
          </Tabs.Item>
        ))}
      </Tabs>
    </Container>
  );
};
