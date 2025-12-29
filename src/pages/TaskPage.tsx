import { SmallCalendar } from "@/components/common/SmallCalendar";
import TaskDate from "@/components/task/TaskDate";
import CreateTask from "@/components/task/CreateTask";
import TaskList from "@/components/task/TaskList";

const TaskPage = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-4 overflow-y-auto">
      <div className="self-start">
        <div className="flex gap-2">
          <div className="m-1.5 h-4 w-4 rounded-xl bg-[#82DEAC]"></div>
          <div>
            <div className="text-xl font-semibold">자바스크립트 부수기</div>
            <div className="text-sm text-[#697282]">
              자바스크립트를 부수기 위한..!
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col lg:flex-row gap-4">
        {/* 달력 */}
        <div className="w-full lg:w-[320px]">
          <SmallCalendar year={2025} month={12} />
        </div>
        <div className="w-full flex flex-col gap-2 flex-wrap">
          {/* 테스크 날짜 */}
          <TaskDate />
          {/* 테스크 추가 카드 */}
          <CreateTask />
          {/* 테스트 목록 */}
          <TaskList />
        </div>
      </div>
    </div>
  );
};

export default TaskPage;
