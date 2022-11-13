import '../globals.css'
import { FiPlus, FiHelpCircle } from 'react-icons/fi'
import { IoSearch } from 'react-icons/io5'
import Image from 'next/image'
import Logo from "../../assets/logo.png"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <div className="fixed left-0 h-screen w-16 py-7 flex flex-col items-center justify-between bg-blue-700 z-50">
        
        <div className="space-y-4 flex flex-col items-center justify-start">
          
          <div className="mb-4 h-8 w-8 relative">
            <Image
            src={Logo}
            alt="logo"
            />
          </div>

          <button className="rounded-full focus:outline-gray-50/50 relative group flex items-center">
            <IoSearch className="p-1 rounded-full w-8 h-8 text-white hover:bg-white/20" />
            <div className="absolute whitespace-nowrap px-2 py-0.5 left-10 rounded hidden group-hover:block bg-gray-800 z-10 font-medium text-white">Search Issues</div>
          </button>
          <button className="rounded-full focus:outline-gray-50/50 relative group flex items-center">
            <FiPlus className="p-1 rounded-full w-8 h-8 text-white hover:bg-white/20" />
            <div className="absolute whitespace-nowrap px-2 py-0.5 left-10 rounded hidden group-hover:block bg-gray-800 z-10 font-medium text-white">Create Issue</div>
          </button>
        </div>

        <button className="rounded-full focus:outline-gray-50/50 relative group flex items-center">
          <FiHelpCircle className="p-1 rounded-full w-8 h-8 text-white hover:bg-white/20" />
          <div className="absolute whitespace-nowrap px-2 py-0.5 left-10 rounded hidden group-hover:block bg-gray-800 z-10 font-medium text-white">About This Project</div>
        </button>

      </div>
      {children}
    </div>
  )
}