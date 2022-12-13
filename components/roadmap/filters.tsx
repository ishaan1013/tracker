"use client"

import {
  useSearchStore,
  useUsersFilterStore,
  useRecentStore,
} from "../../hooks/filterStores"

import { IoSearch } from "react-icons/io5"
import { FiPlus } from "react-icons/fi"
import { useCreateEpicPopupStore, useCreatePopupStore } from "../../hooks"
import CreatePopup from "./createEpicPopup"

const Filters = () => {
  // const [users, setUsers] = useState([false, false, false, false])
  const searchStore = useSearchStore()
  const usersFilterStore = useUsersFilterStore()

  const openedCreate = useCreateEpicPopupStore((state) => state.opened)
  const setOpenedCreate = useCreateEpicPopupStore((state) => state.setOpened)

  return (
    <>
      {/* FIX NEEDED: global state opens 2 concurrent popups */}
      <CreatePopup opened={openedCreate} setOpened={setOpenedCreate} />
      <div className="flex">
        <div className="relative flex min-w-[14rem] items-center justify-start">
          <IoSearch className="pointer-events-none absolute left-2 text-gray-600" />
          <input
            value={searchStore.query}
            placeholder="Type to search..."
            onChange={(e) => searchStore.setQuery(e.target.value)}
            className="w-full rounded border-[1px] border-gray-300 bg-gray-150 p-2 pl-8 text-sm text-gray-600 placeholder:select-none placeholder:opacity-40 focus:outline-none focus:ring-2 focus:ring-blue-500/75 focus:ring-offset-0"
          />
        </div>
        <div className="z-0 ml-6 flex flex-row-reverse items-center">
          {usersFilterStore.users.map((user, index) => (
            <button
              key={index}
              onClick={() => {
                console.log("updated")
                usersFilterStore.setUsers(usersFilterStore.users, index)
              }}
              className={`h-9 w-9 rounded-full ${
                index === 3 ? "" : "-ml-1.5"
              } border-2 bg-gray-150 focus:outline-none focus:ring-2 focus:ring-blue-500/75 focus:ring-offset-0 ${
                user ? "z-[2] border-blue-700 hover:z-[2]" : "border-white"
              } translate-y-0 duration-100 hover:z-[1] hover:-translate-y-1.5`}></button>
          ))}
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
