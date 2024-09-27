import { create } from "zustand";
import { StateDialog } from "./type";

export const useDialog = create<StateDialog>((set) => ({
  state: false,
  setState: (newState: boolean) => set(() => ({
    state: newState
  }))
}));
