"use client"

import Link from "next/link"
import { Button } from "./ui/button"
import { Input } from "./ui/input"

export function LoginForm() {
  return (
  <div  className="w-screen md:w-full flex justify-center">
    <div className="w-10/12 md:w-[360px]">
      <h1 className="text-5xl font-extrabold mb-8">Login</h1>
      <div className="my-4">
        <label htmlFor="username" className="font-semibold">Username</label>
        <Input id="username" type="username" className="mt-2 h-10"/>
      </div>
      <div className="my-4">
        <label htmlFor="password" className="font-semibold my-8">Password</label>
        <Input id="password" type="password" className="mt-2 h-10"/>
      </div>
      <div className="mt-4">
        <Button asChild className="w-full h-10 font-bold bg-[#2D3983]" ><Link href="/dashboard">Login</Link></Button>
      </div>
    </div>
  </div>
  )
}
