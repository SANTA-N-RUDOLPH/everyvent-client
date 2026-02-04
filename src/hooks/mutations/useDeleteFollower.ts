import { deleteFollower } from "@/api/follow";
import { useInfoData } from "../queries/useInfoData";
import type { FollowItem } from "@/types/follow";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useDeleteFollower() {
  const queryClient = useQueryClient();
  const { data: user } = useInfoData();

  return useMutation({
    mutationFn: (targetId: number) => deleteFollower(targetId),
    onSuccess: (_, variables) => {
      const targetId = variables;
      console.log(`id ${targetId}번 팔로워 삭제 완료`);

      const queryKey = ["user", "followers", user?.id];

      queryClient.setQueryData<FollowItem[]>(queryKey, (oldData) => {
        if (!oldData) return [];

        return oldData.filter((item) => item.user.userId !== targetId);
      });
    }
  });
}
