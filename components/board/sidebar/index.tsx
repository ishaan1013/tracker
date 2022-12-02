"use client"

import Image from "next/image"
import Icon from "../../../assets/icon.jpg"
import { useState, useEffect } from "react"
import {
  FiChevronLeft,
  FiTrello,
  FiSettings,
  FiTruck,
  FiGitCommit,
  FiGitMerge,
} from "react-icons/fi"

export default function Sidebar() {
  const [hidden, setHidden] = useState(false)

  return (
    <div
      className={`ml-16 mr-2 h-full transition-all md:mr-4 ${
        hidden ? "min-w-[1.5rem]" : "min-w-[14rem]"
      }`}>
      <div className="fixed z-40 h-full">
        <div
          className={`h-full py-8 ${
            hidden ? "min-w-[1.5rem]" : "min-w-[14rem]"
          } right-inset relative border-r-[1px] border-gray-300 bg-gray-150`}>
          <button
            onClick={() => setHidden((prev) => !prev)}
            className="group absolute top-1/2 -right-3 flex -translate-y-1/2 items-center justify-center rounded-full border-[1px] border-blue-700 bg-white p-0.5 backdrop-blur-md focus:outline-blue-500">
            <FiChevronLeft
              className={`h-4 w-4 rounded-full p-[0.5px] text-blue-700 group-hover:bg-blue-200 ${
                hidden ? "rotate-180" : ""
              }`}
            />
          </button>

          <div
            className={`flex h-full w-full flex-col overflow-hidden px-4 ${
              hidden ? "hidden" : "block"
            }`}>
            <div className="mb-4 flex items-center justify-start">
              <div className="pointer-events-none relative mr-2 h-10 w-10 select-none overflow-hidden rounded bg-white contrast-125 -hue-rotate-[330deg] saturate-150">
                <Image src={Icon} alt="Project Icon" />
              </div>
              <div>
                <p className="font-semibold ">Project Name</p>
                <p className="-mt-1 text-sm text-gray-600">
                  Project Description
                </p>
              </div>
            </div>
            <button className="mt-4 flex items-center justify-start rounded  bg-transparent py-2 px-1.5 text-start font-medium hover:bg-gray-200 focus:outline-blue-500">
              <FiTrello className="mr-2" /> Kanban Board
            </button>
            <button className="mt-1 flex items-center justify-start rounded  bg-transparent py-2 px-1.5 text-start font-medium hover:bg-gray-200 focus:outline-blue-500">
              <FiGitCommit className="mr-2" /> Roadmap
            </button>
            <button className="mt-1 flex items-center justify-start rounded  bg-transparent py-2 px-1.5 text-start font-medium hover:bg-gray-200 focus:outline-blue-500">
              <FiSettings className="mr-2" /> Project Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
