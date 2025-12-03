import type { FollowItem } from "@/types/follow";
import { Button } from "@/components/ui/button";

export default function UserListItem({
  item,
  buttonLabel
}: {
  item: FollowItem;
  buttonLabel: string;
}) {
  return (
    <div className="flex gap-3 justify-between items-center">
      {/* TODO: 프로필 사진 */}
      <div className="flex justify-center items-center w-10 h-10 bg-[#F3F4F6] rounded-full text-sm font-semibold shrink-0">
        {item.user.nickname.slice(0, 2)}
      </div>

      <div className="flex flex-col flex-1 min-w-0 justify-center">
        <div className="text-sm font-medium truncate">{item.user.nickname}</div>
        {item.user.introduction && (
          <div className="text-xs truncate">{item.user.introduction}</div>
        )}
      </div>

      <Button variant={"outline"}>{buttonLabel}</Button>
    </div>
  );
}
