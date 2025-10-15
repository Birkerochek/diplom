import { FC, memo } from "react";
import { EventStatus } from "../../../../app/generated/prisma";
import classNames from "classnames";
import { mapEventStatusToLabel } from "@shared/lib";
import s from "./EventStatusBadge.module.scss";

type StatusBadgeProps = {
  status: EventStatus;
};

const statusClassMap: Record<EventStatus, string> = {
  [EventStatus.active]: s.badgeActive,
  [EventStatus.published]: s.badgePublished,
  [EventStatus.cancelled]: s.badgeCancelled,
  [EventStatus.draft]: s.badgeDraft,
  [EventStatus.completed]: s.badgeCompleted,
};

export const EventStatusBadge: FC<StatusBadgeProps> = memo(({ status }) => (
  <span className={classNames(s.badge, statusClassMap[status])}>
    {mapEventStatusToLabel(status)}
  </span>
));

EventStatusBadge.displayName = "EventStatusBadge";
