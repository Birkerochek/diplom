import clsx from "clsx";
import { Button, Input, Modal, Typography } from "@shared/ui";
import { ADMIN_MODERATION_REASONS } from "../../model/adminModerationReasons";
import styles from "../AdminEventsPage.module.scss";

type AdminRejectEventModalProps = {
  open: boolean;
  reason: string;
  isPending: boolean;
  onOpenChange: (open: boolean) => void;
  onReasonChange: (reason: string) => void;
  onSubmit: () => void;
};

export const AdminRejectEventModal = ({
  open,
  reason,
  isPending,
  onOpenChange,
  onReasonChange,
  onSubmit,
}: AdminRejectEventModalProps) => (
  <Modal
    open={open}
    onOpenChange={onOpenChange}
    title="Отклонить мероприятие"
    description="Выберите готовую причину или укажите подробный комментарий для организатора."
    footer={
      <div className={styles.modalFooter}>
        <Button color="white" onClick={() => onOpenChange(false)} disabled={isPending}>
          Отмена
        </Button>
        <Button color="primary" onClick={onSubmit} disabled={isPending || reason.trim().length < 3}>
          Сохранить решение
        </Button>
      </div>
    }
  >
    <div className={styles.modalContent}>
      <div className={styles.reasonOptions}>
        {ADMIN_MODERATION_REASONS.map((item) => (
          <button
            key={item}
            type="button"
            className={clsx(styles.reasonOption, reason === item && styles.reasonOptionActive)}
            onClick={() => onReasonChange(item)}
          >
            <Typography variant="body">{item}</Typography>
          </button>
        ))}
      </div>

      <Input
        isTextarea
        label="Комментарий администратора"
        placeholder="Например: уточните формат участия, точный адрес и список задач для волонтёров"
        value={reason}
        onChange={(event) => onReasonChange(event.target.value)}
      />
    </div>
  </Modal>
);
