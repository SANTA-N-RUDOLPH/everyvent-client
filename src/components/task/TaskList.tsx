import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { useParams } from "react-router";
import TaskItem from "./TaskItem";
import { useTasks } from "@/hooks/queries/useTasks";
import { Spinner } from "@/components/ui/spinner";
import type { CalendarColor } from "@/types/calendar";

interface TaskListProps {
  color: CalendarColor;
  selectedDay: number;
}

const TaskList = ({ color, selectedDay }: TaskListProps) => {
  const { calendarId } = useParams();
  const id = Number(calendarId);

  const { data: tasks, isLoading } = useTasks(id, selectedDay);

  const taskLength = tasks?.length ? tasks.length : 0;

  if (isLoading)
    return (
      <div className="h-full w-full flex justify-center items-center">
        <Spinner />
      </div>
    );

  if (!calendarId) return null;

  return (
    <Card>
      <CardHeader>
        <CardTitle>오늘의 task ({taskLength}/3)</CardTitle>
      </CardHeader>
      <CardContent className="text-[#697282] flex flex-col justify-center items-center gap-1">
        {tasks?.length != 0 ? (
          tasks?.map((t) => <TaskItem color={color} content={t.content} />)
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
