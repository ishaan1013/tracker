"use client"

import { FiCheckCircle, FiLoader } from "react-icons/fi"
import { useSaveStore } from "../../hooks"

const Header = () => {
  const save = useSaveStore((state) => state.save)

  return (
    <div className="mb-6 flex items-center space-x-4">
      <h1 className="whitespace-nowrap text-2xl font-bold">Kanban Board</h1>

      <div
        className={`flex select-none items-center rounded py-1 text-sm ${
          save === 0
            ? "bg-blue-100/80 pl-2 pr-3.5 text-blue-700"
            : "animate-pulse bg-gray-150 pl-2 pr-2.5 text-gray-600"
        }`}>
        {save === 0 ? (
          <>
            <FiCheckCircle className="mr-2" />
            Saved
          </>
        ) : (
          <>
            <FiLoader className="animate-spin-slow mr-2" />
            Saving...
          </>
        )}
      </div>
    </div>
  )
}

export default Header
