'use client';

import { useState } from "react";
import classNames from "classnames";
import { RegistrationStatus } from "../../../../app/generated/prisma";

import {
  useCancelVolunteerApplication,
  useVolunteerApplications,
} from "@shared/api";
import { Container, Tabs, Typography } from "@shared/ui";
import type { VolunteerApplication } from "@shared/types/volunteer";
import { ApplicationCard } from "@widgets/Volunteer/ApplicationCard";

import s from "./ApplicationsPage.module.scss";

type ApplicationsFilter = RegistrationStatus | "all";

const STATUS_LABELS: Record<RegistrationStatus, string> = {
  [RegistrationStatus.approved]: "Одобрено",
  [RegistrationStatus.pending]: "Ожидает одобрения",
  [RegistrationStatus.rejected]: "Отклонено",
  [RegistrationStatus.cancelled]: "Отменено",
  [RegistrationStatus.completed]: "Завершено",
};

const STATUS_ORDER: RegistrationStatus[] = [
  RegistrationStatus.approved,
  RegistrationStatus.pending,
  RegistrationStatus.completed,
  RegistrationStatus.cancelled,
  RegistrationStatus.rejected,
];

const formatRegistrationDate = (value: string) => {
  try {
    return new Intl.DateTimeFormat("ru-RU", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }).format(new Date(value));
  } catch {
    return value;
  }
};

const sortApplications = (a: VolunteerApplication, b: VolunteerApplication) => {
  const statusDiff =
    STATUS_ORDER.indexOf(a.status) - STATUS_ORDER.indexOf(b.status);

  if (statusDiff !== 0) {
    return statusDiff;
  }

  const firstDate = new Date(a.event.schedule.eventDate).getTime();
  const secondDate = new Date(b.event.schedule.eventDate).getTime();

  if (firstDate !== secondDate) {
    return firstDate - secondDate;
  }

  return new Date(b.registeredAt).getTime() - new Date(a.registeredAt).getTime();
};

export const ApplicationsPageVolunteer = () => {
  const [filter, setFilter] = useState<ApplicationsFilter>("all");
  const [cancellingId, setCancellingId] = useState<string | null>(null);

  const { data, isLoading, isError } = useVolunteerApplications();
  const cancelMutation = useCancelVolunteerApplication();

  const applications = data ? [...data].sort(sortApplications) : [];

  const statusCounts: Record<RegistrationStatus, number> = {
    [RegistrationStatus.approved]: 0,
    [RegistrationStatus.pending]: 0,
    [RegistrationStatus.rejected]: 0,
    [RegistrationStatus.cancelled]: 0,
    [RegistrationStatus.completed]: 0,
  };

  for (const application of applications) {
    statusCounts[application.status] += 1;
  }

  const filterItems: Array<{
    value: ApplicationsFilter;
    label: string;
    items: VolunteerApplication[];
  }> = [
    {
      value: "all",
      label: `Все (${applications.length})`,
      items: applications,
    },
    ...STATUS_ORDER.map((status) => ({
      value: status,
      label: `${STATUS_LABELS[status]} (${statusCounts[status] ?? 0})`,
      items: applications.filter((item) => item.status === status),
    })),
  ];

  const activeFilter = filterItems.find((item) => item.value === filter) ?? filterItems[0];

  const handleCancel = async (registrationId: string) => {
    setCancellingId(registrationId);
    try {
      await cancelMutation.mutateAsync(registrationId);
    } catch (error) {
      console.error("Volunteer application cancel error", error);
    } finally {
      setCancellingId(null);
    }
  };

  const renderList = (items: VolunteerApplication[]) => {
    if (!items.length) {
      return (
        <Typography variant="body" color="gray" className={s.empty}>
          Пока нет заявок в этом разделе.
        </Typography>
      );
    }

    return (
      <div className={s.cards}>
        {items.map((application) => (
          <ApplicationCard
            key={application.id}
            application={application}
            onCancel={handleCancel}
            isCancelling={cancellingId === application.id && cancelMutation.isPending}
            appliedAtLabel={formatRegistrationDate(application.registeredAt)}
          />
        ))}
      </div>
    );
  };

  let content;

  if (isLoading) {
    content = (
      <Typography variant="body" color="gray" className={s.state}>
        Загружаем ваши заявки...
      </Typography>
    );
  } else if (isError) {
    content = (
      <Typography variant="body" color="secondary" className={s.state}>
        Не удалось загрузить список заявок. Попробуйте обновить страницу.
      </Typography>
    );
  } else {
    content = (
      <Tabs
        className={classNames(s.tabs, !applications.length && s.tabsHidden)}
        value={activeFilter.value}
        onValueChange={(value) => setFilter(value as ApplicationsFilter)}
        tabClassName={s.tab}
        listClassName={s.tabList}
        contentClassName={s.tabPanel}
      >
        {filterItems.map((item) => (
          <Tabs.Item key={item.value} value={item.value} label={item.label}>
            {renderList(item.items)}
          </Tabs.Item>
        ))}
      </Tabs>
    );
  }

  return (
    <Container>
      <div className={s.page}>
        <div className={s.header}>
          <Typography variant="h2" as="h1">
            Мои заявки
          </Typography>
          <Typography variant="body" color="gray" className={s.subtitle}>
            Отслеживайте статус ваших заявок на участие в мероприятиях.
          </Typography>
        </div>

        {content}
      </div>
    </Container>
  );
};
