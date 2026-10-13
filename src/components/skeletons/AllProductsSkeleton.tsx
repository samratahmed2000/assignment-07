const AllProductsSkeleton = () => {
  const skeletonCards = Array.from({ length: 6 });

  return (
    <section className="max-w-7xl mx-auto py-4 animate-pulse">
      <div className="flex flex-col justify-between gap-2 mx-6 lg:mx-auto">
        <div className="h-6 w-24 bg-gray-200 rounded" />
        <div className="h-4 w-40 bg-gray-200 rounded" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 items-center mt-2 mx-6 lg:mx-auto">
        {skeletonCards.map((_, index) => (
          <div
            key={index}
            className="border border-gray-100 rounded-lg p-4 flex flex-col gap-3 h-80 bg-white w-full"
          >
            <div className="w-full h-40 bg-gray-200 rounded-md" />

            <div className="flex flex-col gap-2 mt-2">
              <div className="h-4 w-3/4 bg-gray-200 rounded" />

              <div className="h-4 w-1/2 bg-gray-200 rounded" />
            </div>

            <div className="flex justify-between items-center mt-auto">
              <div className="h-5 w-20 bg-gray-200 rounded" />
              <div className="h-8 w-24 bg-gray-200 rounded-md" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllProductsSkeleton;
