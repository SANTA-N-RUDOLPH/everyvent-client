// TODO: 라우트들을 최종적으로 통합하기
import Layout from "@/components/layout/Layout";
import HomePage from "@pages/HomePage";
import LoginPage from "@pages/LoginPage";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "login", Component: LoginPage }
    ]
  }
]);
