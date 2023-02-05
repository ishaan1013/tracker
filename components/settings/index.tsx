"use client"
import { Session } from "next-auth"
import Image from "next/image"
import DataSettings from "./dataSettings"
import ProjectSettings from "./projectSettings"
import UserInfo from "./userInfo"

const Settings = ({ session }: { session: Session }) => {
  return (
    <>
      <UserInfo session={session} />

      <DataSettings session={session} />
      <ProjectSettings />
    </>
  )
}

export default Settings
