import Sidebar from "../components/sidebar";

export default function Home() {

  return (
    <main className="h-screen flex justify-start items-start pl-16 sm:pl-[4.5rem]">
      
      <Sidebar />

      <div className="py-8">
        <h1 className="text-3xl font-extrabold">
          Welcome to Next.js 13!
        </h1>
        <p className="text-lg my-16">
          Get started by editing{" "}
          <code className="font-mono">app/page.tsx</code>
        </p>
      </div>

      
    </main>
  )
}
