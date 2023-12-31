import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import SingOut from '@/components/SingOut'
import { options } from "./api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(options);
  return (
    <html lang="en">
      <body className={inter.className}>
        {
          session? (
            <SingOut />
          ) : ""
        }
        {children}</body>
    </html>
  )
}
