import { QUERY_KEYS } from "@shared/constants";
import { useCustomQuery } from "@shared/lib";
import {
  fetchVolunteerDashboard,
  VolunteerDashboardResponse,
} from "./fetchDashboard";

export const useVolunteerDashboardStats = () =>
  useCustomQuery<VolunteerDashboardResponse>(
    [QUERY_KEYS.VOLUNTEER_DASHBOARD],
    fetchVolunteerDashboard
  );
