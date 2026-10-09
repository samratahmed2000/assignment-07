import baseUrl from "@/services/baseUrl";
import banglaPrice from "@/services/banglaPrice";
import Link from "next/link";
import MarqueeText from "react-marquee-text";
import { FaCaretDown, FaCaretUp } from "react-icons/fa6";

interface MarqueeItem {
  id: string;
  nameBn: string;
  categoryIcon: string;
  today: number;
  change: {
    dir: "up" | "down";
    pct: number;
  };
}

const getMarquee = async () => {
  const res = await fetch(`${baseUrl}/api/bazardor/products`);
  const data: MarqueeItem[] = await res.json();
  return data;
};

const Marquee = async () => {
  const marquee = await getMarquee();
  console.log(marquee);

  return (
    <div className="border border-gray-100 py-2">
      <MarqueeText direction="right" duration={10}>
        {marquee?.map((m) => (
          <Link href={`/product/${m?.id}`} key={m?.id}>
            <div className="flex items-center gap-3 mx-4">
              <div className="flex gap-1.5 items-center">
                <span>{m?.categoryIcon}</span>
                <span>{m?.nameBn}</span>
                <span className="text-gray-600">
                  {banglaPrice.format(m?.today)} টাকা/কেজি
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
