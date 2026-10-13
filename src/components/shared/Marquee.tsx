import Link from "next/link";
import MarqueeText from "react-marquee-text";
import { FaCaretDown, FaCaretUp } from "react-icons/fa6";
import { getProducts } from "@/helper/apiData";
import { BsDashLg } from "react-icons/bs";
import { formatPrice, getUnitBn } from "@/helper/utils";

const Marquee = async () => {
  const marquee = await getProducts();

  return (
    <div className="border border-gray-100 py-2">
      {marquee && marquee.length > 0 && (
        <MarqueeText direction="right" duration={10}>
          {marquee?.map((marquee) => (
            <Link href={`/product/${marquee?.id}`} key={marquee?.id}>
              <div className="flex items-center gap-3 mx-4">
                <div className="flex gap-1.5 items-center">
                  <span>{marquee?.image}</span>
                  <span>{marquee?.nameBn}</span>
                  <span className="text-gray-600">
                    {formatPrice(marquee?.today)} টাকা/
                    {getUnitBn(marquee?.unit)}
                  </span>
                </div>

                <div
                  className={`flex items-center gap-1 text-[14px] font-semibold ${marquee?.change?.dir === "up" ? "text-red-600" : marquee?.change?.dir === "down" ? "text-green-600" : "text-gray-600"}`}
                >
                  <span>
                    {marquee?.change?.dir === "up" ? (
                      <FaCaretUp />
                    ) : marquee?.change?.dir === "down" ? (
                      <FaCaretDown />
                    ) : (
                      <BsDashLg />
                    )}
                  </span>
                  <span>{Math.abs(marquee?.change?.pct ?? 0).toFixed(2)}%</span>
                </div>
              </div>
            </Link>
          ))}
        </MarqueeText>
      )}
    </div>
  );
};

export default Marquee;
