import {
  EventStatus,
  RegistrationStatus,
} from "../../../../app/generated/prisma";
import { prisma } from "../prisma";

const COMPLETE_SOURCE_STATUSES: EventStatus[] = [
  EventStatus.published,
  EventStatus.active,
];

const AWARDABLE_REGISTRATION_STATUSES: RegistrationStatus[] = [
  RegistrationStatus.approved,
  RegistrationStatus.completed,
];

type AutoCompleteResult = {
  eventsCompleted: number;
  volunteerHoursCreated: number;
  registrationsUpdated: number;
};

export const autoCompleteExpiredEvents = async (
  now: Date = new Date()
): Promise<AutoCompleteResult> => {
  const events = await prisma.event.findMany({
    where: {
      endTime: { lt: now },
      status: { in: COMPLETE_SOURCE_STATUSES },
    },
    select: {
      id: true,
      title: true,
      description: true,
      activityType: true,
      endTime: true,
      requiredHours: true,
      registrations: {
        where: {
          status: { in: AWARDABLE_REGISTRATION_STATUSES },
        },
        select: {
          id: true,
          volunteerId: true,
        },
      },
    },
  });

  if (!events.length) {
    return {
      eventsCompleted: 0,
      volunteerHoursCreated: 0,
      registrationsUpdated: 0,
    };
  }

  let volunteerHoursCreated = 0;
  let registrationsUpdated = 0;

  for (const event of events) {
    const { volunteerHoursCreated: created, registrationsUpdated: updated } =
      await prisma.$transaction(async (tx) => {
        await tx.event.update({
          where: { id: event.id },
          data: { status: EventStatus.completed },
        });

        if (!event.registrations.length) {
          return { volunteerHoursCreated: 0, registrationsUpdated: 0 };
        }

        const registrationIds = event.registrations.map((item) => item.id);

        const existingHours = await tx.volunteerHour.findMany({
          where: {
            registrationId: { in: registrationIds },
          },
          select: { registrationId: true },
        });

        const existingSet = new Set(
          existingHours
            .map((item) => item.registrationId)
            .filter((id): id is string => Boolean(id))
        );

        const newHours = event.registrations.filter(
          (registration) => !existingSet.has(registration.id)
        );

        if (!newHours.length) {
          return { volunteerHoursCreated: 0, registrationsUpdated: 0 };
        }

        const hoursPayload = newHours.map((registration) => ({
          volunteerId: registration.volunteerId,
          eventId: event.id,
          registrationId: registration.id,
          hours: event.requiredHours,
          activityType: event.activityType,
          date: event.endTime,
          title: event.title,
          description: event.description ?? null,
        }));

        const { count } = await tx.volunteerHour.createMany({
          data: hoursPayload,
        });

        await tx.eventRegistration.updateMany({
          where: { id: { in: newHours.map((registration) => registration.id) } },
          data: {
            status: RegistrationStatus.completed,
            attended: true,
            hoursCompleted: event.requiredHours,
            completedAt: event.endTime,
          },
        });

        return {
          volunteerHoursCreated: count,
          registrationsUpdated: newHours.length,
        };
      });

    volunteerHoursCreated += created;
    registrationsUpdated += updated;
  }

  return {
    eventsCompleted: events.length,
    volunteerHoursCreated,
    registrationsUpdated,
  };
};
