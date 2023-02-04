import { create } from "zustand"

export interface AlertStoreState {
  open: boolean
  setOpen: (open: boolean) => void
  action: string
  setAction: (action: string) => void
  desc: string
  setDesc: (desc: string) => void
  fn: "delete" | ""
  setFn: (fn: "delete" | "") => void
  // confirmed: boolean
  // setConfirmed: (confirmed: boolean) => void
}

export const useAlertStore = create<AlertStoreState>()((set) => ({
  open: false,
  setOpen: (open) => set({ open }),
  action: "",
  setAction: (action) => set({ action }),
  desc: "",
  setDesc: (desc) => set({ desc }),
  fn: "",
  setFn: (fn) => set({ fn })
  // confirmed: false,
  // setConfirmed: (confirmed) => set({ confirmed }),
}))