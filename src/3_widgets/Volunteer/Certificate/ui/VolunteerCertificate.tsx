"use client";

import clsx from "clsx";
import { forwardRef } from "react";

import { Typography } from "@shared/ui";

import s from "./VolunteerCertificate.module.scss";

type VolunteerCertificateProps = {
  name: string;
  totalHours: number;
  eventsCount: number;
  periodLabel: string;
  primaryActivity?: string;
  issueDate: string;
  qrLabel?: string;
  className?: string;
};

export const VolunteerCertificate = forwardRef<HTMLDivElement, VolunteerCertificateProps>(
  (
    {
      name,
      totalHours,
      eventsCount,
      periodLabel,
      primaryActivity = "Не указана",
      issueDate,
      qrLabel = "QR-код",
      className,
    },
    ref
  ) => (
    <div ref={ref} className={clsx(s.certificate, className)} id="volunteer-certificate">
    <header className={s.header}>
      <Typography as="p" variant="body" className={s.caption}>
        Сертификат волонтёра
      </Typography>
      <Typography variant="body" color="gray">
        Официальное подтверждение волонтёрской деятельности
      </Typography>
    </header>

    <section className={s.body}>
      <Typography variant="body" color="gray">
        Настоящим подтверждается, что
      </Typography>
      <Typography as="h2" variant="h2" className={s.name}>
        {name}
      </Typography>
      <Typography variant="body" color="gray" className={s.description}>
        принял(а) участие в волонтёрской деятельности и внёс(ла) значительный вклад в развитие
        общества
      </Typography>

      <div className={s.stats}>
        <article className={s.statCard}>
          <Typography variant="body" color="gray">
            Всего часов
          </Typography>
          <Typography as="p" variant="h2">
            {totalHours}
          </Typography>
        </article>
        <article className={s.statCard}>
          <Typography variant="body" color="gray">
            Мероприятий
          </Typography>
          <Typography as="p" variant="h2">
            {eventsCount}
          </Typography>
        </article>
      </div>

      <div className={s.period}>
        <Typography variant="body">Период активности: {periodLabel}</Typography>
        <Typography variant="body">Основная активность: {primaryActivity}</Typography>
      </div>
    </section>

    <footer className={s.footer}>
      <div>
        <Typography variant="body" color="gray">
          Дата выдачи
        </Typography>
        <Typography variant="body">{issueDate}</Typography>
      </div>
      <div className={s.qrPlaceholder}>
        <Typography variant="body" color="gray">
          {qrLabel}
        </Typography>
      </div>
      <div className={s.signature}>
        <Typography variant="body" color="gray">
          Подпись организатора
        </Typography>
        <div className={s.signatureLine} />
      </div>
    </footer>
    </div>
  )
);

VolunteerCertificate.displayName = "VolunteerCertificate";
