import "./globals.css"
import { Albert_Sans } from "@next/font/google"
// import localFont from "@next/font/local"
import Providers from "../components/providers"

const font = Albert_Sans({ subsets: ["latin"] })

export default function RootLayout({
  children,
  ...props
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={font.className}>
      <head>
        <title>Project & Issue Tracker</title>
        <meta
          name="description"
          content="Full-stack project management software using the Next.js 13 experimental app directory. Based on Jira & Linear agile practices."
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"></meta>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
