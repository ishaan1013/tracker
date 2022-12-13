"use client"

import * as Toast from "@radix-ui/react-toast"
import { useState, useEffect, useRef } from "react"
import { FiCheckCircle } from "react-icons/fi"
import { useToastStore } from "../hooks/useToastStore"

const ToastComponent = () => {
  const timerRef = useRef(0)
  const open = useToastStore((state) => state.open)
  const setOpen = useToastStore((state) => state.setOpen)
  const title = useToastStore((state) => state.title)
  const message = useToastStore((state) => state.message)

  useEffect(() => {
    return () => clearTimeout(timerRef.current)
  }, [])

  return (
    <Toast.Provider swipeDirection="right">
      <Toast.Root
        duration={4000}
        className="ToastRoot flex items-center justify-start rounded border-[1px] border-gray-300 bg-white px-5 py-3 shadow-lg shadow-blue-900/50"
        open={open}
        onOpenChange={setOpen}>
        <FiCheckCircle className="mr-4 text-2xl text-blue-700" />
        <div>
          <Toast.Title className="text-base font-semibold">{title}</Toast.Title>
          <Toast.Description asChild>
            <div className="text-sm text-gray-600">{message}</div>
          </Toast.Description>
        </div>
      </Toast.Root>
      <Toast.Viewport className="max-w-screen fixed right-2 bottom-2 z-[51] m-0 flex w-96 list-none flex-col gap-2.5 outline-none" />
    </Toast.Provider>
  )
}

export default ToastComponent
