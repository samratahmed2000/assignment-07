import { contextApi } from "@/context/ContextApi";
import { useContext } from "react";

export const useUserInfo = () => {
  const contextValue = useContext(contextApi);

  if (!contextValue) {
    throw new Error("Something Went Wrong");
  }

  const { products, setProducts, category, setCategory, sortBy, setSortBy } =
    contextValue;

  return {
    products,
    setProducts,
    category,
    setCategory,
    sortBy,
    setSortBy,
  };
};
