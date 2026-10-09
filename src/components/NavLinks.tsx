import baseUrl from "@/services/baseUrl";
import Link from "next/link";

interface NavLink {
  id: number;
  nameBn: string;
  slug: string;
  icon: string;
}

const getNavLinks = async () => {
  try {
    const res = await fetch(`${baseUrl}/api/bazardor/categories`);
    const data: NavLink[] = await res.json();
    return data;
  } catch (error) {
    console.log("Error fetching nav links:", error);
  }
};

const NavLinks = async () => {
  const navLinks = await getNavLinks();

  return (
    <div className="flex flex-col lg:flex-row gap-8 items-center px-18 py-3 border-t border-gray-100">
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
