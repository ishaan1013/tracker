"use client"
import * as Dialog from "@radix-ui/react-dialog"
import { FiX, FiTrash, FiSave, FiRefreshCw } from "react-icons/fi"

const EpicPopup = ({
  opened,
  setOpened,
  title,
}: {
  opened: boolean
  setOpened: (opened: boolean) => void
  title: string
}) => {
  // const [type, setType] = useState(data.issueType)

  return (
    <Dialog.Root open={opened} onOpenChange={setOpened}>
      {/* <Dialog.Trigger /> */}
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay fixed inset-0 z-50 bg-[#011242]/50" />
        <Dialog.Content className="DialogContent xs:w-[90%] fixed left-1/2 top-1/2 z-50 flex w-[95%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-md border-[1px] border-gray-300 bg-white p-6 focus:outline-none focus:ring-2 focus:ring-blue-500/75 focus:ring-offset-0 lg:w-[60rem]">
          <div className="flex w-full items-center justify-end">
            {/* <IssueSelect type={type} setType={setType} /> */}

            <div className="flex space-x-2">
              <button className="flex h-10 w-10 items-center justify-center rounded border-[1px] border-gray-200 text-lg duration-100 hover:border-red-600 hover:bg-red-50 hover:text-red-600 focus:outline-red-400">
                <FiTrash className="" />
              </button>
              <Dialog.Close className="flex h-10 w-10 items-center justify-center rounded border-[1px] border-gray-200 text-lg duration-100 hover:border-gray-300 hover:bg-gray-150 focus:outline-none focus:ring-2 focus:ring-blue-500/75 focus:ring-offset-0">
                <FiX className="" />
              </Dialog.Close>
            </div>
          </div>

          <div className="mt-4 flex w-full justify-between space-x-6">
            <div className="flex-grow">
              <input
                className="w-full rounded border-[1px] border-gray-300 bg-gray-150 p-2 text-start text-2xl font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500/75 focus:ring-offset-0 sm:text-3xl"
                defaultValue={title}
              />
              <textarea
                className="mt-4 h-[120px] max-h-[180px] min-h-[50px] w-full resize-y rounded border-[1px] border-gray-300 bg-gray-150 p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/75 focus:ring-offset-0 xl:text-base"
                defaultValue={""}
              />
            </div>
            <div className="flex w-60 flex-col items-start">
              {/* <div className="mb-3 py-1 px-2 rounded border-[1px] border-gray-300 duration-100 hover:bg-gray-150 font-semibold flex items-center">
                Priority: <IssueIcons className="ml-1.5 -translate-y-[1px]" priority={data.priority} />
              </div> */}
              <div className="h-[1px] w-full bg-gray-300" />
              <div className="mt-3 text-sm">Created at Date</div>
            </div>
          </div>

          <div className="mt-8 flex items-center self-start">
            <button
              className={`flex items-center whitespace-nowrap rounded bg-blue-700 py-2 pl-4 pr-5 text-base text-white duration-100 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500/75 focus:ring-offset-0`}>
              <FiSave className="mr-1.5" />
              Save
            </button>
            <button
              className={`ml-3 flex items-center whitespace-nowrap rounded border-[1px] border-gray-300 py-2 pr-5 pl-4 text-base text-gray-600 duration-100 hover:bg-gray-150 focus:outline-none focus:ring-2 focus:ring-blue-500/75 focus:ring-offset-0`}>
              <FiRefreshCw className="mr-1.5" />
              Reset
            </button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default EpicPopup
