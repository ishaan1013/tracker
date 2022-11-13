import { PrismaClient } from '@prisma/client'
import Sidebar from "../../components/sidebar"
import Priority from "../../components/board/priority"

import { IssueType } from '../../prisma/issueType'
import { IoSearch } from "react-icons/io5"
import Boards from "../../components/board/boards"

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

        <div className="flex mt-8">

          <div className="min-w-[14rem] relative flex items-center justify-start">
            <IoSearch className="absolute left-2 text-gray-600" />
            <input className="focus:outline-blue-500 bg-gray-150 w-full p-2 pl-8 border-[1px] border-gray-300 rounded text-sm text-gray-600" />
          </div>

          <div className="ml-6 flex flex-row-reverse items-center z-0">
            <button className="w-9 h-9 rounded-full -ml-1.5 focus:outline-blue-500 bg-gray-150 border-2 border-white duration-100 translate-y-0 hover:-translate-y-1.5 hover:z-[1]"></button>
            <button className="w-9 h-9 rounded-full -ml-1.5 focus:outline-blue-500 bg-gray-150 border-2 border-white duration-100 translate-y-0 hover:-translate-y-1.5 hover:z-[1]"></button>
            <button className="w-9 h-9 rounded-full -ml-1.5 focus:outline-blue-500 bg-gray-150 border-2 border-white duration-100 translate-y-0 hover:-translate-y-1.5 hover:z-[1]"></button>
            <button className="w-9 h-9 rounded-full focus:outline-blue-500 bg-gray-150 border-2 border-white duration-100 translate-y-0 hover:-translate-y-1.5 hover:z-[1]"></button>
          </div>

          <button className="ml-6 focus:outline-blue-500 duration-100 hover:bg-gray-150 py-1 px-2.5 rounded text-base text-gray-600">
            Recently Updated
          </button>

          <Priority />

        </div>

        <Boards data={data} />

      </div>

      
    </main>
  )
}

export default Board