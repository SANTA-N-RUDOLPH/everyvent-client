import { COLORMAP } from "@/types/task";
import type { CalendarColor } from "@/types/calendarDetail";

interface TaskHeaderProps {
  title: string;
  description: string;
  color: CalendarColor;
}

const TaskHeader = ({ title, description, color }: TaskHeaderProps) => {
  const mainColor = COLORMAP[color];

  return (
    <div className="self-start">
      <div className="flex gap-2">
        <div className={`m-1.5 h-4 w-4 rounded-xl ${mainColor}`}></div>
        <div>
          <div className="text-xl font-semibold">{title}</div>
          <div className="text-sm text-[#697282]">{description}</div>
        </div>
      </div>
    </div>
  );
};

export default TaskHeader;
