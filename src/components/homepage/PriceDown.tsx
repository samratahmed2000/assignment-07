import { getProducts } from "@/services/apiData";
import Link from "next/link";
import { FaCaretDown } from "react-icons/fa";
import ProductCard from "../shared/ProductCard";

const PriceDown = async () => {
  const priceDown = await getProducts();
  const filteredPriceDown = priceDown?.filter(
    (product) => product?.change?.dir === "down",
  );

  return (
    <section className="max-w-7xl mx-auto py-4 mt-4">
      <div className="flex items-center gap-1 mx-6 lg:mx-auto">
        <span className="text-green-700">
          <FaCaretDown />
        </span>
        <span className="text-[20px] font-bold">আজ দাম কমেছে</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 align-items-center  mt-2 mx-6 lg:mx-auto">
        {filteredPriceDown
          ?.sort((a, b) => b?.change?.pct - a?.change?.pct)
          .slice(0, 6)
          .map((product) => (
            <Link key={product?.id} href={`/products/${product?.id}`}>
              <ProductCard product={product} />
            </Link>
          ))}
      </div>
    </section>
  );
};

export default PriceDown;
