import { QUERY_KEYS } from "@shared/constants";
import { useCustomQuery } from "@shared/lib";
import {
  fetchOrganizerDashboard,
  OrganizerDashboardResponse,
} from "./fetchDashboard";

export const useOrganizerDashboard = () =>
  useCustomQuery<OrganizerDashboardResponse>(
    [QUERY_KEYS.ORGANIZER_DASHBOARD],
    fetchOrganizerDashboard
  );
