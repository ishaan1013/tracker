"use client"

import { useState } from "react"
import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import { IssueType } from "../../prisma/issueType"
import { useItemStore, useSearchStore } from "../../hooks"

import IssuePopup from "./issuePopup"
import { FiArrowLeft, FiArrowRight } from "react-icons/fi"
import { IssueIcons, IssuePpl } from "./issuePreview"
import { usePriorityStore } from "../../hooks/filterStores"

interface Props {
  data: IssueType
  col: number
  activeId: string
  index: number
}

const Preview: React.FC<Props> = ({ data, col, activeId, index }) => {
  const search = useSearchStore((state) => state.query)
  const priority = usePriorityStore((state) => state.priority)

  const items = useItemStore((state) => state.items)
  const setItems = useItemStore((state) => state.setItems)

  const [pop, setPop] = useState(false)

  const id = data.id
  const { attributes, listeners, setNodeRef, transform } = useSortable({ id })

  const style = {
    transform: CSS.Transform.toString(transform),
    // transition,
  }

  const priorities = ["Low", "Medium", "High"]
  const priorityMatch =
    priority !== "Priority" ? priorities[data.priority] === priority : true

  if ((search === "" || data.name.includes(search)) && priorityMatch) {
    return (
      <>
        <IssuePopup opened={pop} setOpened={setPop} data={data} />
        <div
          ref={setNodeRef}
          style={style}
          {...attributes}
          {...listeners}
          onClick={() => {
            setPop(true)
          }}
          className={`mb-1 w-full cursor-default rounded bg-white p-3 shadow-lg hover:bg-gradient-to-r hover:from-blue-100 hover:via-white hover:to-white ${
            activeId === id
              ? "z-10 !cursor-grabbing border-[1px] border-blue-700 shadow-blue-900/20"
              : "shadow-blue-900/5"
          } group touch-manipulation focus:outline-blue-500`}>
          <div className="flex items-center justify-between">
            <h3 className="mr-2 flex-grow overflow-hidden overflow-ellipsis whitespace-nowrap text-left font-medium md:mr-4">
              {data.name}
            </h3>
            <div
              className={`opacity-0 ${
                activeId ? "" : "group-hover:opacity-100"
              } flex justify-center rounded-full border-[1px] border-blue-700 p-0.5`}>
              {col !== 0 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    if (col === 1) {
                      setItems([
                        [...items[0], data],
                        items[1].filter((item) => item !== data),
                        items[2],
                      ])
                    }
                    if (col === 2) {
                      setItems([
                        items[0],
                        [...items[1], data],
                        items[2].filter((item) => item !== data),
                      ])
                    }
                  }}
                  className="rounded-full text-blue-700 duration-100 hover:bg-blue-200 focus:outline-blue-500">
                  <FiArrowLeft className="h-4 w-4 p-[0.5px]" />
                </button>
              )}
              {col !== 2 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    if (col === 0) {
                      setItems([
                        items[0].filter((item) => item !== data),
                        [...items[1], data],
                        items[2],
                      ])
                    }
                    if (col === 1) {
                      setItems([
                        items[0],
                        items[1].filter((item) => item !== data),
                        [...items[2], data],
                      ])
                    }
                  }}
                  className="rounded-full text-blue-700 duration-100 hover:bg-blue-200 focus:outline-blue-500">
                  <FiArrowRight className="h-4 w-4 p-[0.5px]" />
                </button>
              )}
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <IssueIcons type={data.issueType} priority={data.priority} />
            <IssuePpl qty={3} />
          </div>
        </div>
      </>
    )
  }
  return null
}

export default Preview
