import ProfileBasic from "@/assets/profile/profile-basic.png";
import { MdOutlineUpload } from "react-icons/md";
import { useRef, useState, useEffect, type ChangeEvent } from "react";
import { Avatar, AvatarImage } from "../ui/avatar";
import { FaRegTrashAlt } from "react-icons/fa";

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
          <Avatar className="h-full w-full">
            <AvatarImage
              src={previewUrl ?? ProfileBasic}
              alt="프로필사진"
              className="object-cover w-full h-full"
            />
            {/* 호버시 */}
            <button
              type="button"
              className="absolute inset-0 flex items-center justify-center rounded-full bg-black/30 backdrop-blur-sm opacity-0 scale-90 group-hover:opacity-100  group-hover:scale-100 transition-all duration-200"
              onClick={removeImage}
            >
              <FaRegTrashAlt className="text-white text-xl" size={30} />
            </button>
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
          <MdOutlineUpload className="text-white" />
        </label>
      </div>
    </div>
  );
};

export default ProfileUpload;
