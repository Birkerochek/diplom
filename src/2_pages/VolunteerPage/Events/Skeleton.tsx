import { EventCardVolunteerSkeleton } from "@shared/ui";
import s from "./EventsPage.module.scss";

export const Skeleton = () => {
  return (
    <div className={s.events}>
      {Array.from({ length: 6 }).map((_, index) => (
        <EventCardVolunteerSkeleton key={index} />
      ))}
    </div>
  );
};
