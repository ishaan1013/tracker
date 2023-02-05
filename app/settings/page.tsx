import { redirect } from "next/navigation"

import { PrismaClient, Issue } from "@prisma/client"
import { prisma } from "../../prisma/db"
import { unstable_getServerSession } from "next-auth/next"
import { authOptions } from "../../pages/api/auth/[...nextauth]"

import Sidebar from "../../components/board/sidebar"
import SettingsContent from "../../components/settings"

const Settings = async () => {
  const session = await unstable_getServerSession(authOptions)
  if (!session) redirect("/")

  return (
    <main className="flex max-h-screen items-start justify-start">
      <Sidebar />

      <div className="flex h-screen min-w-[768px] max-w-screen-md flex-grow flex-col overflow-auto p-8 ">
        <h1 className="mb-6 whitespace-nowrap text-2xl font-bold">Settings</h1>

        <SettingsContent session={session} />
      </div>
    </main>
  )
}

export default Settings
