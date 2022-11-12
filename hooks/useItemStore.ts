import create from "zustand"

export interface ItemsState {
  items: string[][]
  setItems: (items: string[][]) => void
}

export const useItemStore = create<ItemsState>()((set) => ({
  items: [["9", "5", "3"],["4", "2", "6"],["7", "8", "1"]],
  setItems: (items) => set({ items }),
}))