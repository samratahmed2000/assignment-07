import { Suspense } from "react";
import Marquee from "./Marquee";
import LogoLink from "../button/LogoLink";
import NavLinks from "./NavLinks";
import UserInfo from "../details/UserInfo";
import MarqueeSkeleton from "../skeletons/MarqueeSkeleton";

const Navbar = () => {
  return (
    <header className="bg-white lg:sticky lg:top-0 lg:backdrop-blur-2xl lg:z-50 border-b border-gray-100">
      <nav className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row justify-between items-center p-3 relative">
        <Suspense fallback={<div className="bg-gray-50"></div>}>
          <LogoLink />
        </Suspense>

        <label className="btn btn-circle swap swap-rotate lg:hidden">
          <input type="checkbox" />

          <svg
            className="swap-off fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>

          <svg
            className="swap-on fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
          </svg>
        </label>

        <UserInfo />
      </nav>

      <Suspense fallback={<div className="bg-gray-50"></div>}>
        <NavLinks />
      </Suspense>

      <Suspense fallback={<MarqueeSkeleton />}>
        <Marquee />
      </Suspense>
    </header>
  );
};

export default Navbar;
