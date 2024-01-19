'use client'

import { ShoppingBagIcon, HomeIcon, BuildingStorefrontIcon, } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  { name: 'Dashboard', href: '/dashboard', icon: HomeIcon},
  { name: 'Belanja Modal', href: '/belanja-modal', icon: BuildingStorefrontIcon},
  { name: 'ABT', href: '/abt', icon: ShoppingBagIcon },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[64px] grow items-center justify-center gap-4 rounded-lg p-3 text-base font-medium hover:bg-gray-100  md:flex-none md:justify-start md:py-2 md:px-5  md:my-1',
              {
                'bg-purple text-white hover:bg-purple hover:text-white': pathname.includes(link.href),
              },
            )}
          >
            <LinkIcon 
              className={clsx(
                'w-6 ', 
                {
                  'stroke-slate-50' : pathname === link.href,
                  },
                )} 
            />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
