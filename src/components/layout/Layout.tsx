// import { Outlet } from "react-router";

import Sidebar from "./Sidebar";
import Main from "./Main";

export default function Layout() {
  return (
    <div className="bg-global-gradient font-pretendard h-screen w-full flex items-center justify-center">
      <div className="bg-white/70 backdrop-blur-lg rounded-2xl w-11/12 h-[90vh]">
        {/* <nav>탑바</nav>
        <main>
          <Outlet />
        </main>
        <footer>푸터</footer> */}
        <div className="w-full h-full flex gap-4 p-5">
          <div className="flex-[1]">
            <Sidebar />
          </div>
          <div className="flex-[4]">
            <Main />
          </div>
        </div>
      </div>
    </div>
  );
}
