import { useAuthStore } from "@/stores/useAuthStore";
import { FaRegBell } from "react-icons/fa";
import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/popover";
import { useFollowersData } from "@/hooks/queries/useFollowersData";
import { useFollowingsData } from "@/hooks/queries/useFollowingsData";
import UserListItem from "@/components/common/UserListItem";
import type { FollowItem } from "@/types/follow";
import { useDeleteFollower } from "@/hooks/mutations/useDeleteFollower";
import { useDeleteFollowing } from "@/hooks/mutations/useDeleteFollowing";

const Header = () => {
  const { user } = useAuthStore();
  const isLoggedIn = !!user;

  const userId = user?.id;

  const { data: followers = [] } = useFollowersData(userId!);
  const { data: followings = [] } = useFollowingsData(userId!);

  const { mutate: deleteFollower } = useDeleteFollower();
  const { mutate: deleteFollowing } = useDeleteFollowing();

  return (
    <div className="border-b border-[#E5E6EA] px-8 py-4">
      <div
        className={cn(
          "flex gap-3 justify-end items-center",
          isLoggedIn ? "opacity-100" : "opacity-0"
        )}
      >
        <Popover>
          <PopoverTrigger asChild>
            <button
              type="button"
              className="flex justify-center items-center w-10 h-10 bg-[#F3F4F6] rounded-full p-2"
            >
              <FaRegBell />
            </button>
          </PopoverTrigger>
          <PopoverContent className="w-80" align="end"></PopoverContent>
        </Popover>

        <div className="flex justify-center items-center w-10 h-10 bg-[#F3F4F6] rounded-full text-sm font-bold">
          {user?.nickname.slice(0, 2)}
        </div>
        <div className="flex flex-col justify-center">
          <div className="text-base font-semibold">{user?.nickname}</div>
          <div className="flex gap-3 text-xs font-medium text-gray-500">
            <Popover>
              <PopoverTrigger asChild>
                <button type="button">팔로워 {followers.length}</button>
              </PopoverTrigger>
              <PopoverContent className="w-80" align="end">
                <div className="flex flex-col gap-3">
                  <h4 className="font-medium leading-none mb-2">팔로워 목록</h4>
                  <div className="max-h-[300px] w-full overflow-y-auto overflow-x-hidden flex flex-col gap-3 overlay-scrollbar">
                    {followers.length === 0 ? (
                      <div className="py-4 text-center text-gray-700">
                        아직 팔로워가 없습니다.
                      </div>
                    ) : (
                      followers.map((item: FollowItem) => (
                        <UserListItem
                          key={item.id}
                          item={item}
                          buttonLabel="삭제"
                          alertDialogTitle="팔로워 삭제하기"
                          alertDialogDescription={`${item.user.nickname}님은 회원님의 팔로워 리스트에서 삭제된 사실을 알 수 없습니다.`}
                          alertDialogCancelLabel="취소"
                          alertDialogActionLabel="삭제"
                          onConfirm={() => deleteFollower(item.user.id)}
                        />
                      ))
                    )}
                  </div>
                </div>
              </PopoverContent>
            </Popover>
            <Popover>
              <PopoverTrigger asChild>
                <button type="button">팔로잉 {followings.length}</button>
              </PopoverTrigger>
              <PopoverContent className="w-80" align="end">
                <div className="flex flex-col gap-3">
                  <h4 className="font-medium leading-none mb-2">팔로잉 목록</h4>
                  <div className="max-h-[300px] w-full overflow-x-hidden overflow-y-auto flex flex-col gap-3 overlay-scrollbar">
                    {followings.length === 0 ? (
                      <div className="py-4 text-center text-gray-700">
                        아직 팔로잉이 없습니다.
                      </div>
                    ) : (
                      followings.map((item: FollowItem) => (
                        <UserListItem
                          key={item.id}
                          item={item}
                          buttonLabel="팔로잉"
                          alertDialogTitle="팔로우 취소하기"
                          alertDialogDescription={`${item.user.nickname}님의 팔로우를 취소하시겠어요?`}
                          alertDialogCancelLabel="취소"
                          alertDialogActionLabel="팔로우 취소"
                          onConfirm={() => deleteFollowing(item.user.id)}
                        />
                      ))
                    )}
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
