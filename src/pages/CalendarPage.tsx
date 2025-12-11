import CalendarCard from "@/components/domain/calendar/CalendarCard";
import { Plus } from "lucide-react";
import { Link } from "react-router";

export default function CalendarPage() {
  return (
    <div className="h-full p-4 md:p-8 lg:p-12">
      <div className="mb-5 flex w-full items-center px-2">
        <div className="text-lg font-semibold text-gray-700">2025년 12월</div>
        <div className="mx-6 h-px flex-1 bg-gray-300"></div>
        <div className="text-base font-medium text-gray-500">2/3</div>
      </div>
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
          colorHex="#FD685E"
          title="자바스크립트"
          description="자바스크립트 개념 총 정리"
          visibility="전체 공개"
          category="자기계발"
        />
        <CalendarCard
          colorHex="#82DEAC"
          title="독서"
          description="한 달 한 권 독서하기"
          visibility="비공개"
          category="취미·창작"
        />
      </div>
    </div>
  );
}
