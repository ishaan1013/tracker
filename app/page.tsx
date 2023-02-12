import Image from "next/image"
import { authOptions } from "../pages/api/auth/[...nextauth]"
import { unstable_getServerSession } from "next-auth"
import { redirect } from "next/navigation"

import Next from "../assets/tools/next.webp"
import Tailwind from "../assets/tools/tailwind.webp"
import Radix from "../assets/tools/radix.webp"
import NextAuth from "../assets/tools/nextAuth.webp"
import Zustand from "../assets/tools/zustand.webp"
import PScale from "../assets/tools/pscale.webp"
import Prisma from "../assets/tools/prisma.webp"

import { FaGithub } from "react-icons/fa"
import Display from "../assets/display.png"
import AuthButton from "../components/authButton"

const Home = async () => {
  const session = await unstable_getServerSession(authOptions)
  if (session) redirect("/board")

  return (
    <div className="flex h-screen w-screen items-center justify-between bg-gradient-to-tr from-blue-700 to-[#010613]">
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center bg-white px-8 md:min-w-[45%] md:px-12 lg:w-[40%] xl:px-24">
        <h1 className="text-center text-3xl font-bold">
          Project & Issue Tracker
        </h1>

        <AuthButton session={session} />

        <a
          href="https://github.com/ishaan1013/tracker"
          target="_blank"
          rel="noreferrer"
          className="mt-3 flex w-full items-center justify-center rounded border-[1px] border-gray-300 py-3 font-semibold text-gray-600 duration-100 hover:bg-gray-150 focus:outline-none focus:ring-2 focus:ring-blue-500/75 focus:ring-offset-0">
          <FaGithub className="mr-2" />
          Repo
        </a>

        <div className="absolute bottom-5 flex select-none items-center space-x-2">
          <a
            href="https://nextjs.org/"
            className="cursor-pointer opacity-30 duration-100 hover:opacity-70"
            target="_blank"
            rel="noreferrer">
            <Image src={Next} alt="Next Logo" width={25} height={25} />
          </a>
          <a
            href="https://tailwindcss.com/"
            className="cursor-pointer opacity-30 duration-100 hover:opacity-70"
            target="_blank"
            rel="noreferrer">
            <Image
              src={Tailwind}
              alt="Tailwind Logo"
              width={27}
              height={27}
              className="brightness-[0.1]"
            />
          </a>
          <a
            href="https://www.radix-ui.com/"
            className="cursor-pointer opacity-30 duration-100 hover:opacity-70"
            target="_blank"
            rel="noreferrer">
            <Image src={Radix} alt="Radix UI Logo" width={23} height={23} />
          </a>
          <a
            href="https://next-auth.js.org/"
            className="cursor-pointer opacity-30 duration-100 hover:opacity-70"
            target="_blank"
            rel="noreferrer">
            <Image
              src={NextAuth}
              alt="NextAuth Logo"
              width={21}
              height={24}
              className="brightness-50 grayscale"
            />
          </a>
          <a
            href="https://github.com/pmndrs/zustand"
            className="cursor-pointer opacity-30 duration-100 hover:opacity-70"
            target="_blank"
            rel="noreferrer">
            <Image
              src={Zustand}
              alt="Zustand Logo"
              width={32}
              height={32}
              className="brightness-50 grayscale"
            />
          </a>
          <a
            href="https://planetscale.com/"
            className="cursor-pointer opacity-30 duration-100 hover:opacity-70"
            target="_blank"
            rel="noreferrer">
            <Image src={PScale} alt="PScale Logo" width={25} height={25} />
          </a>
          <a
            href="https://www.prisma.io/"
            className="cursor-pointer opacity-30 duration-100 hover:opacity-70"
            target="_blank"
            rel="noreferrer">
            <Image src={Prisma} alt="Prisma Logo" width={20} height={24} />
          </a>
        </div>
      </div>

      <div className="relative z-10 hidden h-full flex-grow md:block">
        <Image
          src={Display}
          alt=""
          className="aspect-[8/5] min-h-full min-w-full object-cover"
        />
      </div>
    </div>
  )
}

export default Home
