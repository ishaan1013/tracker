"use client"
import { useState } from "react"

const ProjectSettings = () => {
  const [name, setName] = useState("")
  const [desc, setDesc] = useState("")

  return (
    <>
      <div className="border-b-[1px] border-b-gray-300 pt-4 pb-8">
        <h2 className=" mb-6 whitespace-nowrap text-xl font-bold text-gray-600">
          Project Settings
        </h2>
        <div className="flex items-center justify-between">
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
        <div className="mt-2.5 flex items-center justify-between">
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
      </div>
    </>
  )
}

export default ProjectSettings
