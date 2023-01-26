"use client"

import { useEffect, useReducer, useState } from "react"
import * as Dialog from "@radix-ui/react-dialog"
import { useItemStore } from "../../hooks"
import Image from "next/image"
import {
  FiX,
  FiTrash,
  FiDisc,
  FiCheck,
  FiBookmark,
  FiSave,
  FiRefreshCw,
  FiLoader,
} from "react-icons/fi"
import { AssigneeType, IssueType } from "../../prisma/issueType"
import Priority from "./prioritySelect"
import { useToastStore, useAlertStore } from "../../hooks"

import CEO from "../../assets/avatars/ceo.webp"
import Marketing from "../../assets/avatars/marketing.webp"
import Engineer from "../../assets/avatars/engineer.webp"
import You from "../../assets/avatars/you.webp"

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

interface Props {
  opened: boolean
  setOpened: (opened: boolean) => void
  data: IssueType
}

const processAssignees = (assignees: AssigneeType[] | undefined) => {
  if (assignees) return assignees.map((assignee) => assignee.name)
  return undefined
}

const ppl = {
  "The CEO": CEO,
  "Head of Marketing": Marketing,
  "Software Engineer": Engineer,
  You: You,
}

const options = ["You", "Software Engineer", "Head of Marketing", "The CEO"]

const IssuePopup: React.FC<Props> = ({ opened, setOpened, data }) => {
  const initial = data

  const [name, setName] = useState(data.name)
  const [desc, setDesc] = useState(data.description)
  const [priority, setPriority] = useState(data.priority)
  const [type, setType] = useState(data.issueType)

  const [assignees, setAssignees] = useState(processAssignees(data.assignees))
  // const [_, forceUpdate] = useReducer((x) => x + 1, 0)

  const [added, setAdded] = useState<string[]>([])
  const [removed, setRemoved] = useState<string[]>([])
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    console.log("assignees changed:", assignees)
    const add = []
    const remove = []
    if (assignees) {
      for (const assignee of assignees) {
        if (!initial.assignees?.map((a) => a.name).includes(assignee))
          add.push(assignee)
      }
      for (const assignee of initial.assignees?.map((a) => a.name) || []) {
        if (!assignees.includes(assignee)) remove.push(assignee)
      }
    }
    console.log("added:", add)
    setAdded(add)
    console.log("removed:", remove)
    setRemoved(remove)
  }, [assignees])

  const items = useItemStore((state) => state.items)
  const setItems = useItemStore((state) => state.setItems)

  const setOpenToast = useToastStore((state) => state.setOpen)
  const setTitleToast = useToastStore((state) => state.setTitle)
  const setMessageToast = useToastStore((state) => state.setMessage)
  const setOpenAlert = useAlertStore((state) => state.setOpen)
  const setActionAlert = useAlertStore((state) => state.setAction)
  const setDescAlert = useAlertStore((state) => state.setDesc)

  const handleSave = async () => {
    setSaving(true)
    const newItems = [...items]
    const newAssignees = [...(assignees ?? [])]?.map((assignee) => {
      return { name: assignee }
    })

    const updatedItem = {
      ...data,
      name,
      description: desc,
      priority,
      issueType: type,
      assignees: newAssignees,
    }
    const cat = data.category
    const pos = items[data.category].map((obj) => obj.id).indexOf(data.id)
    newItems[cat][pos] = updatedItem

    await saveAssignees()

    setItems(newItems)
    setOpenToast(true)
    setTitleToast("Save Successful")
    setMessageToast("Changes saved to " + name + ".")
    console.log("saved", items)
    setSaving(false)
    setOpened(false)
  }

  const saveAssignees = async () => {
    const res = await fetch(`/api/updateAssignees`, {
      method: "POST",
      body: JSON.stringify({
        id: data.id,
        connection: added,
        disconnection: removed,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
    return await res.json()
  }

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
                className="w-full rounded border-[1px] border-gray-300 p-2 text-start text-2xl font-semibold focus:bg-gray-150 focus:outline-none focus:ring-2 focus:ring-blue-500/75 focus:ring-offset-0 sm:text-3xl"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <textarea
                className="mt-4 h-[120px] max-h-[180px] min-h-[50px] w-full resize-y rounded border-[1px] border-gray-300 p-2 text-sm focus:bg-gray-150 focus:outline-none focus:ring-2 focus:ring-blue-500/75 focus:ring-offset-0 xl:text-base"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
              />
            </div>
            <div className="flex w-60 flex-col items-start">
              <div className="mb-1 text-sm font-semibold">Priority:</div>
              <Priority popup initial={data.priority} />
              <div className="text-sm font-semibold">Assignees:</div>

              {options.map((option, i) => {
                return (
                  <button
                    key={i}
                    onClick={() => {
                      if (assignees) {
                        const newAssignees = [...assignees]
                        assignees?.indexOf(option) !== undefined &&
                        assignees?.indexOf(option) > -1
                          ? newAssignees.splice(newAssignees.indexOf(option), 1)
                          : newAssignees.push(option)

                        setAssignees(newAssignees)
                      }
                    }}
                    className={`mt-1 flex h-9 cursor-pointer select-none items-center justify-start rounded-full border-[1px] ${
                      assignees?.indexOf(option) !== undefined &&
                      assignees?.indexOf(option) > -1
                        ? "border-blue-700 bg-blue-50 text-blue-700"
                        : "border-gray-300 text-gray-600"
                    } p-1 pr-2.5 text-sm`}>
                    <Image
                      alt={`Avatar of ${option}`}
                      className={`mr-1.5 h-7 w-7 rounded-full object-contain`}
                      src={option in ppl ? ppl[option as keyof typeof ppl] : ""}
                    />
                    {option}
                  </button>
                )
              })}

              <div className="mt-4 h-[1px] w-full bg-gray-300 text-gray-600" />

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
              onClick={handleSave}
              disabled={
                (initial.name === name &&
                  initial.description === desc &&
                  initial.priority === priority &&
                  initial.issueType === type &&
                  JSON.stringify(
                    processAssignees(initial.assignees)?.sort()
                  ) === JSON.stringify(assignees?.sort())) ||
                saving
              }
              className={`${
                !(
                  (initial.name === name &&
                    initial.description === desc &&
                    initial.priority === priority &&
                    initial.issueType === type &&
                    JSON.stringify(
                      processAssignees(initial.assignees?.sort())
                    ) === JSON.stringify(assignees?.sort())) ||
                  saving
                )
                  ? "bg-blue-700 text-white hover:bg-blue-600"
                  : " cursor-not-allowed bg-gray-700 text-white/50"
              } flex items-center whitespace-nowrap rounded py-2 pl-4 pr-5 text-base text-white duration-100 focus:outline-none focus:ring-2 focus:ring-blue-500/75 focus:ring-offset-0`}>
              {!saving ? (
                <>
                  <FiSave className="mr-1.5" />
                  Save
                </>
              ) : (
                <>
                  <FiLoader className="animate-spin-slow mr-1.5" />
                  Saving...
                </>
              )}
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
