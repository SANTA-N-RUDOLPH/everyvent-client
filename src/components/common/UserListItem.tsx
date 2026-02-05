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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getProfileImageUrl } from "@/utils/image";
import { User } from "lucide-react";

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
    <div className="flex gap-3 justify-between items-center pr-3">
      <Avatar className="w-10 h-10 shrink-0">
        {item.user.profileImageKey && (
          <AvatarImage
            src={getProfileImageUrl(item.user.profileImageKey)}
            alt="프로필 이미지"
            className="object-cover"
          />
        )}
        <AvatarFallback>
          <User className="w-6 h-6 text-muted-foreground" />
        </AvatarFallback>
      </Avatar>

      <div className="flex flex-col flex-1 min-w-0 justify-center">
        <div className="text-sm font-medium truncate">{item.user.nickname}</div>
        {item.user.introduction && (
          <div className="text-xs truncate">{item.user.introduction}</div>
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
