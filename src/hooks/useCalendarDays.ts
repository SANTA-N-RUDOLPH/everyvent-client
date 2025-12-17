import { createContext, useContext } from "react";
import type { Day } from "@/types/calendar";

interface CalendarContextValue {
  visibleDays: Day[];
}

export const CalendarContext = createContext<CalendarContextValue | null>(null);

export function useCalendarDays() {
  const context = useContext(CalendarContext);
  if (!context) {
    throw new Error("useCalendarDays must be used within a Calendar component");
  }
  return context;
}
