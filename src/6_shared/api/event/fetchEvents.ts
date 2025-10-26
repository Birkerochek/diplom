import { api } from "@shared/api/axios";
import type { EventStatus } from "../../../../app/generated/prisma";
import type {
  EventCollectionMeta,
  EventCollectionSortDirection,
  EventCollectionSortField,
  EventListItem,
  EventListResponse,
  EventSummary,
} from "@shared/types/event";

export type FetchEventsSortField = EventCollectionSortField;
export type FetchEventsSortDirection = EventCollectionSortDirection;

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

export type FetchEventsMeta = EventCollectionMeta;
export type FetchEventsSummary = EventSummary;
export type FetchEventsResponse = EventListResponse;
export type EventSchedule = EventListItem["schedule"];
export type EventLocation = EventListItem["location"];
export type EventCapacity = EventListItem["capacity"];
export type EventRegistrationStats = EventListItem["stats"]["registrations"];
export type EventStats = EventListItem["stats"];
export type EventOrganizer = EventListItem["organizer"];
export type EventTimestamps = EventListItem["timestamps"];

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
