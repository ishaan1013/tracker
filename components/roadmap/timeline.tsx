"use client"

import { useRef, useEffect, useState } from "react"
import { PrismaClient, Issue } from "@prisma/client"
import { prisma } from "../../prisma/db"
import { IssueType } from "../../prisma/issueType"

import { FiChevronLeft, FiLoader, FiPlus, FiZap } from "react-icons/fi"
import EpicPopup from "./epicPopup"

const Timeline = () => {
  const monthRef = useRef<HTMLDivElement>(null)
  const [collapsed, setCollapsed] = useState(false)
  const [opened, setOpened] = useState(false)

  useEffect(() => {
    const monthTo = monthRef.current
    monthTo?.focus()
  }, [])

  return (
    <>
      <EpicPopup opened={opened} setOpened={setOpened} />
      <div className="mt-8 flex h-full w-full items-center rounded border-[1px] border-gray-300">
        <div
          className={`relative h-full rounded-l border-r-2 border-blue-700 ${
            collapsed ? "w-20" : "w-48 min-w-[192px] lg:w-60 lg:min-w-[240px]"
          }`}>
          <button
            onClick={() => setCollapsed((prev) => !prev)}
            className="group absolute top-1/2 -right-3 z-20 flex -translate-y-1/2 items-center justify-center rounded-full border-[1px] border-blue-700 bg-white p-0.5 backdrop-blur-md focus:outline-blue-500">
            <FiChevronLeft
              className={`h-4 w-4 rounded-full p-[0.5px] text-blue-700 group-hover:bg-blue-200 ${
                collapsed ? "translate-x-[1px] rotate-180" : ""
              }`}
            />
          </button>
          <div className="flex h-14 w-full items-center justify-center rounded-tl border-b-[1px] border-gray-300 bg-gray-150 text-gray-600">
            {collapsed ? null : "Projects"}
          </div>
          <div className="mt-2 flex flex-col items-center justify-start px-2">
            <button
              onClick={() => {
                setOpened(true)
              }}
              className={`mb-3 flex w-full select-none items-center justify-center whitespace-nowrap rounded border-[1px] border-transparent bg-blue-700 py-1.5 pr-1 text-base text-white duration-100 hover:bg-blue-700 focus:outline-blue-500`}>
              <FiZap className={collapsed ? "" : "mr-1"} />
              {collapsed ? null : "Project 1"}
            </button>
            <button
              onClick={() => {
                setOpened(true)
              }}
              className={`mb-3 flex w-full select-none items-center justify-center whitespace-nowrap rounded border-[1px] border-transparent bg-blue-700 py-1.5 pr-1 text-base text-white duration-100 hover:bg-blue-700 focus:outline-blue-500`}>
              <FiLoader className={collapsed ? "" : "mr-1"} />
              {collapsed ? null : "Project 2"}
            </button>
            <button
              className={`flex w-full select-none items-center justify-center whitespace-nowrap rounded border-[1px] border-gray-300 py-1.5 pr-1 text-base text-gray-600 duration-100 hover:bg-gray-150 focus:outline-blue-500`}>
              <FiPlus className={collapsed ? "" : "mr-1"} />
              {collapsed ? null : "Create Epic"}
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
            <div className="flex h-full w-72 min-w-[288px] flex-col border-l-[1px] border-gray-300">
              <div
                ref={monthRef}
                tabIndex={0}
                id="focus"
                className="mb-2 flex h-14 w-full items-center justify-center self-center border-b-[1px] border-gray-300 bg-gray-150 text-gray-600 focus:outline-none">
                Dec
              </div>
              <button
                onClick={() => {
                  setOpened(true)
                }}
                className="z-10 mb-3 w-[120%] translate-x-16 rounded border-[1px] border-gray-300 bg-gray-150 py-1.5 px-3 text-left duration-100 hover:bg-gray-200">
                Test
              </button>
              <button
                onClick={() => {
                  setOpened(true)
                }}
                className="z-10 mb-3 w-[120%] -translate-x-4 rounded border-[1px] border-gray-300 bg-gray-150 py-1.5 px-3 text-left duration-100 hover:bg-gray-200">
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
    </>
  )
}

export default Timeline
