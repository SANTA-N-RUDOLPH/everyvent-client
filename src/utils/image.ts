export const IMAGE_EXTENSION_TO_CONTENT_TYPE = {
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
  png: "image/png"
} as const;

export type ImageExtension = keyof typeof IMAGE_EXTENSION_TO_CONTENT_TYPE;

export const getExtension = (file: File): ImageExtension | null => {
  const ext = file.name.split(".").pop()?.toLowerCase();
  if (!ext) return null;
  if (!(ext in IMAGE_EXTENSION_TO_CONTENT_TYPE)) return null;
  return ext as ImageExtension;
};

export const validateProfileImage = (file: File): ImageExtension | null => {
  const ext = getExtension(file);
  if (!ext) return null;

  const expectedType = IMAGE_EXTENSION_TO_CONTENT_TYPE[ext];
  if (file.type !== expectedType) return null;

  return ext;
};

export const getProfileImageUrl = (key?: string) =>
  key ? `${import.meta.env.VITE_S3_PUBLIC_BASE_URL}/${key}` : undefined;
