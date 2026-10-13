import { getCategories } from "@/helper/apiData";
import ActiveLink from "../button/ActiveLink";

const NavLinks = async () => {
  const navLinks = await getCategories();

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-0.5 lg:py-3">
      <ul className="flex gap-5 md:gap-6 lg:gap-8 justify-start md:justify-center lg:justify-start items-center overflow-x-auto whitespace-nowrap scrollbar-none py-1">
        {navLinks?.map((navlink) => (
          <li key={navlink?.id} className="inline-block shrink-0">
            <ActiveLink href={`/category/${navlink?.slug}`}>
              <span className="text-lg md:text-xl lg:text-base">
                {navlink?.icon}
              </span>
              <span className="text-sm md:text-base lg:text-base">
                {navlink?.nameBn}
              </span>
            </ActiveLink>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default NavLinks;
