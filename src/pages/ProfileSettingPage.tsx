// import { useState, useEffect } from "react";
import { z } from "zod";
// import { useDebounce } from "@/hooks/useDebounce";
import ProfileUpload from "@/components/profile/ProfileUpload";
import ProfileInput from "@/components/profile/ProfileInput";
import ProfileTextarea from "@/components/profile/ProfileTextarea";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// import { cn } from "@/lib/utils";
// import { patchNickname } from "@/api/userApi";

const schema = z.object({
  // TODO: 프로필 설정 추가
  name: z.string().min(2, { message: "2 글자 이상 입력해주세요." }),
  introduction: z
    .string()
    .max(100, { message: "100자 이상 입력이 불가능합니다." })
});

type ProfileFormField = z.infer<typeof schema>;

const ProfileSettingPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<ProfileFormField>({
    defaultValues: {
      name: "",
      introduction: ""
    },
    resolver: zodResolver(schema),
    mode: "onBlur"
  });

  const onSubmit: SubmitHandler<ProfileFormField> = async () => {
    // TODO: api 연결 필요
  };

  // const debouncedName = useDebounce(name, 500);
  // const [isUnique, setIsUnique] = useState<boolean | null>(null);

  const MAX_INTRO_LEN = 100;

  // useEffect(() => {
  //   if (!debouncedName.trim()) {
  //     setIsUnique(null);
  //     return;
  //   }

  //   const checkNickname = async () => {
  //     // TODO: patchNickname 으로 쓸 수 있는 닉네임인지 서버에 리퀘스트
  //     setIsUnique(debouncedName !== "bomi");
  //   };

  //   checkNickname();
  // }, [debouncedName]);

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
                className={errors?.name ? "border-[#F24539]" : ""}
              />
              {/* <span
                className={cn(
                  "pl-1 text-xs",
                  isUnique !== null && !isUnique
                    ? "text-[#F24539]"
                    : "opacity-0"
                )}
              >
                이미 사용 중인 별명입니다.
              </span> */}
              {errors?.name && (
                <span className="pl-1 text-xs text-[#F24539]">
                  {errors.name.message}
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
                {...register("introduction")}
                placeholder="자신을 간단히 소개해주세요."
                maxLength={MAX_INTRO_LEN}
                className={errors?.introduction ? "border-[##F24539]" : ""}
              />

              {/* <span className="self-end pr-1 text-[#C1C1C1] text-xs">{`${introduce.length}/${MAX_INTRO_LEN}`}</span> */}
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
