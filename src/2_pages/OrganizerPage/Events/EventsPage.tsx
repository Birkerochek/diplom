import { useFetchEvents } from "@shared/api";
import { Container } from "@shared/ui";
import { EventCard } from "@shared/ui/EventCard/EventCard";
import s from './EventsPage.module.scss'
export const EventsPage = () => {
  const {
    data: eventsResponse,
    isLoading,
    isError,
  } = useFetchEvents();

  if (isLoading) {
    return <div>Загрузка...</div>;
  }

  if (isError) {
    return <div>Не удалось загрузить мероприятия</div>;
  }

  const events = eventsResponse?.data ?? [];

  if (!events.length) {
    return <div>Мероприятия не найдены</div>;
  }

  return (
    <Container>
        <div className={s.events}>
      {events.map((event) => (
        <EventCard
          key={event.id}
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
    </Container>
  );
};