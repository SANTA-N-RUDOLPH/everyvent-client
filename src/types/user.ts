export type User = {
  id: number;
  nickname: string;
  email: string;
  introduction: string;
  profileImageKey: string;
  socialProvider: string;
  role: string;
  isNicknameRequired: boolean;
};

// export type imageUpload = {
//   filename: string;
//   contentType: string;
//   fileSize: number;
// };

export type imageUploadResponse = {
  presignedUrl: string;
  objectKey: string;
  expiresIn: number;
};
