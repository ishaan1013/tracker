"use client"

import Image from "next/image"
import Icon from "../../assets/icon.jpg"
import { useState, useEffect } from "react"
import { FiChevronLeft, FiTrello, FiSettings, FiTruck, FiGitCommit, FiGitMerge } from 'react-icons/fi'

export default function Sidebar() {
    
  const [hidden, setHidden] = useState(false)
    
  return (
    <div className={`h-full ml-16 md:mr-4 mr-2 ${hidden ? "min-w-[1.5rem]" : "min-w-[14rem]"}`}>
      <div className="fixed h-full z-40">
        <div className={`py-8 h-full ${hidden ? "min-w-[1.5rem]" : "min-w-[14rem]"} bg-gray-150 border-r-[1px] border-gray-300 right-inset relative`}>
          <button
          onClick={() => setHidden((prev) => !prev)}
          className="focus:outline-blue-500 top-1/2 -translate-y-1/2 -right-3 absolute flex items-center justify-center rounded-full bg-white p-0.5 group backdrop-blur-md border-[1px] border-blue-700">
            <FiChevronLeft className={`w-4 h-4 p-[0.5px] group-hover:bg-blue-200 rounded-full text-blue-700 ${hidden ? "rotate-180" : ""}`} />
          </button>
      
          <div className={`w-full h-full flex flex-col px-4 overflow-hidden ${hidden ? "hidden" : "block"}`}>
          <div className="flex items-center justify-start mb-4">
            <div className="w-10 h-10 contrast-125 saturate-150 bg-white rounded mr-2 relative overflow-hidden -hue-rotate-[330deg] pointer-events-none select-none">
              <Image
              src={Icon}
              alt="Project Icon"
              />
            </div>
            <div>
              <p className="font-semibold ">Project Name</p>
              <p className="text-sm -mt-1 text-gray-600">Project Description</p>
            </div>
          </div>
          <button className="focus:outline-blue-500 py-2 px-1.5 mt-4 rounded  font-medium bg-transparent hover:bg-gray-200 text-start flex items-center justify-start"><FiTrello className="mr-2" /> Kanban Board</button>
          <button className="focus:outline-blue-500 py-2 px-1.5 mt-1 rounded  font-medium bg-transparent hover:bg-gray-200 text-start flex items-center justify-start"><FiGitCommit className="mr-2" /> Roadmap</button>
          <button className="focus:outline-blue-500 py-2 px-1.5 mt-1 rounded  font-medium bg-transparent hover:bg-gray-200 text-start flex items-center justify-start"><FiSettings className="mr-2" /> Project Settings</button>
      
          </div>
        </div>
      </div>
    </div>
  )
}