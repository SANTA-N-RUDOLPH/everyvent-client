import { Controller, useFormContext } from "react-hook-form";
import type { FieldError as RHFFieldError } from "react-hook-form";
import type { CalendarFormValues } from "./schema";
import {
  ADVENT_DAYS,
  PRIVATE_VISIBILITY_VALUE,
  VISIBILITIES
} from "./constants";
import { useEffect, useMemo } from "react";
import {
  Field,
  FieldContent,
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

// 공개범위, 미리보기 기간 설정 컴포넌트
export default function CalendarVisibility() {
  const {
    control,
    watch,
    setValue,
    formState: { errors }
  } = useFormContext<CalendarFormValues>();

  const selectedYear = watch("year");
  const selectedMonth = watch("month");
  const selectedVisibility = watch("visibility");
  const previewStartDate = watch("previewStartDate");

  const isPreviewVisible =
    selectedYear &&
    selectedMonth &&
    selectedVisibility &&
    selectedVisibility !== PRIVATE_VISIBILITY_VALUE;

  const dateOptions = useMemo(() => {
    if (!selectedYear || !selectedMonth) return [];
    return ADVENT_DAYS.map((day) => {
      const formattedMonth = selectedMonth.padStart(2, "0");
      const formattedDay = day.toString().padStart(2, "0");
      const value = `${selectedYear}-${formattedMonth}-${formattedDay}`;
      const label = `${selectedMonth}월 ${day}일`;
      return { value, label, dayNumber: day };
    });
  }, [selectedYear, selectedMonth]);

  // 연도나 월이 변경되면 미리보기 기간 초기화
  useEffect(() => {
    setValue("previewStartDate", "");
    setValue("previewEndDate", "");
  }, [selectedYear, selectedMonth, setValue]);
  return (
    <>
      <Controller
        name="visibility"
        control={control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldContent>
              <FieldLabel>공개 범위</FieldLabel>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </FieldContent>
            <Select
              name={field.name}
              value={field.value}
              onValueChange={field.onChange}
            >
              <SelectTrigger
                id="visibility"
                aria-invalid={fieldState.invalid}
                className="max-w-42"
              >
                <SelectValue placeholder="선택" />
              </SelectTrigger>
              <SelectContent>
                {VISIBILITIES.map((visibility) => (
                  <SelectItem key={visibility.value} value={visibility.value}>
                    {visibility.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Field>
        )}
      />

      {isPreviewVisible && (
        <Field>
          <FieldLabel>미리보기 기간</FieldLabel>
          <FieldDescription>
            {`${selectedMonth}월 1일부터 25일 사이에서 설정해주세요.`}
          </FieldDescription>

          <div className="flex items-center gap-2">
            <Controller
              name="previewStartDate"
              control={control}
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger
                    className="min-w-42"
                    aria-invalid={!!errors.previewStartDate}
                  >
                    <SelectValue placeholder="시작일" />
                  </SelectTrigger>
                  <SelectContent>
                    {dateOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
            <span>~</span>
            <Controller
              name="previewEndDate"
              control={control}
              render={({ field }) => (
                <Select
                  value={field.value}
                  onValueChange={field.onChange}
                  disabled={!previewStartDate}
                >
                  <SelectTrigger
                    className="min-w-42"
                    aria-invalid={!!errors.previewEndDate}
                  >
                    <SelectValue placeholder="종료일" />
                  </SelectTrigger>
                  <SelectContent>
                    {dateOptions
                      .filter(
                        (option) => option.value >= (previewStartDate || "")
                      )
                      .map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                  </SelectContent>
                </Select>
              )}
            />
          </div>
          <FieldError
            errors={[errors.previewStartDate || errors.previewEndDate].filter(
              (e): e is RHFFieldError => !!e
            )}
          />
        </Field>
      )}
    </>
  );
}
