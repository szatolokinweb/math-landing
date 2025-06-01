import { globalNavLinks } from "@/utils/NavLink";
import Logo from "./Logo";
import Nav from "./Nav";
import Socials from "./Socials";

export default function Header() {
  return (
    <div className="p-5">
      <div className="flex justify-center">
        <Logo />
      </div>
      <div className="mt-5">
        <Nav links={globalNavLinks} />
      </div>
      <div className="mt-5 flex justify-center">
        <Socials />
      </div>
    </div>
  );
}
