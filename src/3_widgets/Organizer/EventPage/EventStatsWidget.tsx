"use client";

import { Typography, ProgressBar } from "@shared/ui";
import styles from "./EventPageWidgets.module.scss";
import { RegistrationStatus } from "../../../../app/generated/prisma";
import { REGISTRATION_STATUS_COLORS } from "@pages/OrganizerPage/EventDetails/model/constants";

type EventStatsWidgetProps = {
  fillRate: number;
  maxParticipants: number | null;
  registrations: Record<string, number> & { total: number };
  availableSeats: number | null;
};

export const EventStatsWidget = ({ fillRate, maxParticipants, registrations, availableSeats }: EventStatsWidgetProps) => {
  return (
    <section className={styles.section}>
      <Typography variant="h3" className={styles.sectionHeaderTitle}>
        Статистика
      </Typography>

      <div className={styles.progressBlock}>
        <div className={styles.progressBlockHeader}>
          <Typography variant="body">Заполненность</Typography>
          <Typography variant="bodyBold">{fillRate}%</Typography>
        </div>
        <ProgressBar value={fillRate} />
      </div>

      <dl className={styles.statsList}>
        <StatRow label="Всего мест" value={maxParticipants ?? "—"} />
        <StatRow label="Зарегистрировано" value={registrations.total} />
        <StatRow
          label="Одобрено"
          value={registrations[RegistrationStatus.approved] ?? 0}
          color={REGISTRATION_STATUS_COLORS[RegistrationStatus.approved]}
        />
        <StatRow
          label="Ожидают"
          value={registrations[RegistrationStatus.pending] ?? 0}
          color={REGISTRATION_STATUS_COLORS[RegistrationStatus.pending]}
        />
        <StatRow
          label="Свободно мест"
          value={availableSeats ?? "—"}
          color="gray"
        />
      </dl>
    </section>
  );
};

type StatRowProps = {
  label: string;
  value: string | number;
  color?: "green" | "gray" | "secondary" | "black";
};

const StatRow = ({ label, value, color = "black" }: StatRowProps) => (
  <div className={styles.statRow}>
    <Typography variant="body" color="gray">
      {label}
    </Typography>
    <Typography variant="bodyBold" color={color === "black" ? "black" : color}>
      {value}
    </Typography>
  </div>
);
