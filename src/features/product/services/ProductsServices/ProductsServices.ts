import axios from "axios";

const API_URL = "https://fakestoreapi.in/api/products";

export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
};

// جلب كل المنتجات
export const getProducts = async (): Promise<Product[]> => {
  try {
    const res = await axios.get(API_URL);
    return res.data.products || [];
  } catch (error) {
    console.error("Error fetching products:", error);
    throw new Error("Failed to fetch products");
  }
};
