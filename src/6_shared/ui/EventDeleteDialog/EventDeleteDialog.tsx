"use client";

import { FC, useCallback } from "react";
import { Button } from "../Button";
import { Modal } from "../Modal";
import { Typography } from "../Typography";

type EventDeleteDialogProps = {
  open: boolean;
  onCancel: () => void;
  onConfirm: () => Promise<void> | void;
  isLoading?: boolean;
  eventTitle?: string;
};

export const EventDeleteDialog: FC<EventDeleteDialogProps> = ({
  open,
  onCancel,
  onConfirm,
  isLoading = false,
  eventTitle,
}) => {
  const handleOpenChange = useCallback(
    (nextOpen: boolean) => {
      if (nextOpen) {
        return;
      }

      if (isLoading) {
        return;
      }

      onCancel();
    },
    [isLoading, onCancel]
  );

  return (
    <Modal
      open={open}
      onOpenChange={handleOpenChange}
      title={<Typography variant="h3">Удалить мероприятие?</Typography>}
      description={
        <Typography variant="body" color="gray">
          Все данные и заявки волонтёров будут удалены. Действие нельзя отменить.
        </Typography>
      }
      footer={
        <>
          <Button color="white" onClick={onCancel} disabled={isLoading}>
            Отмена
          </Button>
          <Button color="primary" onClick={onConfirm} disabled={isLoading}>
            Удалить
          </Button>
        </>
      }
    >
      <Typography variant="body">
        {eventTitle
          ? `Вы уверены, что хотите удалить мероприятие "${eventTitle}"? После удаления восстановить его будет нельзя.`
          : "Вы уверены, что хотите удалить мероприятие? После удаления восстановить его будет нельзя."}
      </Typography>
    </Modal>
  );
};
