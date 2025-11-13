import AuthCodeInput from "@/components/profile/AuthCodeInput";
import ProfileUpload from "@assets/profile/ProfileUpload";

const ProfileSettingPage = () => {
  return (
    <div className="bg-white/80 w-[480px] h-[660px] bg-white rounded-xl p-10">
      <div className="flex flex-col items-center justify-center">
        <div className="text-2xl font-semibold pb-2">프로필 설정</div>
        <div className="text-md text-[#555555] font-regular">
          서비스 이용을 위한 기본 정보를 입력해주세요.
        </div>
        <ProfileUpload />
        <div className="flex flex-col py-4 gap-2">
          <div>
            <span className="text-[#555555] text-sm">별명</span>
            <span className="text-[#F24539]"> * </span>
          </div>
          <input
            placeholder="다른 사용자에게 표시될 이름입니다."
            className="w-[360px] h-[40px] rounded-lg shadow-[0_2px_6px_rgba(0,0,0,0.18)] p-2 placeholder:text-[#C1C1C1] placeholder:text-sm"
          />
        </div>
        <AuthCodeInput />
      </div>
    </div>
  );
};

export default ProfileSettingPage;
