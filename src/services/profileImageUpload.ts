import { postPresignedUrl } from "@/api/image";
import { uploadToS3 } from "./s3Upload";
import { getExtension } from "@/utils/image";

export const uploadProfileImage = async (file: File) => {
  const ext = getExtension(file);
  if (!ext) {
    throw new Error("Invalid image extension");
  }

  const filename = file.name;
  const contentType = file.type;
  const fileSize = file.size;

  const { presignedUrl, objectKey } = await postPresignedUrl(
    filename,
    contentType,
    fileSize
  );
  await uploadToS3(presignedUrl, file, ext);

  return objectKey;
};
