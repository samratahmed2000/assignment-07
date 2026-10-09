import Link from "next/link";
import MarqueeText from "react-marquee-text";
import { FaCaretDown, FaCaretUp } from "react-icons/fa6";
import { getProducts } from "@/services/apiData";
import banglaPrice from "@/services/banglPrice";

const Marquee = async () => {
  const marquee = await getProducts();

  

  return (
    <div className="border border-gray-100 py-2">
      <MarqueeText direction="right" duration={10}>
        {marquee?.map((m) => (
          <Link href={`/product/${m?.id}`} key={m?.id}>
            <div className="flex items-center gap-3 mx-4">
              <div className="flex gap-1.5 items-center">
                <span>{m?.image}</span>
                <span>{m?.nameBn}</span>
                <span className="text-gray-600">
                  {banglaPrice.format(m?.today)} টাকা/
                </span>
              </div>

              <div
                className={`flex items-center gap-1 ${m?.change.dir === "up" ? "text-red-700" : "text-green-700"}`}
              >
                <span>
                  {m?.change.dir === "up" ? <FaCaretUp /> : <FaCaretDown />}
                </span>
                <span>{banglaPrice.format(m?.change?.pct)}%</span>
              </div>
            </div>
          </Link>
        ))}
      </MarqueeText>
    </div>
  );
};

export default Marquee;
