import type { EventVolunteer } from "@shared/api/event/fetchEvent";
import { RegistrationStatus } from "../../../../../../app/generated/prisma";
import { PRIMARY_REGISTRATION_STATUSES, REGISTRATION_STATUS_LABELS, REGISTRATION_STATUS_PRIORITY } from "@pages/OrganizerPage/EventDetails";

type UseVolunteerTabsParams = {
  volunteers: EventVolunteer[];
  registrations: Record<RegistrationStatus, number> & { total: number };
};

export const useVolunteerTabs = ({ volunteers, registrations }: UseVolunteerTabsParams) => {
  const groupedVolunteers = new Map<RegistrationStatus, EventVolunteer[]>();

  for (const registration of volunteers) {
    const list = groupedVolunteers.get(registration.status);
    if (list) {
      list.push(registration);
      continue;
    }
    groupedVolunteers.set(registration.status, [registration]);
  }

  const tabOrder = REGISTRATION_STATUS_PRIORITY.filter((status) => {
    if (PRIMARY_REGISTRATION_STATUSES.has(status)) {
      return true;
    }

    return (registrations[status] ?? 0) > 0;
  });

  const resolvedTabs = tabOrder.length
    ? tabOrder
    : [RegistrationStatus.approved, RegistrationStatus.pending];

  const tabs = resolvedTabs.map((status) => ({
    status,
    label: `${REGISTRATION_STATUS_LABELS[status]} (${registrations[status] ?? 0})`,
  }));

  return { tabs, groupedVolunteers } as const;
};
