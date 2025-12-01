import { Outlet } from "react-router";

export default function PublicLayout() {
  return (
    <div className="bg-global-gradient flex h-screen w-full items-center justify-center">
      <div className="h-[90vh] w-11/12 rounded-2xl bg-white/40 backdrop-blur-lg">
        <div className="flex h-full w-full items-center justify-center">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
