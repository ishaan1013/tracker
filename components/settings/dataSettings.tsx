"use client"
import { useItemStore } from "../../hooks"
import issues from "../data/issuesSeed"

import { FiRefreshCw, FiTrash } from "react-icons/fi"
import { Session } from "next-auth"

const DataSettings = ({ session }: { session: Session }) => {
  const resetData = async () => {
    if (session.user && session.user.email) {
      const res = await fetch(`/api/resetData`, {
        method: "POST",
        body: JSON.stringify({
          userId: session.user.email,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
      return await res.json()
    }
  }

  const deleteAll = async () => {
    if (session.user && session.user.email) {
      const res = await fetch(`/api/deleteAll`, {
        method: "POST",
        body: JSON.stringify({
          userId: session.user.email,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
      return await res.json()
    }
  }

  const setItems = useItemStore((state) => state.setItems)

  return (
    <>
      <div className="border-b-[1px] border-b-gray-300 pt-10 pb-8">
        <h2 className=" mb-6 whitespace-nowrap text-xl font-bold text-gray-600">
          Project data
        </h2>
        <div className="grid grid-cols-2 gap-x-3 md:gap-x-4">
          <button
            onClick={async () => {
              const reset = await resetData()
              console.log(
                "🚀 ~ file: dataSettings.tsx:21 ~ DataSettings ~ reset",
                reset
              )
              setItems([[], [], []])
            }}
            className="w-full rounded bg-blue-700 p-4 text-white duration-200 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500/75 focus:ring-offset-0 md:p-6">
            <FiRefreshCw className="text-2xl" />
            <div className="mt-2 text-left text-lg font-semibold">
              Reset Data
            </div>
            <div className="text-left text-white/75">
              All issues & data will be reset to initial values.
            </div>
          </button>
          <button
            onClick={async () => {
              const del = await deleteAll()
              console.log(
                "🚀 ~ file: dataSettings.tsx:46 ~ DataSettings ~ del",
                del
              )
              setItems([[], [], []])
            }}
            className="w-full rounded bg-red-600 p-4 text-white duration-200 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-400/75 focus:ring-offset-0 md:p-6">
            <FiTrash className="text-2xl" />
            <div className="mt-2 text-left text-lg font-semibold">
              Clear Data
            </div>
            <div className="text-left text-white/75">
              All issues & data will be deleted.
            </div>
          </button>
        </div>
      </div>
    </>
  )
}

export default DataSettings
