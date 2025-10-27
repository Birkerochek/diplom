import { memo } from "react";
import { Button, Modal, Typography } from "@shared/ui";
import styles from "../../../EventPageWidgets.module.scss";

type RejectModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm: () => void | Promise<void>;
  onCancel: () => void;
  isProcessing: boolean;
  value: string;
  onChange: (value: string) => void;
};

const RejectModalBase = ({
  open,
  onOpenChange,
  onConfirm,
  onCancel,
  isProcessing,
  value,
  onChange,
}: RejectModalProps) => (
  <Modal
    open={open}
    onOpenChange={onOpenChange}
    title={<Typography variant="h3">Отклонить заявку</Typography>}
    description={
      <Typography variant="body" color="gray">
        Укажите причину отказа — волонтёр увидит её в личном кабинете.
      </Typography>
    }
    footer={
      <>
        <Button variant="delete" onClick={onCancel} disabled={isProcessing}>
          Отмена
        </Button>
        <Button color="primary" onClick={onConfirm} disabled={isProcessing}>
          Отклонить
        </Button>
      </>
    }
  >
    <label className={styles.modalField}>
      <Typography variant="body" color="gray">
        Причина отказа (необязательно)
      </Typography>
      <textarea
        value={value}
        onChange={(event) => onChange(event.target.value)}
        rows={4}
        className={styles.modalTextarea}
        placeholder="Например: волонтёр не соответствует требованиям отбора."
      />
    </label>
  </Modal>
);

export const RejectModal = memo(RejectModalBase);
