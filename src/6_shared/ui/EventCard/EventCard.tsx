"use client";

import {
  FC,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { Eye, MoreHorizontal, Pencil, Trash2 } from "lucide-react";
import { EventStatus } from "../../../../app/generated/prisma";
import { formatEventDate, formatEventTime, useModalState } from "@shared/lib";
import { useDeleteEvent } from "@shared/api";
import { Typography } from "../Typography";
import { Button } from "../Button";
import { EventStatusBadge } from "../EventStatusBadge";
import { EventDeleteDialog } from "../EventDeleteDialog";
import { EventCardSkeleton } from "./EventCardSkeleton";
import s from "./EventCard.module.scss";

export interface EventCardProps {
  id: string;
  title: string;
  status: EventStatus;
  schedule: {
    startTime: string;
    eventDate: string;
    endTime: string;
    requiredHours: string;
  };
  capacity: {
    maxParticipants: number | null;
    currentParticipants: number | null;
  };
  location: {
    name: string;
    address: string | null;
  };
  onDelete?: (eventId: string) => void;
}

export const EventCard: FC<EventCardProps> = ({
  id,
  title,
  status,
  schedule,
  capacity,
  location,
  onDelete,
}) => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { state: deleteDialogState, open: openDeleteDialog, close: closeDeleteDialog } = useModalState<void>();
  const menuRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const { mutateAsync: deleteEvent, isPending: isDeleting } = useDeleteEvent();

  const hasData = Boolean(id && title && schedule && capacity && location);

  if (!hasData) {
    return <EventCardSkeleton />;
  }

  const { eventDate, startTime, endTime, requiredHours } = schedule;
  const maxParticipants = capacity.maxParticipants ?? 0;
  const currentParticipants = capacity.currentParticipants ?? 0;

  const filled = useMemo(() => {
    if (maxParticipants <= 0) {
      return "0%";
    }

    return `${Math.round((currentParticipants / maxParticipants) * 100)}%`;
  }, [currentParticipants, maxParticipants]);

  const formattedEventDate = formatEventDate(eventDate);
  const formattedStartTime = formatEventTime(startTime);
  const formattedEndTime = formatEventTime(endTime);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node | null;

      if (target && (menuRef.current?.contains(target) || buttonRef.current?.contains(target))) {
        return;
      }

      setIsMenuOpen(false);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleNavigate = (path: string) => {
    router.push(path);
    closeMenu();
  };

  const handleOpenDeleteDialog = () => {
    closeMenu();
    openDeleteDialog();
  };

  const handleCancelDelete = () => {
    if (isDeleting) {
      return;
    }

    closeDeleteDialog();
  };

  const handleConfirmDelete = async () => {
    if (isDeleting) {
      return;
    }

    try {
      await deleteEvent(id);
      toast.success("Мероприятие удалено");
      closeDeleteDialog();
      onDelete?.(id);
    } catch (error) {
      console.error("Delete event error", error);
      toast.error("Не удалось удалить мероприятие");
    }
  };

  const handleToggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className={s.card}>
      <div className={s.card__top}>
        <Typography variant="h3">{title}</Typography>
        <div className={s.card__actions}>
          <button
            ref={buttonRef}
            type="button"
            className={s.moreButton}
            aria-haspopup="true"
            aria-expanded={isMenuOpen}
            aria-label="Открыть действия с мероприятием"
            onClick={handleToggleMenu}
          >
            <MoreHorizontal />
          </button>
          {isMenuOpen ? (
            <div ref={menuRef} className={s.menu} role="menu">
              <button
                type="button"
                className={s.menuItem}
                role="menuitem"
                onClick={() => handleNavigate(`/organizer/events/${id}`)}
              >
                <Eye className={s.menuItem__icon} size={16} />
                Просмотр
              </button>
              <button
                type="button"
                className={s.menuItem}
                role="menuitem"
                onClick={() => handleNavigate(`/organizer/events/${id}/edit`)}
              >
                <Pencil className={s.menuItem__icon} size={16} />
                Редактировать
              </button>
              <button
                type="button"
                className={`${s.menuItem} ${s.menuItemDanger}`}
                role="menuitem"
                onClick={handleOpenDeleteDialog}
              >
                <Trash2 className={s.menuItem__icon} size={16} />
                Удалить
              </button>
            </div>
          ) : null}
        </div>
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
        {location.address ? (
          <Typography variant="body" color="gray">
            {location.address}
          </Typography>
        ) : null}
        <Typography variant="body" color="gray">
          {currentParticipants} / {maxParticipants || "—"}
        </Typography>
      </div>

      <div className={s.card__bottom}>
        <div className={s.card__bottom_left}>
          <Typography variant="body" color="gray">
            Заполненность:
          </Typography>
          <Typography variant="bodyBold" color="green">
            {filled}
          </Typography>
        </div>

        <Link href={`/organizer/events/${id}`}>
          <Button color="white">Подробнее</Button>
        </Link>
      </div>

      <EventDeleteDialog
        open={deleteDialogState.open}
        onCancel={handleCancelDelete}
        onConfirm={handleConfirmDelete}
        isLoading={isDeleting}
        eventTitle={title}
      />
    </div>
  );
};
