import { ChangeEvent } from "react";
import { Search } from "lucide-react";
import clsx from "clsx";

import { Input } from "@shared/ui";

import s from "./VolunteerEventsSearch.module.scss";

type VolunteerEventsSearchProps = {
  value: string;
  onChange: (value: string) => void;
  className?: string;
};

export const VolunteerEventsSearch = ({
  value,
  onChange,
  className,
}: VolunteerEventsSearchProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className={clsx(s.wrapper, className)}>
      <Input
        value={value}
        onChange={handleChange}
        placeholder="Поиск мероприятий..."
        icon={<Search size={18} />}
        aria-label="Поиск мероприятий"
      />
    </div>
  );
};
