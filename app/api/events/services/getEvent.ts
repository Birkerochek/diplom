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
  include: { organizer: { select: { id: true; name: true; email: true } } };
}>;

type RegistrationSummary = Record<RegistrationStatus, number> & { total: number };

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
      organizer: { select: { id: true, name: true, email: true } },
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

  const [registrations, volunteerHours] = await Promise.all([
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
  ]);

  const registrationMap = mapRegistrations(registrations);
  const volunteerHoursMap = mapVolunteerHours(volunteerHours);

  return {
    status: 200,
    body: serializeEvent(event, registrationMap, volunteerHoursMap),
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

const mapVolunteerHours = (
  aggregates: Array<{ eventId: string | null; _sum: { hours: number | null } }>
) => {
  const map = new Map<string, number>();

  for (const item of aggregates) {
    if (!item.eventId) continue;
    map.set(item.eventId, item._sum.hours ?? 0);
  }

  return map;
};

// -----------------------------------------------------------------------------
// Formatting
// -----------------------------------------------------------------------------
const serializeEvent = (
  event: EventWithOrganizer,
  registrations: Map<string, RegistrationSummary>,
  volunteerHours: Map<string, number>
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
    tags: event.tags,
    timestamps: {
      createdAt: event.createdAt.toISOString(),
      updatedAt: event.updatedAt.toISOString(),
      publishedAt: event.publishedAt ? event.publishedAt.toISOString() : null,
    },
  };
};
