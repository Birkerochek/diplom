"use client";

import { Button, Container, EventCard, Pagination, Tabs } from "@shared/ui";
import { EventsPageSkeleton } from "./EventsPageSkeleton";
import s from "./EventsPage.module.scss";
import { useOrganizerEventsPage } from "./model/useOrganizerEventsPage";
import { useStatsSummary } from "@widgets/Organizer/Dashboard";

export const EventsPage = () => {
  const {
    statusTabs,
    statusFilter,
    onStatusChange,
    pagination,
    eventsState,
    messages,
  } = useOrganizerEventsPage();

  const {navigateToCreateEvent: onCreateEvent} = useStatsSummary();
  if (eventsState.isLoading) {
    return <EventsPageSkeleton />;
  }

  if (eventsState.isError) {
    return (
      <Container>
        <div className={s.empty}>{messages.error}</div>
      </Container>
    );
  }

  const content = eventsState.hasEvents ? (
    <>
      <Button icon="plus" color="primary" onClick={onCreateEvent}>
              Создать мероприятие
            </Button>
      <div className={s.events}>
        {eventsState.events.map((event) => (
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
      {pagination.isVisible ? (
        <Pagination
          className={s.pagination}
          page={pagination.page}
          totalPages={pagination.totalPages}
          onChange={pagination.onChange}
        />
      ) : null}
    </>
  ) : (
    <div className={s.empty}>{messages.empty}</div>
  );

  return (
    <Container>
      <Tabs
        value={statusFilter}
        onValueChange={onStatusChange}
        className={s.tabs}
        contentClassName={s.tabContent}
      >
        {statusTabs.map((tab) => (
          <Tabs.Item key={tab.value} value={tab.value} label={tab.label}>
            {content}
          </Tabs.Item>
        ))}
      </Tabs>
    </Container>
  );
};
