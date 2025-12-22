import { useLocation } from "react-router";
import DashboardLayout from "./DashboardLayout";
import PublicLayout from "./PublicLayout";
import { AuthCacheSync } from "@/pages/auth/AuthCacheSync";

const PUBLIC_LAYOUT_PATHS = ["/login", "/profile-setting"];

const Layout = () => {
  const location = useLocation();
  const isPublicLayout = PUBLIC_LAYOUT_PATHS.includes(location.pathname);

  return (
    <>
      <AuthCacheSync />
      {isPublicLayout ? <PublicLayout /> : <DashboardLayout />}
    </>
  );
};

export default Layout;
