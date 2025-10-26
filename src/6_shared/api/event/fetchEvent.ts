import { api } from "@shared/api/axios";
import type {
  EventDetails,
  EventRegistrationSummary,
  EventStats,
  EventVolunteer,
} from "@shared/types/event";

export type RegistrationSummary = EventRegistrationSummary;
export type FetchEventResponse = EventDetails;
export type { EventVolunteer, EventStats };

export const fetchEvent = async (eventId: string): Promise<FetchEventResponse> => {
  const { data } = await api.get<FetchEventResponse>(`/api/events/${eventId}`);

  return data;
};
