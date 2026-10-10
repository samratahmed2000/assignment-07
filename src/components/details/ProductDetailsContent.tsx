import { baseUrl } from "@/helper/apiData";
import banglaPrice from "@/helper/banglaPrice";
import unitToBengali from "@/helper/unitToBengla";
import { Product } from "@/types/type";
import Link from "next/link";
import { BsDashLg } from "react-icons/bs";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

export const getProducts = async (productId: string) => {
  try {
    const res = await fetch(`${baseUrl}/api/bazardor/products/${productId}`, {
      next: {
        revalidate: 60,
      },
    });
    const data: Product = await res.json();
    return data;
  } catch (error) {
    console.log("Error fetching products:", error);
    return null;
  }
};

interface ProductDetailsContentProps {
  params: Promise<{ productId: string }>;
}

const ProductDetailsContent = async ({
  params,
}: ProductDetailsContentProps) => {
  const { productId } = await params;
  const products = await getProducts(productId);

  if (!products) {
    return (
      <div className="text-center py-20 font-bold text-red-500 text-lg">
        দুঃখিত, পণ্যটির কোনো তথ্য পাওয়া যায়নি।
      </div>
    );
  }

  const allMinPrice: number[] = products?.markets?.map((m) => m.min) ?? [];
  const minPrice = allMinPrice.length > 0 ? Math.min(...allMinPrice) : 0;

  const allMaxPrice: number[] = products?.markets?.map((m) => m.max) ?? [];
  const maxPrice = allMaxPrice.length > 0 ? Math.max(...allMaxPrice) : 0;

  const avgPrice = Math.round(
    (products?.markets?.reduce((sum, m) => sum + (m.min + m.max) / 2, 0) ?? 0) /
      (products?.markets?.length || 1),
  );

  return (
    <section className="max-w-7xl mx-auto w-full my-8 px-4">
      <div className="flex items-center gap-2 text-sm text-[#4b5563] font-medium mb-6">
        <Link href={"/"} className="hover:text-green-600 transition-colors">
          হোম
        </Link>

        <span>&gt;</span>

        <Link
          href={`/category/${products?.category}`}
          className="hover:text-green-600 transition-colors"
        >
          <span>{products?.categoryNameBn}</span>
        </Link>

        <span>&gt;</span>
        <span className="text-gray-400">{products?.nameBn}</span>
      </div>

      {/* Main Product Card */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6 flex flex-col md:flex-row justify-between items-center  md:items-center gap-4">
        {/* Left Side: Product Info */}
        <div className="flex flex-col lg:flex-row gap-4 items-center">
          <div className="w-36 h-36 text-center lg:w-20 lg:h-20 flex items-center justify-center rounded-xl bg-[#f8faf8] border border-gray-100 text-8xl lg:text-4xl shadow-sm">
            <span>{products?.image}</span>
          </div>

          <div className="flex flex-col items-center lg:items-start gap-1.5">
            <h1 className="text-2xl font-bold text-[#1f2937]">
              {products?.nameBn}
            </h1>
            <span className="text-sm text-gray-500 font-medium">
              প্রতি {unitToBengali({ unit: products?.unit }) || "কেজি"} ·{" "}
              {products?.nameBn}
            </span>
            <span className="text-sm text-gray-600 font-medium">
              গতকালের তুলনায় আজ দাম{" "}
              <span className="font-semibold text-gray-800">
                {products?.change?.dir === "up"
                  ? "বেড়েছে"
                  : products?.change?.dir === "down"
                    ? "কমেছে"
                    : "অপরিবর্তিত আছে"}
              </span>{" "}
              · {banglaPrice.format(Math.abs(products?.change?.pct ?? 0))} টাকা
            </span>
          </div>
        </div>

        {/* Right Side: Price Status */}
        <div className="bg-[#f9fafb] border border-gray-100 rounded-2xl p-4 flex flex-col items-center w-48 lg:min-w-35 shadow-sm md:w-auto">
          <span className="text-[12px] font-medium text-gray-500 mb-1">
            আজকের দাম
          </span>
          <span className="text-[32px] font-black text-[#1f2937] leading-none mb-1">
            {banglaPrice.format(products?.today ?? 0)}
          </span>
          <span className="text-[12px] text-gray-500 mb-2">
            টাকা / {unitToBengali({ unit: products?.unit }) || "কেজি"}
          </span>

          {/* Percentage Indicator */}
          <div
            className={`flex items-center gap-1 text-[12px] font-bold ${
              products?.change?.dir === "up"
                ? "text-red-600"
                : products?.change?.dir === "down"
                  ? "text-green-600"
                  : "text-gray-500"
            }`}
          >
            <span className="text-xs">
              {products?.change?.dir === "up" ? (
                <FaCaretUp />
              ) : products?.change?.dir === "down" ? (
                <FaCaretDown />
              ) : (
                <BsDashLg />
              )}
            </span>
            <span>
              {banglaPrice.format(Math.abs(products?.change?.pct ?? 0))}%
            </span>
          </div>
        </div>
      </div>

      {/* Market Price Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6 w-full">
        {/* সর্বনিম্ন দাম কার্ড */}
        <div className="flex flex-col items-center md:items-start border border-gray-100 bg-white p-6 rounded-2xl shadow-sm">
          <span className="text-[14px] font-medium text-gray-500 mb-1">
            সর্বনিম্ন দাম
          </span>
          <span className="text-[36px] font-extrabold text-green-700 leading-none mb-1">
            {banglaPrice.format(minPrice)}
            <span className="text-[20px] font-semibold mx-1">টাকা</span>
          </span>
          <span className="text-[13px] font-normal text-gray-400">
            সবচেয়ে কম দামের বাজার
          </span>
        </div>

        {/* সর্বাধিক দাম কার্ড */}
        <div className="flex flex-col items-center md:items-start border border-gray-100 bg-white p-6 rounded-2xl shadow-sm">
          <span className="text-[14px] font-medium text-gray-500 mb-1">
            সর্বাধিক দাম
          </span>
          <span className="text-[36px] font-extrabold text-red-600 leading-none mb-1">
            {banglaPrice.format(maxPrice)}
            <span className="text-[20px] font-semibold mx-1">টাকা</span>
          </span>
          <span className="text-[13px] font-normal text-gray-400">
            সবচেয়ে বেশি দামের বাজার
          </span>
        </div>

        {/* গড় দাম কার্ড */}
        <div className="flex flex-col items-center md:items-start border border-gray-100 bg-white p-6 rounded-2xl shadow-sm">
          <span className="text-[14px] font-medium text-gray-500 mb-1">
            গড় দাম
          </span>
          <span className="text-[36px] font-extrabold text-green-600 leading-none mb-1">
            {banglaPrice.format(avgPrice)}
            <span className="text-[20px] font-semibold mx-1">টাকা</span>
          </span>
          <span className="text-[13px] font-normal text-gray-400">
            প্রতি {unitToBengali({ unit: products?.unit }) || "কেজি"}-এর হিসাবে
          </span>
        </div>
      </div>

      {/* Market Price Table */}
      <div className="bg-white rounded-2xl border border-gray-200 p-2 lg:p-6 shadow-sm">
        {products?.markets && products?.markets?.length > 0 ? (
          <div>
            <h2 className="text-lg font-bold text-gray-800 mb-4">
              বাজারভিত্তিক আজকের দাম
            </h2>
            <div className="overflow-x-auto rounded-xl border border-gray-100">
              <table className="table table-zebra w-full">
                <thead>
                  <tr className="bg-gray-50 text-gray-700 font-semibold text-sm">
                    <th className="text-left">বাজার</th>
                    <th className="text-left">বিভাগ</th>
                    <th className="text-center">সর্বনিম্ন</th>
                    <th className="text-right">সর্বাধিক</th>
                    <th className="text-right">গড়</th>
                  </tr>
                </thead>
                <tbody>
                  {products.markets.map((marketItem, ind) => {
                    const itemAvg = Math.round(
                      (marketItem.min + marketItem.max) / 2,
                    );

                    return (
                      <tr key={ind}>
                        <td className="text-left">{marketItem.market}</td>
                        <td className="text-left">{marketItem.division}</td>
                        <td className="text-center">
                          {banglaPrice.format(marketItem.min)} টাকা
                        </td>
                        <td className="text-right">
                          {banglaPrice.format(marketItem.max)} টাকা
                        </td>
                        <td className="text-right">
                          {banglaPrice.format(itemAvg)} টাকা
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="text-center py-10 font-bold text-red-500">
            এই প্রোডাক্টের কোনো বাজারের তথ্য পাওয়া যায়নি।
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductDetailsContent;
