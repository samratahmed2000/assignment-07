import CategoryContent from "../../../components/details/CategoryContent";

interface PageProps {
  params: Promise<{ categoryId: string }>;
}

export default function CategoryPage({ params }: PageProps) {
  return (
    <main className="min-h-screen bg-[#f8faf8]">
      <CategoryContent params={params} />
    </main>
  );
}
