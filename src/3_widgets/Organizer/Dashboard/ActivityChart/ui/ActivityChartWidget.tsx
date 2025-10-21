import type { ActivityChartData } from "../model/types";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { Typography } from "@shared/ui";
import s from "./ActivityChartWidget.module.scss";

const VOLUNTEER_COLOR = "#007C4F";
const HOURS_COLOR = "#EB5050";

type ActivityChartWidgetProps = {
  data?: ActivityChartData;
  isLoading: boolean;
  isError: boolean;
};

type DotProps = {
  cx?: number;
  cy?: number;
  color: string;
};

const Dot = ({ cx, cy, color }: DotProps) => {
  if (cx == null || cy == null) {
    return null;
  }

  return (
    <rect
      x={cx - 6}
      y={cy - 12}
      width={12}
      height={12}
      rx={4}
      fill={color}
    />
  );
};

const renderTooltipLabel = (label: string) =>
  label.charAt(0).toUpperCase() + label.slice(1);

const TOOLTIP_LABELS: Record<string, string> = {
  volunteers: "Волонтёры",
  hours: "Часы",
};

export const ActivityChartWidget: React.FC<ActivityChartWidgetProps> = ({
  data,
  isLoading,
  isError,
}) => {
  if (isLoading) {
    return (
      <section className={s.card}>
        <Typography variant="body">Загружаем статистику активности...</Typography>
      </section>
    );
  }

  if (isError) {
    return (
      <section className={s.card}>
        <Typography variant="body" className={s.empty}>
          Не удалось загрузить статистику активности. Попробуйте позже.
        </Typography>
      </section>
    );
  }

  if (!data?.length) {
    return (
      <section className={s.card}>
        <Typography variant="body" className={s.empty}>
          Пока нет данных об активности волонтёров.
        </Typography>
      </section>
    );
  }

  return (
    <section className={s.card}>
      <header className={s.header}>
        <Typography as="h3" variant="h3" className={s.title}>
          Активность волонтёров
        </Typography>
        <Typography variant="body" color="gray" className={s.subtitle}>
          Статистика по волонтёрам и часам за последние 6 месяцев
        </Typography>
      </header>
      <div className={s.chart}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 16, right: 24, left: 0, bottom: 16 }}>
            <CartesianGrid stroke="#F1F3F5" strokeDasharray="6 6" vertical={false} />
            <XAxis
              dataKey="monthLabel"
              axisLine={false}
              tickLine={false}
              padding={{ left: 16, right: 16 }}
              stroke="#B8B8B8"
            />
            <YAxis axisLine={false} tickLine={false} stroke="#B8B8B8" />
            <Tooltip
              cursor={{ stroke: "#E4E7EB", strokeDasharray: "4 4" }}
              labelFormatter={renderTooltipLabel}
              formatter={(value: number | string, name: string) => [
                value,
                TOOLTIP_LABELS[name] ?? name,
              ]}
            />
            <Line
              type="monotone"
              dataKey="volunteers"
              stroke={VOLUNTEER_COLOR}
              strokeWidth={2}
              dot={<Dot color={VOLUNTEER_COLOR} />}
              activeDot={{ r: 8 }}
            />
            <Line
              type="monotone"
              dataKey="hours"
              stroke={HOURS_COLOR}
              strokeWidth={2}
              dot={<Dot color={HOURS_COLOR} />}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <footer className={s.legend}>
        <span className={s.legendItem}>
          <span className={`${s.legendDot} ${s["legendDot--volunteers"]}`} />
          Волонтёры
        </span>
        <span className={s.legendItem}>
          <span className={`${s.legendDot} ${s["legendDot--hours"]}`} />
          Часы
        </span>
      </footer>
    </section>
  );
};
