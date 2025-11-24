// 달력 기간 설정 컴포넌트
import { useEffect, useMemo } from "react";
import { useFormContext, Controller } from "react-hook-form";
import type { FieldError as RHFFieldError } from "react-hook-form";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel
} from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { MIN_MONTH, MIN_YEAR, YEARS } from "./constants";
import type { CalendarFormValues } from "./schema";

export default function CalendarPeriod() {
  const {
    control,
    watch,
    setValue,
    formState: { errors }
  } = useFormContext<CalendarFormValues>();

  const selectedYear = watch("year");
  const isYearSelected = !!selectedYear;

  const availableMonths = useMemo(() => {
    if (!isYearSelected) return [];
    const currentYear = Number(selectedYear);
    const startMonth = currentYear === MIN_YEAR ? MIN_MONTH : 1;
    return Array.from({ length: 12 - startMonth + 1 }, (_, i) =>
      (startMonth + i).toString()
    );
  }, [selectedYear, isYearSelected]);

  // 연도가 변경되면 선택했던 월 초기화
  useEffect(() => {
    setValue("month", "");
  }, [selectedYear, setValue]);

  return (
    <Field>
      <FieldLabel>기간</FieldLabel>
      <FieldDescription>
        달력 기간은 현재 달 이후부터 가능합니다.
      </FieldDescription>
      <div className="flex gap-2">
        <Controller
          name="year"
          control={control}
          render={({ field }) => (
            <Select value={field.value} onValueChange={field.onChange}>
              <SelectTrigger className="min-w-42" aria-invalid={!!errors.year}>
                <SelectValue placeholder="연도" />
              </SelectTrigger>
              <SelectContent>
                {YEARS.map((year) => (
                  <SelectItem key={year} value={year}>
                    {year}년
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
        <Controller
          name="month"
          control={control}
          render={({ field }) => (
            <Select
              value={field.value}
              onValueChange={field.onChange}
              disabled={!isYearSelected}
            >
              <SelectTrigger aria-invalid={!!errors.month}>
                <SelectValue placeholder="월" />
              </SelectTrigger>
              <SelectContent>
                {availableMonths.map((month) => (
                  <SelectItem key={month} value={month}>
                    {month}월
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
      </div>
      <FieldError
        errors={[errors.year || errors.month].filter(
          (e): e is RHFFieldError => !!e
        )}
      />
    </Field>
  );
}
