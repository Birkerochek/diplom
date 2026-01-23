"use client";

import clsx from "clsx";
import Link from "next/link";
import { Calendar, Clock4, MapPin } from "lucide-react";

import { formatEventDate, formatEventTime } from "@shared/lib";
import { ActivityTypeBadge, Button, Typography } from "@shared/ui";
import type { VolunteerAttendedEvent } from "@shared/types/volunteer";
import s from "./AttendedEventsWidget.module.scss";

type AttendedEventsWidgetProps = {
  events: VolunteerAttendedEvent[];
  total?: number;
  viewAllHref?: string;
  title?: string;
  showHeader?: boolean;
  className?: string;
};

const formatDuration = (event: VolunteerAttendedEvent["event"]) =>
  `${formatEventTime(event.schedule.startTime)} - ${formatEventTime(
    event.schedule.endTime
  )}`;

export const AttendedEventsWidget = ({
  events,
  total,
  viewAllHref,
  title = "Посещенные мероприятия",
  showHeader = true,
  className,
}: AttendedEventsWidgetProps) => {
  const resolvedTotal = typeof total === "number" ? total : events.length;
  const canViewAll =
    Boolean(viewAllHref) && resolvedTotal > 0 && resolvedTotal > events.length;

  return (
    <section className={clsx(s.widget, className)}>
      {showHeader ? (
        <header className={s.header}>
          <Typography as="h2" variant="h3">
            {title}
          </Typography>
          {canViewAll ? (
            <Link href={viewAllHref ?? "#"} className={s.headerAction}>
              <Button color="white">Посмотреть все</Button>
            </Link>
          ) : null}
        </header>
      ) : null}

      {events.length ? (
        <div className={s.list}>
          {events.map((item) => {
            const eventDate = formatEventDate(item.event.schedule.eventDate);
            const location =
              item.event.location.address
                ? `${item.event.location.name}, ${item.event.location.address}`
                : item.event.location.name;

            return (
              <article key={item.id} className={s.card}>
                <div className={s.cardTop}>
                  <div className={s.cardTitle}>
                    <Typography variant="h4">{item.event.title}</Typography>
                    <ActivityTypeBadge activityType={item.event.activityType} />
                  </div>
                  <Typography variant="bodyBold" className={s.hours}>
                    Начислено {item.hours} ч
                  </Typography>
                </div>
                <div className={s.meta}>
                  <div className={s.metaItem}>
                    <Calendar size={16} />
                    <Typography color="gray">{eventDate}</Typography>
                  </div>
                  <div className={s.metaItem}>
                    <Clock4 size={16} />
                    <Typography color="gray">
                      {formatDuration(item.event)}
                    </Typography>
                  </div>
                  <div className={s.metaItem}>
                    <MapPin size={16} />
                    <Typography color="gray">{location}</Typography>
                  </div>
                </div>
                <Typography variant="body" color="gray">
                  Организатор:{" "}
                  <span className={s.organizer}>{item.event.organizer.name}</span>
                </Typography>
              </article>
            );
          })}
        </div>
      ) : (
        <Typography variant="body" color="gray" className={s.empty}>
          Пока нет завершенных мероприятий.
        </Typography>
      )}
    </section>
  );
};
