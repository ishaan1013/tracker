"use client"

import { useState } from "react"
import { IoSearch } from "react-icons/io5"
import Priority from "./priority"

const Filters = () => {

  const [users, setUsers] = useState([false, false, false, false])

  return (
    <div className="flex mt-8">

      <div className="min-w-[14rem] relative flex items-center justify-start">
        <IoSearch className="absolute left-2 text-gray-600" />
        <input className="focus:outline-blue-500 bg-gray-150 w-full p-2 pl-8 border-[1px] border-gray-300 rounded text-sm text-gray-600" />
      </div>

      <div className="ml-6 flex flex-row-reverse items-center z-0">
        {users.map((user, index) => (
          <button
          key={index}
          onClick={() => {
            console.log("updated")
            setUsers((users) => {
              const newUsers = [...users]
              newUsers[index] = !newUsers[index]
              return newUsers
            })
          }}
          className={`w-9 h-9 rounded-full ${index === 3 ? "" : "-ml-1.5"} focus:outline-blue-500 bg-gray-150 border-2 ${user ? "border-blue-700 z-[2] hover:z-[2]" : "border-white"} duration-100 translate-y-0 hover:-translate-y-1.5 hover:z-[1]`}></button>
        ))}
      </div>

      <button className="ml-6 focus:outline-blue-500 duration-100 hover:bg-gray-150 py-1 px-2.5 rounded text-base text-gray-600">
        Recently Updated
      </button>

      <Priority />

    </div>
  )
}

export default Filters