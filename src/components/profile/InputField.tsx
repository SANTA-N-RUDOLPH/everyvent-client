import { cn } from "@/lib/utils";

interface InputFieldProps {
  as: "input" | "textarea";
  value: string;
  onValueChange: (value: string) => void;
  placeholder: string;
  length?: number;
}

const baseClass =
  "w-[320px] rounded-lg shadow-[0_2px_6px_rgba(0,0,0,0.18)] p-2 placeholder:text-[#C1C1C1] placeholder:text-sm";

const InputField = ({
  as = "input",
  value,
  onValueChange,
  placeholder,
  length
}: InputFieldProps) => {
  if (as === "textarea") {
    return (
      <div className="flex flex-col text-[#C1C1C1] text-xs gap-1.5">
        <textarea
          value={value}
          onChange={(e) => onValueChange(e.target.value)}
          placeholder={placeholder}
          className={cn(baseClass, "h-[80px] resize-none")}
        />
        <span className="self-end pr-1">{`${length}/100`}</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col text-[#C1C1C1] text-xs">
      <input
        type="text"
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
        placeholder={placeholder}
        className={cn(baseClass, "h-[36px]")}
      />
      {/* <span>{`${length}/100`}</span> */}
    </div>
  );
};

export default InputField;
