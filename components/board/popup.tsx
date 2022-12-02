"use client"
import { useState } from "react"
import * as Dialog from '@radix-ui/react-dialog';
import { useItemStore } from '../../hooks';
import { FiX, FiTrash, FiDisc, FiCheck, FiBookmark, FiPlus, FiSave, FiRefreshCw } from "react-icons/fi"
import { IssueType } from '../../prisma/issueType';
import { data } from "autoprefixer";
import { IssueIcons } from "./issuePreview";
import Priority from "./priority";

const IssueSelect = ({type, setType}:{type:number, setType:(type:number)=>void}) => {

  return (
    type === 0 ?
    <button 
    onClick={() => setType(1)}
    className="focus:outline-blue-500 flex items-center text-[0.95rem] font-medium pl-1.5 pr-2 py-0.5 duration-100 rounded border-[1px] border-blue-600 bg-blue-50 hover:bg-blue-100 text-blue-600">
      <FiDisc className="text-white p-0.5 mr-2 w-5 h-5 bg-blue-600 rounded" />
      ISSUE
    </button>
    :
    type === 1 ?
    <button 
    onClick={() => setType(2)}
    className="focus:outline-blue-500 flex items-center text-[0.95rem] font-medium pl-1.5 pr-2 py-0.5 duration-100 rounded border-[1px] border-blue-600 bg-blue-50 hover:bg-blue-100 text-blue-600">
      <FiCheck className="text-white p-0.5 mr-2 w-5 h-5 bg-blue-600 rounded" />
      BUG
    </button>
    :
    type === 2 ?
    <button 
    onClick={() => setType(0)}
    className="focus:outline-blue-500 flex items-center text-[0.95rem] font-medium pl-1.5 pr-2 py-0.5 duration-100 rounded border-[1px] border-blue-600 bg-blue-50 hover:bg-blue-100 text-blue-600">
      <FiBookmark className="text-white p-0.5 mr-2 w-5 h-5 bg-blue-600 rounded" />
      STORY
    </button>
    :
    null
  )
}

interface Props {
    opened: boolean
    setOpened: (opened: boolean) => void
    data: IssueType
}

const createdDate = ({date}:{date:string | Date}) => {
  const d = date instanceof Date ? date.getDate() : new Date(date).getDate()
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  const m = date instanceof Date ? date.getMonth() : new Date(date).getMonth()
  const y = date instanceof Date ? date.getFullYear() : new Date(date).getFullYear()
  return (months[m] + " " + d + ", " + y)

}

const Popup:React.FC<Props> = ({opened, setOpened, data}) => {

  const [type, setType] = useState(data.issueType)

  return (
    <Dialog.Root
    open={opened}
    onOpenChange={setOpened}
    >
      {/* <Dialog.Trigger /> */}
      <Dialog.Portal>
        <Dialog.Overlay className="z-50 bg-[#011242]/50 fixed inset-0" />
        <Dialog.Content className="focus:outline-blue-500 dialog z-50 rounded-md bg-white p-6 lg:w-[60rem] xs:w-[90%] w-[95%] flex flex-col justify-center items-center border-[1px] border-gray-300 fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">

          <div className="flex items-center justify-between w-full">

            <IssueSelect type={type} setType={setType} />

            <div className="flex space-x-2">
              <button className="focus:outline-red-400 flex justify-center items-center rounded border-[1px] border-gray-200 hover:bg-red-50 hover:border-red-600 hover:text-red-600 duration-100 w-10 h-10 text-lg">
                <FiTrash className=""/>
              </button>
              <Dialog.Close className="focus:outline-blue-500 flex justify-center items-center rounded border-[1px] border-gray-200 hover:bg-gray-150 hover:border-gray-300 duration-100 w-10 h-10 text-lg">
                <FiX className=""/>
              </Dialog.Close>
            </div>
          </div>

          <div className="flex justify-between w-full mt-4 space-x-6">
            <div className="flex-grow">
              <input className="sm:text-3xl text-2xl font-semibold text-start border-[1px] rounded bg-gray-150 focus:outline-blue-500 border-gray-300 w-full p-2" defaultValue={data.name} />
              <input className="xl:text-base text-sm mt-4 border-[1px] rounded bg-gray-150 focus:outline-blue-500 border-gray-300 w-full p-2" defaultValue={data.description} />
            </div>
            <div className="w-60 flex flex-col items-start">
              {/* <div className="mb-3 py-1 px-2 rounded border-[1px] border-gray-300 duration-100 hover:bg-gray-150 font-semibold flex items-center">
                Priority: <IssueIcons className="ml-1.5 -translate-y-[1px]" priority={data.priority} />
              </div> */}
              <Priority popup />
              <div className="w-full h-[1px] bg-gray-300" />
              <div className="mt-3 text-sm">Created <span className="font-semibold">{data.createdAt.toString().split(' ').slice(1,4).join(' ')}</span></div>
            </div>
          </div>

          <div className="flex items-center self-start mt-8">
            <button
            className={`flex items-center whitespace-nowrap focus:outline-blue-500 bg-blue-700 text-white hover:bg-blue-600 duration-100 rounded py-1 pl-2 pr-3 text-base`}>
              <FiSave className="mr-1.5" />
              Save
            </button>
            <button
            className={`ml-3 whitespace-nowrap focus:outline-blue-500 duration-100 border-[1px] rounded hover:bg-gray-150 text-gray-600 border-gray-300 flex items-center py-1 px-3 text-base`}>
              <FiRefreshCw className="mr-1.5" />
              Reset
            </button>
          </div>


        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default Popup