import { useState } from "react";

const AuthCodeInput = () => {
  const [code, setCode] = useState<string>();
  //   const [sendCode, setSendCode] = useState<boolean>(false);

  return (
    <div className="flex flex-col py-4 gap-2">
      <div className="flex justify-between items-center">
        <span className="text-[#555555] text-sm">휴대폰 번호</span>
        <button
          className="bg-[#92A4FF] rounded-md text-white text-xs p-1.5"
          //   disabled={sendCode}
        >
          인증번호 받기
        </button>
      </div>
      <input
        type="text"
        placeholder="`-` 를 제외하고 입력하세요."
        className="w-[360px] h-[40px] rounded-lg shadow-[0_2px_6px_rgba(0,0,0,0.18)] p-2 placeholder:text-[#C1C1C1] placeholder:text-sm"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
    </div>
  );
};

export default AuthCodeInput;
