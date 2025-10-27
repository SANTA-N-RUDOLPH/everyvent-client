import { FaRegBell } from "react-icons/fa";

const Header = () => {
  return (
    <div className="border-b border-[#E5E6EA] px-8 py-4">
      <div className="flex gap-3 justify-end items-center">
        <button
          type="button"
          className="flex justify-center items-center w-10 h-10 bg-[#F3F4F6] rounded-full p-2"
        >
          <FaRegBell />
        </button>
        <div className="flex justify-center items-center w-10 h-10 bg-[#F3F4F6] rounded-full text-sm font-bold">
          보미
        </div>
        <div className="flex flex-col justify-center">
          <div className="text-base font-semibold">보미는 보미다</div>
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
