import { Suspense } from "react";
import Marquee from "./Marquee";
import LogoLink from "../button/LogoLink";
import ToggleButton from "../button/ToggleButton";
import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <header className="bg-white lg:sticky lg:top-0 lg:backdrop-blur-2xl lg:z-50 border-b border-gray-100">
      <nav className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row justify-between items-center p-3 relative">
        <Suspense fallback={<div>Loading...</div>}>
          <LogoLink />
        </Suspense>

        <ToggleButton />
      </nav>

      <Suspense fallback={<div>Loading...</div>}>
        <NavLinks />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <Marquee />
      </Suspense>
    </header>
  );
};

export default Navbar;
