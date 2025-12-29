import { Card, CardTitle, CardHeader } from "../ui/card";
import { FollowerTaskLabel } from "./task-label/TaskLabel";

const TaskDate = () => {
  return (
    <Card className="flex-1">
      <CardHeader>
        <CardTitle className="h-2 flex justify-between">
          <span>2025년 12년 24일 수요일</span>
          <FollowerTaskLabel />
        </CardTitle>
      </CardHeader>
    </Card>
  );
};

export default TaskDate;
