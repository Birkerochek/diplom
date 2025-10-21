import { api } from "@shared/api/axios";

export type OrganizerActivityPoint = {
  month: string;
  volunteers: number;
  hours: number;
};

export const fetchOrganizerActivity = async (): Promise<OrganizerActivityPoint[]> => {
  const { data } = await api.get<OrganizerActivityPoint[]>(
    "/api/organizer/dashboard/activity"
  );

  return data;
};
