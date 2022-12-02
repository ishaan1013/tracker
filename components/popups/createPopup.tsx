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
// import { IssueType } from '../../prisma/issueType';

interface Props {
  opened: boolean
  setOpened: (opened: boolean) => void
}

const CreatePopup: React.FC<Props> = ({ opened, setOpened }) => {
  return (
    <Dialog.Root open={opened} onOpenChange={setOpened}>
      {/* <Dialog.Trigger /> */}
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-[#011242]/50" />
        <Dialog.Content className="dialog xs:w-[85%] fixed left-1/2 top-1/2 z-50 flex w-[95%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-md border-[1px] border-gray-300 bg-white p-6 focus:outline-blue-500 lg:w-[40rem]">
          <div className="flex w-full items-center justify-between">
            <p className="text-start text-2xl font-semibold sm:text-3xl">
              Create Issue
            </p>
            <Dialog.Close className="flex h-10 w-10 items-center justify-center rounded border-[1px] border-gray-200 text-lg duration-100 hover:border-gray-300 hover:bg-gray-150 focus:outline-blue-500">
              <FiX className="" />
            </Dialog.Close>
          </div>

          <div className="relative mt-4 flex w-full items-center">
            <input
              className="w-full rounded border-[1px] border-gray-300 bg-gray-150 p-2 text-sm focus:outline-blue-500 xl:text-base"
              defaultValue={"some input"}
            />
          </div>

          <button
            className={`mt-8 flex w-full items-center justify-center whitespace-nowrap rounded bg-blue-700 py-1 pr-1 text-base text-white duration-100 hover:bg-blue-600 focus:outline-blue-500 xl:text-lg`}>
            <FiPlus className="mr-1.5" />
            Create
          </button>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default CreatePopup
