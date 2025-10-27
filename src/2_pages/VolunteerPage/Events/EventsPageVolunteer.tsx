'use client';

import { useEffect, useState } from "react";

import { EventStatus } from "../../../../app/generated/prisma";
import { useFetchEvents } from "@shared/api";
import { Container, Typography } from "@shared/ui";
import { EventCardVolunteer } from "@shared/ui/EventCardVolunteer/EventCardVolunteer";
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
import { Pagination } from "@shared/ui/Pagination/Pagination";

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
    page,
    perPage: EVENTS_PER_PAGE,
  });

  const { register, isEventProcessing } = useVolunteerRegistration();

  const activitySummary = eventsResponse?.summary.byActivityType;

  useEffect(() => {
    setAvailableActivities(activitySummary);
  }, [activitySummary, setAvailableActivities]);

  useEffect(() => {
    setPage(1);
  }, [debouncedSearch, activityType]);

  const events = eventsResponse?.data ?? [];
  const hasEvents = events.length > 0;
  const meta = eventsResponse?.meta;
  const totalPages = meta?.totalPages ?? 1;
  const currentPage = meta?.page ?? page;

  useEffect(() => {
    if (!isLoading && totalPages > 0 && page > totalPages) {
      setPage(totalPages);
    }
  }, [isLoading, page, totalPages]);

  const content = (() => {
    if (isLoading) {
      return <Skeleton />;
    }

    if (isError) {
      return (
        <Typography variant="body">
          Не удалось загрузить мероприятия. Попробуйте повторить попытку позже.
        </Typography>
      );
    }

    if (hasEvents) {
      return (
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
    }

    return (
      <Typography variant="body" className={s.empty}>
        События не найдены. Измените параметры поиска.
      </Typography>
    );
  })();

  return (
    <Container>
      <div className={s.controls}>
        <VolunteerEventsSearch
          value={searchTerm}
          onChange={onSearchChange}
          className={s.search}
        />

        <VolunteerEventsFilter
          value={activityType}
          onChange={onActivityChange}
          options={activityOptions}
          className={s.filter}
        />
      </div>

      {content}
    </Container>
  );
};
