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

export type CalendarVisibility = "PUBLIC" | "PRIVATE" | "FOLLOWER" | "MUTUAL";

export type CalendarColor =
  | "MINT"
  | "BLUE"
  | "LAVENDER"
  | "FUCHSIA_PINK"
  | "LIGHT_RED"
  | "PEACH"
  | "YELLOW"
  | "PURPLE";

export const COLORMAP: Record<CalendarColor, string> = {
  MINT: "bg-[#82DEAC]",
  BLUE: "bg-[#92A4FF]",
  LAVENDER: "bg-[#FBDFFF]",
  FUCHSIA_PINK: "bg-[#F0ABFC]",
  LIGHT_RED: "bg-[#FD685E]",
  PEACH: "bg-[#FFD6D7]",
  YELLOW: "bg-[#FFE5A0]",
  PURPLE: "bg-[#D8B4FE]"
};
