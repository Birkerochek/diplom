"use client";

import { useMemo, useState } from "react";
import * as Popover from "@radix-ui/react-popover";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import { Calendar as CalendarIcon } from "lucide-react";
import clsx from "clsx";

import { Calendar } from "../Calendar";
import styles from "./DatePicker.module.scss";

export type DatePickerProps = {
  label?: string;
  placeholder?: string;
  value?: Date | null;
  onChange?: (date: Date | null) => void;
  required?: boolean;
  error?: string;
  name?: string;
  disabled?: boolean;
  className?: string;
};

export const DatePicker = ({
  label,
  placeholder = "Выберите дату",
  value,
  onChange,
  required,
  error,
  name,
  disabled,
  className,
}: DatePickerProps) => {
  const [open, setOpen] = useState(false);

  const formattedValue = useMemo(() => {
    if (!value) {
      return null;
    }

    return format(value, "d MMMM yyyy", { locale: ru });
  }, [value]);

  const handleSelect = (date?: Date) => {
    onChange?.(date ?? null);
    if (date) {
      setOpen(false);
    }
  };

  return (
    <div className={clsx(styles.wrapper, className)}>
      {label ? (
        <label className={styles.label}>
          {label}
          {required ? <span className={styles.required}>*</span> : null}
        </label>
      ) : null}

      <Popover.Root open={open} onOpenChange={setOpen}>
        <div className={styles.field}>
          <Popover.Trigger asChild>
            <button
              type="button"
              className={clsx(styles.trigger, error && styles.error)}
              disabled={disabled}
              data-state={open ? "open" : "closed"}
            >
              <span className={styles.icon}>
                <CalendarIcon size={18} />
              </span>
              <span
                className={clsx(
                  styles.value,
                  !formattedValue && styles.placeholder
                )}
              >
                {formattedValue ?? placeholder}
              </span>
            </button>
          </Popover.Trigger>

          {name ? (
            <input
              type="hidden"
              name={name}
              value={value ? value.toISOString() : ""}
            />
          ) : null}

          <Popover.Portal>
            <Popover.Content
              className={styles.content}
              sideOffset={8}
              align="start"
            >
              <Calendar
                mode="single"
                selected={value ?? undefined}
                onSelect={handleSelect}
                initialFocus
              />
            </Popover.Content>
          </Popover.Portal>
        </div>
      </Popover.Root>

      {error ? <span className={styles.errorMessage}>{error}</span> : null}
    </div>
  );
};
