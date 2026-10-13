"use client";

import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import logo from "@/assets/logo.png";

const LogoLink = () => {
  const date = new Date().toLocaleDateString("bn-BD", { dateStyle: "full" });
  const router = useRouter();
  const pathname = usePathname();

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      router.push("/");
    }
  };

  return (
    <section className="flex flex-row items-center gap-2 lg:gap-3">
      <div
        className="bg-[#008744] rounded-xl lg:rounded-2xl p-0.5 lg:p-1 cursor-pointer shrink-0"
        onClick={handleLogoClick}
      >
        <Image
          src={logo}
          alt="Logo"
          width={32}
          height={32}
          className="p-0.5 lg:p-2 lg:w-10 lg:h-10"
        />
      </div>

      <div
        className="flex flex-col items-start cursor-pointer justify-center"
        onClick={(e) => handleLogoClick(e)}
      >
        <h1 className="text-lg lg:text-2xl font-bold leading-tight">
          বাজার দর
        </h1>
        <p
          suppressHydrationWarning
          className="text-gray-600 text-[10px] lg:text-[12px] leading-none mt-0.5"
        >
          {date}
        </p>
      </div>
    </section>
  );
};

export default LogoLink;
