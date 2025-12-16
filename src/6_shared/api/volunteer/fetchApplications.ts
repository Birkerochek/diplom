import { api } from "@shared/api/axios";
import { VolunteerApplication } from "@shared/types/volunteer";

export type VolunteerApplicationsResponse = {
  data: VolunteerApplication[];
};

export const fetchVolunteerApplications = async (): Promise<VolunteerApplication[]> => {
  const { data } = await api.get<VolunteerApplicationsResponse>(
    "/api/volunteer/applications"
  );

  return data.data;
};
