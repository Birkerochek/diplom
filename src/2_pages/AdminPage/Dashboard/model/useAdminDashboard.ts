"use client";

import { useAdminDashboardStats, useFetchEvents } from "@shared/api";

export const useAdminDashboard = () => {
  const statsQuery = useAdminDashboardStats();
  const eventsQuery = useFetchEvents({ perPage: 50, sortBy: "createdAt", sortDir: "desc" });
  const events = eventsQuery.data?.data ?? [];

  return {
    statsQuery,
    eventsQuery,
    stats: {
      pending: statsQuery.data?.stats.pending ?? 0,
      active: statsQuery.data?.stats.active ?? 0,
      rejected: statsQuery.data?.stats.rejected ?? 0,
      totalHours: statsQuery.data?.stats.totalHours ?? 0,
    },
    recentEvents: events.slice(0, 5),
  };
};
