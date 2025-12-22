import Sidebar from "./Sidebar";
import { useState } from "react";
import { Outlet } from "react-router";
import Header from "./Header";

export default function DashboardLayout() {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <div className="bg-global-gradient h-screen w-full flex items-center justify-center">
      <div className="bg-white/40 backdrop-blur-lg rounded-2xl w-11/12 h-[90vh]">
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
              <div className="flex-1 min-h-0">
                <Outlet />
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
