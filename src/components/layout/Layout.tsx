import { useState } from "react";
import PublicdLayout from "./PublicLayout";
import DashboardLayout from "./DashboardLayout";

const Layout = () => {
  const [isLogined] = useState<boolean>(false);

  return (
    <div className="bg-global-gradient h-screen w-full flex items-center justify-center">
      <div className="bg-white/40 backdrop-blur-lg rounded-2xl w-11/12 h-[90vh]">
        {isLogined ? <DashboardLayout /> : <PublicdLayout />}
      </div>
    </div>
  );
};

export default Layout;
