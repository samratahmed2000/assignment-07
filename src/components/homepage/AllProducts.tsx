import { getProducts } from "@/services/apiData";
import Link from "next/link";
import ProductCard from "../shared/ProductCard";
import { Suspense } from "react";

const AllProducts = async () => {
  const allProducts = await getProducts();

  return (
    <section id="#সব_পণ্য" className="max-w-7xl mx-auto py-4">
      <div className="flex flex-col justify-between gap-1 mx-6 lg:mx-auto">
        <span className="text-[20px] font-bold">সব পণ্য</span>
        <span className="text-[14px] text-gray-500 font-normal">
          মোট {new Intl.NumberFormat("bn-BD").format(allProducts?.length || 0)}
          টি পণ্য দেখানো হচ্ছে
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 items-center  mt-2 mx-6 lg:mx-auto">
        {allProducts?.map((product) => (
          <Link key={product?.id} href={`/product/${product?.id}`}>
            <Suspense fallback="loading..">
              <ProductCard product={product} />
            </Suspense>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default AllProducts;
