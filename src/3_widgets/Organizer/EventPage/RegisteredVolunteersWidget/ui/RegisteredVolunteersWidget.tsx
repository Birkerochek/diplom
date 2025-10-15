"use client";

import { memo, useCallback, useState } from "react";
import { Tabs, Typography } from "@shared/ui";
import type { EventVolunteer } from "@shared/api/event/fetchEvent";
import { useVolunteerTabs } from "../model/useVolunteerTabs";
import { VolunteerCard } from "./components/VolunteerCard";
import { RejectModal } from "./components/RejectModal";
import styles from "../../EventPageWidgets.module.scss";
import { RegistrationStatus } from "../../../../../../app/generated/prisma";

type RegisteredVolunteersWidgetProps = {
  volunteers: EventVolunteer[];
  registrations: Record<RegistrationStatus, number> & { total: number };
  onApprove: (registrationId: string) => Promise<void> | void;
  onReject: (registrationId: string, reason?: string) => Promise<void> | void;
  isProcessing: boolean;
};

export const RegisteredVolunteersWidgetBase = ({
  volunteers,
  registrations,
  onApprove,
  onReject,
  isProcessing,
}: RegisteredVolunteersWidgetProps) => {
  const [modalState, setModalState] = useState<{ open: boolean; registrationId: string | null }>({ open: false, registrationId: null });
  const [rejectionReason, setRejectionReason] = useState("");
  const { tabs, groupedVolunteers } = useVolunteerTabs({ volunteers, registrations });

  const handleOpenReject = useCallback((registrationId: string) => {
    setModalState({ open: true, registrationId });
    setRejectionReason("");
  }, []);

  const handleCancelReject = useCallback(() => {
    setModalState({ open: false, registrationId: null });
    setRejectionReason("");
  }, []);

  const handleConfirmReject = useCallback(async () => {
    if (!modalState.registrationId) {
      return;
    }

    await onReject(modalState.registrationId, rejectionReason.trim() || undefined);
    handleCancelReject();
  }, [modalState.registrationId, onReject, rejectionReason, handleCancelReject]);

  const handleModalOpenChange = useCallback((open: boolean) => {
    if (!open) {
      handleCancelReject();
      return;
    }

    setModalState((state) => ({ ...state, open }));
  }, [handleCancelReject]);

  const renderTabContent = useCallback((list: EventVolunteer[], status: RegistrationStatus) => {
    if (list.length === 0) {
      return (
        <div className={styles.emptyState}>
          <Typography variant="body" color="gray">
            Пока нет волонтёров в этой категории.
          </Typography>
        </div>
      );
    }

    return (
      <div className={styles.volunteerList}>
        {list.map((registration) => (
          <VolunteerCard
            key={registration.id}
            registration={registration}
            onApprove={onApprove}
            onReject={handleOpenReject}
            isProcessing={isProcessing}
            isRejectedTab={status === RegistrationStatus.rejected}
          />
        ))}
      </div>
    );
  }, [handleOpenReject, isProcessing, onApprove]);

  return (
    <section className={styles.section}>
      <header className={styles.sectionHeader}>
        <Typography variant="h3">Зарегистрированные волонтёры</Typography>
      </header>

      <Tabs
        defaultValue={tabs[0]?.status ?? RegistrationStatus.approved}
        listClassName={styles.tabsList}
        tabClassName={styles.tabsTab}
        contentClassName={styles.tabsPanel}
      >
        {tabs.map(({ status, label }) => {
          const list = groupedVolunteers.get(status) ?? [];

          return (
            <Tabs.Item key={status} value={status} label={label}>
              {renderTabContent(list, status)}
            </Tabs.Item>
          );
        })}
      </Tabs>

      <RejectModal
        open={modalState.open}
        onOpenChange={handleModalOpenChange}
        onConfirm={handleConfirmReject}
        onCancel={handleCancelReject}
        isProcessing={isProcessing}
        value={rejectionReason}
        onChange={setRejectionReason}
      />
    </section>
  );
};

export const RegisteredVolunteersWidget = memo(RegisteredVolunteersWidgetBase)
