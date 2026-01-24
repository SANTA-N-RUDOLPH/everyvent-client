import type { CalendarColor } from "./calendarDetail";

export type Task = {
  id: number;
  day: number;
  isLocked: boolean;
  content: string;
  completed: boolean;
};

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
