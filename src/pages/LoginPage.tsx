import Logo from "@/assets/everyvent-logo-basic.png";
import Kakao from "@/assets/login/kakao-logo.png";
import Naver from "@/assets/login/naver-logo.png";
import Google from "@/assets/login/google-logo.png";
import SocialLoginButton from "@/components/common/SocialLoginButton";

const baseURL = import.meta.env.VITE_API_BASE_URL;

export default function LoginPage() {
  type SocialProvider = "KAKAO" | "NAVER" | "GOOGLE";

  const handleLogin = (social: SocialProvider) => {
    switch (social) {
      case "KAKAO":
        // window.location.href = import.meta.env.VITE_KAKAO_REDIRECT_URL;
        window.location.href = `${baseURL}/oauth2/authorization/kakao`;
        break;
      case "NAVER":
        window.location.href = "";
        break;
      case "GOOGLE":
        window.location.href = "";
        break;
    }
  };

  return (
    <div className="bg-white/80 w-[440px] h-[520px] rounded-xl px-10 py-4">
      <div className="flex flex-col justify-center items-center">
        <img src={Logo} alt="로고" className="w-40 py-8" />
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-4 pb-12">
            <div className="text-2xl font-semibold">간편하게 시작하세요.</div>
            <div className="text-[#555555] text-xs">
              소셜 계정으로 빠르게 가입하고 서비스를 이용해보세요.
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <SocialLoginButton
              bgColor="bg-[#FEE500]"
              textColor="text-black/85"
              border="border-none"
              logo={Kakao}
              comment="카카오톡으로 시작하기"
              onClick={() => handleLogin("KAKAO")}
            />
            <SocialLoginButton
              bgColor="bg-[#03C75A]"
              textColor="text-white"
              border="border-none"
              logo={Naver}
              comment="네이버로 시작하기"
              onClick={() => {
                /* TODO: NAVER 로그인 */
              }}
            />
            <SocialLoginButton
              bgColor="bg-[#ffffff]"
              textColor="text-black"
              border="outline-1 outline-black/20"
              logo={Google}
              comment="Google로 시작하기"
              onClick={() => {
                /* TODO: GOOGLE 로그인 */
              }}
            />
          </div>
          {/* <div className="text-[#555555] text-xs py-10">
            계속 진행하면 <span className="text-[#92A4FF]">서비스 약관</span>및
            <span className="text-[#92A4FF]">개인정보 처리방침</span>에 동의한
            것으로 간주됩니다.
          </div> */}
        </div>
      </div>
    </div>
  );
}
