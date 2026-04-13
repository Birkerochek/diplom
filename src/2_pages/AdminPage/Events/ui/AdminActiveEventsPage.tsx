"use client";

import { formatEventDate, formatEventTime, mapEventStatusToLabel } from "@shared/lib";
import { Button, Container, Input, Typography } from "@shared/ui";
import { PAGES } from "@shared/constants";
import Link from "next/link";
import { useAdminActiveEventsPage } from "../model/useAdminActiveEventsPage";
import styles from "./AdminEventsPage.module.scss";

export const AdminActiveEventsPage = () => {
  const { searchInput, setSearchInput, eventsQuery, events, handleSearchSubmit } =
    useAdminActiveEventsPage();

  return (
    <Container>
      <div className={styles.page}>
        <div className={styles.header}>
          <div className={styles.headerText}>
            <Typography as="h1" variant="h2">
              Активные мероприятия
            </Typography>
            <Typography variant="body" color="gray">
              Просматривайте опубликованные события, их загрузку, организаторов и ключевые параметры.
            </Typography>
          </div>
          <Link href={PAGES.ADMIN_EVENTS}>
            <Button color="white">Очередь модерации</Button>
          </Link>
        </div>

        <section className={styles.panel}>
          <form className={styles.searchForm} onSubmit={handleSearchSubmit}>
            <Input
              value={searchInput}
              onChange={(event) => setSearchInput(event.target.value)}
              placeholder="Поиск по названию, описанию или локации"
            />
            <Button type="submit" color="primary">
              Найти
            </Button>
          </form>

          {eventsQuery.isLoading ? (
            <Typography variant="body">Загрузка активных мероприятий...</Typography>
          ) : null}

          {eventsQuery.isError ? (
            <Typography variant="body" color="secondary">
              Не удалось загрузить список активных мероприятий
            </Typography>
          ) : null}

          {!eventsQuery.isLoading && !events.length ? (
            <div className={styles.emptyState}>
              <Typography variant="h3">Нет активных мероприятий</Typography>
              <Typography variant="body" color="gray">
                После одобрения и публикации события появятся в этом разделе.
              </Typography>
            </div>
          ) : (
            <div className={styles.queue}>
              {events.map((event) => (
                <div key={event.id} className={styles.queueItem}>
                  <div className={styles.queueHeader}>
                    <Typography variant="h4">{event.title}</Typography>
                    <Typography variant="body" color="gray">
                      {mapEventStatusToLabel(event.status)}
                    </Typography>
                  </div>

                  <div className={styles.detailsGrid}>
                    <div className={styles.detailsCard}>
                      <Typography variant="settings" color="gray">
                        Дата и время
                      </Typography>
                      <Typography variant="body">{formatEventDate(event.schedule.eventDate)}</Typography>
                      <Typography variant="body">
                        {formatEventTime(event.schedule.startTime)} — {formatEventTime(event.schedule.endTime)}
                      </Typography>
                    </div>
                    <div className={styles.detailsCard}>
                      <Typography variant="settings" color="gray">
                        Организатор
                      </Typography>
                      <Typography variant="body">{event.organizer.name}</Typography>
                      <Typography variant="body">{event.organizer.email}</Typography>
                    </div>
                    <div className={styles.detailsCard}>
                      <Typography variant="settings" color="gray">
                        Участники
                      </Typography>
                      <Typography variant="body">
                        Подтверждено: {event.capacity.confirmedParticipants}
                      </Typography>
                      <Typography variant="body">
                        Лимит: {event.capacity.maxParticipants ?? "без ограничения"}
                      </Typography>
                    </div>
                    <div className={styles.detailsCard}>
                      <Typography variant="settings" color="gray">
                        Волонтёрские часы
                      </Typography>
                      <Typography variant="body">{event.stats.volunteerHours}</Typography>
                      <Typography variant="body">Нагрузка: {event.schedule.requiredHours} ч.</Typography>
                    </div>
                  </div>

                  <div className={styles.description}>
                    <Typography variant="body" color="gray">
                      {event.description ?? "Описание отсутствует"}
                    </Typography>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </Container>
  );
};
