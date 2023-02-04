import { create } from "zustand"
import { IssueType } from "../prisma/issueType"

export interface ItemsState {
  items: IssueType[][]
  setItems: (items: IssueType[][]) => void
  created: boolean
  setCreated: (created: boolean) => void
  toDelete: {id: string, category: number},
  setToDelete: (toDelete: {id: string, category: number}) => void
}

export const useItemStore = create<ItemsState>()((set) => ({
  items: [[],[],[]],
  setItems: (items) => set({ items }),
  created: false,
  setCreated: (created) => set({ created }),
  toDelete: {id: "", category: 0},
  setToDelete: (toDelete) => set({ toDelete })
}))