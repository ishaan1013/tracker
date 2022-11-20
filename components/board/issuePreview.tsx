import { FiArrowDown, FiArrowUp, FiBookmark, FiCheck, FiDisc } from "react-icons/fi"

export const IssuePpl = (props: {qty: 0 | 1 | 2 | 3 | 4}) => {
    return (
      <div className="flex items-center flex-row-reverse z-0">
            <div className="w-7 h-7 rounded-full focus:outline-blue-500 -ml-1.5 bg-gray-150 border-2 border-white"></div>
            <div className="w-7 h-7 rounded-full focus:outline-blue-500 -ml-1.5 bg-gray-150 border-2 border-white"></div>
            <div className="w-7 h-7 rounded-full focus:outline-blue-500 -ml-1.5 bg-gray-150 border-2 border-white"></div>
            <div className="w-7 h-7 rounded-full focus:outline-blue-500 -ml-1.5 bg-gray-150 border-2 border-white"></div>
      </div>
    )
}

export const IssueIcons = (props: {type:number, priority:number}) => {
    return (
        <div className="flex items-center space-x-1.5">
        {
            props.type === 0 ?
            <FiDisc className="text-white p-0.5 w-5 h-5 bg-red-500/90 rounded" />
            :
            props.type === 1 ?
            <FiCheck className="text-white p-0.5 w-5 h-5 bg-blue-400 rounded" />
            :
            props.type === 2 ?
            <FiBookmark className="text-white p-0.5 w-5 h-5 bg-green-500 rounded" />
            :
            null
        }
        {
            props.priority === 0 ?
            <FiArrowDown className="text-green-600 w-5 h-5" />
            :
            props.priority === 1 ?
            <FiArrowUp className="text-yellow-500 w-5 h-5" />
            :
            props.priority === 2 ?
            <FiArrowUp className="text-red-500 w-5 h-5" />
            :
            null
        }
        </div>
    )
}