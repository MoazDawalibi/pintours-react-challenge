import { create } from "zustand";

interface ModalState {
  showComments: boolean;
  setShowComments: (value: boolean) => void;
}

export const useShowComments = create<ModalState>((set) => ({
  showComments: true,
  setShowComments: (value: boolean) => set((state) => ({ showComments: value })),
}));
