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

type BaseInputProps = {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
  required?: boolean;
  subtitle?: string;
};

type TextInputProps = BaseInputProps &
  React.InputHTMLAttributes<HTMLInputElement> & {
    maskOptions?: MaskOptions;
    isTextarea?: false;
  };

type TextareaProps = BaseInputProps &
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    isTextarea: true;
    maskOptions?: never;
    maxLength?: number;
  };

export type InputProps = TextInputProps | TextareaProps;

export const Input = forwardRef<HTMLInputElement | HTMLTextAreaElement, InputProps>(
  (props, ref) => {
    const {
      label,
      error,
      icon,
      className,
      id,
      name,
      required,
      isTextarea,
      subtitle,
      ...rest
    } = props;
    const inputId = useId();
    const resolvedId = id ?? inputId;

    const inputClassName = clsx(
      s.input,
      icon && s.withIcon,
      error && s.error,
      className
    );

    const setForwardedRef = (
      node: HTMLInputElement | HTMLTextAreaElement | null
    ) => {
      if (typeof ref === "function") {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }
    };

    let control: React.ReactNode;

    if (isTextarea) {
      const { onChange, onBlur, ...textareaRest } =
        rest as React.TextareaHTMLAttributes<HTMLTextAreaElement>;

      control = (
        <textarea
          ref={(node) => setForwardedRef(node)}
          id={resolvedId}
          className={inputClassName}
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          maxLength={textareaRest.maxLength}
          {...textareaRest}
          rows={5}
        />
      );
    } else {
      const {
        maskOptions,
        onChange,
        onBlur,
        ...inputRest
      } = rest as React.InputHTMLAttributes<HTMLInputElement> & {
        maskOptions?: MaskOptions;
      };

      const { inputRef, onAccept: maskAccept, onBlur: maskBlur, ...restMask } =
        maskOptions ?? {};

      const assignRef = (node: HTMLInputElement | null) => {
        setForwardedRef(node);

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

      const handleBlur: IMaskInputProps<HTMLInputElement>["onBlur"] = (
        event
      ) => {
        maskBlur?.(event);

        if (typeof onBlur === "function") {
          onBlur(event as unknown as FocusEvent<HTMLInputElement>);
        }
      };

      const renderMaskedInput = () => {
        const maskElementProps = { ...inputRest } as Record<string, unknown>;
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

      control = maskOptions ? (
        renderMaskedInput()
      ) : (
        <input
          ref={(node) => setForwardedRef(node)}
          id={resolvedId}
          className={inputClassName}
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          {...inputRest}
        />
      );
    }

    return (
      <div className={s.wrapper}>
        {label ? (
          <label htmlFor={resolvedId} className={s.label}>
            {label}{required ? <span className={s.required}>*</span> : null}
          </label>
        ) : null}

        <div className={s.field}>
          {icon ? <span className={s.icon}>{icon}</span> : null}
          {control}
        </div>

        {error ? <span className={s.errorMessage}>{error}</span> : null}
        {subtitle ? <span className={s.subtitle}>{subtitle}</span> : null}
      </div>
    );
  }
);

Input.displayName = "Input";
