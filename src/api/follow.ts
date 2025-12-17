import axiosInstance from "./axiosInstance";

export async function fetchFollowers(userId: number) {
  const response = await axiosInstance.get(`/api/follow/${userId}/followers`);

  return response.data;
}

export async function fetchFollowings(userId: number) {
  const response = await axiosInstance.get(`/api/follow/${userId}/followings`);

  return response.data;
}

export async function deleteFollower(targetId: number) {
  await axiosInstance.delete(`/api/follow/me/followers/${targetId}`);
}

export async function deleteFollowing(targetId: number) {
  await axiosInstance.delete(`/api/follow/me/followings/${targetId}`);
}
