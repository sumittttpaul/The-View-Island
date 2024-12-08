import { create } from "zustand";

interface NavState {
  Number: number;
  Width: number;
  Left: number;
  setNumber: (value: number) => void;
  setWidth: (value: number) => void;
  setLeft: (value: number) => void;
}

export const useNavStore = create<NavState>()((set) => ({
  Number: -1,
  Width: 0,
  Left: 0,
  setNumber: (value) => set(() => ({ Number: value })),
  setWidth: (value) => set(() => ({ Width: value })),
  setLeft: (value) => set(() => ({ Left: value })),
}));
