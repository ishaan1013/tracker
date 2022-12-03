"use client"

import { FiPlus, FiHelpCircle } from "react-icons/fi"
import { IoSearch } from "react-icons/io5"
import { IoMdLogOut } from "react-icons/io"
import { signOut } from "next-auth/react"
import Image from "next/image"
import Logo from "../../../assets/logo.png"

import {
  useAboutPopupStore,
  useCreatePopupStore,
  useSearchPopupStore,
} from "../../../hooks"

const SidebarButtons = () => {
  // const createOpened = useCreatePopupStore((state) => state.opened)
  const setCreateOpened = useCreatePopupStore((state) => state.setOpened)
  // const aboutOpened = useAboutPopupStore((state) => state.opened)
  const setAboutOpened = useAboutPopupStore((state) => state.setOpened)
  // const searchOpened = useSearchPopupStore((state) => state.opened)
  const setSearchOpened = useSearchPopupStore((state) => state.setOpened)

  return (
    <>
      <div className="flex flex-col items-center justify-start space-y-4">
        <div className="relative mb-4 h-8 w-8 -hue-rotate-15">
          <Image src={Logo} alt="logo" />
        </div>

        <button
          onClick={() => {
            setSearchOpened(true)
            console.log("search")
          }}
          className="group relative flex items-center rounded-full focus:outline-gray-50/50">
          <IoSearch className="h-8 w-8 rounded-full p-1 text-white hover:bg-white/20" />
          <div className="absolute left-10 z-10 hidden whitespace-nowrap rounded bg-gray-800/75 px-2 py-0.5 font-medium text-white backdrop-blur-sm group-hover:block">
            Search Issues
          </div>
        </button>
        <button
          onClick={() => setCreateOpened(true)}
          className="group relative flex items-center rounded-full focus:outline-gray-50/50">
          <FiPlus className="h-8 w-8 rounded-full p-1 text-white hover:bg-white/20" />
          <div className="absolute left-10 z-10 hidden whitespace-nowrap rounded bg-gray-800/75 px-2 py-0.5 font-medium text-white backdrop-blur-sm group-hover:block">
            Create Issue
          </div>
        </button>
      </div>

      <div className="flex flex-col items-center justify-start space-y-4">
        <button
          onClick={() => setAboutOpened(true)}
          className="group relative flex items-center rounded-full focus:outline-gray-50/50">
          <FiHelpCircle className="h-8 w-8 rounded-full p-1 text-white hover:bg-white/20" />
          <div className="absolute left-10 z-10 hidden whitespace-nowrap rounded bg-gray-800/75 px-2 py-0.5 font-medium text-white backdrop-blur-sm group-hover:block">
            About This Project
          </div>
        </button>
        <button
          onClick={() => signOut()}
          className="group relative flex items-center rounded-full focus:outline-gray-50/50">
          <IoMdLogOut className="h-8 w-8 rounded-full p-1 text-white hover:bg-white/20" />
          <div className="absolute left-10 z-10 hidden whitespace-nowrap rounded bg-gray-800/75 px-2 py-0.5 font-medium text-white backdrop-blur-sm group-hover:block">
            Log Out
          </div>
        </button>
      </div>
    </>
  )
}

export default SidebarButtons
