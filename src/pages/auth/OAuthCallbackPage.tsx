import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router";
import { useAuthStore } from "@/stores/useAuthStore";
import axiosInstance from "@/api/axiosInstance";

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
        const response = await axiosInstance.post(
          "/api/auth/exchange",
          { code },
          { signal: abortController.signal }
        );

        const { accessToken, refreshToken } = response.data;

        setTokens(accessToken, refreshToken);

        const meResponse = await axiosInstance.get("/api/users/me", {
          signal: abortController.signal
        });

        const me = meResponse.data;
        setUser(me);

        if (me.isNicknameRequired) {
          navigate("/profile-setting", { replace: true });
        } else {
          navigate("/", { replace: true });
        }
      } catch (error: unknown) {
        console.error(error);
        if (error instanceof DOMException && error.name === "AbortError")
          return;
        if (error instanceof Error && error.name === "CanceledError") return;
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
