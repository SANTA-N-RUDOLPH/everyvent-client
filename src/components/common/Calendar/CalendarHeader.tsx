import clsx from "clsx";
import type { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  day: string;
}

// 일 월 화 수 목 금 토 - 요일 헤더
export function CalendarHeader({ day, className, ...props }: Props) {
  return (
    <div
      className={clsx("text-center font-semibold text-xs px-4 mb-2", className)}
      {...props}
    >
      {day}
    </div>
  );
}
