"use client";

import { useStatsSummary } from "./model/useStatsSummary";
import { StatsSummaryWidget } from "./ui/StatsSummaryWidget";

export const OrganizerStatsSummaryWidget = () => {
  const { data, isLoading, isError, navigateToCreateEvent } =
    useStatsSummary();

  return (
    <StatsSummaryWidget
      organizationName={data?.organizationName}
      cards={data?.cards}
      isLoading={isLoading}
      isError={isError}
      onCreateEvent={navigateToCreateEvent}
    />
  );
};
