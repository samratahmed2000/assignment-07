import { getProducts } from "@/services/apiData";
import Link from "next/link";
import { FaCaretUp } from "react-icons/fa";
import ProductCard from "../shared/ProductCard";
import { Suspense } from "react";

const PriceUp = async () => {
  const priceUp = await getProducts();
  const filteredPriceUp = priceUp?.filter(
    (product) => product?.change?.dir === "up",
  );

  return (
    <section className="max-w-7xl mx-auto py-4">
      <div className="flex items-center gap-1 mx-6 lg:mx-auto">
        <span className="text-red-700">
          <FaCaretUp />
        </span>
        <span className="text-[20px] font-bold">আজ দাম বেড়েছে</span>
      </div>

      <Suspense fallback="loading..">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 items-center  mt-2 mx-6 lg:mx-auto">
          {filteredPriceUp
            ?.sort((a, b) => b?.change?.pct - a?.change?.pct)
            .slice(0, 6)
            .map((product) => (
              <Link key={product?.id} href={`/product/${product?.id}`}>
                <ProductCard product={product} />
              </Link>
            ))}
        </div>
      </Suspense>
    </section>
  );
};

export default PriceUp;
