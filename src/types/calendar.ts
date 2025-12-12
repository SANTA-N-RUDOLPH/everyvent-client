import type { Dayjs } from "dayjs";

export interface Day {
  date: Dayjs;
  isCurrentMonth: boolean;
  isToday: boolean;
}

export interface Month {
  days: Day[];
  month: number;
}

export interface Calendar {
  previousMonth: Month;
  currentMonth: Month;
  nextMonth: Month;
}
