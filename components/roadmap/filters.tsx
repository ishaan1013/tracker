"use client"

import { useSearchStore, useUsersFilterStore } from "../../hooks/filterStores"

import { IoSearch } from "react-icons/io5"
import { FiPlus } from "react-icons/fi"
import { useCreateEpicPopupStore } from "../../hooks"
import CreatePopup from "./createEpicPopup"

const Filters = () => {
  // const [users, setUsers] = useState([false, false, false, false])
  const searchStore = useSearchStore()
  const usersFilterStore = useUsersFilterStore()

  const openedCreate = useCreateEpicPopupStore((state) => state.opened)
  const setOpenedCreate = useCreateEpicPopupStore((state) => state.setOpened)

  return (
    <>
      <CreatePopup opened={openedCreate} setOpened={setOpenedCreate} />
      <div className="flex">
        <div className="relative flex min-w-[14rem] items-center justify-start">
          <IoSearch className="pointer-events-none absolute left-2 text-gray-600" />
          <input
            value={searchStore.query}
            placeholder="Search..."
            onChange={(e) => searchStore.setQuery(e.target.value)}
            className="w-full rounded border-[1px] border-gray-300 bg-gray-150 p-2 pl-8 text-sm text-gray-600 placeholder:select-none placeholder:opacity-40 focus:outline-none focus:ring-2 focus:ring-blue-500/75 focus:ring-offset-0"
          />
        </div>
        <button
          onClick={() => setOpenedCreate(true)}
          className={`ml-6 flex select-none items-center whitespace-nowrap rounded bg-blue-700 py-1 pl-2 pr-3 text-base text-white duration-100 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500/75 focus:ring-offset-0`}>
          <FiPlus className="mr-1" />
          Create Epic
        </button>
      </div>
    </>
  )
}

export default Filters
