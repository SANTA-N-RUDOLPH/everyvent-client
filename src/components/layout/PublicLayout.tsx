import { Outlet } from "react-router";

export default function PublicLayout() {
  return (
    <div className="bg-global-gradient h-screen w-full flex items-center justify-center">
      <div className="bg-white/40 backdrop-blur-lg rounded-2xl w-11/12 h-[90vh]">
        <div className="w-full h-full flex justify-center items-center">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
