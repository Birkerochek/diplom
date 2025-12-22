import {
  EventStatus,
  Prisma,
  RegistrationStatus,
} from "../../../generated/prisma";
import { prisma } from "@shared/lib/prisma";

// -----------------------------------------------------------------------------
// Types
// -----------------------------------------------------------------------------
type SessionRole = "organizer" | "volunteer";

type GetEventInput = {
  userId: string;
  role: SessionRole;
  eventId: string;
};

type EventWithOrganizer = Prisma.EventGetPayload<{
  include: { organizer: { select: { id: true; name: true; email: true; phone: true } } };
}>;

type RegistrationSummary = Record<RegistrationStatus, number> & { total: number };
type RegistrationWithVolunteer = Prisma.EventRegistrationGetPayload<{
  include: {
    volunteer: {
      select: {
        id: true;
        name: true;
        email: true;
        phone: true;
        avatarUrl: true;
      };
    };
  };
}>;

// -----------------------------------------------------------------------------
// Constants
// -----------------------------------------------------------------------------
const VOLUNTEER_VISIBLE_STATUSES: EventStatus[] = [
  EventStatus.published,
  EventStatus.active,
  EventStatus.completed,
];
const registrationStatuses = Object.values(RegistrationStatus) as RegistrationStatus[];

// -----------------------------------------------------------------------------
// Public API
// -----------------------------------------------------------------------------
export const getEvent = async ({ userId, role, eventId }: GetEventInput) => {
  const where: Prisma.EventWhereUniqueInput = { id: eventId };
  const event = await prisma.event.findUnique({
    where,
    include: {
      organizer: { select: { id: true, name: true, email: true, phone: true } },
    },
  });

  if (!event) {
    return { status: 404, body: { message: "Мероприятие не найдено" } } as const;
  }

  if (role === "organizer" && event.organizerId !== userId) {
    return { status: 403, body: { message: "Недостаточно прав" } } as const;
  }

  if (role === "volunteer" && !VOLUNTEER_VISIBLE_STATUSES.includes(event.status)) {
    return {
      status: 403,
      body: { message: "Недостаточно прав" },
    } as const;
  }

  const registrationDetails = await prisma.eventRegistration.findMany({
    where: { eventId },
    include: {
      volunteer: {
        select: {
          id: true,
          name: true,
          email: true,
          phone: true,
          avatarUrl: true,
        },
      },
    },
    orderBy: { registeredAt: "asc" },
  });

  const volunteerIds = registrationDetails.map((registration) => registration.volunteerId);

  const [registrations, volunteerHours, volunteerTotals] = await Promise.all([
    prisma.eventRegistration.groupBy({
      by: ["eventId", "status"],
      where: { eventId },
      _count: true,
    }),
    prisma.volunteerHour.groupBy({
      by: ["eventId"],
      where: { eventId },
      _sum: { hours: true },
    }),
    volunteerIds.length
      ? prisma.volunteerHour.groupBy({
          by: ["volunteerId"],
          where: { volunteerId: { in: volunteerIds } },
          _sum: { hours: true },
        })
      : Promise.resolve([] as Array<{ volunteerId: string | null; _sum: { hours: number | null } }>),
  ]);

  const registrationMap = mapRegistrations(registrations);
  const volunteerHoursMap = mapVolunteerHoursByEvent(volunteerHours);
  const volunteerTotalsMap = mapVolunteerHoursByVolunteer(volunteerTotals);

  return {
    status: 200,
    body: serializeEvent(
      event,
      registrationMap,
      volunteerHoursMap,
      registrationDetails,
      volunteerTotalsMap
    ),
  } as const;
};

// -----------------------------------------------------------------------------
// Aggregation helpers
// -----------------------------------------------------------------------------
const createEmptySummary = (): RegistrationSummary => {
  const summary = { total: 0 } as RegistrationSummary;

  for (const status of registrationStatuses) {
    summary[status] = 0;
  }

  return summary;
};

const mapRegistrations = (
  aggregates: Array<{ eventId: string; status: RegistrationStatus; _count: number }>
) => {
  const map = new Map<string, RegistrationSummary>();

  for (const item of aggregates) {
    if (!map.has(item.eventId)) {
      map.set(item.eventId, createEmptySummary());
    }

    const summary = map.get(item.eventId);
    if (!summary) continue;

    summary[item.status] += item._count;
    summary.total += item._count;
  }

  return map;
};

const mapVolunteerHoursByEvent = (
  aggregates: Array<{ eventId: string | null; _sum: { hours: number | null } }>
) => {
  const map = new Map<string, number>();

  for (const item of aggregates) {
    if (!item.eventId) continue;
    map.set(item.eventId, item._sum.hours ?? 0);
  }

  return map;
};

const mapVolunteerHoursByVolunteer = (
  aggregates: Array<{ volunteerId: string | null; _sum: { hours: number | null } }>
) => {
  const map = new Map<string, number>();

  for (const item of aggregates) {
    if (!item.volunteerId) continue;
    map.set(item.volunteerId, item._sum.hours ?? 0);
  }

  return map;
};

// -----------------------------------------------------------------------------
// Formatting
// -----------------------------------------------------------------------------
const serializeEvent = (
  event: EventWithOrganizer,
  registrations: Map<string, RegistrationSummary>,
  volunteerHours: Map<string, number>,
  registrationDetails: RegistrationWithVolunteer[],
  volunteerTotals: Map<string, number>
) => {
  const summary = registrations.get(event.id) ?? createEmptySummary();
  const confirmed =
    summary[RegistrationStatus.approved] + summary[RegistrationStatus.completed];
  const fillRate = event.maxParticipants
    ? Math.min(100, Math.round((confirmed / event.maxParticipants) * 100))
    : null;

  return {
    id: event.id,
    title: event.title,
    description: event.description,
    status: event.status,
    activityType: event.activityType,
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
    capacity: {
      maxParticipants: event.maxParticipants,
      currentParticipants: event.currentParticipants,
      confirmedParticipants: confirmed,
      fillRate,
    },
    stats: {
      registrations: summary,
      volunteerHours: volunteerHours.get(event.id) ?? 0,
    },
    organizer: event.organizer,
    requirements: event.requirements,
    skillsNeeded: event.skillsNeeded,
    volunteers: registrationDetails.map((registration) => ({
      id: registration.id,
      status: registration.status,
      registeredAt: registration.registeredAt.toISOString(),
      motivationLetter: registration.motivationLetter,
      hoursCompleted: registration.hoursCompleted,
      volunteer: {
        id: registration.volunteer.id,
        name: registration.volunteer.name,
        email: registration.volunteer.email,
        phone: registration.volunteer.phone,
        avatarUrl: registration.volunteer.avatarUrl,
      },
      totalVolunteerHours: volunteerTotals.get(registration.volunteerId) ?? 0,
    })),
    tags: event.tags,
    timestamps: {
      createdAt: event.createdAt.toISOString(),
      updatedAt: event.updatedAt.toISOString(),
      publishedAt: event.publishedAt ? event.publishedAt.toISOString() : null,
    },
  };
};
