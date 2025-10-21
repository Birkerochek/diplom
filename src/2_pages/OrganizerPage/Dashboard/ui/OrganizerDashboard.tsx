"use client";

import { Container } from "@shared/ui";
import {
  OrganizerActivityChartWidget,
  OrganizerStatsSummaryWidget,
} from "@widgets/Organizer/Dashboard";
import s from "./OrganizerDashboard.module.scss";

export const OrganizerDashboard = () => (
  <Container>
    <div className={s.page}>
      <OrganizerStatsSummaryWidget />
      <OrganizerActivityChartWidget />
    </div>
  </Container>
);
