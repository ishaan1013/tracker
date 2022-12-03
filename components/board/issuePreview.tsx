import {
  FiArrowDown,
  FiArrowUp,
  FiBookmark,
  FiCheck,
  FiDisc,
} from "react-icons/fi"

export const IssuePpl = ({
  qty,
  bigger,
}: {
  qty: 0 | 1 | 2 | 3 | 4
  bigger?: boolean
}) => {
  return (
    <div className="z-0 flex flex-row-reverse items-center">
      {[...Array(qty)].map((_, i) => {
        return (
          <div
            key={i}
            className={`-ml-1.5 ${
              bigger ? "h-9 w-9" : "h-7 w-7"
            } rounded-full border-2 border-white bg-gray-150 focus:outline-blue-500`}></div>
        )
      })}
      {/* <div className="-ml-1.5 h-7 w-7 rounded-full border-2 border-white bg-gray-150 focus:outline-blue-500"></div>
      <div className="-ml-1.5 h-7 w-7 rounded-full border-2 border-white bg-gray-150 focus:outline-blue-500"></div>
      <div className="-ml-1.5 h-7 w-7 rounded-full border-2 border-white bg-gray-150 focus:outline-blue-500"></div>
      <div className="-ml-1.5 h-7 w-7 rounded-full border-2 border-white bg-gray-150 focus:outline-blue-500"></div> */}
    </div>
  )
}

export const IssueIcons = ({
  className,
  type,
  priority,
}: {
  className?: string
  type?: number
  priority?: number
}) => {
  return (
    <div
      className={`flex items-center space-x-1.5 ${className ? className : ""}`}>
      {type === 0 ? (
        <FiDisc className="h-5 w-5 rounded bg-blue-600 p-0.5 text-white" />
      ) : type === 1 ? (
        <FiCheck className="h-5 w-5 rounded bg-blue-600 p-0.5 text-white" />
      ) : type === 2 ? (
        <FiBookmark className="h-5 w-5 rounded bg-blue-600 p-0.5 text-white" />
      ) : null}
      {priority === 0 ? (
        <FiArrowDown className="h-5 w-5 text-green-600" />
      ) : priority === 1 ? (
        <FiArrowUp className="h-5 w-5 text-yellow-500" />
      ) : priority === 2 ? (
        <FiArrowUp className="h-5 w-5 text-red-500" />
      ) : null}
    </div>
  )
}
