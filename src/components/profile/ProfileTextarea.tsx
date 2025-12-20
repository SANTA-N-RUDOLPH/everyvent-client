import { cn } from "@/lib/utils";

interface ProfileTextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}

const ProfileTextarea = ({
  className,
  placeholder,
  maxLength,
  ...props
}: ProfileTextareaProps) => {
  return (
    <textarea
      placeholder={placeholder}
      maxLength={maxLength}
      className={cn(
        "w-[320px] h-[90px] rounded-lg shadow-[0_2px_6px_rgba(0,0,0,0.12)] p-2 placeholder:text-[#C1C1C1] placeholder:text-sm resize-none",
        className
      )}
      {...props}
    />
  );
};

export default ProfileTextarea;
