import { formatEventDate, formatEventTime } from "@shared/lib";
import { Button, EventStatusBadge, Typography } from "@shared/ui";
import type { EventListItem } from "@shared/types/event";
import styles from "../AdminEventsPage.module.scss";

type AdminEventDetailsProps = {
  event: EventListItem | null;
  isProcessing: boolean;
  onApprove: () => void;
  onReject: () => void;
};

export const AdminEventDetails = ({
  event,
  isProcessing,
  onApprove,
  onReject,
}: AdminEventDetailsProps) => {
  if (!event) {
    return (
      <div className={styles.emptyState}>
        <Typography variant="h3">Нет выбранного мероприятия</Typography>
        <Typography variant="body" color="gray">
          Выберите заявку слева, чтобы просмотреть детали и принять решение по модерации.
        </Typography>
      </div>
    );
  }

  return (
    <div className={styles.detailsBody}>
      <div className={styles.detailsHeader}>
        <div>
          <Typography as="h2" variant="h3">
            {event.title}
          </Typography>
          <Typography variant="body" color="gray">
            Организатор: {event.organizer.name}
          </Typography>
        </div>
        <EventStatusBadge status={event.status} />
      </div>

      <div className={styles.detailsGrid}>
        <div className={styles.detailsCard}>
          <Typography variant="settings" color="gray">
            Когда проходит
          </Typography>
          <Typography variant="body">{formatEventDate(event.schedule.eventDate)}</Typography>
          <Typography variant="body">
            {formatEventTime(event.schedule.startTime)} – {formatEventTime(event.schedule.endTime)}
          </Typography>
        </div>
        <div className={styles.detailsCard}>
          <Typography variant="settings" color="gray">
            Волонтёрская нагрузка
          </Typography>
          <Typography variant="body">{event.schedule.requiredHours} ч.</Typography>
          <Typography variant="body">
            Лимит мест: {event.capacity.maxParticipants ?? "не ограничен"}
          </Typography>
        </div>
        <div className={styles.detailsCard}>
          <Typography variant="settings" color="gray">
            Локация
          </Typography>
          <Typography variant="body">{event.location.name}</Typography>
          <Typography variant="body">{event.location.address ?? "Адрес не указан"}</Typography>
        </div>
        <div className={styles.detailsCard}>
          <Typography variant="settings" color="gray">
            Контакты организатора
          </Typography>
          <Typography variant="body">{event.organizer.email}</Typography>
          <Typography variant="body">{event.organizer.phone ?? "Телефон не указан"}</Typography>
        </div>
      </div>

      <div className={styles.description}>
        <Typography variant="h4">Описание</Typography>
        <Typography variant="body" color="gray">
          {event.description ?? "Организатор пока не добавил описание мероприятия."}
        </Typography>
      </div>

      <div className={styles.description}>
        <Typography variant="h4">Требования к волонтёрам</Typography>
        <Typography variant="body" color="gray">
          {event.requirements ?? "Требования не указаны"}
        </Typography>
      </div>

      {event.moderation.rejectionReason ? (
        <div className={styles.reasonBox}>
          <Typography variant="h4">Последняя причина отклонения</Typography>
          <Typography variant="body">{event.moderation.rejectionReason}</Typography>
        </div>
      ) : null}

      <div className={styles.actions}>
        <Button color="primary" onClick={onApprove} disabled={isProcessing}>
          Одобрить публикацию
        </Button>
        <Button color="white" onClick={onReject} disabled={isProcessing}>
          Отклонить с комментарием
        </Button>
      </div>
    </div>
  );
};
