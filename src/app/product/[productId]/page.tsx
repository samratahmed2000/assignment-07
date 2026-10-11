import ProductDetailsContent from "../../../components/details/ProductDetailsContent";

interface PageProps {
  params: Promise<{ productId: string }>;
}

export default function ProductDetailPage({ params }: PageProps) {
  return (
    <main className="min-h-screen bg-[#f8faf8]">
      <ProductDetailsContent params={params} />
    </main>
  );
}
