"use client";

import clsx from "clsx";
import {
  Children,
  isValidElement,
  useId,
  useRef,
  useState,
  type FC,
  type KeyboardEvent,
  type ReactElement,
} from "react";
import styles from "./Tabs.module.scss";
import type { TabItemProps, TabsProps } from "./types";
import { Select } from "../Select";

const TabItemComponent: FC<TabItemProps> = () => null;

const TabsRoot: FC<TabsProps> = ({
  value,
  defaultValue,
  onValueChange,
  className,
  listClassName,
  tabClassName,
  contentClassName,
  children,
}) => {
  const baseId = useId();
  const isControlled = value !== undefined;
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const rawChildren = Children.toArray(children);

  const items = rawChildren
    .filter((child): child is ReactElement<TabItemProps> => {
      return isValidElement(child) && child.type === TabItemComponent;
    })
    .map((child, index) => ({
      ...child.props,
      tabId: `${baseId}-tab-${index}`,
      panelId: `${baseId}-panel-${index}`,
    }));

  const fallbackValue =
    items.find((item) => !item.disabled)?.value ?? items[0]?.value ?? "";

  const [internalValue, setInternalValue] = useState(() => {
    return defaultValue ?? fallbackValue;
  });

  const currentValue = isControlled ? value! : internalValue;

  const activeItem = items.find(
    (item) => item.value === currentValue && !item.disabled
  )
    ?? items.find((item) => !item.disabled)
    ?? items[0];

  const setValue = (nextValue: string) => {
    if (nextValue === currentValue) {
      return;
    }

    if (!isControlled) {
      setInternalValue(nextValue);
    }

    onValueChange?.(nextValue);
  };

  const focusTab = (index: number) => {
    tabRefs.current[index]?.focus();
  };

  const moveFocus = (currentIndex: number, direction: 1 | -1) => {
    const { length } = items;

    if (length === 0) {
      return;
    }

    let nextIndex = currentIndex;

    for (let step = 0; step < length; step += 1) {
      nextIndex = (nextIndex + direction + length) % length;
      const candidate = items[nextIndex];

      if (!candidate.disabled) {
        setValue(candidate.value);
        focusTab(nextIndex);
        return;
      }
    }
  };

  const focusEdge = (edge: "start" | "end") => {
    const iterable = edge === "start" ? items : [...items].reverse();
    const candidate = iterable.find((item) => !item.disabled);

    if (!candidate) {
      return;
    }

    const index = items.findIndex((item) => item.value === candidate.value);

    if (index !== -1) {
      setValue(candidate.value);
      focusTab(index);
    }
  };

  const handleKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    index: number
  ) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      moveFocus(index, 1);
      return;
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      moveFocus(index, -1);
      return;
    }

    if (event.key === "Home") {
      event.preventDefault();
      focusEdge("start");
      return;
    }

    if (event.key === "End") {
      event.preventDefault();
      focusEdge("end");
    }
  };

  if (!activeItem || items.length === 0) {
    return null;
  }

  const enabledItems = items.filter((item) => !item.disabled);
  const selectOptions = enabledItems.map((item) => {
    const label =
      typeof item.label === "string" || typeof item.label === "number"
        ? String(item.label)
        : item.value;

    return {
      value: item.value,
      label,
    };
  });
  const isSelectDisabled = selectOptions.length === 0;

  return (
    <div className={clsx(styles.tabs, className)}>
      <div className={styles.tabs__select}>
        <Select
          options={selectOptions}
          value={
            enabledItems.find((item) => item.value === activeItem.value)?.value
          }
          onChange={setValue}
          disabled={isSelectDisabled}
          placeholder="Выберите вкладку"
        />
      </div>
      <div
        className={clsx(styles.tabs__list, listClassName)}
        role="tablist"
        aria-orientation="horizontal"
      >
        {items.map((item, index) => {
          const isActive = item.value === activeItem.value;
          const disabled = item.disabled;

          return (
            <button
              key={item.value}
              ref={(node) => {
                tabRefs.current[index] = node;
              }}
              type="button"
              id={item.tabId}
              role="tab"
              className={clsx(
                styles.tabs__tab,
                isActive && styles["tabs__tab--active"],
                disabled && styles["tabs__tab--disabled"],
                tabClassName,
                item.className
              )}
              aria-selected={isActive}
              aria-controls={item.panelId}
              tabIndex={disabled ? -1 : isActive ? 0 : -1}
              disabled={disabled}
              onClick={() => {
                if (!disabled) {
                  setValue(item.value);
                }
              }}
              onKeyDown={(event) => handleKeyDown(event, index)}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      <div
        id={activeItem.panelId}
        role="tabpanel"
        aria-labelledby={activeItem.tabId}
        className={clsx(
          styles.tabs__panel,
          contentClassName,
          activeItem.panelClassName
        )}
      >
        {activeItem.children}
      </div>
    </div>
  );
};

export const Tabs = Object.assign(TabsRoot, {
  Item: TabItemComponent,
});

export default Tabs;
