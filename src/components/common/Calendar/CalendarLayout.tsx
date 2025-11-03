import type { PropsWithChildren } from "react";

// 달력의 전체 레이아웃 담당하는 컴포넌트
export function CalendarLayout({ children }: PropsWithChildren) {
  return <div className="grid grid-cols-7 bg-white">{children}</div>;
}
