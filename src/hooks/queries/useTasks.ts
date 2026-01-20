import { getAllTasks } from "@/api/task";
import type { Task } from "@/types/task";
import { useQuery } from "@tanstack/react-query";

export function useTasks(calendarId: number, selectedDay?: number) {
  return useQuery({
    queryKey: ["calendar", "task", calendarId],
    queryFn: () => getAllTasks(calendarId),
    enabled: !!calendarId,
    select: (tasks: Task[]) => {
      if (selectedDay == null) return tasks;
      return tasks.filter((t) => t.day === selectedDay);
    }
  });
}
