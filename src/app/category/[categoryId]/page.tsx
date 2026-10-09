import ProductCard from "@/components/shared/ProductCard";
import { baseUrl, getCategories } from "@/services/apiData";
import { Category, Product } from "@/types/type";
import Link from "next/link";
import { Suspense } from "react";

const getCategoryProducts = async (categoryId: string) => {
  try {
    const res = await fetch(
      `${baseUrl}/api/bazardor/products?category=${categoryId}`,
    );
    const data: Product[] = await res.json();
    return data;
  } catch (error) {
    console.log("Error fetching products:", error);
  }
};

const CategoryProducts = async ({
  params,
}: {
  params: Promise<{ categoryId: string }>;
}) => {
  const { categoryId } = await params;
  const categoryProducts = await getCategoryProducts(categoryId);
  const categories = await getCategories();
  console.log(categoryProducts);

  const currentCategories = categories?.find((c) => c?.slug === categoryId);
  console.log(currentCategories);

  return (
    <div className="max-w-7xl mx-auto w-full my-8">
      <div className="flex gap-3 items-center mx-6 md:mx-8 lg:mx-auto bg-white py-6 px-2 rounded-2xl">
        <span className="text-4xl">{currentCategories?.icon}</span>
        <div className="flex flex-col">
          <span className="text-[16px] font-semibold">
            {currentCategories?.nameBn}
          </span>
          <span className="text-[14px] font-normal text-[#5d665f]">
            {categoryProducts?.length}টি পণ্যের আজকের দাম ও পরিবর্তন
          </span>
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center my-3 mx-8 md:mx-10 lg:mx-auto">
          <span className="text-[14px] font-normal text-[#5d665f]">
            মোট {categoryProducts?.length}টি পণ্য দেখানো হচ্ছে
          </span>

          {/* <div>
            <select
              defaultValue="সাজান"
              className="select select-ghost px-6 py-2 bg-white text-[12px]"
            >
              <option disabled={true}> ডিফল্ট</option>
              <option>দাম: কম থেকে বেশি</option>
              <option>দাম: বেশি থেকে কম</option>
            </select>
          </div> */}

          <div className="flex items-center gap-2 px-8">
            <span className="text-sm text-gray-600">সাজান</span>

            <select className="select select-bordered select-sm bg-white text-[12px] font-normal border-gray-300 rounded-lg py-1.5 px-8">
              <option disabled selected>
                ডিফল্ট
              </option>
              <option>দাম: কম থেকে বেশি</option>
              <option>দাম: বেশি থেকে কম</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 align-items-center  mt-2 mx-6 lg:mx-auto">
          {categoryProducts?.map((c) => (
            <Link key={c?.id} href={"/"}>
              <Suspense fallback="loading..">
                <ProductCard product={c} />
              </Suspense>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryProducts;
