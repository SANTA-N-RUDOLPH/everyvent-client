import axiosInstance from "./axiosInstance";

export const getCalendarDetail = async (calendarId: number) => {
  const res = await axiosInstance.get(`/api/calendars/${calendarId}`);
  return res.data;
};
