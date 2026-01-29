import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTask } from "@/api/task";
import type { Task } from "@/types/task";

export function useDeleteTask(calendarId: number) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (taskId: number) => {
      await deleteTask(calendarId, taskId);
      return taskId;
    },
    onSuccess: (deletedTaskId) => {
      queryClient.setQueryData<Task[]>(
        ["calendar", "task", calendarId],
        (old) => {
          if (!old) return old;
          return old.filter((t) => t.id !== deletedTaskId);
        }
      );
    },
    onError: (error) => {
      console.error(error);
      // TODO: 추가 에러처리 필요
    }
  });
}
