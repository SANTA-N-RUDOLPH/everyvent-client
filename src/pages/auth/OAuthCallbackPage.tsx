import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router";
import { useAuthStore } from "@/stores/useAuthStore";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default function OAuthCallbackPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { setTokens, setUser } = useAuthStore();

  useEffect(() => {
    const abortController = new AbortController();
    const code = searchParams.get("code");

    if (!code) {
      alert("유효하지 않은 접근입니다. (code 없음)");
      navigate("/login", { replace: true });
      return;
    }

    const exchangeToken = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/auth/exchange`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ code }),
          signal: abortController.signal
        });

        if (!response.ok) {
          throw new Error("토큰 교환 실패");
        }

        const { accessToken, refreshToken } = await response.json();

        setTokens(accessToken, refreshToken);

        const meResponse = await fetch(`${API_BASE_URL}/api/users/me`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}` // 헤더 셋팅
          }
        });

        if (!meResponse.ok) {
          // TODO: 에러시 어떻게 할지 결정
          throw new Error("유저 정보 조회 실패");
        }

        const me = await meResponse.json();
        setUser(me);

        if (me.isNicknameRequired) {
          navigate("/profile-setting", { replace: true });
        } else {
          navigate("/", { replace: true });
        }
      } catch (error) {
        console.error(error);
        if (error instanceof Error && error.name === "AbortError") return;
        alert("로그인 처리 중 오류가 발생했습니다.");
        navigate("/login", { replace: true });
      }
    };

    exchangeToken();

    return () => abortController.abort();
  }, [searchParams, navigate, setTokens, setUser]);

  return (
    <div className="w-full h-screen flex items-center justify-center text-lg">
      카카오 로그인 처리 중입니다...
    </div>
  );
}
