import { createBrowserRouter } from "react-router";
import PublicRoute from "@/router/PublicRoute";
import PrivateRoute from "@/router/PrivateRoute";
import Layout from "@/components/layout/Layout";
import ProtectedRoute from "./ProtectedRoute";
import HomePage from "@/pages/HomePage";
import LoginPage from "@/pages/LoginPage";
import ProfileSettingPage from "@/pages/ProfileSettingPage";
import CalendarPage from "@/pages/CalendarPage";
import OAuthCallbackPage from "@/pages/auth/OAuthCallbackPage";
import TaskPage from "@/pages/TaskPage";

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
          { path: "calendars", Component: CalendarPage },
          { path: "calendars/:calendarId/tasks", Component: TaskPage },
          { path: "profile-setting", Component: ProfileSettingPage }
        ]
      },

      // Protected Route
      {
        Component: ProtectedRoute,
        children: []
      }
    ]
  },

  {
    path: "/oauth/callback",
    Component: OAuthCallbackPage
  }
]);
