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
  const isDisabled = buttonProps?.disabled;

  return (
    <button
      {...buttonProps}
      className={clsx(
        "flex flex-col items-center text-xs font-medium rounded-xl transition-colors",
        isDisabled && "opacity-20 cursor-default",
        !isDisabled && selected && "bg-[#92A4FF]",
        !isDisabled && !selected && "hover:bg-gray-100",
        buttonProps?.className
      )}
    >
      <span
        {...textProps}
        className={clsx(
          "flex items-center justify-center w-6 h-10",
          isNotCurrentMonth && "text-gray-500",
          !isDisabled && selected && " text-white font-bold",
          textProps?.className
        )}
      >
        {day.date.date()}
      </span>
      <div>{children}</div>
    </button>
  );
}
