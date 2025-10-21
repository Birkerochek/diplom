import type { ReactNode } from "react";

export type OrganizerDashboardAccent = "primary" | "secondary" | "warning";

export type OrganizerDashboardCard = {
  id: string;
  title: string;
  value: string;
  description: string;
  accent: OrganizerDashboardAccent;
  icon: ReactNode;
};

export type StatsSummaryData = {
  organizationName: string;
  cards: OrganizerDashboardCard[];
};
