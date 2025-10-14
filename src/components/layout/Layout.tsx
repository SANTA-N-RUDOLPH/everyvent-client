import { Outlet } from "react-router";

export default function Layout() {
  return (
    <div className="bg-global-gradient font-pretendard h-screen w-full flex items-center justify-center">
      <div className="bg-white/70 backdrop-blur-lg rounded-2xl w-11/12 h-[90vh]">
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
