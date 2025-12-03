import axiosInstance from "./axiosInstance";

export async function fetchFollowings(userId: number) {
  const response = await axiosInstance.get(`/api/follow/${userId}/followings`);

  return response.data;
}
