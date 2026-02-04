export interface FollowUserInfo {
  userId: number;
  nickname: string;
  profileImageKey: string | null;
  introduction: string;
}

export interface FollowItem {
  id: number;
  user: FollowUserInfo;
}
