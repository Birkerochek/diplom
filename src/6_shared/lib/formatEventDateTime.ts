import { format, parseISO } from "date-fns";

const formatValue = (value: string, pattern: string) => {
  try {
    const date = parseISO(value);

    if (Number.isNaN(date.getTime())) {
      return value;
    }

    return format(date, pattern);
  } catch {
    return value;
  }
};

export const formatEventDate = (value: string) => formatValue(value, "dd.MM.yyyy");

export const formatEventTime = (value: string) => formatValue(value, "HH:mm");
