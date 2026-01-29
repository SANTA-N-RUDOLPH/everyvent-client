import { Label } from "@radix-ui/react-label";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
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

  const handleCreateTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isValid || day === null) return;
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
        <form
          className="w-full flex flex-col items-center justify-center gap-4"
          onSubmit={handleCreateTask}
        >
          <div className="w-full flex flex-col gap-1">
            <Label htmlFor="task" className="text-sm">
              task 이름
            </Label>
            <div className="w-full flex gap-2 space-between">
              <Input
                id="task"
                type="text"
                className="flex-[5] placeholder:text-xs"
                placeholder="예: 물 8잔 마시기, 30분 운동하기"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
              <Button
                type="submit"
                variant="main"
                className="flex-[1] gap-3"
                disabled={!isValid || isCreating}
              >
                {isCreating ? <Spinner /> : <>추가</>}
              </Button>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default CreateTask;
