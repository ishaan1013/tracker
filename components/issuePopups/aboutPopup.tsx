"use client"

import * as Dialog from "@radix-ui/react-dialog"
import { FaGithub, FaLink } from "react-icons/fa"
import { FiX } from "react-icons/fi"

interface Props {
  opened: boolean
  setOpened: (opened: boolean) => void
}

const AboutPopup: React.FC<Props> = ({ opened, setOpened }) => {
  return (
    <Dialog.Root open={opened} onOpenChange={setOpened}>
      {/* <Dialog.Trigger /> */}
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay fixed inset-0 z-50 bg-[#011242]/50" />
        <Dialog.Content className="DialogContent xs:w-[85%] fixed left-1/2 top-1/2 z-50 flex w-[95%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-md border-[1px] border-gray-300 bg-white p-6 focus:outline-none focus:ring-2 focus:ring-blue-500/75 focus:ring-offset-0 lg:w-[40rem]">
          <div className="flex w-full items-center justify-between">
            <p className="text-start text-xl font-semibold sm:text-2xl">
              About This Project
            </p>
            <Dialog.Close className="flex h-10 w-10 items-center justify-center rounded border-[1px] border-gray-200 text-lg duration-100 hover:border-gray-300 hover:bg-gray-150 focus:outline-none focus:ring-2 focus:ring-blue-500/75 focus:ring-offset-0">
              <FiX className="" />
            </Dialog.Close>
          </div>

          <div className="mt-5 w-full text-left">
            A full-stack personal project — a project management software web
            app made with the Next.js 13 experimental app directory. Design &
            functionality was inspired by Jira and Linear.
          </div>
          <div className="mt-4 w-full text-left">
            This project was successful in the end, but fell short in some
            regards. The state management between the client and server quickly
            got messy due to a lack of planning in advance 😅. I also should
            have used Tanstack Query.
          </div>
          <div className="mt-8 grid w-full grid-cols-2 gap-4">
            <a
              href="https://www.github.com/ishaan1013/tracker"
              target="_blank"
              rel="noreferrer"
              className="flex w-full items-center justify-center rounded bg-blue-700 py-3 font-semibold text-white duration-100 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500/75 focus:ring-offset-0">
              <FaGithub className="mr-2" />
              GitHub Repo
            </a>
            <a
              href="https://www.ishaand.com"
              target="_blank"
              rel="noreferrer"
              className="flex w-full items-center justify-center rounded border-[1px] border-gray-300 py-3 font-semibold text-gray-600 duration-100 hover:bg-gray-150 focus:outline-none focus:ring-2 focus:ring-blue-500/75 focus:ring-offset-0">
              <FaLink className="mr-2" />
              My Website
            </a>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default AboutPopup
