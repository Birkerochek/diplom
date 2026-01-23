"use client";

import { useMemo } from "react";
import { useRouter } from "next/navigation";
import { CalendarDays, Clock3, TrendingUp, Users } from "lucide-react";
import { useOrganizerDashboard } from "@shared/api";
import {
  formatNumber,
  formatPercentChange,
} from "./formatters";
import type {
  OrganizerDashboardCard,
  StatsSummaryData,
} from "./types";
import { PAGES } from "@shared/constants";

const ACCENT_MAP: Record<
  "primary" | "secondary" | "warning",
  OrganizerDashboardCard["accent"]
> = {
  primary: "primary",
  secondary: "secondary",
  warning: "warning",
};

export const useStatsSummary = () => {
  const router = useRouter();
  const { data, isLoading, isError } = useOrganizerDashboard();

  const cards: OrganizerDashboardCard[] = useMemo(() => {
    if (!data) {
      return [];
    }

    return [
      {
        id: "volunteers",
        title: "Волонтёры",
        value: formatNumber(data.stats.volunteers.total),
        description:
          data.stats.volunteers.newThisMonth > 0
            ? `+${formatNumber(data.stats.volunteers.newThisMonth)} новых в этом месяце`
            : "Новых волонтёров в этом месяце пока нет",
        accent: ACCENT_MAP.primary,
        icon: <Users size={20} strokeWidth={1.6} />,
      },
      {
        id: "events",
        title: "Активные события",
        value: formatNumber(data.stats.events.active),
        description:
          data.stats.events.upcoming > 0
            ? `${formatNumber(data.stats.events.upcoming)} запланированных`
            : "Нет запланированных событий",
        accent: ACCENT_MAP.secondary,
        icon: <CalendarDays size={20} strokeWidth={1.6} />,
      },
      {
        id: "monthly-hours",
        title: "Часов в месяце",
        value: formatNumber(data.stats.monthlyHours.total),
        description: formatPercentChange(data.stats.monthlyHours.changePercent),
        accent: ACCENT_MAP.primary,
        icon: <Clock3 size={20} strokeWidth={1.6} />,
      },
      {
        id: "total-hours",
        title: "Всего часов",
        value: formatNumber(data.stats.totalHours.total),
        description: "За всё время",
        accent: ACCENT_MAP.warning,
        icon: <TrendingUp size={20} strokeWidth={1.6} />,
      },
    ];
  }, [data]);

  const statsSummary: StatsSummaryData | undefined = data
    ? {
        organizationName: data.organizationName ?? "Организация",
        cards,
      }
    : undefined;

  const navigateToCreateEvent = () => {
    router.push("/organizer/events/create");
  };

  return {
    data: statsSummary,
    isLoading,
    isError,
    navigateToCreateEvent,
  };
};
