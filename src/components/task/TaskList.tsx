import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import TaskItem from "./TaskItem";
import type { CalendarColor } from "@/types/calendarDetail";
import type { Task } from "@/types/task";

interface TaskListProps {
  taskList: Task[];
  calendarId: number;
  color: CalendarColor;
}

const TaskList = ({ taskList, calendarId, color }: TaskListProps) => {
  if (!calendarId) return null;

  return (
    <Card>
      <CardHeader>
        <CardTitle>오늘의 task ({taskList.length}/3)</CardTitle>
      </CardHeader>
      <CardContent className="text-[#697282] flex flex-col justify-center items-center gap-1">
        {taskList?.length != 0 ? (
          taskList?.map((t) => (
            <TaskItem
              key={t.id}
              calendarId={calendarId}
              color={color}
              task={t}
            />
          ))
        ) : (
          <>
            <div className="text-sm">아직 등록된 습관이 없습니다.</div>
            <div className="text-sm">새로운 습관을 추가해보세요!</div>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default TaskList;
