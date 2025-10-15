import { QUERY_KEYS } from "@shared/constants";
import { useCustomQuery } from "@shared/lib";
import { fetchEvents, FetchEventsParams, FetchEventsResponse } from "./fetchEvents";

export const useFetchEvents = (params?: FetchEventsParams) =>
  useCustomQuery<FetchEventsResponse>(
    [QUERY_KEYS.EVENTS, params ?? {}],
    () => fetchEvents(params)
  );