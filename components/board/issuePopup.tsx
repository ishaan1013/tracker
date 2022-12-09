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
import { IssueType } from "../../prisma/issueType"
import { data } from "autoprefixer"
import { IssueIcons } from "./previewInfo"
import Priority from "./prioritySelect"

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
      className="flex select-none items-center rounded border-[1px] border-blue-700 bg-blue-50 py-0.5 pl-1.5 pr-2 text-[0.95rem] font-medium text-blue-700 duration-100 hover:bg-blue-100 focus:outline-blue-500">
      <FiDisc className="mr-2 h-5 w-5 rounded bg-blue-700 p-0.5 text-white" />
      ISSUE
    </button>
  ) : type === 1 ? (
    <button
      onClick={() => setType(2)}
      className="flex select-none items-center rounded border-[1px] border-blue-700 bg-blue-50 py-0.5 pl-1.5 pr-2 text-[0.95rem] font-medium text-blue-700 duration-100 hover:bg-blue-100 focus:outline-blue-500">
      <FiCheck className="mr-2 h-5 w-5 rounded bg-blue-700 p-0.5 text-white" />
      BUG
    </button>
  ) : type === 2 ? (
    <button
      onClick={() => setType(0)}
      className="flex select-none items-center rounded border-[1px] border-blue-700 bg-blue-50 py-0.5 pl-1.5 pr-2 text-[0.95rem] font-medium text-blue-700 duration-100 hover:bg-blue-100 focus:outline-blue-500">
      <FiBookmark className="mr-2 h-5 w-5 rounded bg-blue-700 p-0.5 text-white" />
      STORY
    </button>
  ) : null
}

interface Props {
  opened: boolean
  setOpened: (opened: boolean) => void
  data: IssueType
}

const IssuePopup: React.FC<Props> = ({ opened, setOpened, data }) => {
  const [type, setType] = useState(data.issueType)

  return (
    <Dialog.Root open={opened} onOpenChange={setOpened}>
      {/* <Dialog.Trigger /> */}
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay fixed inset-0 z-50 bg-[#011242]/50" />
        <Dialog.Content className="DialogContent xs:w-[90%] fixed left-1/2 top-1/2 z-50 flex w-[95%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-md border-[1px] border-gray-300 bg-white p-6 focus:outline-blue-500 lg:w-[60rem]">
          <div className="flex w-full items-center justify-between">
            <IssueSelect type={type} setType={setType} />

            <div className="flex space-x-2">
              <button className="flex h-10 w-10 items-center justify-center rounded border-[1px] border-gray-200 text-lg duration-100 hover:border-red-600 hover:bg-red-50 hover:text-red-600 focus:outline-red-400">
                <FiTrash className="" />
              </button>
              <Dialog.Close className="flex h-10 w-10 items-center justify-center rounded border-[1px] border-gray-200 text-lg duration-100 hover:border-gray-300 hover:bg-gray-150 focus:outline-blue-500">
                <FiX className="" />
              </Dialog.Close>
            </div>
          </div>

          <div className="mt-4 flex w-full justify-between space-x-6">
            <div className="flex-grow">
              <input
                className="w-full rounded border-[1px] border-gray-300 bg-gray-150 p-2 text-start text-2xl font-semibold focus:outline-blue-500 sm:text-3xl"
                defaultValue={data.name}
              />
              <textarea
                className="mt-4 h-[120px] max-h-[180px] min-h-[50px] w-full resize-y rounded border-[1px] border-gray-300 bg-gray-150 p-2 text-sm focus:outline-blue-500 xl:text-base"
                defaultValue={data.description}
              />
            </div>
            <div className="flex w-60 flex-col items-start">
              {/* <div className="mb-3 py-1 px-2 rounded border-[1px] border-gray-300 duration-100 hover:bg-gray-150 font-semibold flex items-center">
                Priority: <IssueIcons className="ml-1.5 -translate-y-[1px]" priority={data.priority} />
              </div> */}
              <div className="mb-1 text-sm font-semibold">Priority:</div>
              <Priority popup initial={data.priority} />
              <div className="mb-1 text-sm font-semibold">Assignees:</div>
              <div className="h-[1px] w-full bg-gray-300 text-gray-600" />
              <div className="mt-3 text-sm">
                Created{" "}
                <span className="font-semibold text-gray-600">
                  {data.createdAt.toString().split(" ").slice(1, 4).join(" ")}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-center self-start">
            <button
              className={`flex items-center whitespace-nowrap rounded bg-blue-700 py-2 pl-4 pr-5 text-base text-white duration-100 hover:bg-blue-700 focus:outline-blue-500`}>
              <FiSave className="mr-1.5" />
              Save
            </button>
            <button
              className={`ml-3 flex items-center whitespace-nowrap rounded border-[1px] border-gray-300 py-2 pr-5 pl-4 text-base text-gray-600 duration-100 hover:bg-gray-150 focus:outline-blue-500`}>
              <FiRefreshCw className="mr-1.5" />
              Reset
            </button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default IssuePopup
