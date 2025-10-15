import { useMemo } from "react";
import type { EventVolunteer } from "@shared/api/event/fetchEvent";
import {
  PRIMARY_REGISTRATION_STATUSES,
  REGISTRATION_STATUS_LABELS,
  REGISTRATION_STATUS_PRIORITY,
} from "@pages/OrganizerPage/EventDetails/model/constants";
import { RegistrationStatus } from "../../../../../../app/generated/prisma";

type UseVolunteerTabsParams = {
  volunteers: EventVolunteer[];
  registrations: Record<RegistrationStatus, number> & { total: number };
};

export const useVolunteerTabs = ({ volunteers, registrations }: UseVolunteerTabsParams) => {
  const { tabs, groupedVolunteers } = useMemo(() => {
    const grouped = new Map<RegistrationStatus, EventVolunteer[]>();

    for (const registration of volunteers) {
      const list = grouped.get(registration.status) ?? [];
      list.push(registration);
      grouped.set(registration.status, list);
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

    return {
      groupedVolunteers: grouped,
      tabs: resolvedTabs.map((status) => ({
        status,
        label: `${REGISTRATION_STATUS_LABELS[status]} (${registrations[status] ?? 0})`,
      })),
    };
  }, [volunteers, registrations]);

  return { tabs, groupedVolunteers } as const;
};
