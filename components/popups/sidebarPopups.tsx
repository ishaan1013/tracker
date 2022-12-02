"use client"

import {
  useAboutPopupStore,
  useCreatePopupStore,
  useSearchPopupStore,
} from "../../hooks"
import SearchPopup from "./searchPopup"

const SidebarPopups = () => {
  // const createOpened = useCreatePopupStore((state) => state.opened)
  // const setCreateOpened = useCreatePopupStore((state) => state.setOpened)
  // const aboutOpened = useAboutPopupStore((state) => state.opened)
  // const setAboutOpened = useAboutPopupStore((state) => state.setOpened)
  const searchOpened = useSearchPopupStore((state) => state.opened)
  const setSearchOpened = useSearchPopupStore((state) => state.setOpened)

  return (
    <>
      <SearchPopup opened={searchOpened} setOpened={setSearchOpened} />
    </>
  )
}

export default SidebarPopups
