import type { Calendar, Day } from "@/types/calendar";
import type { Dayjs } from "dayjs";
import dayjs from "dayjs";

function createDay({ isCurrentMonth, isToday, date }: Day) {
  return { isCurrentMonth, isToday, date };
}

function generateDays(month: Dayjs, isCurrentMonth: boolean) {
  return Array.from({ length: month.daysInMonth() }, (_, i) => {
    const date = month.date(i + 1);

    return createDay({
      isCurrentMonth,
      isToday: date.isSame(dayjs(), "day"),
      date
    });
  });
}

function generateMonth(month: Dayjs, isCurrentMonth: boolean) {
  return {
    month: month.month(),
    days: generateDays(month, isCurrentMonth)
  };
}

export function createCalendar(year: number, month: number): Calendar {
  const currentMonth = dayjs().year(year).month(month);
  const previousMonth = currentMonth.subtract(1, "month");
  const nextMonth = currentMonth.add(1, "month");

  return {
    previousMonth: generateMonth(previousMonth, false),
    currentMonth: generateMonth(currentMonth, true),
    nextMonth: generateMonth(nextMonth, false)
  };
}
