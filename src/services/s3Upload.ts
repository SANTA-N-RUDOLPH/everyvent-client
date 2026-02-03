import {
  IMAGE_EXTENSION_TO_CONTENT_TYPE,
  type ImageExtension
} from "@/utils/image";

export const uploadToS3 = async (
  presignedUrl: string,
  file: File,
  ext: ImageExtension
) => {
  const res = await fetch(presignedUrl, {
    method: "PUT",
    headers: {
      "Content-Type": IMAGE_EXTENSION_TO_CONTENT_TYPE[ext]
    },
    body: file
  });

  if (!res.ok) {
    throw new Error("S3 upload failed");
  }
};
