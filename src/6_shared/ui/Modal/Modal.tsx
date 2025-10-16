"use client";

import { FC, PropsWithChildren } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import clsx from "clsx";
import styles from "./Modal.module.scss";

type ModalProps = PropsWithChildren<{
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: React.ReactNode;
  description?: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
}>;

export const Modal: FC<ModalProps> = ({
  open,
  onOpenChange,
  title,
  description,
  footer,
  className,
  children,
}) => {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.backdrop}>
          <Dialog.Content className={clsx(styles.modal, className)}>
            {(title || description) && (
              <header className={styles.header}>
                {title ? <Dialog.Title>{title}</Dialog.Title> : null}
                {description
                  ? typeof description === "string" || typeof description === "number"
                    ? <Dialog.Description>{description}</Dialog.Description>
                    : <Dialog.Description asChild>{description}</Dialog.Description>
                  : null}
              </header>
            )}
            <div className={styles.body}>{children}</div>
            {footer ? <footer className={styles.footer}>{footer}</footer> : null}
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
