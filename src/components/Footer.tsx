import { globalNavLinks } from "@/utils/NavLink";
import Nav from "./Nav";
import Logo from "./Logo";
import Dates from "./Dates";

export default function Footer() {
  return (
    <div className="p-5">
      <Nav links={globalNavLinks} />
      <div className="mt-5 flex justify-center">
        <Logo />
      </div>
      <div className="mt-5 flex justify-center">
        <Dates />
      </div>
    </div>
  );
}
