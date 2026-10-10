import { getCategories } from "@/services/apiData";
import ActiveLink from "../button/ActiveLink";

const NavLinks = async () => {
  const navLinks = await getCategories();

  return (
    <section className=" max-w-7xl mx-auto px-6 lg:px-8 py-3 border-t border-gray-100">
      <ul className="flex gap-8 justify-center lg:justify-start items-center">
        {navLinks?.map((navlink) => (
          <li key={navlink?.id}>
            <ActiveLink href={`/category/${navlink?.slug}`}>
              <span>{navlink?.icon}</span>
              <span>{navlink?.nameBn}</span>
            </ActiveLink>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default NavLinks;
