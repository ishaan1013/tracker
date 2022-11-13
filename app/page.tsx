import Image from "next/image"
import Next from "../assets/tools/next.webp"
import Tailwind from "../assets/tools/tailwind.webp"
import NextAuth from "../assets/tools/nextAuth.webp"
import Zustand from "../assets/tools/zustand.webp"
import PScale from "../assets/tools/pscale.webp"
import Prisma from "../assets/tools/prisma.webp"

import Block from "../assets/shapes/block.png"
import Sphere from "../assets/shapes/sphere.png"
import Cone from "../assets/shapes/cone.png"

import { FaGithub, FaGoogle } from "react-icons/fa"

const Home = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-tr from-blue-600 to-[#061236]">

      <div className="pt-14 pb-20 px-8 w-[450px] bg-white rounded flex flex-col items-center justify-center relative z-10">

        <h1 className="font-bold text-3xl">
          Project & Issue Tracker
        </h1>
        <button className="peer mt-8 bg-blue-700 focus:outline-blue-400 duration-100 hover:bg-blue-600 rounded text-white flex items-center justify-center w-full py-3 font-semibold"><FaGoogle className="mr-2 -translate-y-[1px]" />Continue with Google</button>
        <a href="https://github.com/ishaan1013/tracker" target="_blank" rel="noreferrer" className="mt-2 focus:outline-blue-500 duration-100 hover:bg-gray-150 py-1 px-2.5 rounded text-gray-600 flex items-center font-medium">
          <FaGithub className="mr-1" />
          Repo
        </a>

        <div className="absolute w-full h-full top-0 -z-10 rounded bg-white" />
        <div className="peer-hover:scale-110 peer-hover:-translate-x-2 peer-hover:translate-y-2 peer-hover:rotate-6 duration-1000 ease-in-out absolute -z-20 -bottom-[5.75rem] left-2">
          <Image src={Block} alt="arbitrary shape graphic" width={190} height={190} />
        </div>
        <div className="peer-hover:scale-110 peer-hover:translate-x-2 peer-hover:rotate-12 duration-1000 ease-in-out absolute -z-20 -right-[5.75rem] bottom-8 -rotate-3">
          <Image src={Cone} alt="arbitrary shape graphic" width={170} height={170} />
        </div>
        <div className="peer-hover:scale-110 peer-hover:-translate-y-2 peer-hover:rotate-[12deg] duration-1000 ease-in-out absolute -z-20 -top-[5.25rem] rotate-45">
          <Image src={Sphere} alt="arbitrary shape graphic" width={170} height={170} />
        </div>

        <div className="absolute flex items-center bottom-3 space-x-1.5 opacity-30">
          <Image
          src={Next}
          alt="Next Logo"
          width={25}
          height={25}
          />
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
          className="grayscale brightness-50"
          />
          <Image
          src={Zustand}
          alt="Zustand Logo"
          width={32}
          height={32}
          className="grayscale brightness-50"
          />
          <Image
          src={PScale}
          alt="PScale Logo"
          width={25}
          height={25}
          />
          <Image
          src={Prisma}
          alt="Prisma Logo"
          width={20}
          height={24}
          />
        </div>

      </div>
    </div>
  )
}

export default Home