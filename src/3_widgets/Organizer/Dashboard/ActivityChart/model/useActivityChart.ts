"use client";

import { useMemo } from "react";
import { format, parse } from "date-fns";
import { ru } from "date-fns/locale";
import { useOrganizerActivity } from "@shared/api";
import type { ActivityChartData } from "./types";

const toLabel = (monthKey: string): string => {
  const parsed = parse(`${monthKey}-01`, "yyyy-MM-dd", new Date());
  const formatted = format(parsed, "LLL", { locale: ru });
  return formatted.replace(".", "").replace(/^./, (char) => char.toUpperCase());
};

export const useActivityChart = () => {
  const { data, isLoading, isError } = useOrganizerActivity();

  const chartData: ActivityChartData = useMemo(() => {
    if (!data) {
      return [];
    }

    return data.map((item) => ({
      monthKey: item.month,
      monthLabel: toLabel(item.month),
      volunteers: item.volunteers,
      hours: item.hours,
    }));
  }, [data]);

  return {
    data: chartData,
    isLoading,
    isError,
  } as const;
};
