import { Label } from "@radix-ui/react-label";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { FaCheck } from "react-icons/fa6";

const CreateTask = () => {
  return (
    <Card className="flex-1">
      <CardHeader>
        <CardTitle>테스크 추가</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="w-full flex flex-col items-center justify-center gap-4">
          <div className="w-full flex flex-col gap-1">
            <Label htmlFor="task" className="text-sm">
              task 이름
            </Label>
            <Input
              id="task"
              type="text"
              className="w-full placeholder:text-xs"
              placeholder="예: 물 8잔 마시기, 30분 운동하기"
            />
          </div>
          <div className="w-full flex justify-between gap-3">
            <Button variant="main" className="flex-1 gap-3">
              <FaCheck />
              추가
            </Button>
            <Button variant="outline" className="flex-1">
              취소
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default CreateTask;
