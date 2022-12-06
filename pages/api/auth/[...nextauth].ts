import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { prisma } from "../../../prisma/db";

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ? process.env.GOOGLE_CLIENT_ID : "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ? process.env.GOOGLE_CLIENT_SECRET : ""
    })
  ],
}

export default NextAuth(authOptions)