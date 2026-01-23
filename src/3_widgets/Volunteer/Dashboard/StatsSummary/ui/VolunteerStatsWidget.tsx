import { Clock3, CalendarDays, TrendingUp } from "lucide-react";
import clsx from "clsx";

import { Button, Typography } from "@shared/ui";

import s from "./VolunteerStatsWidget.module.scss";

export type VolunteerStats = {
  totalHours: {
    value: number;
    deltaLabel?: string;
  };
  eventsCompleted: {
    value: number;
    description: string;
  };
  rating: {
    value: string;
    description: string;
    accent?: "primary" | "warning";
  };
};

type VolunteerStatsWidgetProps = {
  stats: VolunteerStats;
  className?: string;
  handleGenerateCertificate: () => void;
  disableCertificateButton: boolean;
  isGenerating: boolean;
};

const valueAccentClass: Record<"primary" | "warning", string> = {
  primary: s.accentPrimary,
  warning: s.accentWarning,
};

export const VolunteerStatsWidget = ({ stats, className, handleGenerateCertificate, disableCertificateButton, isGenerating }: VolunteerStatsWidgetProps) => {
  const cards = [
    {
      id: "hours",
      title: "Всего часов",
      value: stats.totalHours.value,
      description: stats.totalHours.deltaLabel ?? "",
      icon: <Clock3 size={18} />,
      accent: "primary" as const,
    },
    {
      id: "events",
      title: "Мероприятий",
      value: stats.eventsCompleted.value,
      description: stats.eventsCompleted.description,
      icon: <CalendarDays size={18} />,
      accent: "primary" as const,
    },
    {
      id: "rating",
      title: "Рейтинг",
      value: stats.rating.value,
      description: stats.rating.description,
      icon: <TrendingUp size={18} />,
      accent: stats.rating.accent ?? "primary",
    },
  ];

  return (
    <>
    <div style={{alignSelf:"flex-start"}}>

     <Button  onClick={handleGenerateCertificate} disabled={disableCertificateButton}>
            {isGenerating ? "Формируем PDF..." : "Скачать сертификат вашей деятельности"}
          </Button>
    </div>
    <section className={clsx(s.widget, className)}>
      
      {cards.map((card) => (
        <article key={card.id} className={s.card}>
          <div className={s.cardHeader}>
            <Typography variant="body" color="gray">
              {card.title}
            </Typography>
            <span className={s.icon} aria-hidden="true">
              {card.icon}
            </span>
          </div>
          <div className={s.cardBody}>
            <Typography
              as="p"
              variant="h2"
              className={clsx(s.value, valueAccentClass[card.accent])}
            >
              {card.value}
            </Typography>
            {card.description ? (
              <Typography variant="body" color="gray" className={s.description}>
                {card.description}
              </Typography>
            ) : null}
          </div>
        </article>
      ))}
    </section>
    </>
  );
};
