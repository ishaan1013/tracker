import { IoSearch } from "react-icons/io5";
import Sidebar from "../components/sidebar";

export default function Home() {

  return (
    <main className="h-screen flex justify-start items-start pl-16 sm:pl-[4.5rem]">
      
      <Sidebar />

      <div className="p-8">

        <div className="flex items-center justify-start mb-4 space-x-2 cursor-default text-gray-500">
          <p>Projects&nbsp;&nbsp;/&nbsp;&nbsp;Project Name&nbsp;&nbsp;/&nbsp;&nbsp;<span className="font-medium">Kanban Board</span></p>
        </div>

        <h1 className="text-2xl font-bold">
          Kanban Board
        </h1>

        <div className="flex mt-8">
          <div className="w-56 relative flex items-center justify-start">
            <IoSearch className="absolute left-2 text-gray-500" />
            <input className="focus:outline-indigo-400 bg-gray-200/50 w-full p-2 pl-8 border-[1px] border-gray-300 rounded text-sm" />
          </div>
        </div>

      </div>

      
    </main>
  )
}
