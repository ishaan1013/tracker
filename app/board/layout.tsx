"use client"

import "../globals.css"
import SidebarButtons from "../../components/board/sidebar/sidebarButtons"
import SidebarPopups from "../../components/popups/sidebarPopups"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <SidebarPopups />
      <div>
        <div className="fixed left-0 z-50 flex h-screen w-16 flex-col items-center justify-between bg-blue-700 py-7">
          <SidebarButtons />
        </div>
        {children}
      </div>
    </>
  )
}
