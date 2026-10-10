import banglaPrice from "@/services/banglaPrice";
import unitToBengali from "@/services/unitToBengla";
import { Product } from "@/types/type";
import { BsDashLg } from "react-icons/bs";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="flex flex-col justify-center items-center lg:items-start lg:justify-between gap-3 px-3 py-3 bg-white border border-gray-200 rounded-2xl">
      <div className="flex flex-col items-center lg:items-start gap-3 p-1">
        <div className="w-20 h-20 lg:w-12 lg:h-12 text-6xl flex items-center justify-center rounded-lg lg:text-2xl bg-[#f0f5f0]">
          {product?.image}
        </div>

        <div className="flex flex-col items-center lg:items-start">
          <span className="text-2xl lg:text-[16px] font-semibold">
            {product?.nameBn}
          </span>
          <span className="text-[12px] font-normal">
            প্রতি {unitToBengali({ unit: product?.unit }) || "কেজি"}
          </span>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-center px-1 w-full">
        <div className="flex flex-col items-center lg:items-start my-0.5">
          <span className="text-[12px] font-normal">আজকের দাম</span>

          <div className="flex items-center gap-1">
            <span className="text-[20px] font-bold">
              {banglaPrice.format(product?.today)}
            </span>
            <span className="text-[14px] font-medium">টাকা</span>
          </div>
        </div>
        <div
          className={`flex items-center bg-gray-100 mt-2 px-4 py-1.5 lg:px-2 lg:py-0.5 rounded-2xl gap-1 text-[12px] font-semibold ${product?.change.dir === "up" ? "text-red-600" : product?.change.dir === "down" ? "text-green-600" : "text-gray-600"}`}
        >
          <span>
            {product?.change.dir === "up" ? (
              <FaCaretUp />
            ) : product?.change.dir === "down" ? (
              <FaCaretDown />
            ) : (
              <BsDashLg />
            )}
          </span>
          <span>{banglaPrice.format(Math.abs(product?.change?.pct))}%</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
