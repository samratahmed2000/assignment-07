import { Suspense } from "react";
import ProductDetailsContent from "../../../components/details/ProductDetailsContent";

interface PageProps {
  params: Promise<{ productId: string }>;
}

export default function ProductDetailPage({ params }: PageProps) {
  return (
    <main className="min-h-screen bg-[#f8faf8]">
      <Suspense
        fallback={
          <div className="text-center py-20 font-medium text-gray-500 animate-pulse"></div>
        }
      >
        <ProductDetailsContent params={params} />
      </Suspense>
    </main>
  );
}
