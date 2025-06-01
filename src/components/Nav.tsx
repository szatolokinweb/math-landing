'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavLink } from "@/utils/NavLink";

export default function Nav({ links }: { links: NavLink[] }) {
  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-0.5 items-center">
      {links.map(({ title, url }, index) => {
        const isActive = pathname === url.pathname;
        return (
          <Link 
            key={index} 
            href={url.pathname + (url.hash ? `#${url.hash}` : '')}
            className={`px-2.5 py-0.5 text-[0.95em] rounded-md transition-colors ${
              isActive 
                ? 'bg-red-100 text-red-700 font-medium' 
                : 'hover:bg-gray-100 text-gray-700'
            }`}
          >
            {title}
          </Link>
        );
      })}
    </div>
  );
}
