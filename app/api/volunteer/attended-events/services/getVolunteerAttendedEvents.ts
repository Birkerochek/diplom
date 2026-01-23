import { RegistrationStatus } from "../../../../generated/prisma";
import { resolveActivityTypeKey } from "@shared/constants";
import { prisma } from "@shared/lib/prisma";
import type { VolunteerAttendedEvent } from "@shared/types/volunteer";

type GetVolunteerAttendedEventsInput = {
  volunteerId: string;
  limit?: number;
};

export type VolunteerAttendedEventsResult = {
  data: VolunteerAttendedEvent[];
  total: number;
};

export const getVolunteerAttendedEvents = async ({
  volunteerId,
  limit,
}: GetVolunteerAttendedEventsInput): Promise<VolunteerAttendedEventsResult> => {
  const where = {
    volunteerId,
    status: RegistrationStatus.completed,
    attended: true,
  };

  const [registrations, total] = await prisma.$transaction([
    prisma.eventRegistration.findMany({
      where,
      include: {
        event: {
          include: {
            organizer: {
              select: { id: true, name: true },
            },
          },
        },
      },
      orderBy: [
        { completedAt: "desc" },
        { event: { eventDate: "desc" } },
      ],
      take: limit,
    }),
    prisma.eventRegistration.count({ where }),
  ]);

  const data = registrations
    .filter((registration) => registration.event)
    .map((registration) => {
      const event = registration.event;
      const normalizedActivityType =
        resolveActivityTypeKey(event.activityType) ?? event.activityType;
      const hours = registration.hoursCompleted ?? event.requiredHours ?? 0;

      return {
        id: registration.id,
        completedAt: registration.completedAt
          ? registration.completedAt.toISOString()
          : null,
        hours,
        event: {
          id: registration.eventId,
          title: event.title,
          activityType: normalizedActivityType,
          schedule: {
            eventDate: event.eventDate.toISOString(),
            startTime: event.startTime.toISOString(),
            endTime: event.endTime.toISOString(),
          },
          location: {
            name: event.location,
            address: event.address,
          },
          organizer: {
            id: event.organizer.id,
            name: event.organizer.name,
          },
        },
      };
    });

  return { data, total };
};
