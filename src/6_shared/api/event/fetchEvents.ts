import { api } from "@shared/api/axios";
import type { EventStatus } from "../../../../app/generated/prisma";

export type FetchEventsSortField =
  | "eventDate"
  | "createdAt"
  | "updatedAt"
  | "title"
  | "status";

export type FetchEventsSortDirection = "asc" | "desc";

export type FetchEventsParams = {
  page?: number;
  perPage?: number;
  sortBy?: FetchEventsSortField;
  sortDir?: FetchEventsSortDirection;
  status?: EventStatus[] | string;
  search?: string;
  dateFrom?: string;
  dateTo?: string;
  organizerId?: string;
};

export type EventSchedule = {
  eventDate: string;
  startTime: string;
  endTime: string;
  requiredHours: number;
};

export type EventLocation = {
  name: string;
  address: string;
};

export type EventCapacity = {
  maxParticipants: number;
  currentParticipants: number;
  confirmedParticipants: number;
  fillRate: number;
};

export type EventRegistrationStats = {
  pending: number;
  approved: number;
  rejected: number;
  cancelled: number;
  completed: number;
  total: number;
};

export type EventStats = {
  registrations: EventRegistrationStats;
  volunteerHours: number;
};

export type EventOrganizer = {
  id: string;
  name: string;
  email: string;
};

export type EventTimestamps = {
  createdAt: string;
  updatedAt: string;
  publishedAt: string | null;
};

export type EventListItem = {
  id: string;
  title: string;
  description: string;
  status: EventStatus;
  activityType: string;
  schedule: EventSchedule;
  location: EventLocation;
  capacity: EventCapacity;
  stats: EventStats;
  organizer: EventOrganizer;
  tags: string[];
  timestamps: EventTimestamps;
};

export type FetchEventsMeta = {
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
  sort: {
    field: FetchEventsSortField;
    direction: FetchEventsSortDirection;
  };
  filters: {
    status: string | null;
    search: string | null;
    dateFrom: string | null;
    dateTo: string | null;
    organizerId: string | null;
  };
};

export type FetchEventsSummary = {
  byStatus: Array<{ status: EventStatus; count: number }>;
  byActivityType: Array<{ activityType: string; count: number }>;
};

export type FetchEventsResponse = {
  data: EventListItem[];
  meta: FetchEventsMeta;
  summary: FetchEventsSummary;
};

export const fetchEvents = async (
  params: FetchEventsParams = {}
): Promise<FetchEventsResponse> => {
  const normalizedParams: Record<string, unknown> = { ...params };

  if (Array.isArray(params.status)) {
    normalizedParams.status = params.status.join(",");
  }

  Object.keys(normalizedParams).forEach((key) => {
    if (normalizedParams[key] === undefined) {
      delete normalizedParams[key];
    }
  });

  const { data } = await api.get<FetchEventsResponse>('/api/events', {
    params: normalizedParams,
  });

  return data;
};