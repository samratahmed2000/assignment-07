"use client";

import { useState } from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const ToggleButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section>
      <button
        onClick={() => toggleMenu()}
        className="lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-md focus:outline-none transition-colors"
        aria-label="Toggle Menu"
      >
        {isOpen ? (
          <IoClose className="h-6 w-6 text-xl text-center" />
        ) : (
          <GiHamburgerMenu className="h-6 w-6 text-xl text-center" />
        )}
      </button>

      <div
        className={`${
          isOpen ? "block" : "hidden"
        } lg:flex flex-col lg:flex-row items-center w-full lg:w-auto gap-4 mt-4 lg:mt-0 text-sm`}
      >
        <div className="flex flex-col lg:flex-row items-center gap-3 w-full lg:w-auto justify-center border-t border-gray-100 lg:border-none pt-3 lg:pt-0">
          <Link href={"/signin"} className="w-full lg:w-auto text-center">
            <button className="w-full lg:w-auto py-2 px-4 hover:bg-gray-50 rounded-md">
              সাইন ইন
            </button>
          </Link>
          <Link href={"/signup"} className="w-full lg:w-auto text-center">
            <button className="w-full lg:w-auto btn btn-success bg-[#008744] hover:bg-green-800 text-white font-medium py-2 px-4 rounded-xl transition-colors">
              সাইন আপ
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ToggleButton;
