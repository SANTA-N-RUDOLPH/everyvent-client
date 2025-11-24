// TODO: 라우트들을 최종적으로 통합하기
import HomePage from "@/pages/HomePage";
import LoginPage from "@/pages/LoginPage";
import ProfileSettingPage from "@/pages/ProfileSettingPage";
import CalendarPage from "@/pages/CalendarPage";
import "@/pages/auth/OAuthCallbackPage";

import { createBrowserRouter } from "react-router";
import Layout from "@/components/layout/Layout";
import OAuthCallbackPage from "@/pages/auth/OAuthCallbackPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "calendar", Component: CalendarPage },
      { path: "login", Component: LoginPage },
      { path: "profile-setting", Component: ProfileSettingPage }
    ]
  },
  {
    path: "/oauth/callback",
    Component: OAuthCallbackPage
  }
]);
