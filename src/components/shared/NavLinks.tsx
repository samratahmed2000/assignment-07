import { getNavLinks } from "@/services/apiData";
import Link from "next/link";

const NavLinks = async () => {
  const navLinks = await getNavLinks();

  return (
    <div className="flex flex-col lg:flex-row gap-8 items-center max-w-7xl mx-auto px-6 lg:px-8 py-3 border-t border-gray-100">
      {navLinks?.map((n) => (
        <Link href={n?.slug} key={n?.id}>
          <div className="flex gap-1">
            <span>{n?.icon}</span>
            <span>{n?.nameBn}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;
