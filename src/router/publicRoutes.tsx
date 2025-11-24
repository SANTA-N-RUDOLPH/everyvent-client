// TODO: 로그인이 필요 없는 경로 정의

import LoginPage from "@/pages/LoginPage";
import ProfileSettingPage from "@/pages/ProfileSettingPage";

export const publicRoutes = [
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/profile-setting",
    element: <ProfileSettingPage />
  }
];
