import { create } from "zustand"
import { IssueType } from "../prisma/issueType"

export interface ItemsState {
  items: IssueType[][]
  setItems: (items: IssueType[][]) => void
  created: boolean
  setCreated: (created: boolean) => void
}

export const useItemStore = create<ItemsState>()((set) => ({
  items: [[],[],[]],
  setItems: (items) => set({ items }),
  created: false,
  setCreated: (created) => set({ created })
}))