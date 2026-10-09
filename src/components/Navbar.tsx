import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import NavLinks from "./NavLinks";
import { Suspense } from "react";

const date = new Date().toLocaleDateString("bn-BD", { dateStyle: "full" });

const Navbar = () => {
  return (
    <header>
      <nav className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row justify-center lg:justify-between items-center p-3">
        <div className="flex flex-col lg:flex-row items-center gap-3">
          <div className="bg-green-700 rounded-2xl p-1">
            <Link href="/">
              <Image src={logo} alt="Logo" width={40} height={40} />
            </Link>
          </div>

          <div className="flex flex-col items-center lg:items-start">
            <Link href={"/"} className="text-2xl font-bold">
              বাজার দর
            </Link>
            <p className="text-gray-600 text-[12px]">{date}</p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-3 text-sm">
          <button>সাইন ইন</button>
          <button className="btn btn-success bg-green-700/80 text-white">
            সাইন আপ
          </button>
        </div>
      </nav>

      <Suspense fallback={<div>Loading...</div>}>
        <NavLinks />
      </Suspense>
    </header>
  );
};

export default Navbar;
