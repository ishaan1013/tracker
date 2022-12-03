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
import Priority from "../board/priority"
// import { IssueType } from '../../prisma/issueType';

interface Props {
  opened: boolean
  setOpened: (opened: boolean) => void
}

const IssueSelect = ({
  type,
  setType,
}: {
  type: number
  setType: (type: number) => void
}) => {
  return type === 0 ? (
    <button
      onClick={() => setType(1)}
      className="mb-3 mr-3 flex items-center rounded border-[1px] border-blue-600 bg-blue-50 py-1 pl-1.5 pr-2 text-[0.95rem] font-medium text-blue-600 duration-100 hover:bg-blue-100 focus:outline-blue-500">
      <FiDisc className="mr-2 h-5 w-5 rounded bg-blue-600 p-0.5 text-white" />
      ISSUE
    </button>
  ) : type === 1 ? (
    <button
      onClick={() => setType(2)}
      className="mb-3 mr-3 flex items-center rounded border-[1px] border-blue-600 bg-blue-50 py-1 pl-1.5 pr-2 text-[0.95rem] font-medium text-blue-600 duration-100 hover:bg-blue-100 focus:outline-blue-500">
      <FiCheck className="mr-2 h-5 w-5 rounded bg-blue-600 p-0.5 text-white" />
      BUG
    </button>
  ) : type === 2 ? (
    <button
      onClick={() => setType(0)}
      className="mb-3 mr-3 flex items-center rounded border-[1px] border-blue-600 bg-blue-50 py-1 pl-1.5 pr-2 text-[0.95rem] font-medium text-blue-600 duration-100 hover:bg-blue-100 focus:outline-blue-500">
      <FiBookmark className="mr-2 h-5 w-5 rounded bg-blue-600 p-0.5 text-white" />
      STORY
    </button>
  ) : null
}

const CreatePopup: React.FC<Props> = ({ opened, setOpened }) => {
  const [type, setType] = useState(0)
  const [name, setName] = useState("")
  const [desc, setDesc] = useState("")

  return (
    <Dialog.Root open={opened} onOpenChange={setOpened}>
      {/* <Dialog.Trigger /> */}
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-[#011242]/50" />
        <Dialog.Content className="dialog xs:w-[85%] fixed left-1/2 top-1/2 z-50 flex w-[95%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-md border-[1px] border-gray-300 bg-white p-6 focus:outline-blue-500 lg:w-[40rem]">
          <p className="text-start text-xl font-semibold sm:text-2xl">
            Create Issue
          </p>
          <div className="mt-4 w-full">
            <input
              className="mr-4 w-full rounded border-[1px] border-gray-300 bg-gray-150 p-2 text-xl font-medium placeholder:opacity-40 focus:outline-blue-500 sm:text-2xl"
              placeholder={"Issue Title"}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <div className="mt-3 flex items-center">
              <IssueSelect type={type} setType={setType} />
              <Priority popup />
            </div>

            <div className="mb-3 flex h-[1px] w-full bg-gray-300" />

            <textarea
              className="mt-4 h-[120px] max-h-[180px] min-h-[50px] w-full resize-y rounded  border-[1px] border-gray-300 bg-gray-150 p-2 text-sm placeholder:opacity-40 focus:outline-blue-500 xl:text-base"
              placeholder={"Issue Description"}
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />

            <div className="flex w-full items-center justify-between space-x-4">
              <button
                className={`mt-4 flex w-full items-center justify-center whitespace-nowrap rounded bg-blue-700 py-2 pr-1 text-base text-white duration-100 hover:bg-blue-600 focus:outline-blue-500 xl:text-lg`}>
                <FiPlus className="mr-1.5" />
                Create
              </button>
              <Dialog.Close className="mt-4 flex w-full items-center justify-center whitespace-nowrap rounded border-[1px] border-gray-300 py-2 pr-1 text-base font-medium text-gray-600 duration-100 hover:bg-gray-150 focus:outline-blue-500 xl:text-lg">
                Cancel
              </Dialog.Close>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default CreatePopup
