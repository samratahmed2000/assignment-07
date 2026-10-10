import { Category, Product } from "@/types/type";

export const baseUrl = `https://api.api-store.workers.dev`;

export const getCategories = async () => {
  try {
    const res = await fetch(`${baseUrl}/api/bazardor/categories`, {
      next: {
        revalidate: 60,
      },
    });
    const data: Category[] = await res.json();

    return data;
  } catch (error) {
    console.log("Error fetching nav links:", error);
  }
};

export const getProducts = async () => {
  try {
    const res = await fetch(`${baseUrl}/api/bazardor/products`, {
      next: {
        revalidate: 60,
      },
    });
    const data: Product[] = await res.json();
    return data;
  } catch (error) {
    console.log("Error fetching products:", error);
  }
};
