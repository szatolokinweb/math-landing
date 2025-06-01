'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavLink } from "@/utils/NavLink";

export default function Nav({ links }: { links: NavLink[] }) {
  const pathname = usePathname();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, url: NavLink['url']) => {
    // Only handle hash links when on the same page
    if (url.hash && pathname === url.pathname) {
      e.preventDefault();
      const element = document.getElementById(url.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        // Update URL hash after scroll starts
        window.history.pushState(null, '', `#${url.hash}`);
      }
    }
  };

  return (
    <div className="flex flex-col gap-1 items-center">
      {links.map(({ title, url, shouldHighlight = true }, index) => {
        const isActive = shouldHighlight && pathname === url.pathname;
        return (
          <Link 
            key={index} 
            href={url.pathname + (url.hash ? `#${url.hash}` : '')}
            onClick={(e) => handleClick(e, url)}
            className={`px-3 py-1 rounded-md transition-colors ${
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
