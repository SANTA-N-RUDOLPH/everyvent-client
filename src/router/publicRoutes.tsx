import type { RouteObject } from "react-router";
import LoginPage from "@/pages/LoginPage";
import HomePage from "@/pages/HomePage";

export const publicRoutes: RouteObject[] = [
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/login",
    element: <LoginPage />
  }
];
