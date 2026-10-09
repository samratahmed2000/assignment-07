import banglaPrice from "@/services/banglPrice";
import unitToBengali from "@/services/unitToBengali";
import { Product } from "@/types/type";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="flex flex-col justify-between gap-3 px-3 py-2.5 bg-white border border-gray-200 rounded-2xl">
      <div className="flex items-start gap-3 p-1">
        <div className="w-6 h-6 md:w-8 md:h-8 lg:w-12 lg:h-12 flex items-center justify-center rounded-lg bg-[#f0f5f0]">
          {product?.image}
        </div>

        <div className="flex flex-col">
          <span className="text-[16px] font-semibold">{product?.nameBn}</span>
          <span className="text-[12px] font-normal">
            প্রতি {unitToBengali(product?.unit) || "কেজি"}
          </span>
        </div>
      </div>

      <div className="flex justify-between items-end px-3">
        <div className="flex flex-col my-0.5">
          <span className="text-[12px] font-normal">আজকের দাম</span>

          <div className="flex items-center gap-1">
            <span className="text-[20px] font-bold">
              {banglaPrice.format(product?.today)}
            </span>
            <span className="text-[14px] font-medium">টাকা</span>
          </div>
        </div>
        <div
          className={`flex items-center gap-1 text-[12px] font-semibold ${product?.change.dir === "up" ? "text-red-700" : "text-green-700"}`}
        >
          <span>
            {product?.change.dir === "up" ? <FaCaretUp /> : <FaCaretDown />}
          </span>
          <span>{banglaPrice.format(product?.change?.pct)}%</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
