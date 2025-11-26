// import PublicdLayout from "./PublicLayout";
import DashboardLayout from "./DashboardLayout";
// import { useAuthStore } from "@/stores/useAuthStore";

const Layout = () => {
  // const { accessToken } = useAuthStore();
  // const isLoggedIn = !!accessToken;

  return (
    <div className="bg-global-gradient h-screen w-full flex items-center justify-center">
      <div className="bg-white/40 backdrop-blur-lg rounded-2xl w-11/12 h-[90vh]">
        {/* {isLoggedIn ? <DashboardLayout /> : <PublicdLayout />} */}
        <DashboardLayout />
      </div>
    </div>
  );
};

export default Layout;
