import { Category, Product } from "@/types/type";

export const baseUrl = `https://api.api-store.workers.dev`;

export const getCategories = async () => {
  try {
    const res = await fetch(`${baseUrl}/api/bazardor/categories`);
    const data: Category[] = await res.json();

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

// https://api.api-store.workers.dev/api/bazardor/products?category=${categoryId}

// export const getCategoryProducts = async () => {
//   try {
//     const res = await fetch(`${baseUrl}/api/bazardor/products?category=${categoryId}`);
//     const data: Product[] = await res.json();
//     return data;
//   } catch (error) {
//     console.log("Error fetching products:", error);
//   }
// };
