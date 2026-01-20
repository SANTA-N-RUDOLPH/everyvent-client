import { Kbd } from "@/components/ui/kbd";
import { TbWorld } from "react-icons/tb";
import { MdLock } from "react-icons/md";
import { FaUserLock } from "react-icons/fa";
import { MdPeopleAlt } from "react-icons/md";

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
      <MdLock />
      비공개
    </Kbd>
  );
};

const FollowerTaskLabel = () => {
  return (
    <Kbd className="bg-[#DBEAFE] text-[#1E40AF]">
      <MdPeopleAlt />
      팔로워공개
    </Kbd>
  );
};

const MutualTaskLabel = () => {
  return (
    <Kbd className="bg-[#FEF3C7] text-[#92400E]">
      <FaUserLock />
      맞팔로워공개
    </Kbd>
  );
};

export {
  PublicTaskLabel,
  PrivateTaskLabel,
  FollowerTaskLabel,
  MutualTaskLabel
};
