"use client"
import { Session } from "next-auth"
import Image from "next/image"

const UserInfo = ({ session }: { session: Session }) => {
  return (
    <>
      <div className="flex w-full select-none items-center justify-start space-x-4 rounded border-[1px] border-gray-300 bg-gray-150 p-4 md:p-6">
        <Image
          src={session.user?.image ?? ""}
          alt="profile picture"
          className="rounded-full"
          width={50}
          height={50}
        />
        <div>
          <div className="font-semibold">{session.user?.name}</div>
          <div className="-mt-1 text-sm text-gray-600">
            {session.user?.email}
          </div>
        </div>
      </div>
    </>
  )
}

export default UserInfo
