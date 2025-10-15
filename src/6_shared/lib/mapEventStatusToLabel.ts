import { EventStatus } from "../../../app/generated/prisma";

const STATUS_LABELS: Record<EventStatus, string> = {
  [EventStatus.draft]: "Черновик",
  [EventStatus.published]: "Запланировано",
  [EventStatus.active]: "Активное",
  [EventStatus.completed]: "Завершенное",
  [EventStatus.cancelled]: "Отмененное",
};

export const mapEventStatusToLabel = (status: EventStatus) =>
  STATUS_LABELS[status] ?? status;
