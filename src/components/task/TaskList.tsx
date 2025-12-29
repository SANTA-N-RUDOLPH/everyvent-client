import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import TaskItem from "./TaskItem";

const TaskList = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>오늘의 task (0/3)</CardTitle>
      </CardHeader>
      <CardContent className="text-[#697282] flex flex-col justify-center items-center gap-1">
        {/* <div className="text-sm">아직 등록된 습관이 없습니다.</div>
        <div className="text-sm">새로운 습관을 추가해보세요!</div> */}
        <TaskItem />
        <TaskItem />
        <TaskItem />
      </CardContent>
    </Card>
  );
};

export default TaskList;
