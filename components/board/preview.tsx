"use client"

import { useState } from "react"
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { IssueType } from "../../prisma/issueType"
import { useItemStore, useSearchStore } from "../../hooks"

import Popup from "./popup"
import { FiArrowLeft, FiArrowRight } from "react-icons/fi"
import { IssueIcons, IssuePpl } from "./issuePreview"

interface Props {
  data: IssueType
  col: number
  activeId: string
  index: number
}

const Preview: React.FC<Props> = ({ data, col, activeId, index }) => {

  const search = useSearchStore(state => state.query)

  const items = useItemStore(state => state.items)
  const setItems = useItemStore(state => state.setItems)

  const [pop, setPop] = useState(false)

  const id = data.id
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
  } = useSortable({id})

  const style = {
    transform: CSS.Transform.toString(transform),
    // transition,
  }

  if (search === "" || data.name.includes(search)) {  
    return (
      <>
        <Popup opened={pop} setOpened={setPop} data={data} />
        <div
        ref={setNodeRef}
        style={style}
        {...attributes}
        {...listeners}
        onClick={() => {setPop(true)}}
        className={`bg-white w-full rounded p-3 mb-1 shadow-lg ${activeId === id ? "shadow-blue-900/20 border-[1px] border-blue-700 z-10" : "shadow-blue-900/5"} focus:outline-blue-500 touch-manipulation group`}
        >
          <div className="flex items-center justify-between">
            <h3 className="font-medium flex-grow whitespace-nowrap overflow-ellipsis overflow-hidden md:mr-4 mr-2 text-left">{data.name}</h3>
            <div className={`opacity-0 ${activeId ? "" : "group-hover:opacity-100"} flex justify-center p-0.5 border-[1px] border-blue-700 rounded-full`}>
              {
                col !== 0 &&
                <button
                onClick={(e) => {
                  e.stopPropagation()
                  if (col === 1) {
                    setItems([[...items[0], data], items[1].filter((item) => item !== data), items[2]])
                  }
                  if (col === 2) {
                    setItems([items[0], [...items[1], data], items[2].filter((item) => item !== data)])
                  }
                }}
                className="rounded-full duration-100 hover:bg-blue-200 text-blue-700 focus:outline-blue-500">
                  <FiArrowLeft className="w-4 h-4 p-[0.5px]" />
                </button>
              }
              {
                col !== 2 &&
                <button
                onClick={(e) => {
                  e.stopPropagation()
                  if (col === 0) {
                    setItems([items[0].filter((item) => item !== data), [...items[1], data], items[2]])
                  }
                  if (col === 1) {
                    setItems([items[0], items[1].filter((item) => item !== data), [...items[2], data]])
                  }
                }}
                className="rounded-full duration-100 hover:bg-blue-200 text-blue-700 focus:outline-blue-500">
                  <FiArrowRight className="w-4 h-4 p-[0.5px]" />
                </button>
              }
            </div>
          </div>
          <div className="flex justify-between items-center mt-4">
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