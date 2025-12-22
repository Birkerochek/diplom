'use client';

import { useCallback, useEffect, useState } from "react";

import { EventStatus } from "../../../../app/generated/prisma";
import { useFetchEvents } from "@shared/api";
import { Container, EventCardVolunteer, Pagination, Typography } from "@shared/ui";
import {
  useVolunteerEventsSearch,
  VolunteerEventsSearch,
} from "@features/VolunteerEventsSearch";
import {
  useVolunteerEventsFilter,
  VolunteerEventsFilter,
} from "@features/VolunteerEventsFilter";

import { useVolunteerRegistration } from "./model";
import s from "./EventsPage.module.scss";
import { Skeleton } from "./Skeleton";

const VOLUNTEER_EVENT_STATUSES: EventStatus[] = [
  EventStatus.published,
  EventStatus.active,
];

const EVENTS_PER_PAGE = 6;

export const EventsPageVolunteer = () => {
  const {
    searchTerm,
    debouncedSearch,
    onSearchChange,
  } = useVolunteerEventsSearch();

  const {
    activityType,
    options: activityOptions,
    onActivityChange,
    setAvailableActivities,
  } = useVolunteerEventsFilter();
  const [page, setPage] = useState(1);
  const safePage = page < 1 ? 1 : page;

  const {
    data: eventsResponse,
    isLoading,
    isError,
  } = useFetchEvents({
    sortBy: "eventDate",
    sortDir: "asc",
    status: VOLUNTEER_EVENT_STATUSES,
    search: debouncedSearch ? debouncedSearch : undefined,
    activityType: activityType ? activityType : undefined,
    page: safePage,
    perPage: EVENTS_PER_PAGE,
  });

  const { register, isEventProcessing } = useVolunteerRegistration();

  const activitySummary = eventsResponse?.summary.byActivityType;

  useEffect(() => {
    setAvailableActivities(activitySummary);
  }, [activitySummary, setAvailableActivities]);

  const handleSearchChange = useCallback(
    (value: string) => {
      onSearchChange(value);
      setPage(1);
    },
    [onSearchChange]
  );

  const handleActivityChange = useCallback(
    (value: string) => {
      onActivityChange(value);
      setPage(1);
    },
    [onActivityChange]
  );

  const events = eventsResponse?.data ?? [];
  const hasEvents = events.length > 0;
  const meta = eventsResponse?.meta;
  const totalPages = meta?.totalPages ?? 1;
  const currentPage = meta?.page ?? safePage;

  let content;
  if (isLoading) {
    content = <Skeleton />;
  } else if (isError) {
    content = (
      <Typography variant="body">
        Не удалось загрузить мероприятия. Попробуйте позже.
      </Typography>
    );
  } else if (hasEvents) {
    content = (
      <>
        <div className={s.events}>
          {events.map((event) => (
            <EventCardVolunteer
              key={event.id}
              {...event}
              onRegister={register}
              isRegistering={isEventProcessing(event.id)}
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
    );
  } else {
    content = (
      <Typography variant="body" className={s.empty}>
        Подходящих мероприятий не найдено. Измените параметры поиска.
      </Typography>
    );
  }

  return (
    <Container>
      <div className={s.controls}>
        <VolunteerEventsSearch
          value={searchTerm}
          onChange={handleSearchChange}
          className={s.search}
        />

        <VolunteerEventsFilter
          value={activityType}
          onChange={handleActivityChange}
          options={activityOptions}
          className={s.filter}
        />
      </div>

      {content}
    </Container>
  );
};
