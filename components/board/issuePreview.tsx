import { FiArrowDown, FiArrowUp, FiBookmark, FiCheck, FiDisc } from "react-icons/fi"

export const IssuePpl = ({qty}: {qty: 0 | 1 | 2 | 3 | 4}) => {
    return (
      <div className="flex items-center flex-row-reverse z-0">
            <div className="w-7 h-7 rounded-full focus:outline-blue-500 -ml-1.5 bg-gray-150 border-2 border-white"></div>
            <div className="w-7 h-7 rounded-full focus:outline-blue-500 -ml-1.5 bg-gray-150 border-2 border-white"></div>
            <div className="w-7 h-7 rounded-full focus:outline-blue-500 -ml-1.5 bg-gray-150 border-2 border-white"></div>
            <div className="w-7 h-7 rounded-full focus:outline-blue-500 -ml-1.5 bg-gray-150 border-2 border-white"></div>
      </div>
    )
}

export const IssueIcons = ({className, type, priority}: {className?: string, type?:number, priority?:number}) => {
    return (
        <div className={`flex items-center space-x-1.5 ${className ? className : ""}`}>
        {
            type === 0 ?
            <FiDisc className="text-white p-0.5 w-5 h-5 bg-blue-600 rounded" />
            :
            type === 1 ?
            <FiCheck className="text-white p-0.5 w-5 h-5 bg-blue-600 rounded" />
            :
            type === 2 ?
            <FiBookmark className="text-white p-0.5 w-5 h-5 bg-blue-600 rounded" />
            :
            null
        }
        {
            priority === 0 ?
            <FiArrowDown className="text-green-600 w-5 h-5" />
            :
            priority === 1 ?
            <FiArrowUp className="text-yellow-500 w-5 h-5" />
            :
            priority === 2 ?
            <FiArrowUp className="text-red-500 w-5 h-5" />
            :
            null
        }
        </div>
    )
}