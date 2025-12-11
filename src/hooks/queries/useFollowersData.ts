import { fetchFollowers } from "@/api/follow";
import { useQuery } from "@tanstack/react-query";

export function useFollowersData(userId: number) {
  return useQuery({
    queryKey: ["followers", userId],
    queryFn: () => fetchFollowers(userId),
    enabled: !!userId
  });
}
