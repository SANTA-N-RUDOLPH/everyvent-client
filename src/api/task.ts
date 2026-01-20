// 테스크 api
import type { Task } from "@/types/task";
import axiosInstance from "./axiosInstance";

// 모든 테스크 목록 조회
export const getAllTasks = async (calendarId: number) => {
  const res = await axiosInstance.get(`/api/calendars/${calendarId}/tasks`);
  return res.data;
};

// 테스크 생성
export const postTask = async (calendarId: number, { day, content }: Task) => {
  const res = await axiosInstance.post(`/api/calendars/${calendarId}/tasks`, {
    day,
    content
  });
  return res.data;
};

// 테스크 수정
export const patchTask = async (calendarId: number, taskId: number) => {
  const res = await axiosInstance.patch(
    `/api/calendars/${calendarId}/tasks/${taskId}`
  );
  return res.data;
};

// 테스크 삭제
export const deleteTask = async (calendarId: number, taskId: number) => {
  const res = await axiosInstance.delete(
    `/api/calendars/${calendarId}/tasks/${taskId}`
  );
  return res.data;
};

// 테스크 완료 상태 변경
export const patch = async (calendarId: number, taskId: number) => {
  const res = await axiosInstance.patch(
    `/api/calendars/${calendarId}/tasks/${taskId}/complete`
  );
  return res.data;
};
