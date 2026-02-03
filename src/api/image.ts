import axiosInstance from "./axiosInstance";

// presigned URL 요청
export const postPresignedUrl = async (
  filename: string,
  contentType: string,
  fileSize: number
) => {
  const res = await axiosInstance.post(
    "/api/users/me/profile/image/upload-url",
    { filename, contentType, fileSize }
  );
  return res.data;
};

// 서버에 objectKey 보내기
export const patchProfileImage = async (objectKey: string) => {
  const res = await axiosInstance.patch("/api/users/me/profile/image", {
    objectKey
  });
  return res.data;
};
