// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { patchTask } from "@/api/task";

// type PatchTaskInput = {
//   calendarId: number;
//   taskId: number;
// };

// export function usePatchTask() {
//   const queryClient = useQueryClient();

//   return useMutation({
//     mutationFn: async ({ calendarId, taskId }: PatchTaskInput) => {
//       return patchTask(calendarId, taskId);
//     },

//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ["task"] });
//     },

//     onError: (error) => {
//       console.error(error);
//     }
//   });
// }
