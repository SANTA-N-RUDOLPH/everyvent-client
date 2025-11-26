import * as z from "zod";
import { CATEGORYS, COLORS, VISIBILITIES, YEARS } from "./constants";

const baseSchema = z.object({
  title: z
    .string()
    .min(1, "달력 제목을 입력해주세요.")
    .max(20, "달력 제목은 20자 이내로 입력해주세요."),
  description: z
    .string()
    .min(5, "달력 설명은 5자 이상 입력해주세요.")
    .max(100, "달력 설명은 100자 이내로 입력해주세요."),
  category: z.enum(
    CATEGORYS.map((category) => category.value) as [string, ...string[]],
    {
      error: "카테고리를 선택해주세요."
    }
  ),
  color: z.enum(COLORS.map((color) => color.value) as [string, ...string[]], {
    error: "색상을 선택해주세요."
  }),
  year: z.enum(YEARS as [string, ...string[]], {
    error: "달력의 연도를 설정해주세요."
  }),
  month: z.enum(
    ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
    { error: "달력의 월을 설정해주세요." }
  ),
  visibility: z.enum(
    VISIBILITIES.map((visibility) => visibility.value) as [string, ...string[]],
    {
      error: "공개 범위를 선택해주세요."
    }
  ),
  previewStartDate: z.string().optional(),
  previewEndDate: z.string().optional()
});

export const calendarFormSchema = baseSchema.check((ctx) => {
  const data = ctx.value;

  if (data.visibility !== "private") {
    // 미리보기 시작일 검증
    if (!data.previewStartDate) {
      ctx.issues.push({
        code: "custom",
        message: "미리보기 시작일을 설정해주세요.",
        path: ["previewStartDate"],
        input: data.previewStartDate
      });
    }
    // 미리보기 종료일 검증
    if (!data.previewEndDate) {
      ctx.issues.push({
        code: "custom",
        message: "미리보기 종료일을 설정해주세요.",
        path: ["previewEndDate"],
        input: data.previewEndDate
      });
    }
  }
});

export type CalendarFormValues = z.infer<typeof calendarFormSchema>;
