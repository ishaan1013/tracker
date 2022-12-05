"use client"

import { useRef, useEffect } from "react"
import { PrismaClient, Issue } from "@prisma/client"
import { prisma } from "../../prisma/db"
import { IssueType } from "../../prisma/issueType"

import { FiLoader, FiPlus, FiZap } from "react-icons/fi"

const Timeline = () => {
  const monthRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const monthTo = monthRef.current
    monthTo?.focus()
  }, [])

  return (
    <div className="mt-8 flex h-full w-full items-center rounded border-[1px] border-gray-300">
      <div className="h-full w-60 min-w-[240px] rounded-l border-r-2 border-gray-300">
        <div className="flex h-14 w-full items-center justify-center rounded-tl border-b-[1px] border-gray-300 bg-gray-150 text-gray-600">
          Projects
        </div>
        <div className="mt-2 flex flex-col items-center justify-start px-2">
          <button
            className={`mb-3 flex w-full select-none items-center justify-center whitespace-nowrap rounded border-[1px] border-transparent bg-blue-700 py-1.5 pr-1 text-base text-white duration-100 hover:bg-blue-600 focus:outline-blue-500`}>
            <FiZap className="mr-1" />
            Project 1
          </button>
          <button
            className={`mb-3 flex w-full select-none items-center justify-center whitespace-nowrap rounded border-[1px] border-transparent bg-blue-700 py-1.5 pr-1 text-base text-white duration-100 hover:bg-blue-600 focus:outline-blue-500`}>
            <FiLoader className="mr-1" />
            Project 2
          </button>
          <button
            className={`flex w-full select-none items-center justify-center whitespace-nowrap rounded border-[1px] border-gray-300 py-1.5 pr-1 text-base text-gray-600 duration-100 hover:bg-gray-150 focus:outline-blue-500`}>
            <FiPlus className="mr-1" />
            Create Epic
          </button>
        </div>
      </div>
      <div className="roadmapScroll relative inline-block h-full w-full overflow-y-hidden overflow-x-scroll rounded-r">
        {/* <div className="absolute -z-10 h-14 w-full rounded-tr border-b-[1px] border-gray-300 bg-gray-150"></div> */}
        <div className="flex h-full">
          <div className="flex h-full w-72 min-w-[288px] flex-col border-l-[1px] border-gray-300">
            <div className="mb-2 flex h-14 w-full items-center justify-center self-center border-b-[1px] border-gray-300 bg-gray-150 text-gray-600 focus:outline-none">
              May
            </div>
          </div>
          <div className="flex h-full w-72 min-w-[288px] flex-col border-l-[1px] border-gray-300">
            <div className="mb-2 flex h-14 w-full items-center justify-center self-center border-b-[1px] border-gray-300 bg-gray-150 text-gray-600 focus:outline-none">
              Jun
            </div>
          </div>
          <div className="flex h-full w-72 min-w-[288px] flex-col border-l-[1px] border-gray-300">
            <div className="mb-2 flex h-14 w-full items-center justify-center self-center border-b-[1px] border-gray-300 bg-gray-150 text-gray-600 focus:outline-none">
              Jul
            </div>
          </div>
          <div className="flex h-full w-72 min-w-[288px] flex-col border-l-[1px] border-gray-300">
            <div className="mb-2 flex h-14 w-full items-center justify-center self-center border-b-[1px] border-gray-300 bg-gray-150 text-gray-600 focus:outline-none">
              Aug
            </div>
          </div>
          <div className="flex h-full w-72 min-w-[288px] flex-col border-l-[1px] border-gray-300">
            <div className="mb-2 flex h-14 w-full items-center justify-center self-center border-b-[1px] border-gray-300 bg-gray-150 text-gray-600 focus:outline-none">
              Sep
            </div>
          </div>
          <div className="flex h-full w-72 min-w-[288px] flex-col border-l-[1px] border-gray-300">
            <div className="mb-2 flex h-14 w-full items-center justify-center self-center border-b-[1px] border-gray-300 bg-gray-150 text-gray-600 focus:outline-none">
              Oct
            </div>
          </div>
          <div className="flex h-full w-72 min-w-[288px] flex-col border-l-[1px] border-gray-300">
            <div className="mb-2 flex h-14 w-full items-center justify-center self-center border-b-[1px] border-gray-300 bg-gray-150 text-gray-600 focus:outline-none">
              Nov
            </div>
          </div>
          <div
            className="flex h-full w-72 min-w-[288px] flex-col border-l-[1px] border-gray-300"
            ref={monthRef}
            tabIndex={0}
            id="focus">
            <div className="mb-2 flex h-14 w-full items-center justify-center self-center border-b-[1px] border-gray-300 bg-gray-150 text-gray-600 focus:outline-none">
              Dec
            </div>
            <button className="z-10 mb-3 w-[120%] translate-x-16 rounded border-[1px] border-gray-300 bg-gray-150 py-1.5 px-3 text-left duration-100 hover:bg-gray-200">
              Test
            </button>
            <button className="z-10 mb-3 w-[120%] -translate-x-4 rounded border-[1px] border-gray-300 bg-gray-150 py-1.5 px-3 text-left duration-100 hover:bg-gray-200">
              Test
            </button>
          </div>
          <div className="flex h-full w-72 min-w-[288px] flex-col border-l-[1px] border-gray-300">
            <div className="mb-2 flex h-14 w-full items-center justify-center self-center border-b-[1px] border-gray-300 bg-gray-150 text-gray-600 focus:outline-none">
              Jan 23
            </div>
          </div>
          <div className="flex h-full w-72 min-w-[288px] flex-col border-l-[1px] border-gray-300">
            <div className="mb-2 flex h-14 w-full items-center justify-center self-center border-b-[1px] border-gray-300 bg-gray-150 text-gray-600 focus:outline-none">
              Feb 23
            </div>
          </div>
          <div className="flex h-full w-72 min-w-[288px] flex-col border-l-[1px] border-gray-300">
            <div className="mb-2 flex h-14 w-full items-center justify-center self-center border-b-[1px] border-gray-300 bg-gray-150 text-gray-600 focus:outline-none">
              Mar 23
            </div>
          </div>
          <div className="flex h-full w-72 min-w-[288px] flex-col border-l-[1px] border-gray-300">
            <div className="mb-2 flex h-14 w-full items-center justify-center self-center border-b-[1px] border-gray-300 bg-gray-150 text-gray-600 focus:outline-none">
              Apr 23
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Timeline
