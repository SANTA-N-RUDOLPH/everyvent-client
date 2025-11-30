import { useLocation } from "react-router";
import DashboardLayout from "./DashboardLayout";
import PublicLayout from "./PublicLayout";

const PUBLIC_LAYOUT_PATHS = ["/login", "/profile-setting"];

const Layout = () => {
  const location = useLocation();
  const isPublicLayout = PUBLIC_LAYOUT_PATHS.includes(location.pathname);

  return isPublicLayout ? <PublicLayout /> : <DashboardLayout />;
};

export default Layout;
