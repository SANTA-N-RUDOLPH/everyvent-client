// TODO: 기능에 맞게 코드 수정 필요, 현재는 예제 넣어둠

import { create } from "zustand";

interface BearState {
  bears: number;
  increase: (by: number) => void;
}

export const useBearStore = create<BearState>()((set) => ({
  bears: 0,
  increase: (by) => set((state) => ({ bears: state.bears + by }))
}));
