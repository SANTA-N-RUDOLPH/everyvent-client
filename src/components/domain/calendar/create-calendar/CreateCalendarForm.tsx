import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Field, FieldGroup } from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import { calendarFormSchema, type CalendarFormValues } from "./schema";
import CalendarPeriod from "./CalendarPeriod";
import CalendarVisibility from "./CalendarVisibility";
import CalendarBasicInfo from "./CalendarBasicInfo";

export default function CreateCalendarForm() {
  const methods = useForm<CalendarFormValues>({
    resolver: zodResolver(calendarFormSchema),
    defaultValues: {
      title: "",
      description: "",
      category: "",
      year: "",
      month: "",
      visibility: "",
      previewStartDate: "",
      previewEndDate: "",
      color: "#82DEAC"
    }
  });

  function onSubmit(data: CalendarFormValues) {
    // TODO: API 연결
    console.log(data);
  }

  return (
    <div className="absolute inset-8 flex flex-col">
      <Card className="flex flex-col overflow-hidden">
        <CardHeader>
          <CardTitle>새 달력 만들기</CardTitle>
        </CardHeader>

        <CardContent className="overflow-y-auto">
          <FormProvider {...methods}>
            <form
              id="create-calendar-form"
              onSubmit={methods.handleSubmit(onSubmit, (errors) =>
                console.log(errors)
              )}
            >
              <FieldGroup>
                <CalendarBasicInfo />
                <CalendarPeriod />
                <CalendarVisibility />
              </FieldGroup>
            </form>
          </FormProvider>
        </CardContent>

        <CardFooter>
          <Field orientation="horizontal">
            <Button type="button" variant="outline">
              취소
            </Button>
            <Button type="submit" form="create-calendar-form">
              달력 만들기
            </Button>
          </Field>
        </CardFooter>
      </Card>
    </div>
  );
}
