import { PrismaClient } from '@prisma/client'
import Sidebar from "../../components/sidebar"
import { Issue } from '@prisma/client'

import { IssueType } from '../../prisma/issueType'
import Boards from "../../components/board/boards"
import Filters from '../../components/board/filters'

const getData = async () => {
  const prisma = new PrismaClient()
  return await prisma.issue.findMany()
}

const Board = async () => {
  
  const dataRes: Issue[] = await getData()
  const data: IssueType[][] = [[],[],[]]
  dataRes.map((item) => {
    const newItem:IssueType = item
    newItem.createdAt = newItem.createdAt.toString()
    newItem.category === 0 ? data[0].push(newItem) 
    : newItem.category === 1 ? data[1].push(newItem) 
    : data[2].push(newItem)
  })

  return (
    <main className="max-h-screen flex justify-start items-start">
      
      <Sidebar />

      <div className="h-screen overflow-auto p-8 flex flex-col flex-grow">

        <div className="flex items-center justify-start mb-2 space-x-2 cursor-default text-gray-600 whitespace-nowrap">
          <p>Projects&nbsp;&nbsp;/&nbsp;&nbsp;Project Name&nbsp;&nbsp;/&nbsp;&nbsp;<span className="font-medium">Kanban Board</span></p>
        </div>
        {/* <div className="text-xs">{JSON.stringify(data)}</div> */}

        <h1 className="text-2xl font-bold whitespace-nowrap">
          Kanban Board
        </h1>

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