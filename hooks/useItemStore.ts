import { create } from "zustand"
import { IssueType } from "../prisma/issueType"

export interface ItemsState {
  items: IssueType[][]
  setItems: (items: IssueType[][]) => void
  saved: boolean
  setSaved: (saved: boolean) => void
}

export const useItemStore = create<ItemsState>()((set) => ({
  items: [[],[],[]],
  setItems: (items) => set({ items }),
  saved: false,
  setSaved: (saved) => set({ saved })
}))