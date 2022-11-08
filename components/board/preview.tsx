"use client"

import { FiArrowLeft, FiArrowRight } from "react-icons/fi"
import { IssueIcons, IssuePpl } from "./issuePreview"

import {useSortable} from '@dnd-kit/sortable'
import {CSS} from '@dnd-kit/utilities'

interface Props {
  id: string
  col: number
  items: string[][]
  setItems: (items: string[][]) => void
  activeId: string
}

const Preview: React.FC<Props> = ({ id, col, items, setItems, activeId }) => {

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

  return (
    <div 
    ref={setNodeRef}
    style={style}
    {...attributes}
    {...listeners}
    className={`bg-white w-full rounded p-3 mb-1 shadow-lg ${activeId === id ? "shadow-blue-900/20 border-[1px] border-blue-700 z-10" : "shadow-blue-900/5"} focus:outline-blue-500 touch-manipulation `}
    >
      <div className="flex items-center justify-between">
        <h3 className="font-medium flex-grow whitespace-nowrap overflow-ellipsis overflow-hidden md:mr-4 mr-2">Do something {id}</h3>

        <div className="flex justify-center p-0.5 border-[1px] border-blue-700 rounded-full">
          {
            col !== 0 &&
            <button
            onClick={() => {
              if (col === 1) {
                setItems([[...items[0], id], items[1].filter((item) => item !== id), items[2]])
              }
              if (col === 2) {
                setItems([items[0], [...items[1], id], items[2].filter((item) => item !== id)])
              }
            }}
            className="rounded-full duration-100 hover:bg-blue-200 text-blue-700 focus:outline-blue-500">
              <FiArrowLeft className="w-4 h-4 p-[1px]" />
            </button>
          }
          {
            col !== 2 &&
            <button
            onClick={() => {
              if (col === 0) {
                setItems([items[0].filter((item) => item !== id), [...items[1], id], items[2]])
              }
              if (col === 1) {
                setItems([items[0], items[1].filter((item) => item !== id), [...items[2], id]])
              }
            }}
            className="rounded-full duration-100 hover:bg-blue-200 text-blue-700 focus:outline-blue-500">
              <FiArrowRight className="w-4 h-4 p-[1px]" />
            </button>
          }
        </div>
      </div>

      <div className="flex justify-between items-center mt-4">

        <IssueIcons type={2} priority={1} />
        <IssuePpl qty={3} />

      </div>

    </div>
  )
}

export default Preview