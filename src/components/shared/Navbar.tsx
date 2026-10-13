import { Suspense } from "react";
import Marquee from "./Marquee";
import LogoLink from "../button/LogoLink";
import NavLinks from "./NavLinks";
import UserInfo from "../details/UserInfo";
import MarqueeSkeleton from "../skeletons/MarqueeSkeleton";

const Navbar = () => {
  return (
    <header className="w-full bg-white lg:sticky lg:top-0 lg:backdrop-blur-2xl lg:z-50 border-b border-gray-100 lg:flex lg:flex-col">
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 lg:static lg:bg-transparent lg:border-b-0 lg:order-1">
        <nav className="max-w-7xl mx-auto w-full flex justify-between items-center py-1 px-4 lg:p-3">
          <Suspense
            fallback={<div className="bg-gray-50 h-8 w-24 rounded"></div>}
          >
            <LogoLink />
          </Suspense>
          <div>
            <UserInfo />
          </div>
        </nav>
      </div>

      <div className="h-13 lg:hidden"></div>

      <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-100 lg:static lg:border-t lg:order-2">
        <div className="max-w-7xl mx-auto w-full">
          <Suspense
            fallback={<div className="bg-gray-50 h-10 w-full rounded"></div>}
          >
            <NavLinks />
          </Suspense>
        </div>
      </div>

      <div className="w-full lg:order-3">
        <Suspense fallback={<MarqueeSkeleton />}>
          <Marquee />
        </Suspense>
      </div>
    </header>
  );
};

export default Navbar;
