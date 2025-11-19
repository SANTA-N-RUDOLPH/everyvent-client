import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useDebounce } from "@/hooks/useDebounce";
import ProfileUpload from "@/assets/profile/ProfileUpload";
import InputField from "@/components/profile/InputField";

const ProfileSettingPage = () => {
  const [name, setName] = useState<string>("");
  const debouncedName = useDebounce(name, 500);
  const [isUnique, setIsUnique] = useState<boolean | null>(null);

  const [introduce, setIntroduce] = useState<string>("");
  const MAX_INTRO_LEN = 100;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 폼 제출 코드 필요
  };

  useEffect(() => {
    if (!debouncedName.trim()) {
      setIsUnique(null);
      return;
    }

    const checkNickname = async () => {
      // 테스트용
      setIsUnique(debouncedName !== "bomi");
    };

    checkNickname();
  }, [debouncedName]);

  return (
    <div className="bg-white/80 w-[440px] h-[600px] rounded-xl p-10 overflow-y-auto overlay-scrollbar">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center"
      >
        <div className="text-2xl font-semibold pb-2">프로필 설정</div>
        <div className="text-md text-[#555555] font-regular">
          서비스 이용을 위한 기본 정보를 입력해주세요.
        </div>
        <ProfileUpload />
        <div className="flex flex-col gap-6 pt-6">
          <div className="flex flex-col gap-2">
            <div>
              <span className="text-[#555555] text-sm">별명</span>
              <span className="text-[#F24539]"> * </span>
            </div>
            <div className="flex flex-col gap-1">
              <InputField
                as="input"
                value={name}
                onValueChange={setName}
                placeholder="다른 사용자에게 표시될 이름입니다."
              />
              <span
                className={cn(
                  "pl-1 text-xs",
                  isUnique !== null && !isUnique
                    ? "text-[#F24539]"
                    : "opacity-0"
                )}
              >
                이미 사용 중인 별명입니다.
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div>
              <span className="text-[#555555] text-sm">소개</span>
            </div>
            <div className="flex flex-col gap-1.5">
              <InputField
                as="textarea"
                value={introduce}
                onValueChange={setIntroduce}
                placeholder="자신을 간단히 소개해주세요."
                maxLength={MAX_INTRO_LEN}
              />
              <span className="self-end pr-1 text-[#C1C1C1] text-xs">{`${introduce.length}/${MAX_INTRO_LEN}`}</span>
            </div>
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
