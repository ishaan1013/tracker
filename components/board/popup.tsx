"use client"

import * as Dialog from '@radix-ui/react-dialog';
import { useItemStore } from '../../hooks';
import { FiX, FiTrash } from "react-icons/fi"

interface Props {
    opened: boolean
    setOpened: (opened: boolean) => void
}

const Popup:React.FC<Props> = ({opened, setOpened}) => {

  const items = useItemStore(state => state.items)
  const setItems = useItemStore(state => state.setItems)

  return (
    <Dialog.Root
    open={opened}
    onOpenChange={setOpened}
    >
      {/* <Dialog.Trigger /> */}
      <Dialog.Portal>
        <Dialog.Overlay className="z-50 bg-[#011242]/50 fixed inset-0" />
        <Dialog.Content className="focus:outline-blue-500 dialog z-50 rounded-md bg-white lg:px-6 lg:py-16 sm:px-8 xs:px-4 px-3 2xl:w-2/3 xl:w-3/4 sm:w-5/6 sm:m-0 w-[95%] flex lg:justify-between justify-center items-center border-[1px] border-gray-300 fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">

          <div className="flex flex-col items-center">
            <h3 className="sm:text-4xl text-3xl font-semibold text-start">name</h3>
            <p className="xl:text-base text-sm text-white/50 mt-6 lg:text-start text-center whitespace-pre-line">bio</p>
          </div>


          <button className="focus:outline-blue-500 absolute top-6 right-[4.5rem] flex justify-center items-center rounded border-[1px] border-gray-150 hover:bg-red-50 hover:border-red-300 hover:text-red-700 duration-100 w-10 h-10 text-lg">
            <FiTrash className=""/>
          </button>

          <Dialog.Close className="focus:outline-blue-500 absolute top-6 right-6 flex justify-center items-center rounded border-[1px] border-gray-150 hover:bg-gray-150 hover:border-gray-300 duration-100 w-10 h-10 text-lg">
            <FiX className=""/>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default Popup