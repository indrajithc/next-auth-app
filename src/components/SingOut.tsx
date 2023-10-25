"use client"
import { signOut } from "next-auth/react"

const SingOut = () => <button onClick={() => signOut()}>Sign out</button>

export default SingOut