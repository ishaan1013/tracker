import create from "zustand"

export interface ToastStoreState {
  open: boolean
  setOpen: (open: boolean) => void
  title: string
  setTitle: (title: string) => void
  message: string
  setMessage: (message: string) => void
}

export const useToastStore = create<ToastStoreState>()((set) => ({
  open: false,
  setOpen: (open) => set({ open }),
  title: "",
  setTitle: (title) => set({ title }),
  message: "",
  setMessage: (message) => set({ message }),
}))