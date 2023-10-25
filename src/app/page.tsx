import { options } from "./api/auth/[...nextauth]/options"

import { getServerSession } from "next-auth/next"

export default async function Home() {
  const session = await getServerSession(options);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
   <div>
   {
        session ? "Has user session" : 'no session'
      }  
   </div>
    Home page 
    </main>
  )
}
