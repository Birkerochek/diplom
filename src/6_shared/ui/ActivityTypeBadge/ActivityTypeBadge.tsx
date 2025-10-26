import { FC, memo } from "react";
import classNames from "classnames";

import { Typography } from "../Typography";
import s from "./ActivityTypeBadge.module.scss";
import { getActivityTypeVisual } from "./model/categoryVisuals";

type ActivityTypeBadgeProps = {
  activityType: string;
};

export const ActivityTypeBadge: FC<ActivityTypeBadgeProps> = ({ activityType }) => {
  const visual = getActivityTypeVisual(activityType);
  const className = visual ? s[visual.className] : s.badgeDefault;
  const label = visual?.label ?? activityType;

  return (
    <Typography className={classNames(s.badge, className)}>
      {label}
    </Typography>
  );
};


