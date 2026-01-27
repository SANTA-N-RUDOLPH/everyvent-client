import { SmallCalendar } from "@/components/common/SmallCalendar";
import TaskDate from "@/components/task/TaskDate";
import CreateTask from "@/components/task/CreateTask";
import TaskList from "@/components/task/TaskList";
import { useParams, useSearchParams } from "react-router";
import { useCalendarDetail } from "@/hooks/queries/useCalendarDetail";
import { Spinner } from "@/components/ui/spinner";
import TaskHeader from "@/components/task/TaskHeader";
import { splitDate } from "@/utils/date";
import { useTasks } from "@/hooks/queries/useTasks";
import { AnimatePresence, motion } from "framer-motion";

const TaskPage = () => {
  const { calendarId } = useParams();
  const id = Number(calendarId);

  const [searchParams] = useSearchParams();
  const dateParam = searchParams.get("date");

  // TODO: isError 추가
  const { data: calendar, isLoading: calendarDetailLoading } =
    useCalendarDetail(id);

  const date = dateParam ?? calendar?.startDate;

  const [year, month, day] = splitDate(date);
  const selectedDay = day ? Number(day) : 1;
  const { data: tasks = [] } = useTasks(id, selectedDay);

  if (calendarDetailLoading || !calendar) {
    return (
      <div className="h-full w-full flex justify-center items-center">
        <Spinner />
      </div>
    );
  }

  const taskLength = tasks.length ? tasks.length : 0;

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
          <AnimatePresence mode="wait">
            {taskLength < 3 && (
              <motion.div
                key="create-task"
                initial={{ opacity: 0, height: 0, y: -6 }}
                animate={{ opacity: 1, height: "auto", y: 0 }}
                exit={{ opacity: 0, height: 0, y: -6 }}
                transition={{ duration: 0.3 }}
                style={{ overflow: "hidden" }}
              >
                <CreateTask calendarId={calendar.id} />
              </motion.div>
            )}
          </AnimatePresence>
          {/* 테스크 목록 */}
          <TaskList
            taskList={tasks}
            calendarId={calendar.id}
            color={calendar.color}
          />
        </div>
      </div>
    </div>
  );
};

export default TaskPage;
