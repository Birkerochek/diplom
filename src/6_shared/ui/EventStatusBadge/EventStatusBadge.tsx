import { FC, memo } from "react";
import { EventStatus } from "../../../../app/generated/prisma";
import classNames from "classnames";
import { mapEventStatusToLabel } from "@shared/lib";
import s from "./EventStatusBadge.module.scss";
import { Typography } from "../Typography";

type StatusBadgeProps = {
  status: EventStatus;
};

const statusClassMap: Record<EventStatus, string> = {
  [EventStatus.active]: s.badgeActive,
  [EventStatus.cancelled]: s.badgeCancelled,
  [EventStatus.draft]: s.badgeDraft,
  [EventStatus.completed]: s.badgeCompleted,
};

const EventStatusBadgeBase: FC<StatusBadgeProps> = ({ status }) => (
  <Typography className={classNames(s.badge, statusClassMap[status])}>
    {mapEventStatusToLabel(status)}
  </Typography>
);

export const EventStatusBadge = memo(EventStatusBadgeBase)
