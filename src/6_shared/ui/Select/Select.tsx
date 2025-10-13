"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import clsx from "clsx";
import s from "./Select.module.scss";

export type SelectOption = {
  value: string;
  label: string;
};

export type SelectProps = {
  label?: string;
  placeholder?: string;
  options: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  required?: boolean;
  error?: string;
  name?: string;
  disabled?: boolean;
  className?: string;
};

export const Select = ({
  label,
  placeholder = "Выберите значение",
  options,
  value,
  onChange,
  required,
  error,
  name,
  disabled,
  className,
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const selectedOption = useMemo(
    () => options.find((option) => option.value === value),
    [options, value]
  );

  const toggleOpen = useCallback(() => {
    if (disabled) {
      return;
    }

    setIsOpen((prev) => !prev);
  }, [disabled]);

  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (!wrapperRef.current) {
        return;
      }

      if (!wrapperRef.current.contains(event.target as Node)) {
        close();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [close, isOpen]);

  const handleOptionSelect = useCallback(
    (optionValue: string) => {
      onChange?.(optionValue);
      close();
    },
    [close, onChange]
  );

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      setIsOpen(true);
    }

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleOpen();
    }

    if (event.key === "Escape") {
      event.preventDefault();
      close();
    }
  };

  const wrapperClassName = clsx(s.wrapper, className);
  const triggerClassName = clsx(
    s.trigger,
    error && s.error,
    disabled && s.disabled,
    isOpen && s.open
  );

  return (
    <div className={wrapperClassName} ref={wrapperRef}>
      {label ? (
        <label className={s.label}>
          {label}
          {required ? <span className={s.required}>*</span> : null}
        </label>
      ) : null}

      <div className={s.control}>
        <button
          type="button"
          className={triggerClassName}
          onClick={toggleOpen}
          onKeyDown={handleKeyDown}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          disabled={disabled}
        >
          <span
            className={clsx(s.value, !selectedOption && s.placeholder)}
          >
            {selectedOption ? selectedOption.label : placeholder}
          </span>
          <span className={s.arrow} aria-hidden>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M4.6665 6.3335L7.99984 9.66683L11.3332 6.3335"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>

        {name ? (
          <input type="hidden" name={name} value={value ?? ""} />
        ) : null}

        {isOpen ? (
          <ul className={s.dropdown} role="listbox">
            {options.map((option) => {
              const isSelected = option.value === value;

              return (
                <button
                    type="button"
                    className={clsx(s.option, isSelected && s.optionSelected)}
                    onClick={() => handleOptionSelect(option.value)}
                    role="option"
                    key={option.value}
                    aria-selected={isSelected}
                  >
                <li >
                    {option.label}
                </li>
                  </button>
              );
            })}
          </ul>
        ) : null}
      </div>

      {error ? <span className={s.errorMessage}>{error}</span> : null}
    </div>
  );
};
