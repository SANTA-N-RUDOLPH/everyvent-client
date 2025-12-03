import { fetchFollowings } from "@/api/fetchFollowings";
import { useQuery } from "@tanstack/react-query";

export function useFollowingsData(userId: number) {
  return useQuery({
    queryKey: ["followings", userId],
    queryFn: () => fetchFollowings(userId)
  });
}
