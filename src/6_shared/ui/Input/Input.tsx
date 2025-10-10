"use client";

import { forwardRef, useId } from "react";
import clsx from "clsx";
import styles from "./Input.module.scss";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, icon, className, id, ...props }, ref) => {
    const inputId = useId();
    const resolvedId = id ?? inputId;

    return (
      <div className={styles.wrapper}>
        {label ? (
          <label htmlFor={resolvedId} className={styles.label}>
            {label}
          </label>
        ) : null}

        <div className={styles.field}>
          {icon ? <span className={styles.icon}>{icon}</span> : null}
          <input
            ref={ref}
            id={resolvedId}
            className={clsx(
              styles.input,
              icon && styles.withIcon,
              error && styles.error,
              className
            )}
            {...props}
          />
        </div>

        {error ? <span className={styles.errorMessage}>{error}</span> : null}
      </div>
    );
  }
);

Input.displayName = "Input";
