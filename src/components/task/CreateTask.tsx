import { Label } from "@radix-ui/react-label";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { SmallCalendar } from "../common/SmallCalendar";
import { FaCheck } from "react-icons/fa6";
import { FollowerTaskLabel } from "./task-label/TaskLabel";

const CreateTask = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-4 overflow-y-auto">
      <div className="w-full flex flex-col lg:flex-row gap-4">
        <div className="w-full lg:w-[320px]">
          <SmallCalendar year={2025} month={12} />
        </div>
        <div className="w-full flex flex-col gap-2 flex-wrap">
          {/* 테스크 날짜 */}
          <Card className="flex-1">
            <CardHeader>
              <CardTitle className="h-2 flex justify-between">
                <span>2025년 12년 24일 수요일</span>
                <FollowerTaskLabel />
              </CardTitle>
            </CardHeader>
          </Card>

          {/* 테스크 추가 카드 */}
          <Card className="flex-1">
            <CardHeader>
              <CardTitle>테스크 추가</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="w-full flex flex-col items-center justify-center gap-4">
                <div className="w-full flex flex-col gap-1">
                  <Label htmlFor="task" className="text-sm">
                    습관 이름
                  </Label>
                  <Input id="task" type="text" className="w-full" />
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

          {/* 테스트 목록 */}
          <Card>
            <CardHeader>
              <CardTitle>오늘의 task (0/3)</CardTitle>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CreateTask;
