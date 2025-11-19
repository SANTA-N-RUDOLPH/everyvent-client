import { cn } from "@/lib/utils";

interface InputFieldProps {
  as: "input" | "textarea";
  value: string;
  onValueChange: (value: string) => void;
  placeholder: string;
}

const baseClass =
  "w-[320px] rounded-lg shadow-[0_2px_6px_rgba(0,0,0,0.18)] p-2 placeholder:text-[#C1C1C1] placeholder:text-sm";

const InputField = ({
  as = "input",
  value,
  onValueChange,
  placeholder
}: InputFieldProps) => {
  if (as === "textarea") {
    return (
      <textarea
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
        placeholder={placeholder}
        className={cn(baseClass, "h-[80px] resize-none")}
      />
    );
  }

  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onValueChange(e.target.value)}
      placeholder={placeholder}
      className={cn(baseClass, "h-[36px]")}
    />
  );
};

export default InputField;
