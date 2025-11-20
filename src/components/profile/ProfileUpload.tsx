import ProfileBasic from "@/assets/profile/profile-basic.png";
import { MdOutlineUpload } from "react-icons/md";

const ProfileUpload = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative py-4">
        <img
          src={ProfileBasic}
          alt="프로필사진"
          className="w-[60px] h-[60px]"
        />
        <button className="absolute left-[45px] top-[55px] w-[22px] h-[22px] rounded-[100%] bg-[#92A4FF] flex justify-center items-center">
          <MdOutlineUpload className="text-white" />
        </button>
      </div>
      <div className="text-sm text-[#555555]">
        프로필 사진을 업로드해보세요.
      </div>
    </div>
  );
};

export default ProfileUpload;
