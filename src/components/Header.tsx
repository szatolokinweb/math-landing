import Logo from "./Logo";
import Nav, { NavLink } from "./Nav";

export const navLinks: NavLink[] = [
  {
    href: "/me",
    title: "Обо мне",
  },
  {
    href: "/ege",
    title: "ЕГЭ",
  },
  {
    href: "/oge",
    title: "ОГЭ",
  },
  {
    href: "/documents",
    title: "Материалы",
  },
];

export default function Header() {
  return (
    <div className="p-5">
      <div className="flex justify-center">
        <Logo />
      </div>
      <div className="m-5">
        <Nav links={navLinks} />
      </div>
    </div>
  );
}
