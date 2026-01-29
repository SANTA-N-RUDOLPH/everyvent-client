import { Card, CardContent } from "../ui/card";
import { FaRegTrashAlt } from "react-icons/fa";
import { Button } from "../ui/button";
import { FiEdit2 } from "react-icons/fi";
import { COLORMAP } from "@/types/task";
import { useEffect, useRef, useState } from "react";
import { TaskItemInput } from "../ui/input";
import { PiCheckBold } from "react-icons/pi";
import type { CalendarColor } from "@/types/calendarDetail";
import type { Task } from "@/types/task";
import { useDeleteTask } from "@/hooks/mutations/useDeleteTask";
import { Spinner } from "../ui/spinner";
import { usePatchTask } from "@/hooks/mutations/usePatchTask";

interface TaskItemProps {
  calendarId: number;
  color: CalendarColor;
  task: Task;
}

const TaskItem = ({ calendarId, color, task }: TaskItemProps) => {
  const itemColor = COLORMAP[color];

  const [openEdit, setOpendEdit] = useState<boolean>(false);
  const [value, setValue] = useState<string>(task.content);

  const inputRef = useRef<HTMLInputElement | null>(null);
  const saveBtnRef = useRef<HTMLButtonElement | null>(null);

  const { mutate: deleteMutate, isPending: isDeleting } =
    useDeleteTask(calendarId);
  const { mutate: updateMutate, isPending: isUpdating } =
    usePatchTask(calendarId);

  const handleUpdateTask = () => {
    updateMutate(
      { taskId: task.id, content: value.trim() },
      { onSuccess: () => setOpendEdit(false) }
    );
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") return;

    const trimmed = value.trim();
    if (!trimmed) return;
    handleUpdateTask();
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const next = e.relatedTarget as HTMLElement | null;

    if (next && saveBtnRef.current && saveBtnRef.current.contains(next)) return;

    setValue(task.content);
    setOpendEdit(false);
  };

  useEffect(() => {
    if (openEdit) {
      inputRef.current?.focus();
    }
  }, [openEdit]);

  useEffect(() => {
    setValue(task.content);
  }, [task.content]);

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
                onKeyDown={handleKeyDown}
                onBlur={handleBlur}
                ref={inputRef}
              />
            </div>
          ) : (
            <div>{value}</div>
          )}
        </div>
        <div className="flex justify-center items-center">
          {openEdit ? (
            <Button
              variant="ghost"
              onClick={handleUpdateTask}
              disabled={isUpdating}
              ref={saveBtnRef}
            >
              {isUpdating ? <Spinner /> : <PiCheckBold />}
            </Button>
          ) : (
            <Button variant="ghost" onClick={() => setOpendEdit(true)}>
              <FiEdit2 />
            </Button>
          )}
          <Button
            variant="ghost"
            className="hover:bg-[#FFF1F2]"
            onClick={() => {
              deleteMutate(task.id);
            }}
            disabled={isDeleting}
          >
            {isDeleting ? (
              <Spinner />
            ) : (
              <FaRegTrashAlt className="text-[#FA2E37]" />
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default TaskItem;
