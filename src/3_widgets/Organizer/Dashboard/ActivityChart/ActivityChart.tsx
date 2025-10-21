"use client";

import { ActivityChartWidget } from "./ui/ActivityChartWidget";
import { useActivityChart } from "./model/useActivityChart";

export const OrganizerActivityChartWidget = () => {
  const { data, isLoading, isError } = useActivityChart();

  return (
    <ActivityChartWidget data={data} isLoading={isLoading} isError={isError} />
  );
};
