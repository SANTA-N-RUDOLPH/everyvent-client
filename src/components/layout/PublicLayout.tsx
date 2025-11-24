import { Outlet } from "react-router";

export default function PublicdLayout() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Outlet />
    </div>
  );
}
