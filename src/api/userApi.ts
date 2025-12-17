// 유저 api
import axiosInstance from "./axiosInstance";

export const getProfile = async () => {
  const res = await axiosInstance.get("/api/users/me");
  return res.data;
};

export const patchNickname = async (nickname: string) => {
  const res = await axiosInstance.patch("/api/users/me/nickname", { nickname });
  return res.data;
};

export const patchIntroduction = async (introduction: string) => {
  const res = await axiosInstance.patch("/api/users/me/introduction", {
    introduction
  });
  return res.data;
};
