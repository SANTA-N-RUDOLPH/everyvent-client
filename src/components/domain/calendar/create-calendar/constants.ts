export const ADVENT_DAYS = Array.from({ length: 25 }, (_, i) => i + 1);
export const PRIVATE_VISIBILITY_VALUE = "private";

export const CATEGORYS = [
  { label: "자기계발", value: "self-improvement" },
  { label: "루틴·습관", value: "routine" },
  { label: "취미·창작", value: "creativity" },
  { label: "챌린지", value: "challenge" },
  { label: "추억·기록", value: "event" },
  { label: "기타", value: "etc" }
] as const;

export const VISIBILITIES = [
  { label: "전체 공개", value: "public" },
  { label: "팔로워 공개", value: "followers" },
  { label: "맞팔로우 공개", value: "mutuals" },
  { label: "비공개", value: "private" }
] as const;

export const COLORS = [
  { label: "민트", value: "#82DEAC" },
  { label: "블루", value: "#92A4FF" },
  { label: "라벤더", value: "#FBDFFF" },
  { label: "푸시아 핑크", value: "#F0ABFC" },
  { label: "라이트 블루", value: "#DBE1FF" },
  { label: "피치", value: "#FFD6D7" },
  { label: "옐로우", value: "#FFE5A0" },
  { label: "퍼플", value: "#D8B4FE" }
] as const;
