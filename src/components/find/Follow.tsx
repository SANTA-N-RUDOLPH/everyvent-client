import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useInfoData } from "@/hooks/queries/useInfoData";

const Follow = () => {
  const { data: user } = useInfoData();
  return (
    <Avatar className="size-10">
      <AvatarImage src="" alt="@shadcn" className="grayscale" />
      <AvatarFallback>{user?.nickname.slice(0, 2)}</AvatarFallback>
    </Avatar>
  );
};

export default Follow;
