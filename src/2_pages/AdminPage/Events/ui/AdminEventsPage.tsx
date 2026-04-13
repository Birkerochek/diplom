"use client";

import { Button, Container, Input, Typography } from "@shared/ui";
import { useAdminEventsPage } from "../model/useAdminEventsPage";
import { AdminEventDetails } from "./components/AdminEventDetails";
import { AdminModerationQueue } from "./components/AdminModerationQueue";
import { AdminRejectEventModal } from "./components/AdminRejectEventModal";
import styles from "./AdminEventsPage.module.scss";

export const AdminEventsPage = () => {
  const {
    searchInput,
    setSearchInput,
    selectedEvent,
    selectedEventId,
    setSelectedEventId,
    events,
    eventsQuery,
    handleSearchSubmit,
    approveAction,
    rejectAction,
    summary,
  } = useAdminEventsPage();

  return (
    <Container>
      <div className={styles.page}>
        <div className={styles.header}>
          <div className={styles.headerText}>
            <Typography as="h1" variant="h2">
              Очередь модерации
            </Typography>
            <Typography variant="body" color="gray">
              Просматривайте заявки, проверяйте содержание события и принимайте решение в одном рабочем окне.
            </Typography>
          </div>
        </div>

        <div className={styles.summary}>
          <div className={styles.summaryCard}>
            <Typography variant="settings" color="gray">
              Всего в очереди
            </Typography>
            <Typography variant="h2">{summary.total}</Typography>
          </div>
          <div className={styles.summaryCard}>
            <Typography variant="settings" color="gray">
              Срочные проверки
            </Typography>
            <Typography variant="h2">{summary.urgent}</Typography>
          </div>
          <div className={styles.summaryCard}>
            <Typography variant="settings" color="gray">
              Неполные заявки
            </Typography>
            <Typography variant="h2">{summary.needsReview}</Typography>
          </div>
        </div>

        <div className={styles.layout}>
          <section className={styles.panel}>
            <form className={styles.searchForm} onSubmit={handleSearchSubmit}>
              <Input
                value={searchInput}
                onChange={(event) => setSearchInput(event.target.value)}
                placeholder="Поиск по названию, описанию или локации"
              />
              <Button type="submit" color="primary" disabled={eventsQuery.isFetching}>
                Найти
              </Button>
            </form>

            {eventsQuery.isLoading ? (
              <Typography variant="body">Загрузка очереди модерации...</Typography>
            ) : null}

            {eventsQuery.isError ? (
              <Typography variant="body" color="secondary">
                Не удалось загрузить очередь модерации
              </Typography>
            ) : null}

            {!eventsQuery.isLoading && !events.length ? (
              <div className={styles.emptyState}>
                <Typography variant="h3">Очередь пуста</Typography>
                <Typography variant="body" color="gray">
                  Сейчас нет мероприятий, ожидающих решения администратора.
                </Typography>
              </div>
            ) : (
              <AdminModerationQueue
                events={events}
                selectedEventId={selectedEventId}
                onSelect={setSelectedEventId}
              />
            )}
          </section>

          <section className={styles.panel}>
            <AdminEventDetails
              event={selectedEvent}
              isProcessing={approveAction.isPending || rejectAction.isPending}
              onApprove={approveAction.onApprove}
              onReject={rejectAction.open}
            />
          </section>
        </div>
      </div>

      <AdminRejectEventModal
        open={rejectAction.modal.open}
        reason={rejectAction.modal.data?.reason ?? ""}
        isPending={rejectAction.isPending}
        onOpenChange={(open) => {
          if (!open) {
            rejectAction.close();
          }
        }}
        onReasonChange={rejectAction.setReason}
        onSubmit={rejectAction.submit}
      />
    </Container>
  );
};
