"use client"

import Priority from "./priority"
import { useSearchStore, useUsersFilterStore, useRecentStore } from '../../hooks/filterStores'

import { IoSearch } from "react-icons/io5"

const Filters = () => {

  // const [users, setUsers] = useState([false, false, false, false])
  const searchStore = useSearchStore()
  const usersFilterStore = useUsersFilterStore()
  const recentStore = useRecentStore()
  

  return (
    <div className="flex mt-8">

      <div className="min-w-[14rem] relative flex items-center justify-start">
        <IoSearch className="absolute left-2 text-gray-600 pointer-events-none" />
        <input 
        value={searchStore.query}
        onChange={(e) => searchStore.setQuery(e.target.value)}
        className="focus:outline-blue-500 bg-gray-150 w-full p-2 pl-8 border-[1px] border-gray-300 rounded text-sm text-gray-600" />
      </div>

      <div className="ml-6 flex flex-row-reverse items-center z-0">
        {usersFilterStore.users.map((user, index) => (
          <button
          key={index}
          onClick={() => {
            console.log("updated")
            usersFilterStore.setUsers(usersFilterStore.users, index)
          }}
          className={`w-9 h-9 rounded-full ${index === 3 ? "" : "-ml-1.5"} focus:outline-blue-500 bg-gray-150 border-2 ${user ? "border-blue-700 z-[2] hover:z-[2]" : "border-white"} duration-100 translate-y-0 hover:-translate-y-1.5 hover:z-[1]`}></button>
        ))}
      </div>

      <button 
      onClick={() => recentStore.setRecent(!recentStore.recent)}
      className={`ml-6 focus:outline-blue-500 duration-100 ${recentStore.recent ? "bg-gray-150 hover:bg-gray-200 text-blue-700" : "hover:bg-gray-150 text-gray-600"} py-1 px-2.5 rounded text-base`}>
        Recently Updated
      </button>

      <Priority />

    </div>
  )
}

export default Filters