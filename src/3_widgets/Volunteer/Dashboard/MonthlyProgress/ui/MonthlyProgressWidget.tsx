"use client";

import clsx from "clsx";

import { ProgressBar, Typography } from "@shared/ui";

import s from "./MonthlyProgressWidget.module.scss";

export type MonthlyProgressData = {
  completed: number;
  goal: number;
  remaining: number;
  percent: number;
};

type MonthlyProgressWidgetProps = {
  data: MonthlyProgressData;
  className?: string;
};

export const MonthlyProgressWidget = ({ data, className }: MonthlyProgressWidgetProps) => {
  const { completed, goal, remaining, percent } = data;

  return (
    <section className={clsx(s.widget, className)}>
      <header className={s.header}>
        <Typography as="h2" variant="h3">
          Прогресс в этом месяце
        </Typography>
        <Typography variant="body" color="gray">
          {completed} из {goal} часов
        </Typography>
      </header>

      <ProgressBar value={completed} max={goal} className={s.progress} />

      <div className={s.footer}>
        <Typography variant="body" color="gray">
          Выполнено: {percent}%
        </Typography>
        <Typography variant="body" color="gray">
          Осталось: {remaining} часов
        </Typography>
      </div>
    </section>
  );
};
