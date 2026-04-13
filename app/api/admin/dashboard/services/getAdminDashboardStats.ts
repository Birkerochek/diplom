import { EventStatus } from "../../../../generated/prisma";
import { prisma } from "@shared/lib/prisma";

export type AdminDashboardStatsResponse = {
  stats: {
    pending: number;
    active: number;
    rejected: number;
    totalHours: number;
  };
};

export const getAdminDashboardStats = async (): Promise<AdminDashboardStatsResponse> => {
  const [pending, active, rejected, totalHoursAgg] = await Promise.all([
    prisma.event.count({ where: { status: EventStatus.pending_moderation } }),
    prisma.event.count({ where: { status: EventStatus.active } }),
    prisma.event.count({ where: { status: EventStatus.rejected } }),
    prisma.volunteerHour.aggregate({
      _sum: { hours: true },
    }),
  ]);

  return {
    stats: {
      pending,
      active,
      rejected,
      totalHours: totalHoursAgg._sum.hours ?? 0,
    },
  };
};
