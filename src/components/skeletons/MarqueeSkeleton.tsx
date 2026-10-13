import MarqueeText from "react-marquee-text";

const MarqueeSkeleton = () => {
  const skeletonItems = Array.from({ length: 6 });

  return (
    <div className="border border-gray-100 py-2">
      <MarqueeText direction="right" duration={10}>
        {skeletonItems.map((_, index) => (
          <div
            key={index}
            className="flex items-center gap-3 mx-4 animate-pulse"
          >
            <div className="flex gap-1.5 items-center">
              <div className="h-6 w-6 bg-gray-200 rounded" />
              <div className="h-4 w-16 bg-gray-200 rounded" />
              <div className="h-4 w-24 bg-gray-200 rounded" />
            </div>

            <div className="flex items-center gap-1">
              <div className="h-4 w-4 bg-gray-200 rounded" />
              <div className="h-4 w-10 bg-gray-200 rounded" />
            </div>
          </div>
        ))}
      </MarqueeText>
    </div>
  );
};

export default MarqueeSkeleton;
