"use client"
import { useState } from "react"
import * as Dialog from '@radix-ui/react-dialog';
import { useItemStore } from '../../hooks';
import { FiX, FiTrash, FiDisc, FiCheck, FiBookmark } from "react-icons/fi"
import { IssueType } from '../../prisma/issueType';

const IssueSelect = ({type, setType}:{type:number, setType:(type:number)=>void}) => {

  return (
    type === 0 ?
    <button 
    onClick={() => setType(1)}
    className="focus:outline-red-500 flex items-center text-[0.95rem] font-medium pl-1.5 pr-2 py-0.5 duration-100 rounded border-[1px] border-red-200 bg-red-50 hover:bg-red-100 hover:border-red-500-300">
      <FiDisc className="text-white p-0.5 mr-2 w-5 h-5 bg-red-500/90 rounded" />
      ISSUE
    </button>
    :
    type === 1 ?
    <button 
    onClick={() => setType(2)}
    className="focus:outline-blue-500 flex items-center text-[0.95rem] font-medium pl-1.5 pr-2 py-0.5 duration-100 rounded border-[1px] border-blue-200 bg-blue-50 hover:bg-blue-100 hover:border-blue-300">
      <FiCheck className="text-white p-0.5 mr-2 w-5 h-5 bg-blue-400 rounded" />
      BUG
    </button>
    :
    type === 2 ?
    <button 
    onClick={() => setType(0)}
    className="focus:outline-green-500 flex items-center text-[0.95rem] font-medium pl-1.5 pr-2 py-0.5 duration-100 rounded border-[1px] border-green-200 bg-green-50 hover:bg-green-100 hover:border-green-300">
      <FiBookmark className="text-white p-0.5 mr-2 w-5 h-5 bg-green-500 rounded" />
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
        <Dialog.Content className="focus:outline-blue-500 dialog z-50 rounded-md bg-white px-6 pt-6 pb-12 lg:w-[60rem] xs:w-[90%] w-[95%] flex flex-col justify-center items-center border-[1px] border-gray-300 fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">

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

          <div className="flex justify-between w-full mt-4">
            <div>
              <h3 className="sm:text-3xl text-2xl font-semibold text-start">{data.name}</h3>
              <p className="xl:text-base text-sm mt-6 text-left whitespace-pre-line">{data.description}</p>
            </div>
          </div>


        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default Popup