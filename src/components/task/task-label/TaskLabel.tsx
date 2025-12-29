import { Kbd } from "@/components/ui/kbd";
import { TbWorld } from "react-icons/tb";

const PublicTaskLabel = () => {
  return (
    <Kbd className="bg-[#DCFCE7] text-[#1A8C46]">
      <TbWorld />
      공개
    </Kbd>
  );
};

const PrivateTaskLabel = () => {
  return (
    <Kbd className="bg-[#E5E7EB] text-[#374151]">
      <TbWorld />
      비공개
    </Kbd>
  );
};

const FollowerTaskLabel = () => {
  return (
    <Kbd className="bg-[#DBEAFE] text-[#1E40AF]">
      <TbWorld />
      팔로워공개
    </Kbd>
  );
};

export { PublicTaskLabel, PrivateTaskLabel, FollowerTaskLabel };
