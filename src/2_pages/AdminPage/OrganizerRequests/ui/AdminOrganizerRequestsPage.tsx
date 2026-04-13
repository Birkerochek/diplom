"use client";

import { formatEventDate } from "@shared/lib";
import { Button, Container, Input, Typography } from "@shared/ui";
import { PAGES } from "@shared/constants";
import Link from "next/link";
import styles from "../../Events/ui/AdminEventsPage.module.scss";
import { useAdminOrganizerRequestsPage } from "../model/useAdminOrganizerRequestsPage";

const STATUS_OPTIONS = [
  { value: undefined, label: "Все" },
  { value: "pending" as const, label: "Ожидают" },
  { value: "approved" as const, label: "Одобрены" },
  { value: "rejected" as const, label: "Отклонены" },
];

const STATUS_LABELS = {
  pending: "Ожидает подтверждения",
  approved: "Одобрена",
  rejected: "Отклонена",
} as const;

const ROLE_LABELS = {
  volunteer: "Волонтёр",
  organizer: "Организатор",
  admin: "Администратор",
} as const;

export const AdminOrganizerRequestsPage = () => {
  const {
    searchInput,
    setSearchInput,
    handleSearchSubmit,
    status,
    setStatus,
    requestsQuery,
    requests,
    summary,
    selectedRequestId,
    setSelectedRequestId,
    selectedRequest,
    rejectReason,
    setRejectReason,
    approveAction,
    rejectAction,
  } = useAdminOrganizerRequestsPage();

  return (
    <Container>
      <div className={styles.page}>
        <div className={styles.headerText}>
          <Typography as="h1" variant="h2">
            Заявки на роль организатора
          </Typography>
          <Typography variant="body" color="gray">
            Просматривайте новые заявки, фильтруйте их по статусам и сразу выдавайте или
            отклоняйте доступ организатора.
          </Typography>
        </div>

        <div className={styles.summary}>
          <div className={styles.summaryCard}>
            <Typography variant="settings" color="gray">
              Всего заявок
            </Typography>
            <Typography variant="h2">{summary?.total ?? 0}</Typography>
          </div>
          <div className={styles.summaryCard}>
            <Typography variant="settings" color="gray">
              Ожидают
            </Typography>
            <Typography variant="h2">{summary?.pending ?? 0}</Typography>
          </div>
          <div className={styles.summaryCard}>
            <Typography variant="settings" color="gray">
              Одобрены
            </Typography>
            <Typography variant="h2">{summary?.approved ?? 0}</Typography>
          </div>
          <div className={styles.summaryCard}>
            <Typography variant="settings" color="gray">
              Отклонены
            </Typography>
            <Typography variant="h2">{summary?.rejected ?? 0}</Typography>
          </div>
        </div>

        <section className={styles.panel}>
          <form className={styles.searchForm} onSubmit={handleSearchSubmit}>
            <Input
              value={searchInput}
              onChange={(event) => setSearchInput(event.target.value)}
              placeholder="Поиск по имени, email или организации"
            />
            <Button type="submit" color="primary" disabled={requestsQuery.isFetching}>
              Найти
            </Button>
          </form>

          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
            {STATUS_OPTIONS.map((option) => (
                <Button
                  key={option.label}
                  type="button"
                  color={status === option.value ? "primary" : "white"}
                  disabled={requestsQuery.isFetching || approveAction.isPending || rejectAction.isPending}
                  onClick={() => setStatus(option.value)}
                >
                  {option.label}
              </Button>
            ))}
          </div>

          {requestsQuery.isLoading ? (
            <Typography variant="body">Загрузка заявок...</Typography>
          ) : null}

          {requestsQuery.isError ? (
            <Typography variant="body" color="secondary">
              Не удалось загрузить список заявок
            </Typography>
          ) : null}

          {!requestsQuery.isLoading && !requests.length ? (
            <div className={styles.emptyState}>
              <Typography variant="h3">Заявки не найдены</Typography>
              <Typography variant="body" color="gray">
                Попробуйте изменить поиск или фильтр статуса.
              </Typography>
            </div>
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: "minmax(320px, 420px) minmax(0, 1fr)", gap: 20 }}>
              <div className={styles.queue}>
                {requests.map((request) => (
                  <button
                    key={request.id}
                    type="button"
                    className={styles.queueItem}
                    style={{
                      textAlign: "left",
                      border: selectedRequestId === request.id ? "1px solid var(--color-brand-primary, #4f46e5)" : undefined,
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      setSelectedRequestId(request.id);
                      setRejectReason(request.rejectionReason ?? "");
                    }}
                  >
                    <div className={styles.queueHeader}>
                      <div>
                        <Typography variant="h4">{request.user.name}</Typography>
                        <Typography variant="body" color="gray">
                          {request.user.organizationName ?? "Организация не указана"}
                        </Typography>
                      </div>
                      <Typography variant="settings">{STATUS_LABELS[request.status]}</Typography>
                    </div>
                    <div className={styles.description}>
                      <Typography variant="body" color="gray">
                        {request.user.email}
                      </Typography>
                      <Typography variant="body" color="gray">
                        Подана {formatEventDate(request.requestedAt)}
                      </Typography>
                    </div>
                  </button>
                ))}
              </div>

              {selectedRequest ? (
                <div className={styles.queueItem}>
                  <div className={styles.queueHeader}>
                    <div>
                      <Typography variant="h3">{selectedRequest.user.name}</Typography>
                      <Typography variant="body" color="gray">
                        {selectedRequest.user.email}
                      </Typography>
                    </div>
                    <Typography variant="settings">{STATUS_LABELS[selectedRequest.status]}</Typography>
                  </div>

                  <div className={styles.detailsGrid}>
                    <div className={styles.detailsCard}>
                      <Typography variant="settings" color="gray">
                        Телефон
                      </Typography>
                      <Typography variant="body">{selectedRequest.user.phone ?? "Не указан"}</Typography>
                    </div>
                    <div className={styles.detailsCard}>
                      <Typography variant="settings" color="gray">
                        Организация
                      </Typography>
                      <Typography variant="body">
                        {selectedRequest.user.organizationName ?? "Не указана"}
                      </Typography>
                    </div>
                    <div className={styles.detailsCard}>
                      <Typography variant="settings" color="gray">
                        Текущая роль
                      </Typography>
                      <Typography variant="body">{ROLE_LABELS[selectedRequest.user.currentRole]}</Typography>
                    </div>
                    <div className={styles.detailsCard}>
                      <Typography variant="settings" color="gray">
                        Статус аккаунта
                      </Typography>
                      <Typography variant="body">
                        {selectedRequest.user.isActive ? "Активен" : "Заблокирован"}
                      </Typography>
                    </div>
                    <div className={styles.detailsCard}>
                      <Typography variant="settings" color="gray">
                        Часы волонтёрства
                      </Typography>
                      <Typography variant="body">{selectedRequest.user.stats.totalHours}</Typography>
                    </div>
                    <div className={styles.detailsCard}>
                      <Typography variant="settings" color="gray">
                        Подтверждённые события
                      </Typography>
                      <Typography variant="body">{selectedRequest.user.stats.completedEvents}</Typography>
                    </div>
                  </div>

                  <div className={styles.description}>
                    <Typography variant="body" color="gray">
                      Зарегистрирован: {formatEventDate(selectedRequest.user.createdAt)}. Подал заявок на
                      события: {selectedRequest.user.stats.applications}. Организованных мероприятий: {selectedRequest.user.stats.organizedEvents}.
                    </Typography>
                    <Typography variant="body" color="gray">
                      Заявка создана: {formatEventDate(selectedRequest.requestedAt)}.
                      {selectedRequest.reviewedAt
                        ? ` Решение принято: ${formatEventDate(selectedRequest.reviewedAt)}.`
                        : " Решение ещё не принято."}
                    </Typography>
                    {selectedRequest.reviewedBy ? (
                      <Typography variant="body" color="gray">
                        Последнее решение: {selectedRequest.reviewedBy.name}.
                      </Typography>
                    ) : null}
                  </div>

                  <div style={{ marginTop: 16, marginBottom: 16 }}>
                    <Input
                      value={rejectReason}
                      onChange={(event) => setRejectReason(event.target.value)}
                      placeholder="Причина отклонения заявки"
                      label="Комментарий администратора"
                    />
                  </div>

                  {selectedRequest.rejectionReason ? (
                    <div style={{ marginBottom: 16 }}>
                      <Typography variant="settings" color="gray">
                        Последняя причина отклонения
                      </Typography>
                      <Typography variant="body">{selectedRequest.rejectionReason}</Typography>
                    </div>
                  ) : null}

                  <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                    <Button type="button" color="primary" onClick={approveAction.onApprove} disabled={approveAction.isPending}>
                      Одобрить и выдать роль организатора
                    </Button>
                    <Button type="button" color="white" onClick={rejectAction.onReject} disabled={rejectAction.isPending}>
                      Отклонить и оставить волонтёром
                    </Button>
                    <Link href={PAGES.ADMIN_VOLUNTEERS}>
                      <Button color="white">Открыть список волонтёров</Button>
                    </Link>
                  </div>
                </div>
              ) : null}
            </div>
          )}
        </section>
      </div>
    </Container>
  );
};
