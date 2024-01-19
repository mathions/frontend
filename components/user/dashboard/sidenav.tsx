import Link from 'next/link';
import Image from 'next/image';
import { ArrowRightStartOnRectangleIcon } from '@heroicons/react/24/outline';
// import { signOut } from '@/auth';
import NavLinks from "./navlink";

export default function SideNav() {
  return (
    <div className="flex h-full flex-col bg-white">
      <Link className="flex h-10 items-center justify-center rounded-md py-16" href="/dashboard">
        <div className="text-white flex items-center">
          <Image src="/logo-1.svg" alt="logo" width={40} height={40} />
          <p className="font-extrabold text-2xl text-purple ml-4">budgetplan</p>
        </div>
      </Link>

      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0  mx-3">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
        <form
          action={async () => {
            'use server';
            // await signOut();
          }}
        >
          <button className="flex h-[64px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-gray-100  md:flex-none md:justify-start md:p-2 md:px-3 ">
            <ArrowRightStartOnRectangleIcon className="w-6" />
            <div className="hidden md:block">Logout</div>
          </button>
        </form>
      </div>
    </div>
  );
}
