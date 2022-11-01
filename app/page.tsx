import Image from 'next/image'
import { FiChevronLeft } from 'react-icons/fi'

export default function Home() {

  return (
    <main className="h-screen flex justify-start items-start pl-16 sm:pl-[4.5rem]">
      <div className="py-8 h-screen w-56 bg-gray-200/50 border-r-[1px] border-gray-300 relative duration-200">

        <button className="absolute top-1/2 -translate-y-1/2 -right-3 w-6 h-6 flex items-center justify-center rounded-full bg-white duration-200 hover:bg-gray-200/50 backdrop-blur-md border-[1px] border-gray-300">
          <FiChevronLeft className="w-4 h-4 text-gray-500" />
        </button>
        
        <div className="w-full h-full flex flex-col px-6 overflow-hidden ">

          <div className="flex items-center justify-start mb-4">
            <div className="w-10 h-10 bg-white rounded-sm mr-2"/>
            <div>
              <p className="font-semibold text-gray-800">Project Name</p>
              <p className="text-sm -mt-1 text-gray-500">Project Description</p>
            </div>
          </div>
          <button className="p-1.5 mt-4 rounded-sm text-gray-800 font-medium duration-200 bg-transparent hover:bg-gray-200 text-start">Kanban Board</button>
          <button className="p-1.5 mt-1 rounded-sm text-gray-800 font-medium duration-200 bg-transparent hover:bg-gray-200 text-start">Kanban Board</button>
        
        </div>
      </div>

      <div className="py-8">
        <h1 className="text-3xl font-extrabold">
          Welcome to Next.js 13!
        </h1>
        <p className="text-lg my-16">
          Get started by editing{" "}
          <code className="font-mono">app/page.tsx</code>
        </p>
      </div>

      
    </main>
  )
}
