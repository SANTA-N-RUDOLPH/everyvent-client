import { Navigate, Outlet } from "react-router";
import { useAuthStore } from "@/stores/useAuthStore";

export default function ProtectedRoute() {
  const accessToken = useAuthStore((s) => s.accessToken);
  const user = useAuthStore((s) => s.user);

  if (!accessToken) {
    return <Navigate to="/login" replace />;
  }

  const isAdmin = (user?.role as string) === "ADMIN";

  if (!isAdmin) {
    return <Navigate to="/403" replace />;
  }

  return <Outlet />;
}
