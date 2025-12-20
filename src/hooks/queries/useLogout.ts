import { useQueryClient } from "@tanstack/react-query";
import { useAuthStore } from "@/stores/useAuthStore";

export const useLogout = () => {
  const queryClient = useQueryClient();
  const clearAuth = useAuthStore((s) => s.clearAuth);

  return () => {
    clearAuth();
    queryClient.removeQueries({ queryKey: ["userInfo"], exact: true });
  };
};
