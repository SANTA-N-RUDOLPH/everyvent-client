import { useAuthStore } from "@/stores/useAuthStore";
import { FaRegBell } from "react-icons/fa";
import { cn } from "@/lib/utils";

const Header = () => {
  const { user } = useAuthStore();
  const isLoggedIn = !!user;

  return (
    <div className="border-b border-[#E5E6EA] px-8 py-4">
      <div
        className={cn(
          "flex items-center justify-end gap-3",
          isLoggedIn ? "opacity-100" : "opacity-0"
        )}
      >
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F3F4F6] p-2"
        >
          <FaRegBell />
        </button>
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F3F4F6] text-sm font-bold">
          {user?.nickname.slice(0, 2)}
        </div>
        <div className="flex flex-col justify-center">
          <div className="text-base font-semibold">{user?.nickname}</div>
          <div className="flex gap-3 text-xs font-medium text-gray-500">
            <button type="button">팔로잉 7</button>
            <button type="button">팔로워 7</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
