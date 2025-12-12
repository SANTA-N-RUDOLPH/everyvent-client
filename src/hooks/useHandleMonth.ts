import type { Dayjs } from "dayjs";
import dayjs from "dayjs";
import { useEffect, useRef, useState } from "react";

export default function useHandleMonth(year: number, month: number) {
  const [currentYear, setCurrentYear] = useState(year);
  const [currentMonth, setCurrentMonth] = useState(month);

  const dayRef = useRef<Dayjs>(
    dayjs()
      .year(year)
      .month(month - 1)
  );

  useEffect(() => {
    setCurrentYear(year);
    setCurrentMonth(month);
    dayRef.current = dayjs()
      .year(year)
      .month(month - 1);
  }, [year, month]);

  const handlePreviousMonth = () => {
    dayRef.current = dayRef.current.subtract(1, "month"); // 한 달 전
    setCurrentYear(dayRef.current.year());
    setCurrentMonth(dayRef.current.month() + 1);
  };

  const handleNextMonth = () => {
    dayRef.current = dayRef.current.add(1, "month"); // 한 달 후
    setCurrentYear(dayRef.current.year());
    setCurrentMonth(dayRef.current.month() + 1);
  };

  return { currentYear, currentMonth, handlePreviousMonth, handleNextMonth };
}
