import useHandleMonth from "@/hooks/useHandleMonth";
import { Calendar } from "./Calendar";
import CalendarDays from "./Calendar/CalendarDays";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const WEEK_DAYS = ["일", "월", "화", "수", "목", "금", "토"];

interface SmallCalendarProps {
  year: number;
  month: number;
}

export function SmallCalendar({ year, month }: SmallCalendarProps) {
  const { currentYear, currentMonth, handlePreviousMonth, handleNextMonth } =
    useHandleMonth(year, month);

  return (
    <div className="mx-auto w-xs">
      <div className="rounded-2xl border border-black/5 bg-white shadow-sm">
        <div className="flex items-center justify-between px-4 mt-4 mb-2">
          <button
            type="button"
            onClick={handlePreviousMonth}
            className="flex items-center justify-center h-8 w-8 rounded-xl hover:bg-gray-100 text-gray-600"
            aria-label="이전 달"
          >
            <FiChevronLeft size={18} />
          </button>
          <span className="text-lg font-medium">
            {currentYear}년 {currentMonth}월
          </span>
          <button
            type="button"
            onClick={handleNextMonth}
            className="flex items-center justify-center h-8 w-8 rounded-xl hover:bg-gray-100 text-gray-600"
            aria-label="다음 달"
          >
            <FiChevronRight size={18} />
          </button>
        </div>

        <Calendar.Root year={currentYear} month={currentMonth}>
          <div className="p-2">
            <Calendar.Layout>
              {WEEK_DAYS.map((day) => (
                <Calendar.Header key={day} day={day} />
              ))}
              <CalendarDays />
            </Calendar.Layout>
          </div>
        </Calendar.Root>
      </div>
    </div>
  );
}
