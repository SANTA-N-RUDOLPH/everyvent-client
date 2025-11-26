import type { ChangeEvent } from "react";

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
