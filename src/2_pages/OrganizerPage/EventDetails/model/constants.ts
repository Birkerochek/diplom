import { RegistrationStatus } from "../../../../../app/generated/prisma";

export const REGISTRATION_STATUS_LABELS: Record<RegistrationStatus, string> = {
  [RegistrationStatus.pending]: "Ожидают",
  [RegistrationStatus.approved]: "Одобренные",
  [RegistrationStatus.rejected]: "Отклонённые",
  [RegistrationStatus.cancelled]: "Отменённые",
  [RegistrationStatus.completed]: "Завершили",
};

export const REGISTRATION_STATUS_COLORS: Record<RegistrationStatus, "green" | "gray" | "secondary"> = {
  [RegistrationStatus.pending]: "secondary",
  [RegistrationStatus.approved]: "green",
  [RegistrationStatus.rejected]: "secondary",
  [RegistrationStatus.cancelled]: "secondary",
  [RegistrationStatus.completed]: "gray",
};

export const REGISTRATION_STATUS_PRIORITY: RegistrationStatus[] = [
  RegistrationStatus.approved,
  RegistrationStatus.pending,
  RegistrationStatus.completed,
  RegistrationStatus.cancelled,
  RegistrationStatus.rejected,
];

export const PRIMARY_REGISTRATION_STATUSES = new Set<RegistrationStatus>([
  RegistrationStatus.approved,
  RegistrationStatus.pending,
]);
