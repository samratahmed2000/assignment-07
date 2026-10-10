import Hero from "@/components/homepage/Hero";
import PriceUp from "@/components/homepage/PriceUp";
import PriceDown from "@/components/homepage/PriceDown";
import AllProducts from "@/components/homepage/AllProducts";
import { Suspense } from "react";

const Homepage = () => {
  return (
    <main id="top">
      <Hero />
      <Suspense fallback={<div>Loading...</div>}>
        <PriceUp />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <PriceDown />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <AllProducts />
      </Suspense>
    </main>
  );
};

export default Homepage;
