"use client"

import { useState, useEffect } from "react"
import * as Select from "@radix-ui/react-select"
import { FiChevronDown } from "react-icons/fi"
import { usePriorityStore } from "../../hooks/filterStores"

const Priority = ({
  popup,
  initial,
  setCreatePriority,
}: {
  popup?: boolean
  initial?: number
  setCreatePriority?: (priority: string) => void
}) => {
  const [val, setVal] = useState<string>("Priority")
  const setPriority = usePriorityStore((state) => state.setPriority)
  const [triggerClass, setTriggerClass] = useState<string>("")

  const validInitial = initial === 0 || initial === 1 || initial === 2

  useEffect(() => {
    if (validInitial) {
      setVal(["Low", "Medium", "High"][initial])
    }
  }, [])

  useEffect(() => {
    if (!popup) {
      setPriority(val)
    }

    if (setCreatePriority) {
      setCreatePriority(val)
    }

    if (val === "Priority") {
      setTriggerClass(
        `${
          popup ? "mb-3" : "ml-6"
        } select-none flex items-center focus:outline-none focus:ring-2 focus:ring-blue-500/75 focus:ring-offset-0 duration-100 py-1 px-2.5 rounded text-base border-[1px] hover:bg-gray-150 text-gray-600 border-gray-300`
      )
    } else {
      setTriggerClass(
        `${
          popup ? "mb-3" : "ml-6"
        } select-none flex items-center focus:outline-none focus:ring-2 focus:ring-blue-500/75 focus:ring-offset-0 duration-100 py-1 px-2.5 rounded text-base border-[1px] bg-blue-50 hover:bg-blue-100 text-blue-700 border-blue-700`
      )
    }
  }, [val])

  return (
    <Select.Root value={val} onValueChange={(value) => setVal(value)}>
      <Select.Trigger className={triggerClass}>
        <Select.Value />
        <Select.Icon>
          <FiChevronDown className="ml-1" />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content
          position="popper"
          align="start"
          sideOffset={3}
          className=" z-50 select-none rounded border-[1px] border-gray-300 bg-gray-150 p-1.5 text-base text-gray-600 duration-100 focus:outline-none focus:ring-2 focus:ring-blue-500/75 focus:ring-offset-0">
          <Select.ScrollUpButton />
          <Select.Viewport>
            {validInitial ? null : (
              <>
                <Select.Item
                  value="Priority"
                  className="mb-1 flex cursor-pointer items-center rounded px-2.5 duration-100 hover:opacity-40 focus:bg-blue-600 focus:text-white focus:outline-none">
                  <Select.ItemText>Priority</Select.ItemText>
                </Select.Item>
                <Select.Separator className="my-1 h-[1px] w-full bg-gray-300" />
              </>
            )}
            <Select.Item
              value="Low"
              className="flex cursor-pointer items-center rounded py-0.5 px-2.5 duration-100 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white focus:outline-none data-[state=checked]:font-semibold data-[state=checked]:hover:text-white">
              <Select.ItemText>Low</Select.ItemText>
            </Select.Item>

            <Select.Item
              value="Medium"
              className="mb-1 flex cursor-pointer items-center rounded py-0.5 px-2.5 duration-100 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white focus:outline-none data-[state=checked]:font-semibold data-[state=checked]:hover:text-white">
              <Select.ItemText>Medium</Select.ItemText>
            </Select.Item>
            <Select.Item
              value="High"
              className="mb-1 flex cursor-pointer items-center rounded py-0.5 px-2.5 duration-100 hover:bg-blue-600 hover:text-white hover:ring-0 focus:bg-blue-600 focus:text-white focus:outline-none data-[state=checked]:font-semibold data-[state=checked]:hover:text-white">
              <Select.ItemText>High</Select.ItemText>
            </Select.Item>
          </Select.Viewport>
          <Select.ScrollDownButton />
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  )
}

export default Priority
