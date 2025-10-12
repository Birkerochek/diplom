"use client";

import { forwardRef, useId } from "react";
import type {
  ChangeEvent,
  ComponentProps,
  FocusEvent,
  MutableRefObject,
} from "react";
import { IMaskInput } from "react-imask";
import type { IMaskInputProps } from "react-imask";
import clsx from "clsx";
import s from "./Input.module.scss";

type MaskOptions = Omit<
  IMaskInputProps<HTMLInputElement>,
  "className" | "children" | "inputRef" | "onAccept" | "onBlur"
> & {
  inputRef?: ComponentProps<typeof IMaskInput>["inputRef"];
  onAccept?: ComponentProps<typeof IMaskInput>["onAccept"];
  onBlur?: ComponentProps<typeof IMaskInput>["onBlur"];
};

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
  maskOptions?: MaskOptions;
  required?: boolean;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      icon,
      className,
      id,
      maskOptions,
      onChange,
      onBlur,
      name,
      required,
      ...rest
    },
    ref
  ) => {
    const inputId = useId();
    const resolvedId = id ?? inputId;

    const inputClassName = clsx(
      s.input,
      icon && s.withIcon,
      error && s.error,
      className
    );

    const { inputRef, onAccept: maskAccept, onBlur: maskBlur, ...restMask } =
      maskOptions ?? {};

    const assignRef = (node: HTMLInputElement | null) => {
      if (typeof ref === "function") {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }

      if (typeof inputRef === "function") {
        inputRef(node);
      } else if (inputRef) {
        (inputRef as MutableRefObject<HTMLInputElement | null>).current = node;
      }
    };

    const handleAccept: IMaskInputProps<HTMLInputElement>["onAccept"] = (
      value,
      maskRef,
      event
    ) => {
      maskAccept?.(value, maskRef, event);

      if (typeof onChange === "function" && typeof name === "string") {
        const syntheticEvent = {
          target: { name, value },
          currentTarget: { name, value },
        } as unknown as ChangeEvent<HTMLInputElement>;

        onChange(syntheticEvent);
      }
    };

    const handleBlur: IMaskInputProps<HTMLInputElement>["onBlur"] = (event) => {
      maskBlur?.(event);

      if (typeof onBlur === "function") {
        onBlur(event as unknown as FocusEvent<HTMLInputElement>);
      }
    };

    const renderMaskedInput = () => {
      const maskElementProps = { ...rest } as Record<string, unknown>;
      delete maskElementProps.type;

      return (
        <IMaskInput
          id={resolvedId}
          className={inputClassName}
          {...(restMask as IMaskInputProps<HTMLInputElement>)}
          {...maskElementProps}
          name={name}
          inputRef={assignRef}
          onAccept={handleAccept}
          onBlur={handleBlur}
        />
      );
    };

    return (
      <div className={s.wrapper}>
        {label ? (
          <label htmlFor={resolvedId} className={s.label}>
            {label}{required ? <span className={s.required}>*</span> : null}
          </label>
        ) : null}

        <div className={s.field}>
          {icon ? <span className={s.icon}>{icon}</span> : null}
          {maskOptions ? (
            renderMaskedInput()
          ) : (
            <input
              ref={ref}
              id={resolvedId}
              className={inputClassName}
              name={name}
              onChange={onChange}
              onBlur={onBlur}
              {...rest}
            />
          )}
        </div>

        {error ? <span className={s.errorMessage}>{error}</span> : null}
      </div>
    );
  }
);

Input.displayName = "Input";
