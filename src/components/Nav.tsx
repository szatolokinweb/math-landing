import Link from "next/link";

export type NavLink = {
  href: string;
  title: string;
};

export default function Nav({ links }: { links: NavLink[] }) {
  return (
    <div className="flex flex-col gap-2 items-center">
      {links.map(({ href, title }, index) => (
        <Link key={index} href={href}>
          {title}
        </Link>
      ))}
    </div>
  );
}
