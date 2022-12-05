"use client"

import { useState, useEffect } from "react"
import * as Select from "@radix-ui/react-select"
import { FiCheck, FiChevronDown } from "react-icons/fi"

const Status = () => {
  const [val, setVal] = useState<string>("To-Do")

  return (
    <Select.Root value={val} onValueChange={(value) => setVal(value)}>
      <Select.Trigger
        className={`mb-3 ml-3 flex select-none items-center rounded border-[1px] border-blue-700 py-1 px-2.5 text-base text-blue-700 duration-100 hover:bg-gray-200 focus:outline-blue-500`}>
        <Select.Value />
        <Select.Icon>
          <FiChevronDown className="ml-1" />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content className=" z-50 select-none rounded border-[1px] border-gray-300 bg-gray-150 p-1.5 text-base text-gray-600 duration-100 focus:outline-blue-500">
          <Select.ScrollUpButton />
          <Select.Viewport>
            <Select.Item
              value="To-Do"
              className="mb-1 flex cursor-pointer items-center rounded py-0.5 px-2 duration-100 hover:bg-blue-700 hover:text-white focus:outline-blue-500 data-[state=checked]:font-semibold data-[state=checked]:text-blue-700 data-[state=checked]:hover:text-white">
              <Select.ItemText>To-Do</Select.ItemText>
            </Select.Item>
            <Select.Item
              value="In Progress"
              className="mb-1 flex cursor-pointer items-center rounded py-0.5 px-2 duration-100 hover:bg-blue-700 hover:text-white focus:outline-blue-500 data-[state=checked]:font-semibold data-[state=checked]:text-blue-700 data-[state=checked]:hover:text-white">
              <Select.ItemText>In Progress</Select.ItemText>
            </Select.Item>
            <Select.Item
              value="Complete"
              className="flex cursor-pointer items-center rounded py-0.5 px-2 duration-100 hover:bg-blue-700 hover:text-white focus:outline-blue-500 data-[state=checked]:font-semibold data-[state=checked]:text-blue-700 data-[state=checked]:hover:text-white">
              <Select.ItemText>Complete</Select.ItemText>
            </Select.Item>
          </Select.Viewport>
          <Select.ScrollDownButton />
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  )
}

export default Status
