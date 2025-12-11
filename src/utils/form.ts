import type { ChangeEvent } from "react";

export const getToday = () => new Date();

export const getMinDate = () => {
  const today = getToday();
  return new Date(today.getFullYear(), today.getMonth() + 1, 1);
};

export const getAvailableYears = () => {
  const minDate = getMinDate();
  const minYear = minDate.getFullYear();
  return Array.from({ length: 5 }, (_, i) => (minYear + i).toString());
};

export const enforceMaxLength = (
  e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  limit: number,
  onChange: (value: string) => void
) => {
  const value = e.target.value;
  if (value.length > limit) {
    onChange(value.slice(0, limit));
  } else {
    onChange(value);
  }
};
