interface SocialLoginButtonProps {
  bgColor: string;
  textColor: string;
  border: string;
  logo: string;
  comment: string;
  onClick: () => void;
}

const SocialLoginButton = ({
  bgColor,
  textColor,
  border,
  logo,
  comment,
  onClick
}: SocialLoginButtonProps) => {
  return (
    <button
      type="button"
      className={`h-10 w-67 ${bgColor} flex items-center rounded-md px-0.5 ${border}`}
      onClick={onClick}
    >
      <img src={logo} className="h-10 w-10" />
      <div
        className={`flex h-full w-full items-center justify-center ${textColor} font-regular pr-4 text-xs`}
      >
        {comment}
      </div>
    </button>
  );
};

export default SocialLoginButton;
