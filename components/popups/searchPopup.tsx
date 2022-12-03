"use client"

import { useState } from "react"
import * as Dialog from "@radix-ui/react-dialog"
import { useItemStore } from "../../hooks"
import {
  FiX,
  FiTrash,
  FiDisc,
  FiCheck,
  FiBookmark,
  FiPlus,
  FiSave,
  FiRefreshCw,
} from "react-icons/fi"
import { IoSearch } from "react-icons/io5"
import { IssueIcons, IssuePpl } from "../board/issuePreview"
import SearchPreview from "./searchPreview"
// import { IssueType } from '../../prisma/issueType';

interface Props {
  opened: boolean
  setOpened: (opened: boolean) => void
}

const SearchPopup: React.FC<Props> = ({ opened, setOpened }) => {
  const items = useItemStore((state) => state.items)
  const [search, setSearch] = useState("")
  const [displayed, setDisplayed] = useState(0)

  return (
    <Dialog.Root open={opened} onOpenChange={setOpened}>
      {/* <Dialog.Trigger /> */}
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-[#011242]/50" />
        <Dialog.Content className="dialog xs:w-[85%] fixed left-1/2 top-1/2 z-50 flex w-[95%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-md border-[1px] border-gray-300 bg-white p-6 focus:outline-blue-500 lg:w-[40rem]">
          <div className="flex w-full items-center justify-between">
            <p className="text-start text-xl font-semibold sm:text-2xl">
              Search Issues
            </p>
            <Dialog.Close className="flex h-10 w-10 items-center justify-center rounded border-[1px] border-gray-200 text-lg duration-100 hover:border-gray-300 hover:bg-gray-150 focus:outline-blue-500">
              <FiX className="" />
            </Dialog.Close>
          </div>

          <div className="relative mt-4 flex w-full items-center">
            <IoSearch className="absolute left-2.5 text-gray-600" />
            <input
              className="w-full rounded border-[1px] border-gray-300 bg-gray-150 p-2 pl-8 text-base font-medium placeholder:opacity-40 focus:outline-blue-500 xl:text-lg"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Type to search..."
            />
          </div>

          <div className="my-5 flex h-[1px] w-full bg-gray-300" />

          <div className="searchResultsPopup h-auto max-h-96 w-full overflow-y-auto overflow-x-hidden rounded bg-gray-150 p-2">
            {items.map((category, i) => (
              <SearchPreview
                issues={category}
                search={search}
                index={i}
                key={i}
              />
            ))}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default SearchPopup
