import { Controller, useFormContext } from "react-hook-form";
import type { CalendarFormValues } from "./schema";
import {
  Field,
  FieldContent,
  FieldError,
  FieldLabel
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea
} from "@/components/ui/input-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { CATEGORYS, COLORS } from "./constants";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { enforceMaxLength } from "@/utils/form";

// 제목, 설명, 카테고리, 색상 컴포넌트
export default function CalendarBasicInfo() {
  const { control } = useFormContext<CalendarFormValues>();

  return (
    <>
      <Controller
        name="title"
        control={control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel>제목</FieldLabel>
            <div className="relative">
              <Input
                {...field}
                placeholder="달력 제목을 입력해주세요."
                autoComplete="off"
                onChange={(e) => enforceMaxLength(e, 20, field.onChange)}
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground font-medium">
                {field.value?.length || 0}/20
              </div>
            </div>
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />

      <Controller
        name="description"
        control={control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel>설명</FieldLabel>
            <InputGroup>
              <InputGroupTextarea
                {...field}
                placeholder="달력에 대한 설명을 입력해주세요."
                rows={6}
                className="min-h-16 resize-none"
                onChange={(e) => enforceMaxLength(e, 100, field.onChange)}
              />
              <InputGroupAddon align="block-end">
                <InputGroupText className="tabular-nums">
                  {field.value?.length || 0}/100
                </InputGroupText>
              </InputGroupAddon>
            </InputGroup>
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />

      <Controller
        name="category"
        control={control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldContent>
              <FieldLabel>카테고리</FieldLabel>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </FieldContent>
            <Select
              name={field.name}
              value={field.value}
              onValueChange={field.onChange}
            >
              <SelectTrigger className="max-w-42">
                <SelectValue placeholder="선택" />
              </SelectTrigger>
              <SelectContent>
                {CATEGORYS.map((category) => (
                  <SelectItem key={category.value} value={category.value}>
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Field>
        )}
      />

      <Controller
        name="color"
        control={control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldContent>
              <FieldLabel>색상</FieldLabel>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="flex flex-wrap gap-3"
              >
                {COLORS.map(({ label, value }) => (
                  <RadioGroupItem
                    key={value}
                    value={value}
                    id={`color-${value}`}
                    aria-label={label}
                    className="h-8 w-8 rounded-full transition-all hover:scale-105 data-[state=checked]:ring-2 data-[state=checked]:ring-muted-foreground [&_svg]:hidden"
                    style={{ backgroundColor: value }}
                  />
                ))}
              </RadioGroup>
            </FieldContent>
          </Field>
        )}
      />
    </>
  );
}
