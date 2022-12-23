"use client"

import Priority from "./prioritySelect"
import {
  useSearchStore,
  useUsersFilterStore,
  useRecentStore,
} from "../../hooks/filterStores"

import { IoSearch } from "react-icons/io5"
import { FiPlus } from "react-icons/fi"
import { useCreatePopupStore } from "../../hooks"
import * as Tooltip from "@radix-ui/react-tooltip"

import Image from "next/image"
import CEO from "../../assets/avatars/ceo.webp"
import Marketing from "../../assets/avatars/marketing.webp"
import Engineer from "../../assets/avatars/engineer.webp"
import You from "../../assets/avatars/you.webp"

const ppl1 = [You, Engineer, Marketing, CEO]
const ppl2 = ["You", "Software Engineer", "Head of Marketing", "The CEO"]

const Filters = () => {
  // const [users, setUsers] = useState([false, false, false, false])
  const searchStore = useSearchStore()
  const users = useUsersFilterStore((state) => state.users)
  const setUsers = useUsersFilterStore((state) => state.setUsers)
  const recentStore = useRecentStore()
  const setCreateOpened = useCreatePopupStore((state) => state.setOpened)

  return (
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
        {users.map((user, index) => (
          <Tooltip.Provider delayDuration={200}>
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <button
                  key={index}
                  onClick={() => {
                    console.log("updated")
                    setUsers(users, index)
                  }}
                  className={`h-9 w-9 rounded-full ${
                    index === 3 ? "" : "-ml-1.5"
                  } border-2 bg-gray-150 focus:outline-none focus:ring-2 focus:ring-blue-500/75 focus:ring-offset-0 ${
                    user
                      ? "z-[2] border-blue-700 hover:z-[2]"
                      : "border-white grayscale"
                  } translate-y-0 overflow-hidden duration-100 hover:z-[1] hover:-translate-y-1.5`}>
                  <Image
                    src={ppl1[index]}
                    alt={`Avatar of ${ppl2[index]}`}
                    className="h-full w-full"
                  />
                </button>
              </Tooltip.Trigger>
              <Tooltip.Portal>
                <Tooltip.Content
                  className="TooltipContent font-gray-600 z-10 rounded border-[1px] border-gray-300 bg-white px-2 py-1 text-xs shadow-lg shadow-blue-900/5 duration-200"
                  sideOffset={1}>
                  {ppl2[index]}
                </Tooltip.Content>
              </Tooltip.Portal>
            </Tooltip.Root>
          </Tooltip.Provider>
        ))}
      </div>

      <button
        onClick={() => recentStore.setRecent(!recentStore.recent)}
        className={`ml-6 select-none whitespace-nowrap rounded border-[1px] duration-100 focus:outline-none focus:ring-2 focus:ring-blue-500/75 focus:ring-offset-0 ${
          recentStore.recent
            ? "border-blue-700 bg-gray-150 text-blue-700 hover:bg-gray-200"
            : "border-gray-300 text-gray-600 hover:bg-gray-150"
        } py-1 px-3 text-base`}>
        Recently Updated
      </button>

      <Priority />

      <button
        onClick={() => setCreateOpened(true)}
        className={`ml-6 flex select-none items-center whitespace-nowrap rounded bg-blue-700 py-1 pl-2 pr-3 text-base text-white duration-100 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500/75 focus:ring-offset-0`}>
        <FiPlus className="mr-1" />
        Create Issue
      </button>
    </div>
  )
}

export default Filters
