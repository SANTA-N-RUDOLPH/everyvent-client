// type Participant = { src?: string; alt?: string };
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type CalendarProps = {
  colorHex: string; // 달력 색상 정보
  title: string; // 달력 제목
  description: string; // 달력 설명
  year: number; // 연도
  month: number; // 월
  className?: string;
  // alarm?: string; // 알림
  // participants?: Participant[];
  // totalParticipants?: number;
  // isPublic?: boolean; // 전체 공개/ 팔로워 공개/ 맞팔로우 공개/ 비공개
};

export default function CalendarCard({
  colorHex = "#8EA6FF",
  title,
  description,
  year,
  month,
  className = ""
  // alarm,
  // participants = [],
  // totalParticipants,
  // isPublic = true
}: CalendarProps) {
  return (
    <article
      className={`w-full max-w-xs border rounded-2xl border-black/20 bg-white shadow-md p-6 ${className}`}
    >
      <div className="flex items-center justify-between">
        <span
          className="w-3 h-3 rounded-full"
          style={{ backgroundColor: colorHex }}
        />

        <span className="text-gray-500 text-sm">전체 공개</span>
      </div>

      <div className="mt-2 space-y-1 mb-1">
        <p className="text-base font-semibold text-gray-900">{title}</p>
        <p className="text-sm">{description}</p>
        <span className="text-gray-600 text-sm">
          {year}년 {month}월
        </span>
      </div>

      <div className="flex items-center justify-between">
        {/* 알림 시간 */}
        <span className="text-sm">AM 10:00</span>

        <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage
              src="https://github.com/maxleiter.png"
              alt="@maxleiter"
            />
            <AvatarFallback>LR</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage
              src="https://github.com/evilrabbit.png"
              alt="@evilrabbit"
            />
            <AvatarFallback>ER</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </article>
  );
}
