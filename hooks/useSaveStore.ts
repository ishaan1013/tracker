import { create } from "zustand"

export interface SaveState {
  save: number
  incSave: () => void
  decSave: () => void
}

export const useSaveStore = create<SaveState>()((set) => ({
  save: 0,
  incSave: () => set((state) => ({ save: state.save + 1 })),
  decSave: () => set((state) => ({ save: state.save - 1 })),
}))