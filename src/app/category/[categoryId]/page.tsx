import CategoryContent from "../../../components/details/CategoryContent";

interface PageProps {
  params: Promise<{ categoryId: string }>;
  searchParams: Promise<{ sort?: string }>;
}

export default function CategoryPage({ params, searchParams }: PageProps) {
  return (
    <main className="min-h-screen bg-[#f8faf8]">
      <CategoryContent params={params} searchParams={searchParams} />
    </main>
  );
}
