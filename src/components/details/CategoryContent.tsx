import ProductCard from "@/components/shared/ProductCard";
import { baseUrl, getCategories } from "@/helper/apiData";
import { Product } from "@/types/type";
import Link from "next/link";
import { notFound } from "next/navigation";
import SortDropdown from "../button/SortDropDown";

export const getCategoryProducts = async (categoryId: string) => {
  try {
    const res = await fetch(
      `${baseUrl}/api/bazardor/products?category=${categoryId}`,
      {
        next: {
          revalidate: 60,
        },
      },
    );
    const data: Product[] = await res.json();
    return data;
  } catch (error) {
    console.log("Error fetching products:", error);
    return [];
  }
};

const parseBengaliNumeric = (
  value: string | number | null | undefined,
): number => {
  if (typeof value === "number") return value;
  if (!value) return 0;

  const banglaDigits = {
    "০": "0",
    "১": "1",
    "২": "2",
    "৩": "3",
    "৪": "4",
    "৫": "5",
    "৬": "6",
    "৭": "7",
    "৮": "8",
    "৯": "9",
  };

  const englishString = String(value).replace(
    /[০-৯]/g,
    (match) => banglaDigits[match as keyof typeof banglaDigits],
  );
  const parsed = parseFloat(englishString.replace(/,/g, "")); // Handle thousand separators if any
  return isNaN(parsed) ? 0 : parsed;
};

interface CategoryContentProps {
  params: Promise<{ categoryId: string }>;
  searchParams: Promise<{ sort?: string }>;
}

const CategoryContent = async ({
  params,
  searchParams,
}: CategoryContentProps) => {
  const { categoryId } = await params;
  const { sort } = await searchParams;
  const categories = await getCategories();

  const currentCategories = categories?.find((c) => c?.slug === categoryId);

  if (!currentCategories) {
    notFound();
  }

  const categoryProducts = await getCategoryProducts(categoryId);

  const sortedProducts = [...categoryProducts];
  if (sort === "low-to-high") {
    sortedProducts.sort(
      (a, b) => parseBengaliNumeric(a.today) - parseBengaliNumeric(b.today),
    );
  } else if (sort === "high-to-low") {
    sortedProducts.sort(
      (a, b) => parseBengaliNumeric(b.today) - parseBengaliNumeric(a.today),
    );
  }

  return (
    <section className="max-w-7xl mx-auto w-full my-8 px-4">
      <div className="flex items-center gap-2 text-sm text-[#4b5563] font-medium mb-6">
        <Link href={"/"} className="hover:text-green-600 transition-colors">
          হোম
        </Link>
        <span>&gt;</span>
        <span className="text-gray-400">{currentCategories?.nameBn}</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-3 justify-center lg:justify-start items-center bg-white py-6 px-4 rounded-2xl border border-gray-100 shadow-sm mb-6">
        <span className="text-6xl lg:text-4xl">{currentCategories?.icon}</span>

        <div className="flex flex-col items-center justify-center lg:justify-start lg:items-start">
          <span className="text-[16px] font-semibold text-gray-800">
            {currentCategories?.nameBn}
          </span>
          <span className="text-[14px] font-normal text-[#5d665f]">
            {(categoryProducts?.length || 0).toLocaleString("bn-BD")}টি পণ্যের
            আজকের দাম ও পরিবর্তন
          </span>
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center my-4">
          <span className="text-[14px] font-normal text-[#5d665f]">
            মোট {(categoryProducts?.length || 0).toLocaleString("bn-BD")}টি পণ্য
            দেখানো হচ্ছে
          </span>

          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">সাজান</span>
            <SortDropdown currentSort={sort || "default"} />
          </div>
        </div>

        {sortedProducts && sortedProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
            {sortedProducts.map((product) => (
              <Link key={product?.id} href={`/product/${product?.id}`}>
                <ProductCard product={product} />
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 font-bold text-red-500 text-lg bg-white rounded-2xl border border-gray-100 shadow-sm">
            এই ক্যাটাগরিতে কোনো পণ্য পাওয়া যায়নি।
          </div>
        )}
      </div>
    </section>
  );
};

export default CategoryContent;
