import { FaCaretUp } from "react-icons/fa";

const PriceDownSkeleton = () => {
  const skeletonCards = Array.from({ length: 6 });

  return (
    <section className="max-w-7xl mx-auto py-2 animate-pulse">
      <div className="flex items-center gap-1 mx-6 lg:mx-auto">
        <span className="text-gray-300">
          <FaCaretUp />
        </span>
        <div className="h-6 w-32 bg-gray-200 rounded-md"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 items-center mt-2 mx-6 lg:mx-auto">
        {skeletonCards.map((_, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg p-4 bg-white space-y-3"
          >
            <div className="h-40 bg-gray-200 rounded-md w-full"></div>

            <div className="h-4 bg-gray-200 rounded w-3/4"></div>

            <div className="flex justify-between items-center pt-2">
              <div className="h-4 bg-gray-200 rounded w-1/4"></div>
              <div className="h-6 bg-gray-200 rounded-full w-16"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PriceDownSkeleton;
