"use client";

import { Calendar, Clock4, MapPin, Users } from "lucide-react";
import { formatEventDate, formatEventTime } from "@shared/lib";
import { Typography } from "@shared/ui";
import styles from "./EventPageWidgets.module.scss";

type EventInfoWidgetProps = {
  description?: string | null;
  schedule: {
    eventDate: string;
    startTime: string;
    endTime: string;
    requiredHours: number;
  };
  location: {
    name: string;
    address: string | null;
  };
  capacity: {
    maxParticipants: number | null;
    currentParticipants: number | null;
  };
  requirements?: string | null;
};

export const EventInfoWidget = ({ description, schedule, location, capacity, requirements }: EventInfoWidgetProps) => {
  const formattedDate = formatEventDate(schedule.eventDate);
  const formattedStart = formatEventTime(schedule.startTime);
  const formattedEnd = formatEventTime(schedule.endTime);
  const maxParticipants = capacity.maxParticipants ?? 0;
  const currentParticipants = capacity.currentParticipants ?? 0;

  return (
    <section className={styles.section}>
      <header className={styles.sectionHeader}>
        <Typography variant="h3">Информация о мероприятии</Typography>
      </header>

      {description ? (
        <Typography variant="body" className={styles.sectionDescription}>
          {description}
        </Typography>
      ) : null}

      <div className={styles.infoGrid}>
        <InfoItem icon={<Calendar size={20} />} label="Дата" value={formattedDate} />
        <InfoItem
          icon={<Clock4 size={20} />}
          label="Время"
          value={`${formattedStart} – ${formattedEnd} • ${schedule.requiredHours} ч`}
        />
        <InfoItem
          icon={<MapPin size={20} />}
          label="Место"
          value={location.name}
          helper={location.address ?? undefined}
        />
        <InfoItem
          icon={<Users size={20} />}
          label="Волонтёры"
          value={`${currentParticipants} из ${maxParticipants || "—"}`}
        />
      </div>

      <div className={styles.requirementsBlock}>
        <Typography variant="h4">Требования</Typography>
        <Typography variant="body" color="gray">
          {requirements ?? "Организатор не указал требования."}
        </Typography>
      </div>
    </section>
  );
};

type InfoItemProps = {
  icon: React.ReactNode;
  label: string;
  value: string;
  helper?: string;
};

const InfoItem = ({ icon, label, value, helper }: InfoItemProps) => (
  <div className={styles.infoItem}>
    <div className={styles.infoItemIcon}>{icon}</div>
    <div className={styles.infoItemContent}>
      <Typography variant="bodyBold">{label}</Typography>
      <Typography variant="body" color="gray">
        {value}
      </Typography>
      {helper ? (
        <Typography variant="body" color="gray">
          {helper}
        </Typography>
      ) : null}
    </div>
  </div>
);
