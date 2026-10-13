"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";

interface SortDropdownProps {
  currentSort: string;
}

const SortDropdown = ({ currentSort }: SortDropdownProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleSortChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value === "default") {
      params.delete("sort");
    } else {
      params.set("sort", value);
    }

    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="relative inline-block w-44">
      <select
        value={currentSort}
        onChange={(e) => handleSortChange(e.target.value)}
        className="w-full appearance-none select select-bordered select-sm bg-white text-[12px] font-normal border-gray-300 rounded-lg py-1.5 pl-4 pr-8 focus:outline-none cursor-pointer"
      >
        <option value="default">ডিফল্ট</option>
        <option value="low-to-high">দাম: কম থেকে বেশি</option>
        <option value="high-to-low">দাম: বেশি থেকে কম</option>
      </select>

      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2.5 text-gray-500">
        <svg
          xmlns="http://w3.org"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
    </div>
  );
};

export default SortDropdown;
