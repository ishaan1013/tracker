"use client"

import { Session } from "next-auth"
import { signIn } from "next-auth/react"
import { FaGoogle } from "react-icons/fa"

const AuthButton = ({ session }: { session: Session | null }) => {
  return (
    <>
      {session ? (
        <div className="mt-8 flex w-full items-center justify-center rounded border-[1px] border-gray-300 bg-gray-150 py-3 font-semibold">
          Signed In Successfully
        </div>
      ) : (
        <button
          onClick={() =>
            signIn("google", {
              callbackUrl: process.env.VERCEL_URL
                ? process.env.VERCEL_URL
                : "http://localhost:3000/",
            })
          }
          className="peer mt-8 flex w-full items-center justify-center rounded bg-blue-700 py-3 font-semibold text-white duration-100 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500/75 focus:ring-offset-0">
          <FaGoogle className="mr-2 -translate-y-[1px]" />
          Continue with Google
        </button>
      )}
    </>
  )
}

export default AuthButton
