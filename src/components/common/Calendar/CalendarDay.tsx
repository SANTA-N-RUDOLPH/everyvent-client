import type { Day } from "@/types/calendar";
import clsx from "clsx";
import type {
  ButtonHTMLAttributes,
  HTMLAttributes,
  PropsWithChildren
} from "react";

interface Props extends PropsWithChildren {
  day: Day;
  selected?: boolean;
  buttonProps?: ButtonHTMLAttributes<HTMLButtonElement>;
  textProps?: HTMLAttributes<HTMLSpanElement>;
}

// 달력의 각 날짜를 나타내는 컴포넌트
export function CalendarDay({
  day,
  selected,
  children,
  buttonProps,
  textProps
}: Props) {
  const isNotCurrentMonth = !day.isCurrentMonth;

  return (
    <button
      {...buttonProps}
      className={clsx(
        "flex flex-col items-center text-xs font-medium rounded-xl transition-colors hover:bg-gray-100",
        buttonProps?.className
      )}
    >
      <span
        {...textProps}
        className={clsx(
          "flex items-center justify-center w-6 h-10 rounded-full",
          isNotCurrentMonth && "text-gray-400",
          selected && "bg-purple-600 text-white font-bold",
          textProps?.className
        )}
      >
        {day.date.date()}
      </span>
      <div>{children}</div>
    </button>
  );
}
