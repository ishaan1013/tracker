import { FiArrowLeft, FiArrowRight } from "react-icons/fi"
import { IssueIcons, IssuePpl } from "./issuePreview"

import {useSortable} from '@dnd-kit/sortable'
import {CSS} from '@dnd-kit/utilities'

interface Props {
  id: number
  col: number
  items: number[][]
  setItems: (items: number[][]) => void
}

const Preview: React.FC<Props> = ({ id, col, items, setItems }) => {

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
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
    className="bg-white w-full rounded p-3 mb-1 shadow-lg shadow-blue-900/5 focus:outline-blue-500"
    >
      <div className="flex items-center justify-between">
        <h3 className="font-medium flex-grow whitespace-nowrap overflow-ellipsis overflow-hidden md:mr-4 mr-2">Do something {id}</h3>

        <div className="flex justify-center p-0.5 border-[1px] border-blue-700 rounded-full">
          {
            col !== 0 &&
            <button className="rounded-full duration-100 hover:bg-gray-200 text-blue-700 focus:outline-blue-500">
              <FiArrowLeft className="w-5 h-5 p-0.5" />
            </button>
          }
          {
            col !== 2 &&
            <button className="rounded-full duration-100 hover:bg-gray-200 text-blue-700 focus:outline-blue-500">
              <FiArrowRight className="w-5 h-5 p-0.5" />
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