import { getCategories } from "@/services/apiData";
import Link from "next/link";

const NavLinks = async () => {
  const navLinks = await getCategories();

  return (
    <div className=" max-w-7xl mx-auto px-6 lg:px-8 py-3 border-t border-gray-100">
      <ul className="flex flex-col lg:flex-row gap-8 items-center">
        {navLinks?.map((navlink) => (
          <li key={navlink?.id}>
            <Link href={`/category/${navlink?.slug}`}>
              <span>{navlink?.icon}</span>
              <span>{navlink?.nameBn}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavLinks;
