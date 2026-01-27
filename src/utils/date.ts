// day 만 떼어내기
export function makeDay(date: string): number {
  const dateArray = date.split("-");
  const stringDay = dateArray[2];

  if (stringDay[0] === "0") return Number(stringDay[1]);
  else return Number(stringDay);
}

// date 분리
export function splitDate(date: string): number[] {
  return date.split("-").map((i) => Number(i));
}
