"use client"

import { SessionProvider } from "next-auth/react"
import { GoogleAnalytics } from "nextjs-google-analytics"

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
      <>
        <GoogleAnalytics trackPageViews />
        {children}
      </>
    </SessionProvider>
  )
}

export default Providers
