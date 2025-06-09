import { create } from "zustand";
import type { Product } from "@/schema/product";

interface ProductStore {
  products: Product[];
  cart: Product[];
  addProduct: (product: Product) => void;
  addToCart: (product: Product) => void;
  clearCart: () => void;
}

export const useProductStore = create<ProductStore>((set) => ({
  products: [
    {
      id: "2",
      name: "iPhone 15 Pro",
      description: "Apple's latest iPhone with titanium design.",
      price: 999,
      discount: 0,
      size: "M",
      stock: 15,
      images: [
        "https://d16lwq5o0fvd7.cloudfront.net/images/presets/product_page_normal/catalogue/products/mtux3zda/mtux3zda_1.jpg",
      ],
      category: "Smartphone",
      tags: ["iOS", "5G", "Pro"],
    },
  ],
  cart: [],
  addProduct: (product) =>
    set((state) => ({ products: [...state.products, product] })),
  addToCart: (product) => set((state) => ({ cart: [...state.cart, product] })),
  clearCart: () => set({ cart: [] }),
}));
