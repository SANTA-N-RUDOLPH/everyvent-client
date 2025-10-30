interface LoginButtonProps {
  bgColor: string;
  textColor: string;
  border: string;
  logo: string;
  comment: string;
}

const LoginButton = ({
  bgColor,
  textColor,
  border,
  logo,
  comment
}: LoginButtonProps) => {
  return (
    <button
      type="button"
      className={`w-67 h-10 ${bgColor} flex items-center rounded-md px-0.5 ${border}`}
    >
      <img src={logo} className="w-10 h-10" />
      <div
        className={`w-full h-full flex justify-center items-center ${textColor} text-xs font-regular pr-4`}
      >
        {comment}
      </div>
    </button>
  );
};

export default LoginButton;
