import { useState } from "react";
import { z } from "zod";
import ProfileUpload from "@/components/profile/ProfileUpload";
import ProfileInput from "@/components/profile/ProfileInput";
import ProfileTextarea from "@/components/profile/ProfileTextarea";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { patchNickname } from "@/api/userApi";
import { useNavigate } from "react-router";
import { cn } from "@/lib/utils";

const schema = z.object({
  // TODO: 프로필 이미지 설정 추가
  name: z.string().min(2, { message: "2 글자 이상 입력해주세요." }),
  introduction: z.string().max(100)
});

type ProfileFormField = z.infer<typeof schema>;

const MAX_INTRO_LEN = 100;

const ProfileSettingPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch
  } = useForm<ProfileFormField>({
    defaultValues: {
      name: "",
      introduction: ""
    },
    resolver: zodResolver(schema),
    mode: "onBlur"
  });

  const navigate = useNavigate();
  const introductionValue = watch("introduction") ?? "";

  const [error, setError] = useState<string | null>(null);
  const nameErrorMessage = errors.name?.message ?? error;

  const onSubmit: SubmitHandler<ProfileFormField> = async (data) => {
    setError(null);
    const response = await patchNickname(data.name);
    console.log("response: ", response);
    if (!response.ok) {
      switch (response.status) {
        case 400:
          setError("입력 값이 유효하지 않습니다");
          return;
        case 401:
        case 404:
          setError("인증되지 않았거나 찾을 수 없는 사용자입니다.");
          return;
        case 409:
          setError("이미 사용 중인 닉네임입니다.");
          return;
        default:
          setError(response.message ?? "오류가 발생했습니다");
          return;
      }
    }

    switch (response.status) {
      case 200:
        console.log("닉네임 변경 성공", response.data);
        navigate("/", { replace: true });
        return;
    }
  };

  return (
    <div className="bg-white/80 w-[440px] h-[600px] rounded-xl p-10 overflow-y-auto overlay-scrollbar">
      <div className="flex flex-col items-center justify-center">
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
              <ProfileInput
                {...register("name")}
                placeholder="다른 사용자에게 표시될 이름입니다."
                className={nameErrorMessage ? "border-red-500" : ""}
              />
              {nameErrorMessage && (
                <span className="pl-1 text-xs text-[#F24539]">
                  {nameErrorMessage}
                </span>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div>
              <span className="text-[#555555] text-sm">소개</span>
            </div>
            <div className="flex flex-col gap-1.5">
              <ProfileTextarea
                {...register("introduction", {
                  onChange: (e) => {
                    const value = e.target.value.slice(0, 100);
                    e.target.value = value;
                  }
                })}
                placeholder="자신을 간단히 소개해주세요."
                maxLength={MAX_INTRO_LEN}
                className={errors?.introduction ? "border-red-500" : ""}
              />

              <div
                className={cn(
                  "flex",
                  introductionValue.length === MAX_INTRO_LEN
                    ? "justify-between"
                    : "justify-end"
                )}
              >
                {introductionValue.length === MAX_INTRO_LEN && (
                  <span className="text-xs text-[#F24539]">
                    소개는 최대 100자까지 입력 가능합니다.
                  </span>
                )}
                <span className="pr-1 text-[#C1C1C1] text-xs">{`${introductionValue.length}/${MAX_INTRO_LEN}`}</span>
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={handleSubmit(onSubmit)}
            disabled={isSubmitting}
            className="bg-[#92A4FF] w-[320px] h-[36px] text-white text-sm rounded-md"
          >
            완료
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettingPage;
