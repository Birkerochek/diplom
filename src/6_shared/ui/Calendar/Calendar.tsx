"use client";

import type { ComponentProps } from "react";
import { DayPicker } from "react-day-picker";
import { ru } from "date-fns/locale";
import clsx from "clsx";

import "react-day-picker/dist/style.css";
import styles from "./Calendar.module.scss";

export type CalendarProps = ComponentProps<typeof DayPicker>;

export const Calendar = ({
  className,
  classNames,
  showOutsideDays = true,
  locale = ru,
  ...props
}: CalendarProps) => {
  return (
    <DayPicker
    
      showOutsideDays={showOutsideDays}
      locale={locale}
      className={clsx(styles.calendar, className)}
      classNames={{
        ...classNames,
      }}
  
      {...props}
    />
  );
};
