import { useCalendarDays } from "@/hooks/useCalendarDays";
import { Calendar } from ".";
import type { Day } from "@/types/calendar";
import type { Dayjs } from "dayjs";

interface CalendarDaysProps {
  selectedDate: Dayjs | null;
  onDateClick: (day: Day) => void;
}

export default function CalendarDays({
  selectedDate,
  onDateClick
}: CalendarDaysProps) {
  const { visibleDays } = useCalendarDays();

  return (
    <>
      {visibleDays.map((day, index) => (
        <Calendar.Day
          key={index}
          day={day}
          selected={selectedDate ? day.date.isSame(selectedDate, "day") : false}
          buttonProps={{
            disabled: day.date.date() > 25,
            onClick: () => onDateClick(day)
          }}
        />
      ))}
    </>
  );
}
