// type Participant = { src?: string; alt?: string };
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Pencil, Trash2 } from "lucide-react";

type CalendarProps = {
  colorHex: string; // 달력 색상 정보
  title: string; // 달력 제목
  description: string; // 달력 설명
  className?: string;
  visibility: string;
  category: string;
  // alarm?: string; // 알림
  // participants?: Participant[];
  // totalParticipants?: number;
  // isPublic?: boolean; // 전체 공개/ 팔로워 공개/ 맞팔로우 공개/ 비공개
};

export default function CalendarCard({
  colorHex = "#8EA6FF",
  title,
  description,
  category,
  visibility,
  className = ""
  // alarm,
  // participants = [],
  // totalParticipants,
  // isPublic = true
}: CalendarProps) {
  return (
    <article
      className={`group flex h-full w-full max-w-xs cursor-pointer flex-col gap-4 rounded-2xl border border-black/20 bg-white p-6 shadow-md transition-all hover:bg-blue-100/60 ${className}`}
    >
      <div className="flex items-center justify-between">
        <span
          className="h-4 w-4 rounded-full"
          style={{ backgroundColor: colorHex }}
        />

        <div className="flex gap-2 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100">
          <button className="text-gray-500 transition-colors hover:text-blue-500">
            <Pencil className="h-5 w-5" />
          </button>
          <button className="text-gray-500 transition-colors hover:text-red-500">
            <Trash2 className="h-5 w-5" />
          </button>
          {/* <button className="text-gray-500 transition-colors hover:text-green-500">
          <Send className="h-5 w-5" />
        </button> */}
        </div>
      </div>

      <div className="flex-1">
        <p className="mb-3 flex items-center justify-between text-base font-semibold text-gray-800">
          {title}{" "}
          <span className="text-xs font-medium text-gray-600">
            {category}/{visibility}
          </span>
        </p>
        {/* <span className="text-sm text-gray-500">전체 공개</span> */}
        <p className="line-clamp-2 text-sm break-keep text-gray-600">
          {description}
        </p>
        {/* <span className="text-sm text-gray-600">
          {year}년 {month}월
        </span> */}
      </div>

      <div className="flex items-center justify-between">
        {/* 미리보기 기간 */}
        <span className="text-xs text-gray-500">
          미리보기 기간: 12/05 ~ 12/11
        </span>

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
