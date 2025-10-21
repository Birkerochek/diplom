import type {
  OrganizerDashboardAccent,
  OrganizerDashboardCard,
} from "../model/types";
import { Button, Typography } from "@shared/ui";
import s from "./StatsSummaryWidget.module.scss";

type StatsSummaryWidgetProps = {
  organizationName?: string;
  cards?: OrganizerDashboardCard[];
  isLoading: boolean;
  isError: boolean;
  onCreateEvent: () => void;
};

const accentClassMap: Record<OrganizerDashboardAccent, string> = {
  primary: s.accentPrimary,
  secondary: s.accentSecondary,
  warning: s.accentWarning,
};

export const StatsSummaryWidget: React.FC<StatsSummaryWidgetProps> = ({
  organizationName,
  cards,
  isLoading,
  isError,
  onCreateEvent,
}) => {
  if (isLoading) {
    return (
      <section className={s.dashboard}>
        <Typography variant="body">Загружаем данные панели...</Typography>
      </section>
    );
  }

  if (isError || !cards?.length) {
    return (
      <section className={s.dashboard}>
        <Typography variant="body">
          Не удалось загрузить данные панели. Попробуйте позже.
        </Typography>
      </section>
    );
  }

  return (
    <section className={s.dashboard}>
      <header className={s.header}>
        <div className={s.headerTitle}>
          <Typography as="h1" variant="h2">
            Панель управления
          </Typography>
          <Typography variant="body" color="gray">
            {organizationName ?? "Организация"}
          </Typography>
        </div>
        <Button icon="plus" color="primary" onClick={onCreateEvent}>
          Создать мероприятие
        </Button>
      </header>

      <div className={s.cards}>
        {cards.map((card) => (
          <article key={card.id} className={s.card}>
            <div className={s.cardHeader}>
              <Typography variant="body" color="gray">
                {card.title}
              </Typography>
              <div className={s.icon}>{card.icon}</div>
            </div>
            <div className={s.cardValue}>
              <Typography
                as="p"
                variant="h2"
                className={accentClassMap[card.accent]}
              >
                {card.value}
              </Typography>
              <Typography variant="body" className={s.description}>
                {card.description}
              </Typography>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
