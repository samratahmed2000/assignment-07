import date from "@/helper/dateToBangla";
import hero from "@/assets/hero.png";
import Image from "next/image";
import BrowseProduct from "../button/BrowseProduct";

const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-start p-4 my-8 max-w-7xl mx-8 md:mx-6 lg:mx-auto bg-white border border-gray-200 rounded-2xl">
      <div className="flex flex-col gap-4 px-2 py-1 items-center lg:items-start text-center lg:text-left">
        <div className="text-center bg-green-100 rounded-2xl py-0.5 px-3">
          <span className="text-[14px] font-medium text-[#008744]">{date}</span>
        </div>

        <div>
          <h1 className="text-[36px] font-bold">আজকের বাজারের দাম এক নজরে</h1>
          <p className="text-[16px] font-normal text-[#999e9a] my-4">
            চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
            বিস্তারিত, গড়, সর্বনিম্ন- <br /> সর্বাধিক এবং দামের পরিবর্তন এক
            জায়গায়।
          </p>
        </div>

        <BrowseProduct />
      </div>

      <div>
        <Image
          src={hero}
          alt="Hero"
          width={800}
          height={800}
          className="h-auto w-auto"
        />
      </div>
    </section>
  );
};

export default Hero;
