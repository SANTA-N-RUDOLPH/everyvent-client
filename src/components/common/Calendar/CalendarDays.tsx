import { useCalendarDays } from "@hooks/useCalendarDays";
// import type { Day } from "@/types/calendar";
// import { useState } from "react";
import { Calendar } from ".";

export default function CalendarDays() {
  const { visibleDays } = useCalendarDays();
  // const [selectedDay, setSelectedDay] = useState<Day | null>(null);

  return (
    <>
      {visibleDays.map((day, index) => (
        <Calendar.Day
          key={index}
          day={day}
          // selected={selectedDay?.date.isSame(day.date, "day")}
          // onClick={() => setSelectedDay(day)}
        />
      ))}
    </>
  );
}
