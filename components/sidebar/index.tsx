"use client"

import { useState, useEffect } from "react"
import { FiChevronLeft, FiTrello, FiSettings } from 'react-icons/fi'

export default function Sidebar() {
    
  const [hidden, setHidden] = useState(false)
    
    return (
        <div className={`py-8 h-screen ${hidden ? "w-5" : "w-56"} bg-gray-200/50 border-r-[1px] border-gray-300 relative`}>

        <button 
        onClick={() => setHidden((prev) => !prev)}
        className="top-1/2 -translate-y-1/2 -right-3 w-6 h-6 absolute flex items-center justify-center rounded-full bg-white hover:bg-indigo-100/50 backdrop-blur-md border-[1px] border-gray-300">
            <FiChevronLeft className={`w-4 h-4 text-gray-500 ${hidden ? "rotate-180" : ""}`} />
        </button>
        
        <div className={`w-full h-full flex flex-col px-4 overflow-hidden ${hidden ? "hidden" : "block"}`}>

          <div className="flex items-center justify-start mb-4">
                <div className="w-10 h-10 bg-white rounded mr-2"/>
                <div>
                    <p className="font-semibold text-gray-800">Project Name</p>
                    <p className="text-sm -mt-1 text-gray-500">Project Description</p>
                </div>
          </div>
          <button className="p-1.5 mt-4 rounded text-gray-800 font-medium bg-transparent hover:bg-gray-200 text-start flex items-center justify-start"><FiTrello className="mr-2" /> Kanban Board</button>
          <button className="p-1.5 mt-1 rounded text-gray-800 font-medium bg-transparent hover:bg-gray-200 text-start flex items-center justify-start"><FiSettings className="mr-2" /> Project Settings</button>
        
        </div>

      </div>
    )
}