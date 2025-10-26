import { useFetchEvents } from "@shared/api";
import { Container, Typography } from "@shared/ui";
import { EventCardVolunteer } from "@shared/ui/EventCardVolunteer/EventCardVolunteer";

import { useVolunteerRegistration } from "./model";
import s from "./EventsPage.module.scss";

export const EventsPageVolunteer = () => {
  const {
    data: eventsResponse,
    isLoading,
    isError,
  } = useFetchEvents({
    sortBy: "eventDate",
    sortDir: "asc",
    status: ["published", "active"],
  });

  const { register, isEventProcessing } = useVolunteerRegistration();

  const events = eventsResponse?.data ?? [];

  if (isLoading) {
    return (
      <Container>
        <Typography variant="body">Загружаем список мероприятий…</Typography>
      </Container>
    );
  }

  if (isError) {
    return (
      <Container>
        <Typography variant="body">
          Не удалось получить данные. Попробуйте выполнить попытку позже.
        </Typography>
      </Container>
    );
  }

  if (events.length === 0) {
    return (
      <Container>
        <Typography variant="body">Пока нет доступных мероприятий.</Typography>
      </Container>
    );
  }

  return (
    <Container>
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
    </Container>
  );
};
