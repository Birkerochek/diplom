import { resolveActivityTypeKey } from "@shared/constants";
import { prisma } from "@shared/lib/prisma";
import type { VolunteerApplication } from "@shared/types/volunteer";

export const getVolunteerApplications = async (
  volunteerId: string
): Promise<VolunteerApplication[]> => {
  const registrations = await prisma.eventRegistration.findMany({
    where: { volunteerId },
    orderBy: [
      { event: { eventDate: "asc" } },
      { registeredAt: "desc" },
    ],
    include: {
      event: {
        include: {
          organizer: {
            select: { id: true, name: true },
          },
        },
      },
    },
  });

  return registrations
    .filter((registration) => registration.event)
    .map((registration) => {
      const event = registration.event;
      const normalizedActivityType =
        resolveActivityTypeKey(event.activityType) ?? event.activityType;

      return {
        id: registration.id,
        status: registration.status,
        rejectionReason: registration.rejectionReason,
        registeredAt: registration.registeredAt.toISOString(),
        event: {
          id: registration.eventId,
          title: event.title,
          description: event.description,
          activityType: normalizedActivityType,
          tags: event.tags,
          schedule: {
            eventDate: event.eventDate.toISOString(),
            startTime: event.startTime.toISOString(),
            endTime: event.endTime.toISOString(),
            requiredHours: event.requiredHours,
          },
          location: {
            name: event.location,
            address: event.address,
          },
          participants: {
            current: event.currentParticipants,
            max: event.maxParticipants,
          },
          organizer: {
            id: event.organizer.id,
            name: event.organizer.name,
          },
        },
      };
    });
};
