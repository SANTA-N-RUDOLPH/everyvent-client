import { useRef, useState, useEffect, type ChangeEvent } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { User, Trash2, Upload } from "lucide-react";
interface ProfileUploadProps {
  onSelectFile: (file: File | null) => void;
}

const ProfileUpload = ({ onSelectFile }: ProfileUploadProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const removeImage = () => {
    setPreviewUrl(null);
    onSelectFile(null);
  };

  const imageUploadHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    setPreviewUrl(url);

    onSelectFile(file);

    e.target.value = "";
  };

  useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl);
    };
  }, [previewUrl]);

  return (
    <div className="flex flex-col items-center">
      <div className="relative py-4">
        <div className="relative w-[100px] h-[100px] group">
          <Avatar key={previewUrl} className="h-full w-full border-gray-400">
            {previewUrl ? (
              <AvatarImage
                src={previewUrl}
                alt="프로필 이미지"
                className="object-cover"
              />
            ) : null}

            <AvatarFallback delayMs={0} className="bg-slate-100">
              <User className="w-12 h-12 text-gray-500" />
            </AvatarFallback>

            {previewUrl && (
              <button
                type="button"
                className="absolute inset-0 flex items-center justify-center rounded-full bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-200"
                onClick={removeImage}
              >
                <Trash2 className="text-white" size={28} />
              </button>
            )}
          </Avatar>
        </div>
        <input
          ref={inputRef}
          id="profile-upload"
          type="file"
          accept="image/png, image/jpeg"
          className="hidden"
          onChange={imageUploadHandler}
        />
        <label
          htmlFor="profile-upload"
          className="absolute left-[75px] top-[90px] w-[26px] h-[26px] rounded-full bg-[#92A4FF] flex justify-center items-center cursor-pointer hover:bg-[#7C8FFF]"
        >
          <Upload className="text-white w-4 h-4" />
        </label>
      </div>
    </div>
  );
};

export default ProfileUpload;
