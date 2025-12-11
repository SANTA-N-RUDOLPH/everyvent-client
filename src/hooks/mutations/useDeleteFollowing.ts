import { deleteFollowing } from "@/api/follow";
import { useAuthStore } from "@/stores/useAuthStore";
import type { FollowItem } from "@/types/follow";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useDeleteFollowing() {
  const queryClient = useQueryClient();
  const { user } = useAuthStore();

  return useMutation({
    mutationFn: (targetId: number) => deleteFollowing(targetId),
    onSuccess: (_, variables) => {
      const targetId = variables;
      console.log(`id ${targetId}번 팔로우 취소 완료`);

      const queryKey = ["followings", user?.id];

      queryClient.setQueryData<FollowItem[]>(queryKey, (oldData) => {
        if (!oldData) return [];

        return oldData.filter((item) => item.user.id !== targetId);
      });
    }
  });
}
