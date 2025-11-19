import { useState } from "react";
import ProfileUpload from "@/assets/profile/ProfileUpload";
import InputField from "@/components/profile/InputField";
import { useNavigate } from "react-router";

const ProfileSettingPage = () => {
  const [name, setName] = useState<string>("");
  const [introduce, setIntroduce] = useState<string>("");

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 폼 제출 로직추가 필요

    navigate("/");
  };

  return (
    <div className="bg-white/80 w-[440px] h-[590px] rounded-xl p-10 overflow-y-auto overlay-scrollbar">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center"
      >
        <div className="text-2xl font-semibold pb-2">프로필 설정</div>
        <div className="text-md text-[#555555] font-regular">
          서비스 이용을 위한 기본 정보를 입력해주세요.
        </div>
        <ProfileUpload />
        <div className="flex flex-col gap-8 pt-6">
          <div className="flex flex-col gap-2">
            <div>
              <span className="text-[#555555] text-sm">별명</span>
              <span className="text-[#F24539]"> * </span>
            </div>
            <InputField
              as="input"
              value={name}
              onValueChange={setName}
              placeholder="다른 사용자에게 표시될 이름입니다."
            />
          </div>
          <div className="flex flex-col gap-2">
            <div>
              <span className="text-[#555555] text-sm">소개</span>
            </div>
            <InputField
              as="textarea"
              value={introduce}
              onValueChange={setIntroduce}
              placeholder="자신을 간단히 소개해주세요."
              length={introduce.length}
            />
          </div>
          <button
            type="submit"
            className="bg-[#92A4FF] w-[320px] h-[36px] text-white text-sm rounded-md"
          >
            완료
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileSettingPage;
