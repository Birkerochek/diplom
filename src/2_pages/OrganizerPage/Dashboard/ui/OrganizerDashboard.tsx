"use client";

import { Container } from "@shared/ui";
import s from "./OrganizerDashboard.module.scss";
import { OrganizerActivityChartWidget, OrganizerStatsSummaryWidget } from "@widgets/Organizer/Dashboard";

export const OrganizerDashboard = () => (
  <Container>
    <div className={s.page}>
      <OrganizerStatsSummaryWidget />
      <OrganizerActivityChartWidget />
    </div>
  </Container>
);
