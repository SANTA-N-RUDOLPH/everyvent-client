import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTask } from "@/api/task";

export function useDeleteTask(calendarId: number) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (taskId: number) => {
      return deleteTask(calendarId, taskId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["calendar", "task", calendarId]
      });
    },
    onError: (error) => {
      console.error(error);
      // TODO: 추가 에러처리 필요
    }
  });
}
