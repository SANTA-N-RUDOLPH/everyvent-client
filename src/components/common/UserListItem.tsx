import type { FollowItem } from "@/types/follow";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from "@/components/ui/alert-dialog";

export default function UserListItem({
  item,
  buttonLabel,
  alertDialogTitle,
  alertDialogDescription,
  alertDialogCancelLabel,
  alertDialogActionLabel,
  onConfirm
}: {
  item: FollowItem;
  buttonLabel: string;
  alertDialogTitle: string;
  alertDialogDescription: string;
  alertDialogCancelLabel: string;
  alertDialogActionLabel: string;
  onConfirm: () => void;
}) {
  return (
    <div className="flex items-center justify-between gap-3 pr-3">
      {/* TODO: 프로필 사진 */}
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F3F4F6] text-sm font-semibold">
        {item.user.nickname.slice(0, 2)}
      </div>

      <div className="flex min-w-0 flex-1 flex-col justify-center">
        <div className="truncate text-sm font-medium">{item.user.nickname}</div>
        {item.user.introduction && (
          <div className="truncate text-xs">{item.user.introduction}</div>
        )}
      </div>

      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant={"outline"}>{buttonLabel}</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{alertDialogTitle}</AlertDialogTitle>
            <AlertDialogDescription>
              {alertDialogDescription}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>{alertDialogCancelLabel}</AlertDialogCancel>
            <AlertDialogAction onClick={onConfirm}>
              {alertDialogActionLabel}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
