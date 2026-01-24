import { SmallCalendar } from "@/components/common/SmallCalendar";
import TaskDate from "@/components/task/TaskDate";
import CreateTask from "@/components/task/CreateTask";
import TaskList from "@/components/task/TaskList";
import { useParams, useSearchParams } from "react-router";
import { useCalendarDetail } from "@/hooks/queries/useCalendarDetail";
import { Spinner } from "@/components/ui/spinner";
import TaskHeader from "@/components/task/TaskHeader";

const TaskPage = () => {
  const { calendarId } = useParams();
  const id = Number(calendarId);

  // TODO: isError 추가
  const { data: calendar, isLoading } = useCalendarDetail(id);

  // 보류
  const [day] = useSearchParams();
  const selectedDay = Number(day.get("day") ?? 1);

  if (isLoading)
    return (
      <div className="h-full w-full flex justify-center items-center">
        <Spinner />
      </div>
    );

  if (!calendarId) return null;

  const date = calendar.startDate.split("-");
  const year = date[0];
  const month = date[1];

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-4 overflow-y-auto">
      {/* 헤더 */}
      <TaskHeader
        title={calendar.title}
        description={calendar.description}
        color={calendar.color}
      />
      <div className="w-full flex flex-col lg:flex-row gap-4">
        {/* 달력 */}
        <div className="w-full lg:w-[320px]">
          <SmallCalendar year={year} month={month} />
        </div>
        <div className="w-full flex flex-col gap-2 flex-wrap">
          {/* 테스크 날짜 */}
          <TaskDate visibility={calendar.visibility} />
          {/* 테스크 추가 카드 */}
          <CreateTask />
          {/* 테스크 목록 */}
          <TaskList
            calendarId={calendar.id}
            selectedDay={selectedDay}
            color={calendar.color}
          />
        </div>
      </div>
    </div>
  );
};

export default TaskPage;
