import { create } from "zustand";

export type Category = {
    slug: string;
    name: string;
    url: string;
};

export type Product = {
    id: number;
    title: string;
    price: number;
    category: string;
    rating: number;
    thumbnail: string;
    description: string;
};

type ProductsState = {
    products: Product[];
    total: number;
    loading: boolean;
    categories: Category[];

    fetchProducts: (limit: number, skip: number) => Promise<void>;
    searchProducts: (query: string) => Promise<void>;
    fetchByCategory: (category: string) => Promise<void>;
    fetchCategories: () => Promise<void>;
};

export const useProductsStore = create<ProductsState>((set) => ({
    products: [],
    total: 0,
    loading: false,
    categories: [],

    fetchProducts: async (limit, skip) => {
        set({ loading: true });

        const res = await fetch(
            `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
        );
        const data = await res.json();

        set({
            products: data.products,
            total: data.total,
            loading: false,
        });
    },

    searchProducts: async (query) => {
        if (!query) return;

        set({ loading: true });

        const res = await fetch(
            `https://dummyjson.com/products/search?q=${query}`
        );
        const data = await res.json();

        set({
            products: data.products,
            total: data.total,
            loading: false,
        });
    },

    fetchByCategory: async (category) => {
        set({ loading: true });

        const res = await fetch(
            `https://dummyjson.com/products/category/${category}`
        );
        const data = await res.json();

        set({
            products: data.products,
            total: data.total,
            loading: false,
        });
    },

    fetchCategories: async () => {
        const res = await fetch("https://dummyjson.com/products/categories");
        const data = await res.json();

        set({ categories: data });
    },
}));
