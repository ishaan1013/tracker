import { PrismaClient } from '@prisma/client'
import Sidebar from "../../components/sidebar"

import { IssueType } from '../../prisma/issueType'
import Boards from "../../components/board/boards"
import Filters from '../../components/board/filters'

const getData = async () => {
  const prisma = new PrismaClient()
  return await prisma.issue.findMany({
    include: {
      category: true,
    },
  })
}

const Board = async () => {
  
  const dataRes = await getData()
  const data: IssueType[][] = [[],[],[]]
  // const data: string[][] = [[],[],[]]
  dataRes.map((item) => {
    item.category_id === 1 ? data[0].push(item) 
    : item.category_id === 2 ? data[1].push(item) 
    : data[2].push(item)
  })

  return (
    <main className="max-h-screen flex justify-start items-start">
      
      <Sidebar />

      <div className="h-screen overflow-auto p-8 flex flex-col flex-grow">

        <div className="flex items-center justify-start mb-2 space-x-2 cursor-default text-gray-600 whitespace-nowrap">
          <p>Projects&nbsp;&nbsp;/&nbsp;&nbsp;Project Name&nbsp;&nbsp;/&nbsp;&nbsp;<span className="font-medium">Kanban Board</span></p>
        </div>

        <h1 className="text-2xl font-bold whitespace-nowrap">
          {/* Kanban Board {test ? test : "no test"} */}
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