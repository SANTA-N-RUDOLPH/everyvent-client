// TODO: 추후 개발 시 수정

import axios from "axios";

// API 서버의 기본 URL을 설정
const baseURL = "https://jsonplaceholder.typicode.com"; // 예시 API 서버

const axiosInstance = axios.create({
  baseURL: baseURL
  // 필요에 따라 타임아웃, 헤더 등을 추가
  // timeout: 5000,
  // headers: { 'Content-Type': 'application/json' },
});

export default axiosInstance;
