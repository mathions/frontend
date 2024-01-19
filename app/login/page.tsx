import { LoginForm } from "@/components/login-form";
import Image from "next/image";

export default function LoginPage() {
    return (
    <main className="grid grid-cols-1 md:grid-cols-2 h-screen">
        <div className="grid place-content-center">
          <LoginForm />
        </div>
      <div className="bg-white hidden md:block ">
        <div className="w-full h-full bg-[#2D3983] rounded-l-[48px] grid place-items-center">
          <div className="grid justify-items-center">
            <Image src="/logo-2.svg" alt="logo" width={200} height={200} />
            <p className="font-bold text-5xl text-white text-center mt-8">budgetplan</p>
          </div>
        </div>
      </div>
    </main>
  )
}