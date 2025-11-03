import CalendarCard from "@/components/domain/calendar/CalendarCard";

export default function CalendarPage() {
  return (
    <div className="flex p-16 justify-evenly">
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
    </div>
  );
}
