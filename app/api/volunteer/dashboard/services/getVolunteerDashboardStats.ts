import { RegistrationStatus } from "../../../../generated/prisma";
import { prisma } from "@shared/lib/prisma";
import { startOfMonth } from "date-fns";

export type VolunteerDashboardStats = {
  volunteerName: string;
  monthlyGoalHours: number;
  participationRange: {
    first: Date | null;
    last: Date | null;
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

export const getVolunteerDashboardStats = async (
  volunteerId: string
): Promise<VolunteerDashboardStats> => {
  const volunteer = await prisma.user.findUnique({
    where: { id: volunteerId },
  });

  if (!volunteer) {
    throw new Error("Volunteer not found");
  }

  const currentMonthStart = startOfMonth(new Date());

  const [totalHoursAgg, monthlyHoursAgg, completedEventsCount, hoursByVolunteer, participationAgg] =
    await Promise.all([
      prisma.volunteerHour.aggregate({
        where: { volunteerId },
        _sum: { hours: true },
      }),
    prisma.volunteerHour.aggregate({
      where: {
        volunteerId,
        date: { gte: currentMonthStart },
      },
      _sum: { hours: true },
    }),
    prisma.eventRegistration.count({
      where: {
        volunteerId,
        status: RegistrationStatus.completed,
      },
    }),
      prisma.volunteerHour.groupBy({
        by: ["volunteerId"],
        _sum: { hours: true },
      }),
      prisma.volunteerHour.aggregate({
        where: { volunteerId },
        _min: { date: true },
        _max: { date: true },
      }),
    ]);

  const totalHours = totalHoursAgg._sum.hours ?? 0;
  const addedThisMonth = monthlyHoursAgg._sum.hours ?? 0;

  const totalsMap = hoursByVolunteer.reduce<Map<string, number>>((map, row) => {
    map.set(row.volunteerId, row._sum.hours ?? 0);
    return map;
  }, new Map());

  if (!totalsMap.has(volunteerId)) {
    totalsMap.set(volunteerId, 0);
  }

  const totalsEntries = Array.from(totalsMap.entries()).sort(
    (a, b) => b[1] - a[1]
  );
  const rankIndex = totalsEntries.findIndex(([id]) => id === volunteerId);
  const topPercent =
    rankIndex === -1 || totalsEntries.length === 0
      ? null
      : Math.max(1, Math.round(((rankIndex + 1) / totalsEntries.length) * 100));

  const volunteerAim =
    (volunteer as typeof volunteer & { aim?: number }).aim ?? 20;

  return {
    volunteerName: volunteer.name,
    monthlyGoalHours: volunteerAim,
    participationRange: {
      first: participationAgg._min.date ?? null,
      last: participationAgg._max.date ?? null,
    },
    stats: {
      totalHours: {
        total: totalHours,
        addedThisMonth,
      },
      eventsCompleted: {
        total: completedEventsCount,
      },
      rating: {
        topPercent,
      },
    },
  };
};
