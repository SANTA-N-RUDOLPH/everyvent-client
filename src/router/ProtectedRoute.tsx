import { Navigate, Outlet } from "react-router";
import { useAuthStore } from "@/stores/useAuthStore";
import { useInfoData } from "@/hooks/queries/useInfoData";
import { Spinner } from "@/components/ui/spinner";

export default function ProtectedRoute() {
  const accessToken = useAuthStore((s) => s.accessToken);
  const { data: user, isLoading } = useInfoData();

  if (!accessToken) {
    return <Navigate to="/login" replace />;
  }

  if (isLoading) {
    return (
      <div className="flex h-full items-center justify-center">
        <Spinner className="size-6 text-gray-500" />
      </div>
    );
  }

  const isAdmin = user?.role === "ADMIN";

  if (!isAdmin) {
    return <Navigate to="/403" replace />;
  }

  return <Outlet />;
}
