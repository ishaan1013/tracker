import Image from "next/image"
import { authOptions } from "../pages/api/auth/[...nextauth]"
import { unstable_getServerSession } from "next-auth"
import { redirect } from "next/navigation"

import Next from "../assets/tools/next.webp"
import Tailwind from "../assets/tools/tailwind.webp"
import NextAuth from "../assets/tools/nextAuth.webp"
import Zustand from "../assets/tools/zustand.webp"
import PScale from "../assets/tools/pscale.webp"
import Prisma from "../assets/tools/prisma.webp"

import Block from "../assets/shapes/block.png"
import Sphere from "../assets/shapes/sphere.png"
import Cone from "../assets/shapes/cone.png"

import { FaGithub } from "react-icons/fa"
import AuthButton from "../components/authButton"

const Home = async () => {
  const session = await unstable_getServerSession(authOptions)
  if (session) redirect("/board")

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-tr from-blue-600 to-[#061236]">
      <div className="relative z-10 flex w-[450px] flex-col items-center justify-center rounded bg-white px-8 pt-14 pb-20">
        <h1 className="text-3xl font-bold">Project & Issue Tracker</h1>

        <AuthButton session={session} />

        <a
          href="https://github.com/ishaan1013/tracker"
          target="_blank"
          rel="noreferrer"
          className="mt-2 flex items-center rounded py-1 px-2.5 font-medium text-gray-600 duration-100 hover:bg-gray-150 focus:outline-blue-500">
          <FaGithub className="mr-1" />
          Repo
        </a>

        <div className="absolute top-0 -z-10 h-full w-full rounded bg-white" />
        <div className="absolute -bottom-[5.75rem] left-2 -z-20 duration-1000 ease-in-out peer-hover:-translate-x-2 peer-hover:translate-y-2 peer-hover:rotate-6 peer-hover:scale-110">
          <Image
            src={Block}
            alt="arbitrary shape graphic"
            width={190}
            height={190}
          />
        </div>
        <div className="absolute -right-[5.75rem] bottom-8 -z-20 -rotate-3 duration-1000 ease-in-out peer-hover:translate-x-2 peer-hover:rotate-12 peer-hover:scale-110">
          <Image
            src={Cone}
            alt="arbitrary shape graphic"
            width={170}
            height={170}
          />
        </div>
        <div className="absolute -top-[5.25rem] -z-20 rotate-45 duration-1000 ease-in-out peer-hover:-translate-y-2 peer-hover:rotate-[12deg] peer-hover:scale-110">
          <Image
            src={Sphere}
            alt="arbitrary shape graphic"
            width={170}
            height={170}
          />
        </div>

        <div className="absolute bottom-3 flex items-center space-x-1.5 opacity-30">
          <Image src={Next} alt="Next Logo" width={25} height={25} />
          <Image
            src={Tailwind}
            alt="Tailwind Logo"
            width={27}
            height={27}
            className="brightness-[0.1]"
          />
          <Image
            src={NextAuth}
            alt="NextAuth Logo"
            width={21}
            height={24}
            className="brightness-50 grayscale"
          />
          <Image
            src={Zustand}
            alt="Zustand Logo"
            width={32}
            height={32}
            className="brightness-50 grayscale"
          />
          <Image src={PScale} alt="PScale Logo" width={25} height={25} />
          <Image src={Prisma} alt="Prisma Logo" width={20} height={24} />
        </div>
      </div>
    </div>
  )
}

export default Home
