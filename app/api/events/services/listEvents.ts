import {
  EventStatus,
  Prisma,
  RegistrationStatus,
} from "../../../generated/prisma";
import { prisma } from "@shared/lib/prisma";
import { expandActivityTypeAliases, resolveActivityTypeKey } from "@shared/constants";

// -----------------------------------------------------------------------------
// Types
// -----------------------------------------------------------------------------
type SessionRole = "organizer" | "volunteer";

type ListEventsInput = {
  userId: string;
  role: SessionRole;
  url: string;
};

type EventWithOrganizer = Prisma.EventGetPayload<{
  include: { organizer: { select: { id: true; name: true; email: true } } };
}>;

type RegistrationSummary = Record<RegistrationStatus, number> & { total: number };

type RegistrationAggregate = {
  eventId: string;
  status: RegistrationStatus;
  count: number;
};

type VolunteerHoursAggregate = {
  eventId: string;
  hours: number;
};

type SortResult = {
  field: keyof Prisma.EventOrderByWithRelationInput;
  direction: Prisma.SortOrder;
  orderBy: Prisma.EventOrderByWithRelationInput;
};

// -----------------------------------------------------------------------------
// Constants
// -----------------------------------------------------------------------------
const DEFAULT_PAGE_SIZE = 12;
const MAX_PAGE_SIZE = 50;
const EVENT_STATUSES = Object.values(EventStatus) as EventStatus[];
const REGISTRATION_STATUSES = Object.values(RegistrationStatus) as RegistrationStatus[];
const VOLUNTEER_VISIBLE_STATUSES: EventStatus[] = [
  EventStatus.published,
  EventStatus.active,
  EventStatus.completed,
];
const SORTABLE_FIELDS: Array<keyof Prisma.EventOrderByWithRelationInput> = [
  "eventDate",
  "createdAt",
  "updatedAt",
  "title",
  "status",
];

// -----------------------------------------------------------------------------
// Public API
// -----------------------------------------------------------------------------
export const listEvents = async ({ userId, role, url }: ListEventsInput) => {
  const params = new URL(url).searchParams;

  const pagination = parsePagination(params);
  const sort = parseSorting(params);
  const where = buildWhere(params, { userId, role });

  const [total, events, statusSummary, activitySummary] = await Promise.all([
    prisma.event.count({ where }),
    prisma.event.findMany({
      where,
      orderBy: sort.orderBy,
      skip: pagination.skip,
      take: pagination.perPage,
      include: {
        organizer: { select: { id: true, name: true, email: true } },
      },
    }),
    prisma.event.groupBy({ by: ["status"], where, _count: { _all: true } }),
    prisma.event.groupBy({ by: ["activityType"], where, _count: { _all: true } }),
  ]);

  const eventIds = events.map((event) => event.id);
  const { registrations, volunteerHours } = await fetchAggregates(eventIds);

  const registrationMap = mapRegistrations(registrations);
  const volunteerHoursMap = mapVolunteerHours(volunteerHours);

  return {
    data: events.map((event) =>
      serializeEvent(event, registrationMap, volunteerHoursMap)
    ),
    meta: buildMeta(total, pagination, sort, params),
    summary: buildSummary(statusSummary, activitySummary),
  };
};

// -----------------------------------------------------------------------------
// Query parsing
// -----------------------------------------------------------------------------
const parsePagination = (params: URLSearchParams) => {
  const page = Math.max(Number(params.get("page")) || 1, 1);
  const perPageRaw = Number(params.get("perPage")) || DEFAULT_PAGE_SIZE;
  const perPage = Math.min(Math.max(perPageRaw, 1), MAX_PAGE_SIZE);

  return { page, perPage, skip: (page - 1) * perPage } as const;
};

const parseSorting = (params: URLSearchParams): SortResult => {
  const rawField = params.get("sortBy") as
    | keyof Prisma.EventOrderByWithRelationInput
    | null;
  const direction = params.get("sortDir") === "desc" ? "desc" : "asc";
  const field = SORTABLE_FIELDS.includes(rawField ?? "eventDate")
    ? (rawField ?? "eventDate")
    : "eventDate";

  return {
    field,
    direction,
    orderBy: { [field]: direction },
  } as const;
};

const buildWhere = (
  params: URLSearchParams,
  context: { userId: string; role: SessionRole }
) => {
  const where: Prisma.EventWhereInput = {};
  const andFilters: Prisma.EventWhereInput[] = [];

  if (context.role === "organizer") {
    where.organizerId = context.userId;
  }

  const requestedStatuses = parseStatusFilter(params.get("status"));

  if (context.role === "organizer") {
    if (requestedStatuses?.length) {
      where.status = { in: requestedStatuses };
    }
  } else {
    const allowed = new Set(VOLUNTEER_VISIBLE_STATUSES);
    const filtered = (requestedStatuses ?? VOLUNTEER_VISIBLE_STATUSES).filter(
      (status) => allowed.has(status)
    );
    where.status = { in: filtered.length ? filtered : VOLUNTEER_VISIBLE_STATUSES };
  }

  const search = params.get("search")?.trim();
  if (search) {
    andFilters.push({
      OR: [
        { title: { contains: search, mode: "insensitive" } },
        { description: { contains: search, mode: "insensitive" } },
        { location: { contains: search, mode: "insensitive" } },
        { activityType: { contains: search, mode: "insensitive" } },
      ],
    });
  }

  const dateFilter = buildDateFilter(params.get("dateFrom"), params.get("dateTo"));
  if (dateFilter) {
    where.eventDate = dateFilter;
  }

  const activityTypeParam = params.get("activityType")?.trim();
  if (activityTypeParam) {
    const aliases = Array.from(new Set(expandActivityTypeAliases(activityTypeParam)));

    if (aliases.length > 1) {
      andFilters.push({
        OR: aliases.map((alias) => ({
          activityType: { equals: alias, mode: "insensitive" },
        })),
      });
    } else {
      const target = aliases[0] ?? activityTypeParam;
      andFilters.push({
        activityType: { equals: target, mode: "insensitive" },
      });
    }
  }

  if (context.role === "volunteer") {
    const organizerIdParam = params.get("organizerId");
    if (organizerIdParam) {
      where.organizerId = organizerIdParam;
    }
  }

  if (andFilters.length) {
    where.AND = andFilters;
  }

  return where;
};

const parseStatusFilter = (raw: string | null) => {
  if (!raw) return undefined;

  const requested = raw
    .split(",")
    .map((value) => value.trim())
    .filter(Boolean);

  const valid = requested.filter((value): value is EventStatus =>
    EVENT_STATUSES.includes(value as EventStatus)
  );

  return valid.length ? valid : undefined;
};

const buildDateFilter = (fromRaw: string | null, toRaw: string | null) => {
  const filter: Prisma.DateTimeFilter = {};

  if (fromRaw) {
    const from = new Date(fromRaw);
    if (!Number.isNaN(from.getTime())) filter.gte = from;
  }

  if (toRaw) {
    const to = new Date(toRaw);
    if (!Number.isNaN(to.getTime())) filter.lte = to;
  }

  return Object.keys(filter).length ? filter : undefined;
};

const fetchAggregates = async (eventIds: string[]) => {
  if (!eventIds.length) {
    return { registrations: [] as RegistrationAggregate[], volunteerHours: [] as VolunteerHoursAggregate[] };
  }

  const [registrationRows, volunteerHourRows] = await Promise.all([
    prisma.eventRegistration.groupBy({
      by: ["eventId", "status"],
      where: { eventId: { in: eventIds } },
      _count: true,
    }),
    prisma.volunteerHour.groupBy({
      by: ["eventId"],
      where: { eventId: { in: eventIds } },
      _sum: { hours: true },
    }),
  ]);

  const registrations: RegistrationAggregate[] = registrationRows.map((item) => ({
    eventId: item.eventId,
    status: item.status,
    count: item._count,
  }));

  const volunteerHours: VolunteerHoursAggregate[] = volunteerHourRows
    .filter((item): item is typeof item & { eventId: string } => typeof item.eventId === "string")
    .map((item) => ({
      eventId: item.eventId,
      hours: item._sum.hours ?? 0,
    }));

  return { registrations, volunteerHours };
};

// -----------------------------------------------------------------------------
// Aggregation helpers
// -----------------------------------------------------------------------------
const createEmptySummary = (): RegistrationSummary => {
  const summary = { total: 0 } as RegistrationSummary;

  for (const status of REGISTRATION_STATUSES) {
    summary[status] = 0;
  }

  return summary;
};

const mapRegistrations = (aggregates: RegistrationAggregate[]) => {
  const map = new Map<string, RegistrationSummary>();

  for (const item of aggregates) {
    if (!map.has(item.eventId)) {
      map.set(item.eventId, createEmptySummary());
    }

    const summary = map.get(item.eventId);
    if (!summary) continue;

    summary[item.status] += item.count;
    summary.total += item.count;
  }

  return map;
};

const mapVolunteerHours = (aggregates: VolunteerHoursAggregate[]) => {
  const map = new Map<string, number>();

  for (const item of aggregates) {
    map.set(item.eventId, item.hours);
  }

  return map;
};

// -----------------------------------------------------------------------------
// Formatting helpers
// -----------------------------------------------------------------------------
const serializeEvent = (
  event: EventWithOrganizer,
  registrations: Map<string, RegistrationSummary>,
  volunteerHours: Map<string, number>
) => {
  const base = registrations.get(event.id) ?? createEmptySummary();
  const confirmed =
    base[RegistrationStatus.approved] + base[RegistrationStatus.completed];

  const fillRate = event.maxParticipants
    ? Math.min(100, Math.round((confirmed / event.maxParticipants) * 100))
    : null;

  const normalizedActivityType =
    resolveActivityTypeKey(event.activityType) ?? event.activityType;

  return {
    id: event.id,
    title: event.title,
    description: event.description,
    status: event.status,
    activityType: normalizedActivityType,
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
      registrations: base,
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

const buildMeta = (
  total: number,
  pagination: { page: number; perPage: number },
  sort: SortResult,
  params: URLSearchParams
) => ({
  page: pagination.page,
  perPage: pagination.perPage,
  total,
  totalPages: Math.max(1, Math.ceil(total / pagination.perPage)),
  sort: { field: sort.field, direction: sort.direction },
  filters: {
    status: params.get("status"),
    search: params.get("search"),
    dateFrom: params.get("dateFrom"),
    dateTo: params.get("dateTo"),
    organizerId: params.get("organizerId"),
    activityType: params.get("activityType"),
  },
});

const buildSummary = (
  statuses: Array<{ status: EventStatus; _count: { _all: number } }>,
  activities: Array<{ activityType: string; _count: { _all: number } }>
) => ({
  byStatus: statuses.map((item) => ({
    status: item.status,
    count: item._count._all,
  })),
  byActivityType: activities.map((item) => ({
    activityType: resolveActivityTypeKey(item.activityType) ?? item.activityType,
    count: item._count._all,
  })),
});
