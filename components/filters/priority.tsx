"use client"

import { useState, useEffect } from "react"
import * as Select from '@radix-ui/react-select'
import { FiCheck, FiChevronDown } from "react-icons/fi"

const Priority:React.FC = () => {

  const [val, setVal] = useState<string>("Priority")

  const [triggerClass, setTriggerClass] = useState<string>("Priority")

  useEffect(() => {
    if (val === "Priority") {
      setTriggerClass("ml-6 flex items-center focus:outline-indigo-400 duration-100 py-1 px-2.5 rounded text-base "+"hover:bg-gray-150 text-gray-600")
    }
    else {
      setTriggerClass("ml-6 flex items-center focus:outline-indigo-400 duration-100 py-1 px-2.5 rounded text-base "+"bg-gray-150 hover:bg-gray-200 text-indigo-600")
    }
  }, [val])

  return (
    <Select.Root value={val} onValueChange={(value) => setVal(value)}>

      <Select.Trigger className={triggerClass}>
        <Select.Value  />
        <Select.Icon>
          <FiChevronDown className="ml-1" />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>

        <Select.Content className="focus:outline-indigo-400 duration-100 bg-gray-150 p-1.5 rounded text-base text-gray-600">
          <Select.ScrollUpButton />
          <Select.Viewport>

            <Select.Item value="Priority" className="focus:outline-indigo-400 rounded flex items-center mb-1 px-2 opacity-70 hover:opacity-50 duration-100 cursor-pointer">
              <Select.ItemText>Priority</Select.ItemText>
            </Select.Item>
            <Select.Separator className="my-1 h-[1px] w-full bg-gray-300" />
            <Select.Item value="High" className="focus:outline-indigo-400 rounded data-[state=checked]:text-indigo-600 data-[state=checked]:hover:text-white data-[state=checked]:font-semibold flex items-center mb-1 py-0.5 px-2 hover:bg-indigo-600 hover:text-white duration-100 cursor-pointer">
              <Select.ItemText>High</Select.ItemText>
            </Select.Item>
            <Select.Item value="Medium" className="focus:outline-indigo-400 rounded data-[state=checked]:text-indigo-600 data-[state=checked]:hover:text-white data-[state=checked]:font-semibold flex items-center mb-1 py-0.5 px-2 hover:bg-indigo-600 hover:text-white duration-100 cursor-pointer">
              <Select.ItemText>Medium</Select.ItemText>
            </Select.Item>
            <Select.Item value="Low" className="focus:outline-indigo-400 rounded data-[state=checked]:text-indigo-600 data-[state=checked]:hover:text-white data-[state=checked]:font-semibold flex items-center py-0.5 px-2 hover:bg-indigo-600 hover:text-white duration-100 cursor-pointer">
              <Select.ItemText>Low</Select.ItemText>
            </Select.Item>

          </Select.Viewport>
          <Select.ScrollDownButton />
        </Select.Content>

      </Select.Portal>
    </Select.Root>
  )
}

export default Priority