import { CalendarContext } from "@/hooks/useCalendarDays";
import { createCalendar } from "@/utils/create-calendar";
import type { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  year: number;
  month: number;
}

export function CalendarRoot({ year, month, children }: Props) {
  const { previousMonth, currentMonth, nextMonth } = createCalendar(
    year,
    month - 1
  );

  const visibleDays = [];

  const firstDayOfWeek = currentMonth.days[0].date.day();
  if (firstDayOfWeek > 0) {
    const prevDaysToShow = previousMonth.days.slice(-firstDayOfWeek);
    visibleDays.push(...prevDaysToShow);
  }

  visibleDays.push(...currentMonth.days);

  const lastDayOfWeek =
    currentMonth.days[currentMonth.days.length - 1].date.day();
  if (lastDayOfWeek < 6) {
    const nextDaysToShow = nextMonth.days.slice(0, 6 - lastDayOfWeek);
    visibleDays.push(...nextDaysToShow);
  }

  return (
    <CalendarContext.Provider value={{ visibleDays }}>
      {children}
    </CalendarContext.Provider>
  );
}
