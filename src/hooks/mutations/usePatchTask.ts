import { useMutation, useQueryClient } from "@tanstack/react-query";
import { patchTask } from "@/api/task";
import type { Task } from "@/types/task";

type PatchTaskInput = {
  taskId: number;
  content: string;
};

export function usePatchTask(calendarId: number) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ taskId, content }: PatchTaskInput) => {
      return patchTask(calendarId, taskId, content) as Promise<Task>;
    },

    onSuccess: (updatedTask) => {
      queryClient.setQueryData<Task[]>(
        ["calendar", "task", calendarId],
        (old) => {
          if (!old) return old;
          return old.map((t) => (t.id === updatedTask.id ? updatedTask : t));
        }
      );
    },

    onError: (error) => {
      console.error(error);
    }
  });
}

// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { patchTask } from "@/api/task";

// type PatchTaskInput = { taskId: number; content: string };

// export function usePatchTask(calendarId: number) {
//   const queryClient = useQueryClient();
//   return useMutation({
//     mutationFn: async ({ taskId, content }: PatchTaskInput) => {
//       return patchTask(calendarId, taskId, content);
//     },
//     onSuccess: () => {
//       queryClient.invalidateQueries({
//         queryKey: ["calendar", "task", calendarId]
//       });
//     },
//     onError: (error) => {
//       console.error(error);
//     }
//   });
// }
