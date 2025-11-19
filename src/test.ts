// CodeRabbit 테스트용 유틸 함수 (린트/타입 안전 버전)
export type User = {
  id: number;
  name: string;
  age: number;
};

type GroupedUsers = Record<string, User[]>;

export function groupUsersByAge(users: User[]): GroupedUsers {
  return users.reduce<GroupedUsers>((acc, user) => {
    const key = user.age >= 30 ? "30+" : "under30";

    if (!acc[key]) {
      acc[key] = [];
    }

    acc[key].push(user);
    return acc;
  }, {});
}

export function getAverageAge(users: User[]): number {
  if (users.length === 0) {
    return 0;
  }

  const total = users.reduce((sum, user) => sum + user.age, 0);
  const avg = total / users.length;

  return Math.round(avg * 100) / 100;
}
