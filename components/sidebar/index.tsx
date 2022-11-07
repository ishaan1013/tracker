"use client"

import Image from "next/image"
import Icon from "../../assets/icon.jpg"
import { useState, useEffect } from "react"
import { FiChevronLeft, FiTrello, FiSettings } from 'react-icons/fi'

export default function Sidebar() {
    
  const [hidden, setHidden] = useState(false)
    
    return (
        <div className={`py-8 h-screen ${hidden ? "w-5" : "w-56"} bg-gray-150 border-r-[1px] border-gray-300 relative`}>

            <button 
            onClick={() => setHidden((prev) => !prev)}
            className="focus:outline-indigo-400 top-1/2 -translate-y-1/2 -right-3 w-6 h-6 absolute flex items-center justify-center rounded-full bg-white hover:bg-indigo-50 hover:border-indigo-600 group backdrop-blur-md border-[1px] border-gray-300">
                <FiChevronLeft className={`w-4 h-4 group-hover:text-indigo-600 text-gray-600 ${hidden ? "rotate-180" : ""}`} />
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
            <button className="focus:outline-indigo-400 p-1.5 mt-4 rounded  font-medium bg-transparent hover:bg-gray-200 text-start flex items-center justify-start"><FiTrello className="mr-2" /> Kanban Board</button>
            <button className="focus:outline-indigo-400 p-1.5 mt-1 rounded  font-medium bg-transparent hover:bg-gray-200 text-start flex items-center justify-start"><FiSettings className="mr-2" /> Project Settings</button>
            
            </div>

        </div>
    )
}