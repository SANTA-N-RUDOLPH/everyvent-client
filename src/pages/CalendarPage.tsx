import CalendarCard from "@/components/domain/calendar/CalendarCard";
import { Plus } from "lucide-react";
import { Link } from "react-router";

export default function CalendarPage() {
  return (
    <div className="h-full p-4 md:p-8 lg:p-10">
      <div className="grid grid-cols-1 justify-items-center gap-4 sm:grid-cols-2 md:gap-10 lg:grid-cols-3">
        <Link
          to="/calendar/new"
          className="flex w-full max-w-xs flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-[#92A4FF]/50 bg-white p-6 shadow-2xs transition-colors hover:bg-gray-50"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#92A4FF]">
            <Plus size={32} color="#ffffff" />
          </div>
          <div className="text-sm font-medium">새 달력 만들기</div>
        </Link>

        <CalendarCard
          colorHex="#123432"
          title="자바스크립트"
          description="공부하자"
          year={2025}
          month={12}
        />
        <CalendarCard
          colorHex="#123432"
          title="자바스크립트"
          description="공부하자"
          year={2025}
          month={12}
        />
      </div>
    </div>
  );
}
