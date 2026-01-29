import { postTask } from "@/api/task";
import type { Task } from "@/types/task";
import { useQueryClient, useMutation } from "@tanstack/react-query";

type PostTaskInput = {
  day: number;
  content: string;
};

export function usePostTask(calendarId: number) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ day, content }: PostTaskInput) => {
      return postTask(calendarId, day, content) as Promise<Task[]>;
    },
    onSuccess: (newTask) => {
      if (!newTask[0]) return;

      queryClient.setQueryData<Task[]>(
        ["calendar", "task", calendarId],

        (old) => {
          if (!old) return newTask;
          return [...old, ...newTask];
        }
      );
    },
    onError: (error) => {
      console.error(error);
      // TODO: 추가 에러처리 필요
    }
  });
}
