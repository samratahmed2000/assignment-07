import Link from "next/link";

const NotFound = () => {
  return (
    <main className="min-h-screen bg-[#f8faf8] flex flex-col items-center justify-center px-4 text-center">
      <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm max-w-md w-full flex flex-col items-center">
        <span className="text-6xl mb-4">🔍</span>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          পৃষ্ঠাটি পাওয়া যায়নি
        </h2>
        <p className="text-gray-500 text-sm mb-6">
          দুঃখিত, আপনি যে লিংকটি খুঁজছেন তা সঠিক নয় অথবা পৃষ্ঠাটি ইতিমধ্যে মুছে
          ফেলা হয়েছে।
        </p>
        <Link
          href="/"
          className="bg-green-600 hover:bg-green-700 text-white font-medium text-sm py-2.5 px-6 rounded-xl transition-colors shadow-sm"
        >
          হোম পেজে ফিরে যান
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
