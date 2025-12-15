import { Container, EventCardSkeleton } from "@shared/ui";
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
