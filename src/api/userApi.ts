// 유저 api
import axiosInstance from "./axiosInstance";

export const getUserInfo = async () => {
  const res = await axiosInstance.get("/api/users/me");
  return res.data;
};

export const patchUserNickname = async (nickname: string) => {
  const res = await axiosInstance.patch("/api/users/me/nickname", { nickname });
  return res.data;
};

export const patchUserIntroduction = async (introduction: string) => {
  const res = await axiosInstance.patch("/api/users/me/introduction", {
    introduction
  });
  return res.data;
};
