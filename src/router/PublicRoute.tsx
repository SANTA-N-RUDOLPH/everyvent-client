// TODO: 로그인이 필요 없는 경로 정의

import { Navigate, Outlet } from "react-router";
import { useAuthStore } from "@/stores/useAuthStore";

export default function PublicRoute() {
  const accessToken = useAuthStore((s) => s.accessToken);

  if (accessToken) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}
