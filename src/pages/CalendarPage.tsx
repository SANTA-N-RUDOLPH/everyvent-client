// import CalendarCard from "@/components/domain/calendar/CalendarCard";
import { CreateCalendarForm } from "@/components/domain/calendar/create-calendar/CreateCalendarForm";

export default function CalendarPage() {
  return (
    <div className="p-4 md:p-8 lg:p-16">
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10 justify-items-center">
        <CalendarCard
          colorHex="#123432"
          title="자바스크립트"
          description="공부하자"
          year={2025}
          month={12}
        />
        <CalendarCard
          colorHex="#123432"
          title="자바스크립트"
          description="공부하자"
          year={2025}
          month={12}
        />
        <CalendarCard
          colorHex="#123432"
          title="자바스크립트"
          description="공부하자"
          year={2025}
          month={12}
        />
      </div> */}
      <CreateCalendarForm />
    </div>
  );
}
