"use client"

import { useState } from "react"
import * as Dialog from "@radix-ui/react-dialog"
import * as Tooltip from "@radix-ui/react-tooltip"
import {
  FiDisc,
  FiCheck,
  FiBookmark,
  FiPlus,
  FiAlertCircle,
} from "react-icons/fi"
import Priority from "../board/prioritySelect"
import Status from "../board/statusSelect"

import CEO from "../../assets/avatars/ceo.webp"
import Marketing from "../../assets/avatars/marketing.webp"
import Engineer from "../../assets/avatars/engineer.webp"
import You from "../../assets/avatars/you.webp"
import Image from "next/image"

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
      className="mb-3 mr-3 flex select-none items-center rounded border-[1px] border-blue-700 bg-blue-50 py-1 pl-1.5 pr-2 text-[0.95rem] font-medium text-blue-700 duration-100 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500/75 focus:ring-offset-0">
      <FiDisc className="mr-2 h-5 w-5 rounded bg-blue-700 p-0.5 text-white" />
      ISSUE
    </button>
  ) : type === 1 ? (
    <button
      onClick={() => setType(2)}
      className="mb-3 mr-3 flex select-none items-center rounded border-[1px] border-blue-700 bg-blue-50 py-1 pl-1.5 pr-2 text-[0.95rem] font-medium text-blue-700 duration-100 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500/75 focus:ring-offset-0">
      <FiCheck className="mr-2 h-5 w-5 rounded bg-blue-700 p-0.5 text-white" />
      BUG
    </button>
  ) : type === 2 ? (
    <button
      onClick={() => setType(0)}
      className="mb-3 mr-3 flex select-none items-center rounded border-[1px] border-blue-700 bg-blue-50 py-1 pl-1.5 pr-2 text-[0.95rem] font-medium text-blue-700 duration-100 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500/75 focus:ring-offset-0">
      <FiBookmark className="mr-2 h-5 w-5 rounded bg-blue-700 p-0.5 text-white" />
      STORY
    </button>
  ) : null
}

const Assignees = ({
  users,
  setUsers,
}: {
  users: boolean[]
  setUsers: (users: boolean[]) => void
}) => {
  const ppl1 = [You, Engineer, Marketing, CEO]
  const ppl2 = ["You", "Software Engineer", "Head of Marketing", "The CEO"]

  return (
    <div className="z-0 ml-3 mb-3 flex flex-row-reverse items-center">
      {users.map((user, index) => (
        <Tooltip.Provider key={index} delayDuration={200}>
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <button
                onClick={() => {
                  const newUsers = [...users]
                  newUsers[index] = !newUsers[index]
                  setUsers(newUsers)
                }}
                className={`h-9 w-9 rounded-full ${
                  index === 3 ? "" : "-ml-1.5"
                } border-2 bg-gray-150 focus:outline-none focus:ring-2 focus:ring-blue-500/75 focus:ring-offset-0 ${
                  user
                    ? "z-[2] border-blue-700 hover:z-[2]"
                    : "border-white grayscale hover:grayscale-0"
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
  )
}

const CreatePopup: React.FC<Props> = ({ opened, setOpened }) => {
  const [type, setType] = useState(0)
  const [name, setName] = useState("")
  const [desc, setDesc] = useState("")
  const [users, setUsers] = useState([true, false, false, false])

  const [valid, setValid] = useState({
    title: true,
    desc: true,
  })

  return (
    <Dialog.Root open={opened} onOpenChange={setOpened}>
      {/* <Dialog.Trigger /> */}
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay fixed inset-0 z-50 bg-[#011242]/50" />
        <Dialog.Content className="DialogContent xs:w-[85%] fixed left-1/2 top-1/2 z-50 flex w-[95%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-md border-[1px] border-gray-300 bg-white p-6 focus:outline-none focus:ring-2 focus:ring-blue-500/75 focus:ring-offset-0 lg:w-[40rem]">
          <p className="text-start text-xl font-semibold sm:text-2xl">
            Create Issue
          </p>
          <div className="mt-4 w-full">
            <input
              className={`${
                valid.title
                  ? "border-gray-300 bg-gray-150"
                  : "border-red-600 bg-red-50"
              } mr-4 w-full rounded border-[1px] p-2 text-xl font-medium placeholder:select-none placeholder:opacity-40 focus:outline-none focus:ring-2 focus:ring-blue-500/75 focus:ring-offset-0 sm:text-2xl`}
              placeholder={"Issue Title"}
              onFocus={() => setValid({ title: true, desc: valid.desc })}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {!valid.title && (
              <div className="mt-1 flex items-center text-sm font-semibold text-red-600">
                <FiAlertCircle className="mr-1 -translate-y-[1px]" />
                <div>Title must be between 0 and 30 characters.</div>
              </div>
            )}

            <div className="mt-3 flex items-center">
              <IssueSelect type={type} setType={setType} />
              <Priority popup initial={0} />
              <Status />
              <Assignees users={users} setUsers={setUsers} />
            </div>

            <div className="mb-3 flex h-[1px] w-full bg-gray-300" />

            <textarea
              className={`${
                valid.desc
                  ? "border-gray-300 bg-gray-150"
                  : "border-red-600 bg-red-50"
              } mt-4 h-[120px] max-h-[180px] min-h-[50px] w-full resize-y rounded border-[1px] p-2 text-sm placeholder:select-none placeholder:opacity-40 focus:outline-none focus:ring-2 focus:ring-blue-500/75 focus:ring-offset-0 xl:text-base`}
              placeholder={"Issue Description"}
              value={desc}
              onFocus={() => setValid({ title: valid.title, desc: true })}
              onChange={(e) => setDesc(e.target.value)}
            />
            {!valid.desc && (
              <div className="flex items-center text-sm font-semibold text-red-600">
                <FiAlertCircle className="mr-1 -translate-y-[1px]" />
                <div>Description must be between 0 and 1000 characters.</div>
              </div>
            )}

            <div className="flex w-full select-none items-center justify-between space-x-4">
              <button
                onClick={() => {
                  const titleValid = 0 < name.length && name.length < 30
                  const descValid = 0 < desc.length && desc.length < 1000
                  const valid = { title: titleValid, desc: descValid }
                  setValid(valid)

                  if (titleValid && descValid) {
                    console.log("Issue Created")
                  }
                }}
                className={`mt-4 flex w-full items-center justify-center whitespace-nowrap rounded bg-blue-700 py-2 pr-1 text-base text-white duration-100 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500/75 focus:ring-offset-0 xl:text-lg`}>
                <FiPlus className="mr-1.5" />
                Create
              </button>
              <Dialog.Close
                onClick={() => {
                  setValid({ title: true, desc: true })
                  setName("")
                  setDesc("")
                  setUsers([true, false, false, false])
                }}
                className="mt-4 flex w-full items-center justify-center whitespace-nowrap rounded border-[1px] border-gray-300 py-2 pr-1 text-base font-medium text-gray-600 duration-100 hover:bg-gray-150 focus:outline-none focus:ring-2 focus:ring-blue-500/75 focus:ring-offset-0 xl:text-lg">
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
