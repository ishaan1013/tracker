import { redirect } from "next/navigation"

import { PrismaClient, Issue } from "@prisma/client"
import { prisma } from "../../prisma/db"
import { IssueType } from "../../prisma/issueType"
import { unstable_getServerSession } from "next-auth/next"
import { authOptions } from "../../pages/api/auth/[...nextauth]"

import Sidebar from "../../components/board/sidebar"
import Filters from "../../components/roadmap/filters"
import Timeline from "../../components/roadmap/timeline"

import { FiPlus } from "react-icons/fi"

const Roadmap = async () => {
  const session = await unstable_getServerSession(authOptions)
  if (!session) redirect("/")

  return (
    <main className="flex max-h-screen items-start justify-start">
      <Sidebar />

      <div className="flex h-screen flex-grow flex-col overflow-auto p-8 ">
        <h1 className="mb-6 whitespace-nowrap text-2xl font-bold">Roadmap</h1>

        <Filters />

        <Timeline />
      </div>
    </main>
  )
}

export default Roadmap
