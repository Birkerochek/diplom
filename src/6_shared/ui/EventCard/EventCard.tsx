import { FC } from "react";
import { EventStatus } from "../../../../app/generated/prisma";
import s from "./EventCard.module.scss";
import { Typography } from "../Typography";
import { MoreHorizontal } from "lucide-react";
import { Button } from "../Button";
import { formatEventDate, formatEventTime } from "@shared/lib";
import { EventStatusBadge } from "../EventStatusBadge";

export interface EventCardProps {
  title: string;
  status: EventStatus;
  schedule: {
    startTime: string;
    eventDate: string;
    endTime: string;
    requiredHours: string;
  };
  capacity: {
    maxParticipants: number;
    currentParticipants: number;
  };
  location: {
    name: string;
    address: string;
  };
}

export const EventCard: FC<EventCardProps> = ({
  title,
  status,
  schedule,
  capacity,
  location,
}) => {
  const { eventDate, startTime, endTime, requiredHours } = schedule;
  const { maxParticipants, currentParticipants } = capacity;

  const filled = maxParticipants > 0
    ? `${Math.round((currentParticipants / maxParticipants) * 100)}%`
    : "0%";

  const formattedEventDate = formatEventDate(eventDate);
  const formattedStartTime = formatEventTime(startTime);
  const formattedEndTime = formatEventTime(endTime);

  return (
    <div className={s.card}>
      <div className={s.card__top}>
        <Typography variant="h3">{title}</Typography>
        <MoreHorizontal />
      </div>
      <div className={s.card__status}>
        <EventStatusBadge status={status} />
      </div>
      <div className={s.card__info}>
        <Typography variant="body" color="gray">
          {formattedEventDate}
        </Typography>
        <Typography variant="body" color="gray">
          {formattedStartTime} - {formattedEndTime} ({requiredHours})
        </Typography>
        <Typography variant="body" color="gray">
          {location.name}
        </Typography>
        <Typography variant="body" color="gray">
          {currentParticipants} / {maxParticipants}
        </Typography>
      </div>
      <div className={s.card__bottom}>
        <div className={s.card__bottom_left}>
          <Typography variant="body" color="gray">
            Заполнено:
          </Typography>
          <Typography variant="bodyBold" color="green">
            {filled}
          </Typography>

        </div>
        <Button color="white">Подробнее</Button>
      </div>
    </div>
  );
};