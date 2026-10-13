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
    </div>
  );
};

export default SortDropdown;
