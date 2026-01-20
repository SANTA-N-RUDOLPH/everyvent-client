import { Card, CardContent } from "../ui/card";
import { FaRegTrashAlt } from "react-icons/fa";
import { Button } from "../ui/button";
import { FiEdit2 } from "react-icons/fi";
import { COLORMAP, type CalendarColor } from "@/types/calendar";
import { useEffect, useRef, useState } from "react";
import { TaskItemInput } from "../ui/input";
import { PiCheckBold } from "react-icons/pi";

interface TaskItemProps {
  color: CalendarColor;
  content: string;
}

const TaskItem = ({ color, content }: TaskItemProps) => {
  const [openEdit, setOpendEdit] = useState<boolean>(false);
  const [value, setValue] = useState<string>(content);

  const itemColor = COLORMAP[color];

  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (openEdit) {
      inputRef.current?.focus();
    }
  }, [openEdit]);

  return (
    <Card className="px-4 py-2 w-full">
      <CardContent className="flex justify-between items-center p-0">
        <div className="flex items-center gap-4 text-sm">
          <div className={`h-3 w-3 rounded-xl ${itemColor}`}></div>

          {openEdit ? (
            <div className="flex flex-col">
              <TaskItemInput
                value={value}
                onChange={(e) => setValue(e.target.value)}
                ref={inputRef}
              />
            </div>
          ) : (
            <div>{content}</div>
          )}
        </div>
        <div className="flex justify-center items-center">
          {openEdit ? (
            <Button variant="ghost" onClick={() => setOpendEdit(false)}>
              <PiCheckBold />
            </Button>
          ) : (
            <Button variant="ghost" onClick={() => setOpendEdit(true)}>
              <FiEdit2 />
            </Button>
          )}
          <Button variant="ghost" className="hover:bg-[#FFF1F2]">
            <FaRegTrashAlt className="text-[#FA2E37]" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default TaskItem;
