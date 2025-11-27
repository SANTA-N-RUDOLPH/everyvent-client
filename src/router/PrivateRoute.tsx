// TODO: 로그인이 반드시 필요한 경로 정의

import { Navigate, Outlet } from "react-router";
import { useAuthStore } from "@/stores/useAuthStore";

export default function PrivateRoute() {
  const accessToken = useAuthStore((state) => state.accessToken);
  const isLoggedIn = !!accessToken;

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}
