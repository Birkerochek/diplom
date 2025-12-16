import { QUERY_KEYS } from "@shared/constants";
import { useCustomQuery } from "@shared/lib";
import { fetchVolunteerApplications } from "./fetchApplications";
import type { VolunteerApplication } from "@shared/types/volunteer";

export const useVolunteerApplications = () =>
  useCustomQuery<VolunteerApplication[]>(
    [QUERY_KEYS.VOLUNTEER_APPLICATIONS],
    fetchVolunteerApplications
  );
