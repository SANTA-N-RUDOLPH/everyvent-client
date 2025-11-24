// TODO: 로그인이 반드시 필요한 경로 정의

import HomePage from "@/pages/HomePage";
import CalendarPage from "@/pages/CalendarPage";

export const privatecRoutes = [
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/calendar",
    element: <CalendarPage />
  }
];
