import { api } from "@shared/api/axios";
import type { VolunteerAttendedEvent } from "@shared/types/volunteer";

export type VolunteerAttendedEventsResponse = {
  data: VolunteerAttendedEvent[];
  total: number;
};

type FetchVolunteerAttendedEventsParams = {
  limit?: number;
};

export const fetchVolunteerAttendedEvents = async (
  params: FetchVolunteerAttendedEventsParams = {}
): Promise<VolunteerAttendedEventsResponse> => {
  const queryParams =
    typeof params.limit === "number" ? { limit: params.limit } : undefined;
  const { data } = await api.get<VolunteerAttendedEventsResponse>(
    "/api/volunteer/attended-events",
    {
      params: queryParams,
    }
  );

  return data;
};
