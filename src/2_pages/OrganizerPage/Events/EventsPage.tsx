"use client";

import { useMemo, useState } from "react";
import { EventStatus } from "../../../../app/generated/prisma";
import { useFetchEvents } from "@shared/api";
import { Container, Tabs } from "@shared/ui";
import { EventCard } from "@shared/ui/EventCard/EventCard";
import { EventsPageSkeleton } from "./EventsPageSkeleton";
import s from "./EventsPage.module.scss";

type StatusTabValue = "all" | EventStatus;

const STATUS_TABS: Array<{ value: StatusTabValue; label: string }> = [
  { value: "all", label: "Все" },
  { value: EventStatus.active, label: "Активные" },
  { value: EventStatus.published, label: "Запланированные" },
  { value: EventStatus.completed, label: "Завершённые" },
  { value: EventStatus.cancelled, label: "Отменённые" },
];

export const EventsPage = () => {
  const [statusFilter, setStatusFilter] = useState<StatusTabValue>("all");

  const {
    data: eventsResponse,
    isLoading,
    isError,
  } = useFetchEvents();

  const events = useMemo(() => eventsResponse?.data ?? [], [eventsResponse]);

  const filteredEvents = useMemo(() => {
    if (statusFilter === "all") {
      return events;
    }

    return events.filter((event) => event.status === statusFilter);
  }, [events, statusFilter]);

  if (isLoading) {
    return <EventsPageSkeleton />;
  }

  if (isError) {
    return <div>Не удалось загрузить данные</div>;
  }

  const renderEvents = () => {
    if (filteredEvents.length === 0) {
      return <div className={s.empty}>Нет мероприятий для выбранного статуса</div>;
    }

    return (
      <div className={s.events}>
        {filteredEvents.map((event) => (
          <EventCard
            key={event.id}
            id={event.id}
            title={event.title}
            status={event.status}
            schedule={{
              startTime: event.schedule.startTime,
              endTime: event.schedule.endTime,
              eventDate: event.schedule.eventDate,
              requiredHours: `${event.schedule.requiredHours} ч`,
            }}
            capacity={{
              maxParticipants: event.capacity.maxParticipants,
              currentParticipants: event.capacity.currentParticipants,
            }}
            location={event.location}
          />
        ))}
      </div>
    );
  };

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
            {renderEvents()}
          </Tabs.Item>
        ))}
      </Tabs>
    </Container>
  );
};
