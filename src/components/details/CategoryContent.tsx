import ProductCard from "@/components/shared/ProductCard";
import { baseUrl, getCategories } from "@/helper/apiData";
import { Product } from "@/types/type";
import Link from "next/link";

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

interface CategoryContentProps {
  params: Promise<{ categoryId: string }>;
}

const CategoryContent = async ({ params }: CategoryContentProps) => {
  const { categoryId } = await params;

  const categoryProducts = await getCategoryProducts(categoryId);
  const categories = await getCategories();

  const currentCategories = categories?.find((c) => c?.slug === categoryId);

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
            <select className="select select-bordered select-sm bg-white text-[12px] font-normal border-gray-300 rounded-lg py-1.5 px-4">
              <option value="default">ডিফল্ট</option>
              <option value="low-to-high">দাম: কম থেকে বেশি</option>
              <option value="high-to-low">দাম: বেশি থেকে কম</option>
            </select>
          </div>
        </div>

        {categoryProducts && categoryProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
            {categoryProducts.map((product) => (
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
