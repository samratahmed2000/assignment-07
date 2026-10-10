"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

const ActiveLink = ({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`flex gap-1 items-center ${isActive ? "text-[#008744] font-semibold" : "text-gray-600"}`}
    >
      {children}
    </Link>
  );
};

export default ActiveLink;
