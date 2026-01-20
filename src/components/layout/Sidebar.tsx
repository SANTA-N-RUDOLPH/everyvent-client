import { FiChevronLeft, FiChevronRight, FiSettings } from "react-icons/fi";
import { BiHomeAlt } from "react-icons/bi";
import { LuCalendar, LuSearch } from "react-icons/lu";
import {
  IoFileTraySharp,
  IoLogInOutline,
  IoLogOutOutline
} from "react-icons/io5";
import { NavLink, useNavigate } from "react-router";
import { cn } from "@/lib/utils";
import Logo from "@/assets/everyvent-logo-basic.png";
import { useAuthStore } from "@/stores/useAuthStore";
import { Button } from "../ui/button";
import { useLogout } from "@/hooks/queries/useLogout";

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

const itemClass = (isActive: boolean, isOpen: boolean) =>
  cn(
    isActive
      ? "bg-[#E0E4FC] border-r-2 border-[#93A5FF] font-semibold"
      : "text-gray-800",
    "flex items-center gap-2 rounded-lg py-1.5",
    isOpen ? "pl-2 pr-3" : "justify-center"
  );

const Sidebar = ({ isOpen, onToggle }: SidebarProps) => {
  const { accessToken } = useAuthStore();
  const isLoggedIn = !!accessToken;

  const navigate = useNavigate();
  const logout = useLogout();

  return (
    <div className="h-full flex flex-col bg-white rounded-2xl transition-all duration-300">
      {/* 로고 영역 */}
      <div
        className={cn(
          "flex-[1] flex items-center border-b border-[#EFEFEF] px-3 py-2",
          isOpen ? "justify-between" : "justify-center"
        )}
      >
        {isOpen && (
          // <div className="flex gap-2 items-center">
          //   <span className="bg-profile-gradient text-sm font-bold rounded-xl p-1.5 border-2 border-gray-300">
          //     Ve
          //   </span>
          //   <span className="font-bold">Ventixe</span>
          // </div>
          // 로고 -> 사이즈 결정 필요
          <img
            src={Logo}
            alt="everyvent-logo"
            className={cn(
              "transition-all duration-300",
              isOpen ? "w-32" : "w-10"
            )}
          />
        )}
        <button onClick={onToggle}>
          {isOpen ? <FiChevronLeft size={18} /> : <FiChevronRight size={18} />}
        </button>
      </div>

      {/* 메뉴 */}
      <div className="flex flex-[10] flex-col gap-3 p-2">
        <NavLink
          to="/"
          end
          className={({ isActive }) => itemClass(isActive, isOpen)}
        >
          <BiHomeAlt size={18} />
          {isOpen && <span className="text-sm">홈</span>}
        </NavLink>

        <NavLink
          to="/calendars"
          className={({ isActive }) => itemClass(isActive, isOpen)}
        >
          <LuCalendar size={18} />
          {isOpen && <span className="text-sm">캘린더</span>}
        </NavLink>

        <NavLink
          to="/finds"
          className={({ isActive }) => itemClass(isActive, isOpen)}
        >
          <LuSearch size={18} />
          {isOpen && <span className="text-sm">탐색</span>}
        </NavLink>

        <NavLink
          to="/received"
          className={({ isActive }) => itemClass(isActive, isOpen)}
        >
          <IoFileTraySharp size={18} />
          {isOpen && <span className="text-sm">수신함</span>}
        </NavLink>

        <NavLink
          to="/settings"
          className={({ isActive }) => itemClass(isActive, isOpen)}
        >
          <FiSettings size={18} />
          {isOpen && <span className="text-sm">설정</span>}
        </NavLink>
      </div>

      {/* 로그아웃 */}
      {isLoggedIn ? (
        <Button
          variant="login"
          onClick={logout}
          className={cn(
            "flex flex-[0.5] items-center gap-2 border-t border-[#EFEFEF] py-2",
            isOpen ? "pl-5" : "justify-center"
          )}
        >
          <IoLogOutOutline size={18} />
          {isOpen && "로그아웃"}
        </Button>
      ) : (
        <Button
          variant="login"
          onClick={() => navigate("/login")}
          className={cn(
            "flex flex-[0.5] items-center gap-2 border-t border-[#EFEFEF] py-2",
            isOpen ? "pl-5" : "justify-center"
          )}
        >
          <IoLogInOutline size={18} />
          {isOpen && "로그인"}
        </Button>
      )}
    </div>
  );
};

export default Sidebar;
