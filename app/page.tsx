import Image from "next/image"
import Next from "../assets/next.webp"
import Tailwind from "../assets/tailwind.webp"
import NextAuth from "../assets/nextAuth.webp"
import Zustand from "../assets/zustand.webp"
import PScale from "../assets/pscale.webp"
import Prisma from "../assets/prisma.webp"

const Home = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-tr from-blue-600 to-[#061236]">

      <div className="pt-16 pb-20 w-96 bg-white rounded flex items-center justify-center relative">
        <div className="absolute flex items-center bottom-3 space-x-1 opacity-60">
          <p className="text-sm font-medium pr-1">Built with</p>
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
          className="brightness-0"
          />
          <Image 
          src={NextAuth}
          alt="NextAuth Logo"
          width={21}
          height={24}
          className="brightness-0"
          />
          <Image 
          src={Zustand}
          alt="Zustand Logo"
          width={32}
          height={32}
          className="brightness-0"
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

        <h1 className="font-bold text-3xl">
          Project & Issue Tracker
        </h1>
        <p></p>

      </div>
    </div>
  )
}

export default Home