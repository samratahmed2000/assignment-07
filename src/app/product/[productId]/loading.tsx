const ProductDetailLoading = () => {
  return (
    <main className="min-h-screen bg-[#f8faf8]">
      <section className="max-w-7xl mx-auto w-full my-8 px-4 animate-pulse">
        {/* Breadcrumb Skeleton */}
        <div className="flex items-center gap-2 mb-6">
          <div className="h-4 w-12 bg-gray-200 rounded"></div>
          <div className="h-4 w-4 bg-gray-200 rounded"></div>
          <div className="h-4 w-24 bg-gray-200 rounded"></div>
          <div className="h-4 w-4 bg-gray-200 rounded"></div>
          <div className="h-4 w-32 bg-gray-200 rounded"></div>
        </div>

        {/* Main Product Card Skeleton */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Left Side: Product Info */}
          <div className="flex flex-col lg:flex-row gap-4 items-center w-full md:w-auto">
            <div className="w-36 h-36 lg:w-20 lg:h-20 bg-gray-200 rounded-xl"></div>
            <div className="flex flex-col items-center lg:items-start gap-2.5 w-full max-w-62.5">
              <div className="h-7 w-40 bg-gray-200 rounded"></div>
              <div className="h-4 w-32 bg-gray-200 rounded"></div>
              <div className="h-4 w-52 bg-gray-200 rounded"></div>
            </div>
          </div>
          {/* Right Side: Price Status */}
          <div className="bg-[#f9fafb] border border-gray-100 rounded-2xl p-4 flex flex-col items-center w-48 shadow-sm">
            <div className="h-3 w-16 bg-gray-200 rounded mb-2"></div>
            <div className="h-8 w-24 bg-gray-200 rounded mb-2"></div>
            <div className="h-3 w-20 bg-gray-200 rounded mb-3"></div>
            <div className="h-4 w-14 bg-gray-200 rounded"></div>
          </div>
        </div>

        {/* Market Price Overview Cards Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6 w-full">
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className="flex flex-col items-center md:items-start border border-gray-100 bg-white p-6 rounded-2xl shadow-sm gap-2"
            >
              <div className="h-4 w-24 bg-gray-200 rounded"></div>
              <div className="h-9 w-32 bg-gray-200 rounded mt-1"></div>
              <div className="h-3 w-36 bg-gray-200 rounded mt-1"></div>
            </div>
          ))}
        </div>

        {/* Market Price Table Skeleton */}
        <div className="bg-white rounded-2xl border border-gray-200 p-4 lg:p-6 shadow-sm">
          <div className="h-5 w-48 bg-gray-200 rounded mb-6"></div>
          <div className="space-y-4">
            {/* Table Header Wrapper */}
            <div className="h-10 bg-gray-100 rounded-xl w-full"></div>
            {/* Table Rows */}
            {[...Array(4)].map((_, index) => (
              <div key={index} className="h-8 bg-gray-50 rounded w-full"></div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductDetailLoading;
