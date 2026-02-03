import { patchUserIntroduction, patchUserNickname } from "@/api/userApi";
import { patchProfileImage } from "@/api/image";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import type { User } from "@/types/user";

type PatchProfileInput = {
  name: string;
  introduction: string;
  profileImageKey: string | null;
};

export function usePatchProfile() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async ({
      name,
      introduction,
      profileImageKey
    }: PatchProfileInput) => {
      const jobs: Promise<unknown>[] = [];

      if (name.trim()) jobs.push(patchUserNickname(name.trim()));

      if (introduction.trim())
        jobs.push(patchUserIntroduction(introduction.trim()));

      if (profileImageKey) jobs.push(patchProfileImage(profileImageKey));

      await Promise.all(jobs);
    },

    onSuccess: async (_data, variables) => {
      queryClient.setQueryData<User>(["user", "userInfo"], (prev) => {
        if (!prev) return prev;
        return {
          ...prev,
          nickname: variables.name.trim()
            ? variables.name.trim()
            : prev.nickname,
          introduction: variables.introduction.trim()
            ? variables.introduction.trim()
            : prev.introduction,
          profileImageKey: variables.profileImageKey ?? prev.profileImageKey
        };
      });

      await queryClient.invalidateQueries({ queryKey: ["user", "userInfo"] });

      navigate("/", { replace: true });
    },

    onError: () => {
      // TODO: 에러 처리 필요
    }
  });
}
