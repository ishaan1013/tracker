"use client"
import { useState } from "react"
import { FiSave } from "react-icons/fi"

const ProjectSettings = () => {
  const [name, setName] = useState("")
  const [desc, setDesc] = useState("")

  return (
    <>
      <div className="cursor-not-allowed select-none border-b-[1px] border-b-transparent pt-10 pb-8 opacity-30">
        <h2 className=" mb-6 whitespace-nowrap text-xl font-bold text-gray-600">
          Project Settings
        </h2>
        <div className="pointer-events-none flex items-center justify-between">
          <label htmlFor="projectName" className="font-medium">
            Project Name
          </label>
          <input
            id="projectName"
            value={name}
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            className="w-72 rounded border-[1px] border-gray-300 bg-gray-150 px-2 py-2 text-sm text-gray-600 placeholder:select-none placeholder:opacity-40 focus:outline-none focus:ring-2 focus:ring-blue-500/75 focus:ring-offset-0"
          />
        </div>
        <div className="pointer-events-none mt-2.5 flex items-center justify-between">
          <label htmlFor="projectDesc" className="font-medium">
            Project Description
          </label>
          <input
            id="projectDesc"
            value={desc}
            placeholder="Description"
            onChange={(e) => setDesc(e.target.value)}
            className="w-72 rounded border-[1px] border-gray-300 bg-gray-150 px-2 py-2 text-sm text-gray-600 placeholder:select-none placeholder:opacity-40 focus:outline-none focus:ring-2 focus:ring-blue-500/75 focus:ring-offset-0"
          />
        </div>
        <button
          // onClick={handleSave}
          className={`pointer-events-none mt-4 flex w-full items-center justify-center whitespace-nowrap rounded bg-blue-700 py-2 pr-1 text-base text-white duration-100 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500/75 focus:ring-offset-0`}>
          <>
            <FiSave className="mr-1.5" />
            Save
          </>
        </button>
      </div>
    </>
  )
}

export default ProjectSettings
