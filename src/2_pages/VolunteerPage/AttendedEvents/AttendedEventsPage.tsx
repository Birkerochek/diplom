"use client";

import { useVolunteerAttendedEvents } from "@shared/api";
import { Container, Typography } from "@shared/ui";
import { AttendedEventsWidget } from "@widgets/Volunteer/Dashboard/AttendedEvents";

import s from "./AttendedEventsPage.module.scss";

export const AttendedEventsPage = () => {
  const { data, isLoading, isError } = useVolunteerAttendedEvents();

  const events = data?.data ?? [];
  const total = data?.total ?? events.length;

  let content;

  if (isLoading) {
    content = (
      <Typography variant="body" color="gray" className={s.state}>
        Загружаем посещенные мероприятия...
      </Typography>
    );
  } else if (isError) {
    content = (
      <Typography variant="body" color="secondary" className={s.state}>
        Не удалось загрузить список посещенных мероприятий.
      </Typography>
    );
  } else {
    content = (
      <AttendedEventsWidget
        events={events}
        total={total}
        showHeader={false}
      />
    );
  }

  return (
    <Container>
      <div className={s.page}>
        <div className={s.header}>
          <Typography variant="h2" as="h1">
            Посещенные мероприятия
          </Typography>
          <Typography variant="body" color="gray">
            Здесь собраны мероприятия, где ваше участие подтверждено и часы начислены.
          </Typography>
        </div>
        {content}
      </div>
    </Container>
  );
};
