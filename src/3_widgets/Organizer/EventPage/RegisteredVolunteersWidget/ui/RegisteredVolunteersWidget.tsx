"use client";

import { memo, useState } from "react";
import { Tabs, Typography } from "@shared/ui";
import { useVolunteerTabs } from "../model/useVolunteerTabs";
import { VolunteerCard } from "./components/VolunteerCard";
import { RejectModal } from "./components/RejectModal";
import styles from "../../EventPageWidgets.module.scss";
import { RegistrationStatus } from "../../../../../../app/generated/prisma";
import { useModalState } from "@shared/lib";
import { EventVolunteer } from "@shared/api";

type RegisteredVolunteersWidgetProps = {
  volunteers: EventVolunteer[];
  registrations: Record<RegistrationStatus, number> & { total: number };
  onApprove: (registrationId: string) => Promise<void> | void;
  onReject: (registrationId: string, reason?: string) => Promise<void> | void;
  onComplete: (registrationId: string) => Promise<void> | void;
  isProcessing: boolean;
};

export const RegisteredVolunteersWidgetBase = ({
  volunteers,
  registrations,
  onApprove,
  onReject,
  onComplete,
  isProcessing,
}: RegisteredVolunteersWidgetProps) => {
  const { state: rejectState, open: openRejectModal, close: closeRejectModal } = useModalState<string>();
  const [rejectionReason, setRejectionReason] = useState("");
  const { tabs, groupedVolunteers } = useVolunteerTabs({ volunteers, registrations });

  const handleOpenReject = (registrationId: string) => {
    openRejectModal(registrationId);
    setRejectionReason("");
  };

  const handleCancelReject = () => {
    closeRejectModal();
    setRejectionReason("");
  };

  const handleConfirmReject = async () => {
    if (!rejectState.data) {
      return;
    }

    await onReject(rejectState.data, rejectionReason.trim() || undefined);
    handleCancelReject();
  };

  const handleModalOpenChange = (open: boolean) => {
    if (!open) {
      handleCancelReject();
    }
  };

  return (
    <section className={styles.section}>
      <header className={styles.sectionHeader}>
        <Typography variant="h3">Зарегистрированные волонтёры</Typography>
        <Typography variant="settings" color="gray">
          Управляйте заявками и отслеживайте статус участия на каждом этапе регистрации.
        </Typography>
      </header>

      <Tabs
        defaultValue={tabs[0]?.status ?? RegistrationStatus.approved}
        listClassName={styles.tabsList}
        tabClassName={styles.tabsTab}
        contentClassName={styles.tabsPanel}
      >
        {tabs.map(({ status, label }) => {
          const list = groupedVolunteers.get(status) ?? [];

          const tabContent =
            list.length === 0 ? (
              <div className={styles.emptyState}>
                <Typography variant="body" color="gray">
                  В этой категории пока нет волонтёров.
                </Typography>
              </div>
            ) : (
              <div className={styles.volunteerList}>
                {list.map((registration) => (
                  <VolunteerCard
                    key={registration.id}
                    registration={registration}
                    onApprove={onApprove}
                    onComplete={onComplete}
                    onReject={handleOpenReject}
                    isProcessing={isProcessing}
                    isRejectedTab={status === RegistrationStatus.rejected}
                  />
                ))}
              </div>
            );

          return (
            <Tabs.Item key={status} value={status} label={label}>
              {tabContent}
            </Tabs.Item>
          );
        })}
      </Tabs>

      <RejectModal
        open={rejectState.open}
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

export const RegisteredVolunteersWidget = memo(RegisteredVolunteersWidgetBase);
