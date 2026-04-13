"use client";

import { formatEventDate } from "@shared/lib";
import { Button, Container, Input, Typography } from "@shared/ui";
import { useAdminVolunteersPage } from "../model/useAdminVolunteersPage";
import styles from "../../Events/ui/AdminEventsPage.module.scss";

export const AdminVolunteersPage = () => {
  const {
    searchInput,
    setSearchInput,
    handleSearchSubmit,
    volunteersQuery,
    volunteers,
    summary,
    toggleVolunteerStatus,
    isUpdating,
  } = useAdminVolunteersPage();

  return (
    <Container>
      <div className={styles.page}>
        <div className={styles.headerText}>
          <Typography as="h1" variant="h2">
            Управление волонтёрами
          </Typography>
          <Typography variant="body" color="gray">
            Просматривайте базу волонтёров, активность по часам и управляйте доступом к платформе.
          </Typography>
        </div>

        <div className={styles.summary}>
          <div className={styles.summaryCard}>
            <Typography variant="settings" color="gray">
              Всего волонтёров
            </Typography>
            <Typography variant="h2">{summary?.totalVolunteers ?? 0}</Typography>
          </div>
          <div className={styles.summaryCard}>
            <Typography variant="settings" color="gray">
              Активные аккаунты
            </Typography>
            <Typography variant="h2">{summary?.activeVolunteers ?? 0}</Typography>
          </div>
          <div className={styles.summaryCard}>
            <Typography variant="settings" color="gray">
              Заблокированные
            </Typography>
            <Typography variant="h2">{summary?.blockedVolunteers ?? 0}</Typography>
          </div>
        </div>

        <section className={styles.panel}>
          <form className={styles.searchForm} onSubmit={handleSearchSubmit}>
            <Input
              value={searchInput}
              onChange={(event) => setSearchInput(event.target.value)}
              placeholder="Поиск по имени, email или телефону"
            />
            <Button type="submit" color="primary" disabled={volunteersQuery.isFetching}>
              Найти
            </Button>
          </form>

          {volunteersQuery.isLoading ? (
            <Typography variant="body">Загрузка списка волонтёров...</Typography>
          ) : null}

          {volunteersQuery.isError ? (
            <Typography variant="body" color="secondary">
              Не удалось загрузить список волонтёров
            </Typography>
          ) : null}

          {!volunteersQuery.isLoading && !volunteers.length ? (
            <div className={styles.emptyState}>
              <Typography variant="h3">Волонтёры не найдены</Typography>
              <Typography variant="body" color="gray">
                Попробуйте изменить запрос поиска или дождитесь регистрации новых пользователей.
              </Typography>
            </div>
          ) : (
            <div className={styles.queue}>
              {volunteers.map((volunteer) => (
                <div key={volunteer.id} className={styles.queueItem}>
                  <div className={styles.queueHeader}>
                    <div>
                      <Typography variant="h4">{volunteer.name}</Typography>
                      <Typography variant="body" color="gray">
                        {volunteer.email}
                      </Typography>
                    </div>
                    <Button
                      color={volunteer.isActive ? "white" : "primary"}
                      onClick={() => toggleVolunteerStatus(volunteer.id, volunteer.isActive)}
                      disabled={isUpdating}
                    >
                      {volunteer.isActive ? "Заблокировать" : "Разблокировать"}
                    </Button>
                  </div>

                  <div className={styles.detailsGrid}>
                    <div className={styles.detailsCard}>
                      <Typography variant="settings" color="gray">
                        Телефон
                      </Typography>
                      <Typography variant="body">{volunteer.phone ?? "Не указан"}</Typography>
                    </div>
                    <div className={styles.detailsCard}>
                      <Typography variant="settings" color="gray">
                        Зарегистрирован
                      </Typography>
                      <Typography variant="body">{formatEventDate(volunteer.createdAt)}</Typography>
                    </div>
                    <div className={styles.detailsCard}>
                      <Typography variant="settings" color="gray">
                        Всего часов
                      </Typography>
                      <Typography variant="body">{volunteer.stats.totalHours}</Typography>
                    </div>
                    <div className={styles.detailsCard}>
                      <Typography variant="settings" color="gray">
                        Завершённых событий
                      </Typography>
                      <Typography variant="body">{volunteer.stats.completedEvents}</Typography>
                    </div>
                  </div>

                  <div className={styles.description}>
                    <Typography variant="body" color="gray">
                      Подано заявок: {volunteer.stats.applications}. Статус аккаунта: {volunteer.isActive ? "активен" : "заблокирован"}.
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
