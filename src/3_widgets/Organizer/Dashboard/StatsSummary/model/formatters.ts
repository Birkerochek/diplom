const numberFormatter = new Intl.NumberFormat("ru-RU");

export const formatNumber = (value: number): string =>
  numberFormatter.format(value);

export const formatPercentChange = (value: number | null): string => {
  if (value === null) {
    return "Нет данных для сравнения";
  }

  const rounded = Number(value.toFixed(1));
  const sign = rounded > 0 ? "+" : "";

  return `${sign}${rounded}% к прошлому месяцу`;
};
