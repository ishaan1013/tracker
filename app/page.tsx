import { IoSearch } from "react-icons/io5"
import Sidebar from "../components/sidebar"
import Priority from "../components/filters/priority"

export default function Home() {

  return (
    <main className="max-h-screen flex justify-start items-start pl-72">
      
      <Sidebar />

      <div className="h-screen overflow-auto p-8 flex flex-col flex-grow">

        <div className="flex items-center justify-start mb-2 space-x-2 cursor-default text-gray-600">
          <p>Projects&nbsp;&nbsp;/&nbsp;&nbsp;Project Name&nbsp;&nbsp;/&nbsp;&nbsp;<span className="font-medium">Kanban Board</span></p>
        </div>

        <h1 className="text-2xl font-bold">
          Kanban Board
        </h1>

        <div className="flex mt-8">

          <div className="min-w-[14rem] relative flex items-center justify-start">
            <IoSearch className="absolute left-2 text-gray-600" />
            <input className="focus:outline-indigo-400 bg-gray-150 w-full p-2 pl-8 border-[1px] border-gray-300 rounded text-sm text-gray-600" />
          </div>

          <div className="ml-6 flex items-center -space-x-1.5 z-0">
            <button className="w-9 h-9 rounded-full focus:outline-indigo-400 bg-gray-150 border-2 border-white z-[4] duration-100 translate-y-0 hover:-translate-y-1.5 hover:z-[5]"></button>
            <button className="w-9 h-9 rounded-full focus:outline-indigo-400 bg-gray-150 border-2 border-white z-[3] duration-100 translate-y-0 hover:-translate-y-1.5 hover:z-[5]"></button>
            <button className="w-9 h-9 rounded-full focus:outline-indigo-400 bg-gray-150 border-2 border-white z-[2] duration-100 translate-y-0 hover:-translate-y-1.5 hover:z-[5]"></button>
            <button className="w-9 h-9 rounded-full focus:outline-indigo-400 bg-gray-150 border-2 border-white z-[1] duration-100 translate-y-0 hover:-translate-y-1.5 hover:z-[5]"></button>
          </div>

          <button className="ml-6 focus:outline-indigo-400 duration-100 hover:bg-gray-150 py-1 px-2.5 rounded text-base text-gray-600">
            Recently Updated
          </button>

          <Priority />

        </div>

        <div className="flex mt-12 space-x-4">
          <div className="w-72 min-h-[300px] h-full py-3 px-1 flex flex-col items-start justify-start bg-gray-150 rounded overflow-y-auto">
            <h2 className="px-2 text-base text-start font-semibold text-gray-600 mb-3">To Do</h2>
            <div className="bg-white w-full rounded p-2 pb-24 mb-1">test</div>
            <div className="bg-white w-full rounded p-2 pb-24 mb-1">test</div>
            <div className="bg-white w-full rounded p-2 pb-24 mb-1">test</div>
            <div className="bg-white w-full rounded p-2 pb-24 mb-1">test</div>
            <div className="bg-white w-full rounded p-2 pb-24 mb-1">test</div>
          </div>
        </div>

      </div>

      
    </main>
  )
}
