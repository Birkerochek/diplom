import type { ReactNode } from "react";

export type TabsProps = {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  className?: string;
  listClassName?: string;
  tabClassName?: string;
  contentClassName?: string;
  children: ReactNode;
};

export type TabItemProps = {
  value: string;
  label: ReactNode;
  disabled?: boolean;
  children?: ReactNode;
  className?: string;
  panelClassName?: string;
};
