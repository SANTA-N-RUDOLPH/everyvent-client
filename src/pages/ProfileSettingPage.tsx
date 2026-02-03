import axios from "axios";
import { z } from "zod";
import ProfileUpload from "@/components/profile/ProfileUpload";
import ProfileInput from "@/components/profile/ProfileInput";
import ProfileTextarea from "@/components/profile/ProfileTextarea";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils";
import { usePatchProfile } from "@/hooks/mutations/usePatchProfile";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogDescription,
  AlertDialogAction
} from "@/components/ui/alert-dialog";
import { useState } from "react";
import { validateProfileImage } from "@/utils/image";
import { uploadProfileImage } from "@/services/profileImageUpload";

const schema = z.object({
  name: z.string().min(2, { message: "2 글자 이상 입력해주세요." }),
  introduction: z.string().max(100)
});

type ProfileFormField = z.infer<typeof schema>;

const MAX_INTRO_LEN = 100;

const ProfileSettingPage = () => {
  const {
    register,
    handleSubmit,
    setValue,
    setError,
    clearErrors,
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

  const introductionValue = watch("introduction") ?? "";

  const { mutateAsync, isPending } = usePatchProfile();
  const [openServerError, setOpenServerError] = useState(false);

  const onSubmit: SubmitHandler<ProfileFormField> = async (data) => {
    try {
      let profileImageKey: string | undefined;

      if (selectedFile) {
        profileImageKey = await uploadProfileImage(selectedFile);
      }

      await mutateAsync({
        name: data.name,
        introduction: data.introduction,
        profileImageKey
      });
    } catch (error: unknown) {
      console.error("프로필 수정 에러: ", error);
      if (axios.isAxiosError(error) && error.response?.status === 409) {
        setError("name", {
          type: "server",
          message: "이미 사용 중인 닉네임입니다."
        });
      } else {
        setOpenServerError(true);
      }
    }
  };

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);

  const onSelectFile = (file: File) => {
    const ext = validateProfileImage(file);
    if (!ext) {
      setFileError("jpg, jpeg, png 파일만 업로드할 수 있습니다.");
      setSelectedFile(null);
      return;
    }

    setFileError(null);
    setSelectedFile(file);
  };

  return (
    <>
      <div className="bg-white/80 w-[440px] h-[620px] rounded-xl p-10 overflow-y-auto overlay-scrollbar">
        <div className="flex flex-col items-center justify-center">
          <div className="text-2xl font-semibold pb-2">프로필 설정</div>
          <div className="text-md text-[#555555] font-regular">
            서비스 이용을 위한 기본 정보를 입력해주세요.
          </div>
          <ProfileUpload onSelectFile={onSelectFile} />
          {fileError && <p className="text-xs text-[#F24539]">{fileError}</p>}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-6 pt-6"
          >
            <div className="flex flex-col gap-2">
              <div>
                <span className="text-[#555555] text-sm">별명</span>
                <span className="text-[#F24539]"> * </span>
              </div>
              <div className="flex flex-col gap-1">
                <ProfileInput
                  {...register("name", {
                    onChange: () => {
                      clearErrors("name");
                    }
                  })}
                  placeholder="다른 사용자에게 표시될 이름입니다."
                  className={errors.name ? "border-red-500" : ""}
                />
                {errors.name && (
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
                  {...register("introduction", {
                    onChange: (e) => {
                      setValue("introduction", e.target.value.slice(0, 100));
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
              type="submit"
              disabled={isPending || isSubmitting}
              className="bg-[#92A4FF] w-[320px] h-[36px] text-white text-sm rounded-md"
            >
              {isPending || isSubmitting ? "저장 중..." : "완료"}
            </button>
          </form>
        </div>
      </div>
      <AlertDialog open={openServerError} onOpenChange={setOpenServerError}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>프로필 저장 실패</AlertDialogTitle>
            <AlertDialogDescription>
              잠시 후 다시 시도해주세요.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={() => setOpenServerError(false)}>
              확인
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default ProfileSettingPage;
