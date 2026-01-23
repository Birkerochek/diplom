"use client";

import { useSession, useVolunteerDashboardStats } from "@shared/api";
import type { VolunteerDashboardResponse } from "@shared/api/volunteer/fetchDashboard";
import type { VolunteerStats } from "@widgets/Volunteer/Dashboard/StatsSummary";

const DEFAULT_MONTHLY_GOAL = 20;
const monthYearFormatter = new Intl.DateTimeFormat("ru-RU", {
  month: "long",
  year: "numeric",
});

const formatPeriodFromRange = (startISO?: string | null, endISO?: string | null) => {
  if (!startISO || !endISO) {
    return null;
  }

  const start = new Date(startISO);
  const end = new Date(endISO);

  if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime())) {
    return null;
  }

  const startLabel = monthYearFormatter.format(start);
  const endLabel = monthYearFormatter.format(end);

  if (startLabel === endLabel) {
    return startLabel;
  }

  return `${startLabel} – ${endLabel}`;
};

const fallbackPeriodLabel = () => "не установлен";

const formatStats = (data: VolunteerDashboardResponse): VolunteerStats => {
  const {
    stats: {
      totalHours,
      eventsCompleted,
      rating: { topPercent },
    },
  } = data;

  const deltaLabel =
    totalHours.addedThisMonth > 0
      ? `+${totalHours.addedThisMonth} часов в этом месяце`
      : "Нет часов в этом месяце";

  const ratingValue = typeof topPercent === "number" ? `Топ ${topPercent}%` : "Нет данных";
  const ratingDescription =
    typeof topPercent === "number"
      ? "Среди волонтёров"
      : "Добавьте часы, чтобы попасть в рейтинг";

  return {
    totalHours: {
      value: totalHours.total,
      deltaLabel,
    },
    eventsCompleted: {
      value: eventsCompleted.total,
      description: "Завершённых мероприятий",
    },
    rating: {
      value: ratingValue,
      description: ratingDescription,
      accent: typeof topPercent === "number" && topPercent <= 20 ? "warning" : "primary",
    },
  };
};

const defaultStats: VolunteerStats = {
  totalHours: {
    value: 0,
    deltaLabel: "Нет часов в этом месяце",
  },
  eventsCompleted: {
    value: 0,
    description: "Завершённых мероприятий",
  },
  rating: {
    value: "Нет данных",
    description: "Добавьте часы, чтобы попасть в рейтинг",
    accent: "primary",
  },
};

export const useVolunteerDashboard = () => {
  const { data: session } = useSession();
  const {
    data: dashboardData,
    isLoading,
    isError,
  } = useVolunteerDashboardStats();

  const stats = dashboardData ? formatStats(dashboardData) : defaultStats;

  const volunteerName = dashboardData?.volunteerName ?? session?.user?.name ?? "Волонтёр";
  const monthlyGoalHours = dashboardData?.monthlyGoalHours ?? DEFAULT_MONTHLY_GOAL;
  const monthlyCompletedHours = dashboardData?.stats.totalHours.addedThisMonth ?? 0;

  const remaining = Math.max(monthlyGoalHours - monthlyCompletedHours, 0);
  const percent =
    monthlyGoalHours > 0 ? Math.round((monthlyCompletedHours / monthlyGoalHours) * 100) : 0;
  const monthlyProgress = {
    completed: monthlyCompletedHours,
    goal: monthlyGoalHours,
    remaining,
    percent,
  };

  const rangeLabel = formatPeriodFromRange(
    dashboardData?.participationRange.first,
    dashboardData?.participationRange.last
  );
  const activityPeriodLabel = rangeLabel ?? fallbackPeriodLabel();

  const attendedEvents = dashboardData?.attendedEvents ?? [];
  const attendedEventsTotal = dashboardData?.attendedEventsTotal ?? attendedEvents.length;

  return {
    volunteerName,
    stats,
    isLoading,
    isError,
    monthlyGoalHours,
    monthlyProgress,
    activityPeriodLabel,
    attendedEvents,
    attendedEventsTotal,
  };
};
