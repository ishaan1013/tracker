import { redirect } from "next/navigation"

import { Issue, User } from "@prisma/client"
import { prisma } from "../../prisma/db"
import { IssueType } from "../../prisma/issueType"
import { unstable_getServerSession } from "next-auth/next"
import { authOptions } from "../../pages/api/auth/[...nextauth]"
import issues from "../../components/data/issuesSeed"

import Sidebar from "../../components/board/sidebar"
import Boards from "../../components/board/boards"
import Filters from "../../components/board/filters"
import Header from "../../components/board/header"
import ToastComponent from "../../components/toast"
import AlertPopup from "../../components/alertPopup"

const getUser = async (userId: string | null | undefined) => {
  if (userId) {
    try {
      const userRes: User | null = await prisma.user.findFirst({
        where: {
          email: userId,
        },
      })
      return userRes
    } catch (e) {
      console.log({ getUser: false, e })
    }
  } else {
    console.log({ getUser: false, userId })
  }
  return null
}

const seed = async (userId: string | null | undefined) => {
  if (userId) {
    try {
      for (const issue of issues) {
        const {
          name,
          description,
          category,
          index,
          issueType,
          priority,
          assignees,
        } = issue
        await prisma.issue.create({
          data: {
            name,
            userId,
            description,
            category,
            index,
            issueType,
            priority,
            assignees,
          },
          include: {
            assignees: true,
          },
        })
      }

      console.log({ seed: true, userId })
    } catch (e) {
      console.log({ seed: false, e })
    }
  } else {
    console.log({ seed: false, userId })
  }
}

const doneInit = async (userId: string | null | undefined) => {
  if (userId) {
    try {
      await prisma.user.update({
        where: {
          email: userId,
        },
        data: {
          init: true,
        },
      })

      console.log({ doneInit: true, userId })
    } catch (e) {
      console.log({ doneInit: false, e })
    }
  } else {
    console.log({ doneInit: false, userId })
  }
}

const Board = async () => {
  const session = await unstable_getServerSession(authOptions)
  if (!session) redirect("/")

  const userId = session.user?.email

  const user = await getUser(userId)
  if (user && !user.init) {
    await seed(userId)
    await doneInit(userId)
  }

  const dataRes: Issue[] = await prisma.issue.findMany({
    where: {
      userId,
    },
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
        <div className="text-xs text-orange-900">
          session: {JSON.stringify(session)}
        </div>
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
