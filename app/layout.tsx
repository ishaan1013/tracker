import './globals.css'
import { FiPlus, FiHelpCircle } from 'react-icons/fi'
import { IoSearch } from 'react-icons/io5'
import Image from 'next/image'
import Logo from "../assets/logo.png"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
