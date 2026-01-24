import { useMutation, useQueryClient } from "@tanstack/react-query";
import { patchTask } from "@/api/task";

type PatchTaskInput = {
  taskId: number;
  content: string;
};

export function usePatchTask(calendarId: number) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ taskId, content }: PatchTaskInput) => {
      return patchTask(calendarId, taskId, content);
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
