"use client"

import * as AlertDialog from "@radix-ui/react-alert-dialog"
import { FiCheck } from "react-icons/fi"
import { useItemStore } from "../hooks"
import { useAlertStore } from "../hooks/useAlertStore"

const AlertPopup = () => {
  const open = useAlertStore((state) => state.open)
  const setOpen = useAlertStore((state) => state.setOpen)
  const action = useAlertStore((state) => state.action)
  const desc = useAlertStore((state) => state.desc)
  const fn = useAlertStore((state) => state.fn)
  const items = useItemStore((state) => state.items)
  const setItems = useItemStore((state) => state.setItems)
  const toDelete = useItemStore((state) => state.toDelete)

  const deleteItem = async () => {
    const res = await fetch(`/api/deleteItem`, {
      method: "POST",
      body: JSON.stringify({
        id: toDelete.id,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
    return await res.json()
  }

  const deleteItemState = () => {
    const index = items[toDelete.category].map((e) => e.id).indexOf(toDelete.id)
    const newItems = [...items]
    newItems[toDelete.category].splice(index, 1)
    setItems(newItems)
  }

  return (
    <AlertDialog.Root defaultOpen={false} open={open}>
      <AlertDialog.Portal>
        <AlertDialog.Overlay className="AlertDialogOverlay fixed inset-0 z-50 bg-[#011242]/50" />
        <AlertDialog.Content className="AlertDialogContent fixed left-1/2 top-1/2 z-50 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-md border-[1px] border-gray-300 bg-white px-8 py-6 focus:outline-none focus:ring-2 focus:ring-red-400/75 focus:ring-offset-0">
          <AlertDialog.Title className="AlertDialogTitle text-lg font-bold">
            Confirm: <span className="text-red-600">{action}</span>
          </AlertDialog.Title>
          <AlertDialog.Description className="AlertDialogDescription mt-1 mb-6 text-gray-600">
            {desc}
          </AlertDialog.Description>
          <div className="flex w-full">
            <AlertDialog.Cancel
              asChild
              onClick={() => setOpen(false)}
              className="">
              <button className="flex items-center whitespace-nowrap rounded border-[1px] border-gray-300 py-2 px-4 text-center text-base text-gray-600 duration-100 hover:bg-gray-150 focus:outline-none focus:ring-2 focus:ring-blue-500/75 focus:ring-offset-0">
                Cancel
              </button>
            </AlertDialog.Cancel>
            <AlertDialog.Action asChild className="">
              <button
                onClick={
                  fn === "delete"
                    ? () => {
                        deleteItem()
                        deleteItemState()
                        setOpen(false)
                      }
                    : () => {}
                }
                className="ml-3 flex w-full items-center justify-center whitespace-nowrap rounded bg-red-600 py-2 pl-4 pr-5 text-center text-base text-white duration-100 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-400/75 focus:ring-offset-0">
                <FiCheck className="mr-1.5" />
                Confirm
              </button>
            </AlertDialog.Action>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  )
}

export default AlertPopup
