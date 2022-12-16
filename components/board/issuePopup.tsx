"use client"
import { useEffect, useState } from "react"
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
import Priority from "./prioritySelect"
import { useToastStore } from "../../hooks/useToastStore"
import { useAlertStore } from "../../hooks/useAlertStore"

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
      className="flex select-none items-center rounded border-[1px] border-blue-700 bg-blue-50 py-0.5 pl-1.5 pr-2 text-[0.95rem] font-medium text-blue-700 duration-100 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500/75 focus:ring-offset-0">
      <FiDisc className="mr-2 h-5 w-5 rounded bg-blue-700 p-0.5 text-white" />
      ISSUE
    </button>
  ) : type === 1 ? (
    <button
      onClick={() => setType(2)}
      className="flex select-none items-center rounded border-[1px] border-blue-700 bg-blue-50 py-0.5 pl-1.5 pr-2 text-[0.95rem] font-medium text-blue-700 duration-100 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500/75 focus:ring-offset-0">
      <FiCheck className="mr-2 h-5 w-5 rounded bg-blue-700 p-0.5 text-white" />
      BUG
    </button>
  ) : type === 2 ? (
    <button
      onClick={() => setType(0)}
      className="flex select-none items-center rounded border-[1px] border-blue-700 bg-blue-50 py-0.5 pl-1.5 pr-2 text-[0.95rem] font-medium text-blue-700 duration-100 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500/75 focus:ring-offset-0">
      <FiBookmark className="mr-2 h-5 w-5 rounded bg-blue-700 p-0.5 text-white" />
      STORY
    </button>
  ) : null
}

// const updateIssue = async ({
//   item,
//   items,
// }: {
//   item: IssueType
//   items: IssueType[][]
// }) => {
//   const res = await fetch(`/api/upsertItem`, {
//     method: "POST",
//     body: JSON.stringify({
//       id: item.id,
//       name: item.name,
//       userId: item.userId,
//       description: item.description,
//       category: item.category,
//       issueType: item.issueType,
//       priority: item.priority,
//       index: items[item.category].indexOf(item),
//       createdAt: item.createdAt,
//     }),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   })
//   const data = await res.json()
//   console.log("sent", data)
//   return data
// }

interface Props {
  opened: boolean
  setOpened: (opened: boolean) => void
  data: IssueType
}

const IssuePopup: React.FC<Props> = ({ opened, setOpened, data }) => {
  const initial = data

  const [name, setName] = useState(data.name)
  const [desc, setDesc] = useState(data.description)
  const [priority, setPriority] = useState(data.priority)
  const [type, setType] = useState(data.issueType)

  const items = useItemStore((state) => state.items)
  const setItems = useItemStore((state) => state.setItems)

  useEffect(() => {
    console.log("issue popup -- items: ", items)
  }, [items])

  const setOpenToast = useToastStore((state) => state.setOpen)
  const setTitleToast = useToastStore((state) => state.setTitle)
  const setMessageToast = useToastStore((state) => state.setMessage)

  const setOpenAlert = useAlertStore((state) => state.setOpen)
  const setActionAlert = useAlertStore((state) => state.setAction)
  const setDescAlert = useAlertStore((state) => state.setDesc)

  return (
    <Dialog.Root open={opened} onOpenChange={setOpened}>
      {/* <Dialog.Trigger /> */}
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay fixed inset-0 z-50 bg-[#011242]/50" />
        <Dialog.Content className="DialogContent xs:w-[90%] fixed left-1/2 top-1/2 z-50 flex w-[95%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-md border-[1px] border-gray-300 bg-white p-6 focus:outline-none focus:ring-2 focus:ring-blue-500/75 focus:ring-offset-0 lg:w-[60rem]">
          <div className="flex w-full items-center justify-between">
            <IssueSelect type={type} setType={setType} />

            <div className="flex space-x-2">
              <button
                onClick={() => {
                  setOpenAlert(true)
                  setActionAlert("Delete " + name)
                  setDescAlert("This action cannot be undone.")
                }}
                className="flex h-10 w-10 items-center justify-center rounded border-[1px] border-gray-200 text-lg duration-100 hover:border-red-600 hover:bg-red-50 hover:text-red-600 focus:outline-red-400">
                <FiTrash className="" />
              </button>
              <Dialog.Close className="flex h-10 w-10 items-center justify-center rounded border-[1px] border-gray-200 text-lg duration-100 hover:border-gray-300 hover:bg-gray-150 focus:outline-none focus:ring-2 focus:ring-blue-500/75 focus:ring-offset-0">
                <FiX className="" />
              </Dialog.Close>
            </div>
          </div>

          <div className="mt-4 flex w-full justify-between space-x-6">
            <div className="flex-grow">
              <input
                className="w-full rounded border-[1px] border-gray-300 bg-gray-150 p-2 text-start text-2xl font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500/75 focus:ring-offset-0 sm:text-3xl"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <textarea
                className="mt-4 h-[120px] max-h-[180px] min-h-[50px] w-full resize-y rounded border-[1px] border-gray-300 bg-gray-150 p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/75 focus:ring-offset-0 xl:text-base"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
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
              <div className="mt-3 text-xs">{JSON.stringify(items)}</div>
              {/* <div className="mt-3 text-sm">
                Created{" "}
                <span className="font-semibold text-gray-600">
                  {data.createdAt.toString().split(" ").slice(1, 4).join(" ")}
                </span>
              </div> */}
            </div>
          </div>

          <div className="mt-8 flex items-center self-start">
            <button
              onClick={() => {
                // console.log("updateRes starting")
                // const updateRes = await updateIssue({ item: data, items })
                // console.log("updateRes:", updateRes)

                const newItems = items

                const updatedItem = {
                  ...data,
                  name,
                  description: desc,
                  priority,
                  issueType: type,
                }
                const id1 = data.category
                const id2 = items[data.category].indexOf(data)
                newItems[id1][id2] = updatedItem

                console.log("newItems:", newItems)

                setItems(newItems)

                setOpenToast(true)
                setTitleToast("Save Successful")
                setMessageToast("Changes saved to " + name + ".")
              }}
              className={`flex items-center whitespace-nowrap rounded bg-blue-700 py-2 pl-4 pr-5 text-base text-white duration-100 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500/75 focus:ring-offset-0`}>
              <FiSave className="mr-1.5" />
              Save
            </button>
            <button
              onClick={() => {
                setName(initial.name)
                setDesc(initial.description)
                setPriority(initial.priority)
                setType(initial.issueType)
                setOpenToast(true)
                setTitleToast("Reset Successful")
                setMessageToast("Changes reset to intitial data.")
              }}
              className={`ml-3 flex items-center whitespace-nowrap rounded border-[1px] border-gray-300 py-2 pr-5 pl-4 text-base text-gray-600 duration-100 hover:bg-gray-150 focus:outline-none focus:ring-2 focus:ring-blue-500/75 focus:ring-offset-0`}>
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
