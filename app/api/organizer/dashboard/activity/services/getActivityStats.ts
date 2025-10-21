import { addMonths, subMonths, startOfMonth } from "date-fns";
import { prisma } from "@shared/lib/prisma";

type ActivityStat = {
  month: string;
  volunteers: number;
  hours: number;
};

type RawHour = {
  date: Date;
  hours: number;
  volunteerId: string;
};

const MONTHS_COUNT = 6;

const buildMonthKey = (date: Date) =>
  `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;

export const getActivityStats = async (
  organizerId: string
): Promise<ActivityStat[]> => {
  const now = startOfMonth(new Date());
  const startDate = subMonths(now, MONTHS_COUNT - 1);

  const volunteerHours = await prisma.volunteerHour.findMany({
    where: {
      event: { organizerId },
      date: { gte: startDate, lt: addMonths(now, 1) },
    },
    select: {
      date: true,
      hours: true,
      volunteerId: true,
    },
  });

  const grouped = volunteerHours.reduce<Record<string, RawHour[]>>(
    (acc, record) => {
      const monthKey = buildMonthKey(startOfMonth(record.date));
      if (!acc[monthKey]) {
        acc[monthKey] = [];
      }
      acc[monthKey].push(record);
      return acc;
    },
    {}
  );

  const stats: ActivityStat[] = [];

  for (let i = 0; i < MONTHS_COUNT; i += 1) {
    const currentMonth = subMonths(now, MONTHS_COUNT - 1 - i);
    const key = buildMonthKey(currentMonth);
    const records = grouped[key] ?? [];

    const volunteers = new Set(records.map((item) => item.volunteerId)).size;
    const hours = records.reduce((sum, item) => sum + item.hours, 0);

    stats.push({
      month: key,
      volunteers,
      hours,
    });
  }

  return stats;
};
