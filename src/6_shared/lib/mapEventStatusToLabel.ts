import { EventStatus } from "../../../app/generated/prisma";

const STATUS_LABELS: Record<EventStatus, string> = {
  [EventStatus.draft]: "Черновик",
  [EventStatus.pending_moderation]: "На модерации",
  [EventStatus.rejected]: "Отклонено",
  [EventStatus.active]: "Активное",
  [EventStatus.suspended]: "Приостановлено",
  [EventStatus.completed]: "Завершенное",
  [EventStatus.cancelled]: "Отмененное",
  [EventStatus.archived]: "Архивное",
};

export const mapEventStatusToLabel = (status: EventStatus) =>
  STATUS_LABELS[status] ?? status;
