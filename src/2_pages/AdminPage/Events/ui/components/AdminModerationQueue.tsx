import clsx from "clsx";
import { formatEventDate } from "@shared/lib";
import { EventStatusBadge, Typography } from "@shared/ui";
import type { EventListItem } from "@shared/types/event";
import styles from "../AdminEventsPage.module.scss";

type AdminModerationQueueProps = {
  events: EventListItem[];
  selectedEventId: string | null;
  onSelect: (eventId: string) => void;
};

export const AdminModerationQueue = ({
  events,
  selectedEventId,
  onSelect,
}: AdminModerationQueueProps) => (
  <div className={styles.queue}>
    {events.map((event) => (
      <button
        key={event.id}
        type="button"
        className={clsx(styles.queueItem, selectedEventId === event.id && styles.queueItemActive)}
        onClick={() => onSelect(event.id)}
      >
        <div className={styles.queueHeader}>
          <Typography variant="h4">{event.title}</Typography>
          <EventStatusBadge status={event.status} />
        </div>
        <div className={styles.queueMeta}>
          <Typography variant="body" color="gray">
            Организатор: {event.organizer.name}
          </Typography>
          <Typography variant="body" color="gray">
            Дата проведения: {formatEventDate(event.schedule.eventDate)}
          </Typography>
          <Typography variant="body" color="gray">
            Локация: {event.location.name}
          </Typography>
        </div>
      </button>
    ))}
  </div>
);
