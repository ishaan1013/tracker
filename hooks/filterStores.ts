import { create } from "zustand"

export interface SearchState {
  query: string
  setQuery: (query: string) => void
}

export const useSearchStore = create<SearchState>()((set) => ({
  query: "",
  setQuery: (query) => set({ query }),
}))



export interface UsersFilterState {
  users: [boolean, boolean, boolean, boolean]
  setUsers: (users: [boolean, boolean, boolean, boolean], index:number) => void
}

export const useUsersFilterStore = create<UsersFilterState>()((set) => ({
  users: [false, false, false, false],
  setUsers: (users, index) => {
    const newUsers:[boolean, boolean, boolean, boolean]  = [...users]
    newUsers[index] = !newUsers[index]
    set({ users: newUsers })
  },
}))

export interface PriorityState {
  priority: string
  setPriority: (recent: string) => void
}

export const usePriorityStore = create<PriorityState>()((set) => ({
  priority: "Priority",
  setPriority: (priority) => set({ priority }),
}))