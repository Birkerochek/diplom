import { addMonths, subMonths, startOfMonth } from "date-fns";
import { prisma } from "@shared/lib/prisma";

type ActivityStat = {
  month: string;
  volunteers: number;
  hours: number;
};

const MONTHS_COUNT = 6;

const buildMonthKey = (date: Date) =>
  `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;

export const getActivityStats = async (
  organizerId: string
): Promise<ActivityStat[]> => {
  const now = startOfMonth(new Date());
  const startDate = subMonths(now, MONTHS_COUNT - 1);
  const endDate = addMonths(now, 1);

  const rows = await prisma.$queryRaw<
    Array<{
      month: string;
      volunteers: bigint | number;
      hours: number | null;
    }>
  >`
    SELECT
      to_char(date_trunc('month', vh.date), 'YYYY-MM') AS month,
      COUNT(DISTINCT vh."volunteerId") AS volunteers,
      COALESCE(SUM(vh.hours), 0) AS hours
    FROM "VolunteerHour" vh
    INNER JOIN "Event" e ON e.id = vh."eventId"
    WHERE e."organizerId" = ${organizerId}
      AND vh.date >= ${startDate}
      AND vh.date < ${endDate}
    GROUP BY date_trunc('month', vh.date)
    ORDER BY month ASC
  `;

  const grouped = new Map<string, { volunteers: number; hours: number }>();
  for (const row of rows) {
    grouped.set(row.month, {
      volunteers: typeof row.volunteers === "bigint" ? Number(row.volunteers) : row.volunteers,
      hours: row.hours ?? 0,
    });
  }

  const stats: ActivityStat[] = [];

  for (let i = 0; i < MONTHS_COUNT; i += 1) {
    const currentMonth = subMonths(now, MONTHS_COUNT - 1 - i);
    const key = buildMonthKey(currentMonth);
    const record = grouped.get(key);

    stats.push({
      month: key,
      volunteers: record?.volunteers ?? 0,
      hours: record?.hours ?? 0,
    });
  }

  return stats;
};
