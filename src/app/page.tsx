import Hero from "@/components/homepage/Hero";
import PriceUp from "@/components/homepage/PriceUp";
import PriceDown from "@/components/homepage/PriceDown";
import AllProducts from "@/components/homepage/AllProducts";
import { Suspense } from "react";
import PriceUpSkeleton from "@/components/skeletons/PriceUpSkeleton";
import PriceDownSkeleton from "@/components/skeletons/PriceDownSkeleton";
import AllProductsSkeleton from "@/components/skeletons/AllProductsSkeleton";

const Homepage = () => {
  return (
    <main>
      <Hero />
      <Suspense fallback={<PriceUpSkeleton />}>
        <PriceUp />
      </Suspense>
      <Suspense fallback={<PriceDownSkeleton />}>
        <PriceDown />
      </Suspense>
      <Suspense fallback={<AllProductsSkeleton />}>
        <AllProducts />
      </Suspense>
    </main>
  );
};

export default Homepage;
