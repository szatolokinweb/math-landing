import Link from "next/link";
import { NavLink } from "@/utils/NavLink";

export default function Nav({ links }: { links: NavLink[] }) {
  return (
    <div className="flex flex-col gap-1 items-center">
      {links.map(({ href, title }, index) => (
        <Link key={index} href={href}>
          {title}
        </Link>
      ))}
    </div>
  );
}
