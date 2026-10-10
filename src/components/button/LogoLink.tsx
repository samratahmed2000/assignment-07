"use client";

import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import logo from "@/assets/logo.png";
import date from "@/helper/dateToBangla";

const LogoLink = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();

    if (pathname === "/") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      router.push("/");
    }
  };

  return (
    <section className="flex flex-col lg:flex-row items-center gap-3">
      <div
        className="bg-[#008744] rounded-2xl p-1 cursor-pointer"
        onClick={handleLogoClick}
      >
        <Image src={logo} alt="Logo" width={40} height={40} className="p-2" />
      </div>

      <div
        className="flex flex-col items-center lg:items-start cursor-pointer"
        onClick={(e) => handleLogoClick(e)}
      >
        <h1 className="text-2xl font-bold">বাজার দর</h1>
        <p className="text-gray-600 text-[12px]">{date}</p>
      </div>
    </section>
  );
};

export default LogoLink;
