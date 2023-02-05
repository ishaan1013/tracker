"use client"
import { useState } from "react"
import { FiRefreshCw, FiTrash } from "react-icons/fi"

const DataSettings = () => {
  return (
    <>
      <div className="border-b-[1px] border-b-gray-300 py-8">
        <h2 className=" mb-6 whitespace-nowrap text-xl font-bold text-gray-600">
          Project data
        </h2>
        <div className="grid grid-cols-2 gap-x-3 md:gap-x-4">
          <button className="w-full rounded bg-blue-700 p-4 text-white duration-200 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500/75 focus:ring-offset-0 md:p-6">
            <FiRefreshCw className="text-2xl" />
            <div className="mt-2 text-left text-lg font-semibold">
              Reset Data
            </div>
            <div className="text-left text-white/75">
              All issues & data will be reset to initial values.
            </div>
          </button>
          <button className="w-full rounded bg-red-600 p-4 text-white duration-200 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-400/75 focus:ring-offset-0 md:p-6">
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
