// 유저 api

import axiosInstance from "./axiosInstance";

export const fetchMyProfile = async () => {
  const res = await axiosInstance.get("/api/users/me");
  return res.data;
};
