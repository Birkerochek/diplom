import { api } from "@shared/api/axios";

export type AdminDashboardResponse = {
  stats: {
    pending: number;
    active: number;
    rejected: number;
    totalHours: number;
  };
};

export const fetchAdminDashboard = async (): Promise<AdminDashboardResponse> => {
  const { data } = await api.get<AdminDashboardResponse>("/api/admin/dashboard");

  return data;
};
