import { getCalendarDetail } from "@/api/calendarDetail";
import { useQuery } from "@tanstack/react-query";

export function useCalendarDetail(calendarId: number) {
  return useQuery({
    queryKey: ["calendar", "detail", calendarId],
    queryFn: () => getCalendarDetail(calendarId),
    enabled: !!calendarId,
    staleTime: 60_000,
    refetchOnWindowFocus: true
  });
}
