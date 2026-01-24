export type CalendarVisibility = "PUBLIC" | "PRIVATE" | "FOLLOWER" | "MUTUAL";

export type CalendarColor =
  | "MINT"
  | "BLUE"
  | "LAVENDER"
  | "FUCHSIA_PINK"
  | "LIGHT_RED"
  | "PEACH"
  | "YELLOW"
  | "PURPLE";

export type CalendarCategory =
  | "SELF_IMPROVEMENT"
  | "ROUTINE"
  | "CREATIVITY"
  | "CHALLENGE"
  | "EVENT"
  | "ECT";

export type CalendarDetail = {
  id: number;
  userId: number;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  previewStartDate: string;
  previewEndDate: string;
  visibility: CalendarVisibility;
  color: CalendarColor;
  category: CalendarCategory;
  originalCalendarId: null | number;
  scrappable: boolean;
  scrapCount: number;
};
