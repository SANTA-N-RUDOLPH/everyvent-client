// 유저 api

import axiosInstance from "./axiosInstance";
import axios from "axios";

export const getProfile = async () => {
  const res = await axiosInstance.get("/api/users/me");
  return res.data;
};

export const patchNickname = async (nickname: string) => {
  try {
    const res = await axiosInstance.patch("/api/users/me/nickname", {
      nickname
    });
    return {
      ok: true,
      data: res.data,
      status: res.status
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return {
        ok: false,
        status: error?.response?.status,
        message:
          error.response?.data?.message ?? "알 수 없는 오류가 발생했습니다."
      };
    }
  }
  return {
    ok: false,
    status: null,
    message: "예상치 못한 오류가 발생했습니다."
  };
};
