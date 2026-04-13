"use client";

import Link from "next/link";
import { formatEventDate, mapEventStatusToLabel } from "@shared/lib";
import { PAGES } from "@shared/constants";
import { Button, Container, Typography } from "@shared/ui";
import { useAdminDashboard } from "../model/useAdminDashboard";
import styles from "./AdminDashboardPage.module.scss";

export const AdminDashboardPage = () => {
  const { eventsQuery, stats, recentEvents } = useAdminDashboard();

  return (
    <Container>
      <div className={styles.page}>
        <div className={styles.hero}>
          <div className={styles.heroText}>
            <Typography as="h1" variant="h2">
              Админ-панель
            </Typography>
            <Typography variant="body" color="gray">
              Контролируйте очередь модерации, активные публикации и общий объём подтверждённых волонтёрских часов.
            </Typography>
          </div>
          <Link href={PAGES.ADMIN_EVENTS}>
            <Button color="primary">Перейти к модерации</Button>
          </Link>
        </div>

        <div className={styles.actionsRow}>
          <Link href={PAGES.ADMIN_ACTIVE_EVENTS}>
            <Button color="white">Активные мероприятия</Button>
          </Link>
          <Link href={PAGES.ADMIN_VOLUNTEERS}>
            <Button color="white">Управление волонтёрами</Button>
          </Link>
        </div>

        <div className={styles.stats}>
          <div className={styles.card}>
            <Typography variant="settings" color="gray">На модерации</Typography>
            <Typography variant="h2">{stats.pending}</Typography>
          </div>
          <div className={styles.card}>
            <Typography variant="settings" color="gray">Активные события</Typography>
            <Typography variant="h2">{stats.active}</Typography>
          </div>
          <div className={styles.card}>
            <Typography variant="settings" color="gray">Отклонённые</Typography>
            <Typography variant="h2">{stats.rejected}</Typography>
          </div>
          <div className={styles.card}>
            <Typography variant="settings" color="gray">Начислено часов</Typography>
            <Typography variant="h2">{stats.totalHours}</Typography>
          </div>
        </div>

        <section className={styles.activity}>
          <Typography variant="h3">Последние события в системе</Typography>
          {eventsQuery.isLoading ? (
            <Typography variant="body">Загрузка данных...</Typography>
          ) : null}
          {!eventsQuery.isLoading ? (
            <div className={styles.activityList}>
              {recentEvents.map((event) => (
                <div key={event.id} className={styles.activityItem}>
                  <div>
                    <Typography variant="body">{event.title}</Typography>
                    <Typography variant="settings" color="gray">
                      {event.organizer.name} · {formatEventDate(event.schedule.eventDate)}
                    </Typography>
                  </div>
                  <Typography variant="body" color="gray">
                    {mapEventStatusToLabel(event.status)}
                  </Typography>
                </div>
              ))}
            </div>
          ) : null}
        </section>
      </div>
    </Container>
  );
};
