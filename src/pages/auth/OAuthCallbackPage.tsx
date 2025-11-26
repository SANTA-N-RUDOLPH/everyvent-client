import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router";
import { useAuthStore } from "@/stores/useAuthStore";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default function OAuthCallbackPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { setTokens } = useAuthStore();

  useEffect(() => {
    const code = searchParams.get("code");
    console.log("authCode:", code);

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
          body: JSON.stringify({ code })
        });

        if (!response.ok) {
          throw new Error("토큰 교환 실패");
        }

        const { accessToken, refreshToken } = await response.json();

        setTokens(accessToken, refreshToken);

        // 로그인 완료 후 이동
        navigate("/", { replace: true });
      } catch (error) {
        console.error(error);
        alert("로그인 처리 중 오류가 발생했습니다.");
        navigate("/login", { replace: true });
      }
    };

    exchangeToken();
  }, [searchParams, navigate, setTokens]);

  return (
    <div className="w-full h-screen flex items-center justify-center text-lg">
      카카오 로그인 처리 중입니다...
    </div>
  );
}
