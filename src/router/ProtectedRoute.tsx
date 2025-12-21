import { Navigate, Outlet } from "react-router";
import { useAuthStore } from "@/stores/useAuthStore";
import { useInfoData } from "@/hooks/queries/useInfoData";

export default function ProtectedRoute() {
  const accessToken = useAuthStore((s) => s.accessToken);
  const { data: user } = useInfoData();

  if (!accessToken) {
    return <Navigate to="/login" replace />;
  }

  const isAdmin = (user?.role as string) === "ADMIN";

  if (!isAdmin) {
    return <Navigate to="/403" replace />;
  }

  return <Outlet />;
}
