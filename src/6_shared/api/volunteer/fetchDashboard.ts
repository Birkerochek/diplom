import { api } from "@shared/api/axios";
import type { VolunteerAttendedEvent } from "@shared/types/volunteer";

export type VolunteerDashboardResponse = {
  volunteerName: string;
  monthlyGoalHours: number;
  organizerApplication: {
    status: "pending" | "approved" | "rejected" | null;
    rejectionReason: string | null;
    requestedAt: string | null;
    reviewedAt: string | null;
  };
  attendedEvents: VolunteerAttendedEvent[];
  attendedEventsTotal: number;
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
