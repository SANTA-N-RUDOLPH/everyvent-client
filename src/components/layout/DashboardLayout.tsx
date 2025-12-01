import Sidebar from "./Sidebar";
import { useState } from "react";
import { Outlet } from "react-router";
import Header from "./Header";

export default function DashboardLayout() {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <div className="bg-global-gradient flex h-screen w-full items-center justify-center">
      <div className="h-[90vh] w-11/12 rounded-2xl bg-white/40 backdrop-blur-lg">
        <div className="flex h-full w-full gap-4 p-5">
          <div
            className={
              isOpen
                ? "min-w-42 flex-[1] transition-all duration-300"
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
            <main className="h-full w-full rounded-2xl bg-white">
              <Header />
              <Outlet />
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
