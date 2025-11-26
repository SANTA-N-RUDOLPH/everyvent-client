import HomePage from "@/pages/HomePage";
import LoginPage from "@/pages/LoginPage";
import ProfileSettingPage from "@/pages/ProfileSettingPage";
import CalendarPage from "@/pages/CalendarPage";
import OAuthCallbackPage from "@/pages/auth/OAuthCallbackPage";

import Layout from "@/components/layout/Layout";

import { createBrowserRouter } from "react-router";
import PublicRoute from "@/router/PublicRoute";
import PrivateRoute from "@/router/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },

      // Public Route
      {
        Component: PublicRoute,
        children: [{ path: "login", Component: LoginPage }]
      },

      // Private Route
      {
        Component: PrivateRoute,
        children: [
          { path: "calendar", Component: CalendarPage },
          { path: "profile-setting", Component: ProfileSettingPage }
        ]
      }
    ]
  },

  // 기타
  {
    path: "/oauth/callback",
    Component: OAuthCallbackPage
  }
]);
