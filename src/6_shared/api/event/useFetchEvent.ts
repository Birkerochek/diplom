import { QUERY_KEYS } from "@shared/constants";
import { useCustomQuery } from "@shared/lib";
import { fetchEvent, type FetchEventResponse } from "./fetchEvent";

export const useFetchEvent = (eventId?: string) =>
  useCustomQuery<FetchEventResponse>(
    [QUERY_KEYS.EVENT, eventId ?? ""] as const,
    () => fetchEvent(eventId as string),
    {
      enabled: Boolean(eventId),
    }
  );
