import type { CalendarVisibility } from "@/types/calendarDetail";
import { Card, CardTitle, CardHeader } from "../ui/card";
import { VisibilityLabelMap } from "./task-label/VisibilityLabelMap";

interface TaskDataProps {
  visibility: CalendarVisibility;
}

const TaskDate = ({ visibility }: TaskDataProps) => {
  return (
    <Card className="flex-1">
      <CardHeader>
        <CardTitle className="h-2 flex justify-between">
          {/* 라벨 정보 및 날짜 받아오기 필요 */}
          <span>2025년 12년 24일 수요일</span>
          {VisibilityLabelMap[visibility]}
        </CardTitle>
      </CardHeader>
    </Card>
  );
};

export default TaskDate;
