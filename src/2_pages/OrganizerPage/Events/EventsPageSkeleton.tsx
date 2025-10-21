import { Container } from "@shared/ui";
import { EventCardSkeleton } from "@shared/ui/EventCard/EventCardSkeleton";
import s from "./EventsPage.module.scss";

export const EventsPageSkeleton = () => {
  return (
    <Container>
      <div className={s.events}>
        {Array.from({ length: 6 }).map((_, index) => (
          <EventCardSkeleton key={index} />
        ))}
      </div>
    </Container>
  );
};
