import { AssigneeType } from "../../prisma/issueType"
import Image from "next/image"
import { FiBookmark, FiCheck, FiDisc } from "react-icons/fi"

import High from "../../assets/icons/p-high.svg"
import Low from "../../assets/icons/p-low.svg"
import Mid from "../../assets/icons/p-mid.svg"

import CEO from "../../assets/avatars/ceo.webp"
import Marketing from "../../assets/avatars/marketing.webp"
import Engineer from "../../assets/avatars/engineer.webp"
import You from "../../assets/avatars/you.webp"

const ppl = {
  "The CEO": CEO,
  "Head of Marketing": Marketing,
  "Software Engineer": Engineer,
  You: You,
}

export const IssuePpl = ({
  qty,
  bigger,
  data,
}: {
  qty?: 0 | 1 | 2 | 3 | 4
  data?: AssigneeType[] | undefined
  bigger?: boolean
}) => {
  if (data)
    return (
      <div className="z-0 flex flex-row-reverse items-center">
        {data.map((assignee, i) => {
          return (
            <Image
              key={i}
              alt={`Avatar of ${assignee.name}`}
              className={`${data.length > 1 && "-ml-1.5"} ${
                bigger ? "h-9 w-9" : "h-7 w-7"
              } rounded-full border-2 border-white bg-gray-150 focus:outline-none focus:ring-2 focus:ring-blue-500/75 focus:ring-offset-0`}
              src={
                assignee.name in ppl
                  ? ppl[assignee.name as keyof typeof ppl]
                  : ""
              }
            />
          )
        })}
      </div>
    )
  return (
    <div className="z-0 flex flex-row-reverse items-center">
      {[...Array(qty)].map((_, i) => {
        return (
          <div
            key={i}
            className={`-ml-1.5 ${
              bigger ? "h-9 w-9" : "h-7 w-7"
            } rounded-full border-2 border-white bg-gray-150 focus:outline-none focus:ring-2 focus:ring-blue-500/75 focus:ring-offset-0`}></div>
        )
      })}
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
