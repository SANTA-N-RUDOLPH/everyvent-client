import { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useAuthStore } from "@/stores/useAuthStore";

export function AuthCacheSync() {
  const accessToken = useAuthStore((s) => s.accessToken);
  const queryClient = useQueryClient();

  useEffect(() => {
    if (!accessToken) {
      queryClient.removeQueries({ queryKey: ["user"] });
    }
  }, [accessToken, queryClient]);

  return null;
}
