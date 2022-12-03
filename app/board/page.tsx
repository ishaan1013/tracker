import { redirect } from "next/navigation"

import { PrismaClient, Issue } from "@prisma/client"
import { IssueType } from "../../prisma/issueType"
import { unstable_getServerSession } from "next-auth/next"
import { authOptions } from "../../pages/api/auth/[...nextauth]"
// import { useSession } from "next-auth/react"

import Sidebar from "../../components/board/sidebar"
import Boards from "../../components/board/boards"
import Filters from "../../components/board/filters"
import { FiMoreHorizontal } from "react-icons/fi"

const getData = async () => {
  const prisma = new PrismaClient()
  return await prisma.issue.findMany()
}

const Board = async () => {
  const session = await unstable_getServerSession(authOptions)
  if (!session) redirect("/")

  const dataRes: Issue[] = await getData()
  const data: IssueType[][] = [[], [], []]
  dataRes.map((item) => {
    const newCreatedAt = item.createdAt.toString()
    const newItem: IssueType = item
    newItem.createdAt = newCreatedAt
    newItem.category === 0
      ? data[0].push(newItem)
      : newItem.category === 1
      ? data[1].push(newItem)
      : data[2].push(newItem)
  })

  return (
    <main className="flex max-h-screen items-start justify-start">
      <Sidebar />

      <div className="flex h-screen flex-grow flex-col overflow-auto p-8">
        <div className="mb-2 flex cursor-default items-center justify-start space-x-2 whitespace-nowrap text-gray-600">
          <div className="flex items-center">
            Projects&nbsp;&nbsp;/&nbsp;&nbsp;Project Name&nbsp;&nbsp;/&nbsp;
            <div className="group z-10 flex items-center rounded px-1.5 py-0.5 font-medium  hover:bg-gray-150">
              Kanban Board
              <FiMoreHorizontal className="ml-1.5 mr-0.5 cursor-pointer opacity-0 duration-100 group-hover:opacity-100" />
            </div>
          </div>
        </div>

        <h1 className="whitespace-nowrap text-2xl font-bold">Kanban Board</h1>
        <p>signed in as {JSON.stringify(session)}</p>

        {/* <p className="text-sm">{data ? JSON.stringify(
          data
        ) : "no data"}</p> */}

        <Filters />

        <Boards data={data} />
      </div>
    </main>
  )
}

export default Board
