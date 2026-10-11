const CategoryLoading = () => {
  return (
    <main className="min-h-screen bg-[#f8faf8]">
      <section className="max-w-7xl mx-auto w-full my-8 px-4 animate-pulse">
        {/* Breadcrumb Skeleton */}
        <div className="flex items-center gap-2 mb-6">
          <div className="h-4 w-12 bg-gray-200 rounded"></div>
          <div className="h-4 w-4 bg-gray-200 rounded"></div>
          <div className="h-4 w-24 bg-gray-200 rounded"></div>
        </div>

        {/* Category Header Banner Skeleton */}
        <div className="flex flex-col lg:flex-row gap-4 justify-center lg:justify-start items-center bg-white py-6 px-4 rounded-2xl border border-gray-100 shadow-sm mb-6">
          <div className="w-16 h-16 lg:w-12 lg:h-12 bg-gray-200 rounded-full"></div>
          <div className="flex flex-col items-center lg:items-start gap-2 w-full max-w-50">
            <div className="h-5 w-32 bg-gray-200 rounded"></div>
            <div className="h-4 w-48 bg-gray-200 rounded"></div>
          </div>
        </div>

        {/* Filter bar Skeleton */}
        <div className="flex justify-between items-center my-4">
          <div className="h-4 w-40 bg-gray-200 rounded"></div>
          <div className="h-8 w-32 bg-gray-200 rounded-lg"></div>
        </div>

        {/* Product Grid Skeleton (6 items) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-col gap-3 h-80"
            >
              {/* Image box */}
              <div className="w-full h-44 bg-gray-200 rounded-xl"></div>
              {/* Title lines */}
              <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
              <div className="h-4 w-1/2 bg-gray-200 rounded"></div>
              {/* Price & Button area */}
              <div className="flex justify-between items-center mt-auto">
                <div className="h-6 w-20 bg-gray-200 rounded"></div>
                <div className="h-8 w-24 bg-gray-200 rounded-lg"></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default CategoryLoading;
