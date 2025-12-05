import { cn } from "@/lib/utils";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

// const baseClass =
//   "w-[320px] rounded-lg shadow-[0_2px_6px_rgba(0,0,0,0.12)] p-2 placeholder:text-[#C1C1C1] placeholder:text-sm";

const ProfileInput = ({
  placeholder,
  className,
  ...props
}: InputFieldProps) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className={cn(
        "w-[320px] rounded-lg shadow-[0_2px_6px_rgba(0,0,0,0.12)] p-2 placeholder:text-[#C1C1C1] placeholder:text-sm h-[36px]",
        className
      )}
      {...props}
    />
  );
};

export default ProfileInput;
