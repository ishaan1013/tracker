import { redirect } from "next/navigation"

import { PrismaClient, Issue } from "@prisma/client"
import { prisma } from "../../prisma/db"
import { IssueType } from "../../prisma/issueType"
import { unstable_getServerSession } from "next-auth/next"
import { authOptions } from "../../pages/api/auth/[...nextauth]"
// import { useSession } from "next-auth/react"

import Sidebar from "../../components/board/sidebar"
import Boards from "../../components/board/boards"
import Filters from "../../components/board/filters"
import Header from "../../components/board/header"
import ToastComponent from "../../components/toast"
import AlertPopup from "../../components/alertPopup"

const Board = async () => {
  const session = await unstable_getServerSession(authOptions)
  if (!session) redirect("/")

  const dataRes: Issue[] = await prisma.issue.findMany({
    orderBy: {
      // @ts-ignore: Production build bug?
      index: "asc",
    },
    include: {
      assignees: true,
    },
  })
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
      <ToastComponent />
      <AlertPopup />

      <div className="flex h-screen flex-grow flex-col overflow-auto p-8 ">
        <Header />
        {/* <p>signed in as {JSON.stringify(session)}</p> */}

        {/* <p className="text-sm">{data ? JSON.stringify(data) : "no data"}</p> */}

        <Filters />

        <Boards data={data} />
      </div>
    </main>
  )
}

export default Board
