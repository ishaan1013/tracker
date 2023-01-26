import { create } from "zustand"

export interface PopupStoreState {
  opened: boolean
  setOpened: (opened: boolean) => void
}

export const useCreatePopupStore = create<PopupStoreState>()((set) => ({
  opened: false,
  setOpened: (opened) => set({ opened }),
}))

export const useSearchPopupStore = create<PopupStoreState>()((set) => ({
  opened: false,
  setOpened: (opened) => set({ opened }),
}))

export const useAboutPopupStore = create<PopupStoreState>()((set) => ({
  opened: false,
  setOpened: (opened) => set({ opened }),
}))

export const useCreateEpicPopupStore = create<PopupStoreState>()((set) => ({
  opened: false,
  setOpened: (opened) => set({ opened }),
}))