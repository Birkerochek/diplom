import clsx from "clsx";
import { Filter } from "lucide-react";

import { Select, SelectOption } from "@shared/ui";

import s from "./VolunteerEventsFilter.module.scss";

type VolunteerEventsFilterProps = {
  value: string;
  options: SelectOption[];
  onChange: (value: string) => void;
  className?: string;
};

export const VolunteerEventsFilter = ({
  value,
  options,
  onChange,
  className,
}: VolunteerEventsFilterProps) => (
  <div className={clsx(s.wrapper, className)}>
    <span className={s.icon} aria-hidden="true">
      <Filter size={18} />
    </span>
    <Select
      className={s.select}
      value={value}
      onChange={onChange}
      options={options}
      placeholder="Выберите направление"
    />
  </div>
);
