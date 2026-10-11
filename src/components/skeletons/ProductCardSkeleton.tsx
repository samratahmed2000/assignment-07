const ProductSkeleton = () => {
  return (
    <div className="flex flex-col justify-center items-center lg:items-start lg:justify-between gap-3 px-3 py-3 bg-white border border-gray-200 rounded-2xl animate-pulse">
      {/* Top Section: Image & Title */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-3 p-1 w-full">
        {/* Product Image Skeleton */}
        <div className="w-20 h-20 lg:w-12 lg:h-12 bg-gray-200 rounded-lg"></div>

        {/* Product Name & Unit Skeleton */}
        <div className="flex flex-col items-center lg:items-start gap-2 w-full max-w-37.5">
          <div className="h-6 w-3/4 bg-gray-200 rounded lg:h-4"></div>
          <div className="h-4 w-1/2 bg-gray-200 rounded lg:h-3"></div>
        </div>
      </div>

      {/* Bottom Section: Price & Change Status */}
      <div className="flex flex-col lg:flex-row justify-between items-center px-1 w-full gap-2">
        {/* Price Skeleton */}
        <div className="flex flex-col items-center lg:items-start gap-1 my-0.5 w-1/2">
          <div className="h-3 w-16 bg-gray-200 rounded"></div>
          <div className="h-6 w-24 bg-gray-200 rounded"></div>
        </div>

        {/* Percentage Change Badge Skeleton */}
        <div className="h-8 w-20 bg-gray-200 rounded-2xl lg:h-6 lg:w-16"></div>
      </div>
    </div>
  );
};

export default ProductSkeleton;
