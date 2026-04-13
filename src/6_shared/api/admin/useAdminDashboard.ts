import { QUERY_KEYS } from "@shared/constants";
import { useCustomQuery } from "@shared/lib";
import {
  fetchAdminDashboard,
  type AdminDashboardResponse,
} from "./fetchDashboard";

export const useAdminDashboardStats = () =>
  useCustomQuery<AdminDashboardResponse>(
    [QUERY_KEYS.ADMIN_DASHBOARD],
    fetchAdminDashboard
  );
