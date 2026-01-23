import { parseISO } from "date-fns";

const pad = (value: number) => String(value).padStart(2, "0");

const parseDate = (value: string) => {
  try {
    const date = parseISO(value);
    return Number.isNaN(date.getTime()) ? null : date;
  } catch {
    return null;
  }
};

const formatUtcDate = (date: Date) => {
  const day = pad(date.getUTCDate());
  const month = pad(date.getUTCMonth() + 1);
  const year = date.getUTCFullYear();
  return `${day}.${month}.${year}`;
};

const formatUtcTime = (date: Date) => {
  const hours = pad(date.getUTCHours());
  const minutes = pad(date.getUTCMinutes());
  return `${hours}:${minutes}`;
};

export const formatEventDate = (value: string) => {
  const date = parseDate(value);
  return date ? formatUtcDate(date) : value;
};

export const formatEventTime = (value: string) => {
  const date = parseDate(value);
  return date ? formatUtcTime(date) : value;
};
