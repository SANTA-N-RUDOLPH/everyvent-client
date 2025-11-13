import Sidebar from "./Sidebar";
import { useState } from "react";
import { Outlet } from "react-router";
import Header from "./Header";
import LoginPage from "@pages/LoginPage";
import ProfileSettingPage from "@pages/ProfileSettingPage";

export default function Layout() {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  // 수정 필요
  const [isLogined] = useState(true);
  const [isFirstLogin] = useState(true);

  return (
    <div className="bg-global-gradient h-screen w-full flex items-center justify-center">
      <div className="bg-white/40 backdrop-blur-lg rounded-2xl w-11/12 h-[90vh]">
        {isLogined && !isFirstLogin ? (
          <div className="w-full h-full flex gap-4 p-5">
            <div
              className={
                isOpen
                  ? "flex-[1] min-w-42 transition-all duration-300"
                  : "w-16 flex-none transition-all duration-300"
              }
            >
              <Sidebar isOpen={isOpen} onToggle={() => setIsOpen((o) => !o)} />
            </div>
            <div
              className={
                isOpen
                  ? "flex-[5] transition-all duration-300"
                  : "flex-1 transition-all duration-300"
              }
            >
              <main className="w-full h-full bg-white rounded-2xl">
                <Header />
                <Outlet />
              </main>
            </div>
          </div>
        ) : isLogined && isFirstLogin ? (
          <div className="w-full h-full flex justify-center items-center">
            <ProfileSettingPage />
          </div>
        ) : (
          <div className="w-full h-full flex justify-center items-center">
            <LoginPage />
          </div>
        )}
      </div>
    </div>
  );
}
