import { create } from "zustand";

interface ProductsState {
    products: any[];
    total: number;
    categories: any[];
    loading: boolean;

    fetchProducts: (limit: number, skip: number) => Promise<void>;
    searchProducts: (query: string) => Promise<void>;
    fetchByCategory: (category: string) => Promise<void>;
    fetchCategories: () => Promise<void>;
}

export const useProductsStore = create<ProductsState>((set) => ({
    products: [],
    total: 0,
    categories: [],
    loading: false,

    // ✅ Pagination-safe product fetch
    fetchProducts: async (limit: number, skip: number) => {
        set({ loading: true });

        // ✅ Cache ONLY first page
        if (skip === 0) {
            const cached = localStorage.getItem("products_page_1");
            if (cached) {
                const parsed = JSON.parse(cached);
                set({
                    products: parsed.products,
                    total: parsed.total,
                    loading: false,
                });
                return;
            }
        }

        const res = await fetch(
            `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
        );
        const data = await res.json();

        set({
            products: data.products, // 🔴 Replace, don’t append
            total: data.total,
            loading: false,
        });

        // ✅ Save page 1 only
        if (skip === 0) {
            localStorage.setItem(
                "products_page_1",
                JSON.stringify({
                    products: data.products,
                    total: data.total,
                })
            );
        }
    },

    // 🔍 Search (pagination intentionally reset)
    searchProducts: async (query: string) => {
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

    // 🗂 Category filter (pagination reset)
    fetchByCategory: async (category: string) => {
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

    // 📦 Categories cached once
    fetchCategories: async () => {
        const cached = localStorage.getItem("categories");
        if (cached) {
            set({ categories: JSON.parse(cached) });
            return;
        }

        const res = await fetch(
            "https://dummyjson.com/products/categories"
        );
        const data = await res.json();

        set({ categories: data });
        localStorage.setItem("categories", JSON.stringify(data));
    },
}));
