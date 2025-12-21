import { patchUserIntroduction, patchUserNickname } from "@/api/userApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";

type PatchProfileInput = {
  name: string;
  introduction: string;
};

export function usePatchProfile() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async ({ name, introduction }: PatchProfileInput) => {
      const tasks = [patchUserNickname(name)];
      if (introduction.trim()) tasks.push(patchUserIntroduction(introduction));
      await Promise.all(tasks);
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["userInfo"] });
      navigate("/", { replace: true });
    }
  });
}
