import { getUserInfo } from "@/api/userApi";
import { useQuery } from "@tanstack/react-query";
import { useAuthStore } from "@/stores/useAuthStore";

export function useInfoData() {
  const accessToken = useAuthStore((s) => s.accessToken);

  return useQuery({
    queryKey: ["userInfo"],
    queryFn: getUserInfo,
    enabled: Boolean(accessToken)
    // TODO: staleTime 설정 필요
  });
}
