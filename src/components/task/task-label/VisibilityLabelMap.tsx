import type { CalendarVisibility } from "@/types/calendar";
import {
  FollowerTaskLabel,
  MutualTaskLabel,
  PrivateTaskLabel,
  PublicTaskLabel
} from "./TaskLabel";
import type { ReactElement } from "react";

export const VisibilityLabelMap: Record<CalendarVisibility, ReactElement> = {
  PUBLIC: <PublicTaskLabel />,
  PRIVATE: <PrivateTaskLabel />,
  FOLLOWER: <FollowerTaskLabel />,
  MUTUAL: <MutualTaskLabel />
};
