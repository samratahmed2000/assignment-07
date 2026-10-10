"use client";

const BrowseProduct = () => {
  const scrollToProducts = () => {
    const element = document.getElementById("products");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <button
      onClick={() => scrollToProducts()}
      className="btn btn-success bg-green-700 text-white"
    >
      সব পণ্য দেখুন
    </button>
  );
};

export default BrowseProduct;
