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
  // চেক করা হচ্ছে বর্তমান পাথ এই লিংকের পাথের সাথে মিলে কি না
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`flex flex-col items-center ${isActive ? "text-green-600 font-semibold" : "text-gray-600"}`}
    >
      {children}
    </Link>
  );
};

export default ActiveLink;
