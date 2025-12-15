import { api } from "@shared/api/axios";

export type VolunteerDashboardResponse = {
  volunteerName: string;
  monthlyGoalHours: number;
  participationRange: {
    first: string | null;
    last: string | null;
  };
  stats: {
    totalHours: {
      total: number;
      addedThisMonth: number;
    };
    eventsCompleted: {
      total: number;
    };
    rating: {
      topPercent: number | null;
    };
  };
};

export const fetchVolunteerDashboard =
  async (): Promise<VolunteerDashboardResponse> => {
    const { data } = await api.get<VolunteerDashboardResponse>(
      "/api/volunteer/dashboard"
    );

    return data;
  };
