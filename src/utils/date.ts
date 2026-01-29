// day 만 떼어내기
export function makeDay(date: string): number {
  const stringDay = date.split("-")[2];
  if (!stringDay) return NaN;
  const day = Number.parseInt(stringDay, 10);
  return Number.isNaN(day) ? NaN : day;
}

// date 분리
export function splitDate(date: string): number[] {
  return date.split("-").map((i) => Number(i));
}
