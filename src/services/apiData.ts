import { NavLink, Product } from "@/types/type";

const baseUrl = `https://api.api-store.workers.dev`;

export const getNavLinks = async () => {
  try {
    const res = await fetch(`${baseUrl}/api/bazardor/categories`);
    const data: NavLink[] = await res.json();

    return data;
  } catch (error) {
    console.log("Error fetching nav links:", error);
  }
};

export const getProducts = async () => {
  try {
    const res = await fetch(`${baseUrl}/api/bazardor/products`);
    const data: Product[] = await res.json();
    return data;
  } catch (error) {
    console.log("Error fetching products:", error);
  }
};
