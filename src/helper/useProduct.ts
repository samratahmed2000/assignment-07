import { contextApi } from "@/context/ContextApi";
import { useContext } from "react";

export const useUserInfo = () => {
  const contextValue = useContext(contextApi);

  if (!contextValue) {
    throw new Error("Something Went Wrong");
  }

  const { products, setProducts, category, setCategory, sortBy, setSortBy } =
    contextValue;

  const sortedProducts = [...products].sort((a, b) => {
    if (sortBy === "price-asc") return a.today - b.today;
    if (sortBy === "price-desc") return b.today - a.today;
    return 0; // default — API order
  });

  return {
    products,
    setProducts,
    category,
    setCategory,
    sortBy,
    setSortBy,
  };
};
