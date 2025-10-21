import { api } from "@shared/api/axios";

export type OrganizerDashboardResponse = {
  organizationName: string;
  stats: {
    volunteers: {
      total: number;
      newThisMonth: number;
    };
    events: {
      active: number;
      upcoming: number;
    };
    monthlyHours: {
      total: number;
      changePercent: number | null;
    };
    totalHours: {
      total: number;
    };
  };
};

export const fetchOrganizerDashboard =
  async (): Promise<OrganizerDashboardResponse> => {
    const { data } =
      await api.get<OrganizerDashboardResponse>("/api/organizer/dashboard");

    return data;
  };
