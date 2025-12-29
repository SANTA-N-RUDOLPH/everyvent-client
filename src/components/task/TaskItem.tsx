import { Card, CardContent } from "../ui/card";
import { FaRegTrashAlt } from "react-icons/fa";
import { Button } from "../ui/button";
import { FiEdit2 } from "react-icons/fi";

const TaskItem = () => {
  return (
    <Card className="px-4 py-2 w-full">
      <CardContent className="flex justify-between items-center p-0">
        <div className="flex items-center gap-4 text-sm">
          <div className="h-3 w-3 rounded-xl bg-[#82DEAC]"></div>
          <div>강의듣기</div>
        </div>
        <div className="flex justify-center items-center">
          <Button variant="ghost">
            <FiEdit2 />
          </Button>
          <Button variant="ghost" className="hover:bg-[#FFF1F2]">
            <FaRegTrashAlt className="text-[#FA2E37]" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default TaskItem;
