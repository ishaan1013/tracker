import Image from "next/image"
import {
  FiArrowDown,
  FiArrowUp,
  FiBookmark,
  FiCheck,
  FiDisc,
} from "react-icons/fi"

import High from "../../assets/icons/p-high.svg"
import Low from "../../assets/icons/p-low.svg"
import Mid from "../../assets/icons/p-mid.svg"

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
            } rounded-full border-2 border-white bg-gray-150 focus:outline-none focus:ring-[3px] focus:ring-blue-500/75 focus:ring-offset-0`}></div>
        )
      })}
      {/* <div className="-ml-1.5 h-7 w-7 rounded-full border-2 border-white bg-gray-150 focus:outline-none focus:ring-[3px] focus:ring-blue-500/75 focus:ring-offset-0"></div>
      <div className="-ml-1.5 h-7 w-7 rounded-full border-2 border-white bg-gray-150 focus:outline-none focus:ring-[3px] focus:ring-blue-500/75 focus:ring-offset-0"></div>
      <div className="-ml-1.5 h-7 w-7 rounded-full border-2 border-white bg-gray-150 focus:outline-none focus:ring-[3px] focus:ring-blue-500/75 focus:ring-offset-0"></div>
      <div className="-ml-1.5 h-7 w-7 rounded-full border-2 border-white bg-gray-150 focus:outline-none focus:ring-[3px] focus:ring-blue-500/75 focus:ring-offset-0"></div> */}
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
        <FiDisc className="h-5 w-5 rounded bg-blue-700 p-0.5 text-white" />
      ) : type === 1 ? (
        <FiCheck className="h-5 w-5 rounded bg-blue-700 p-0.5 text-white" />
      ) : type === 2 ? (
        <FiBookmark className="h-5 w-5 rounded bg-blue-700 p-0.5 text-white" />
      ) : null}
      {priority === 0 ? (
        <Image src={Low} alt="Low Priority" width={20} height={20} />
      ) : priority === 1 ? (
        <Image src={Mid} alt="Medium Priority" width={20} height={20} />
      ) : priority === 2 ? (
        <Image src={High} alt="High Priority" width={20} height={20} />
      ) : null}
    </div>
  )
}
