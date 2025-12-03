import axiosInstance from "./axiosInstance";

export async function fetchFollowers(userId: number) {
  const response = await axiosInstance.get(`/api/follow/${userId}/followers`);

  return response.data;
}
