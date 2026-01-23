import { QUERY_KEYS } from "@shared/constants";
import { useCustomQuery } from "@shared/lib";
import {
  fetchVolunteerAttendedEvents,
  type VolunteerAttendedEventsResponse,
} from "./fetchAttendedEvents";

type UseVolunteerAttendedEventsParams = {
  limit?: number;
};

export const useVolunteerAttendedEvents = (
  params: UseVolunteerAttendedEventsParams = {}
) =>
  useCustomQuery<VolunteerAttendedEventsResponse>(
    [QUERY_KEYS.VOLUNTEER_ATTENDED_EVENTS, params.limit ?? "all"],
    () => fetchVolunteerAttendedEvents(params)
  );
