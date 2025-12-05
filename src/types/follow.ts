export interface FollowUserInfo {
  id: number;
  nickname: string;
  introduction: string;
}

export interface FollowItem {
  id: number;
  user: FollowUserInfo;
}
