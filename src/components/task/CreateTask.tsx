import { Label } from "@radix-ui/react-label";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { FaCheck } from "react-icons/fa6";
import { useState, useMemo } from "react";
import { usePostTask } from "@/hooks/mutations/usePostTask";
import { Spinner } from "../ui/spinner";
import { useSearchParams } from "react-router";
import { makeDay } from "@/utils/date";

interface CreateTaskProps {
  calendarId: number;
}

const CreateTask = ({ calendarId }: CreateTaskProps) => {
  const [searchParams] = useSearchParams();
  const date = searchParams.get("date");

  const [value, setValue] = useState<string>("");

  const { mutate: createMutate, isPending: isCreating } =
    usePostTask(calendarId);

  const day = useMemo(() => (date ? makeDay(date) : null), [date]);
  const isValid = day !== null && value.trim().length > 0;

  const handleCreateTask = (e: React.MouseEvent) => {
    e.preventDefault();
    if (day === null) return;
    createMutate(
      {
        day: day,
        content: value
      },
      {
        onSuccess: () => setValue("")
      }
    );
  };

  if (date === null) {
    return (
      <Card className="flex-1">
        <CardContent className="text-sm text-gray-500">
          날짜를 선택해주세요.
        </CardContent>
      </Card>
    );
  }

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
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
          <div className="w-full flex justify-between gap-3">
            <Button
              variant="main"
              className="flex-1 gap-3"
              onClick={handleCreateTask}
              disabled={!isValid || isCreating}
            >
              {isCreating ? (
                <Spinner />
              ) : (
                <>
                  <FaCheck />
                  추가
                </>
              )}
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
