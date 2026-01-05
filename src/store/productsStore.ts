// import { create } from "zustand";

// export type Category = {
//     slug: string;
//     name: string;
//     url: string;
// };

// export type Product = {
//     id: number;
//     title: string;
//     price: number;
//     category: string;
//     rating: number;
//     thumbnail: string;
//     description: string;
// };

// type ProductsState = {
//     products: Product[];
//     total: number;
//     loading: boolean;
//     categories: Category[];

//     fetchProducts: (limit: number, skip: number) => Promise<void>;
//     searchProducts: (query: string) => Promise<void>;
//     fetchByCategory: (category: string) => Promise<void>;
//     fetchCategories: () => Promise<void>;
// };

// export const useProductsStore = create<ProductsState>((set) => ({
//     products: [],
//     total: 0,
//     loading: false,
//     categories: [],

//     fetchProducts: async (limit, skip) => {
//         set({ loading: true });

//         const res = await fetch(
//             `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
//         );
//         const data = await res.json();

//         set({
//             products: data.products,
//             total: data.total,
//             loading: false,
//         });
//     },

//     searchProducts: async (query) => {
//         if (!query) return;

//         set({ loading: true });

//         const res = await fetch(
//             `https://dummyjson.com/products/search?q=${query}`
//         );
//         const data = await res.json();

//         set({
//             products: data.products,
//             total: data.total,
//             loading: false,
//         });
//     },

//     fetchByCategory: async (category) => {
//         set({ loading: true });

//         const res = await fetch(
//             `https://dummyjson.com/products/category/${category}`
//         );
//         const data = await res.json();

//         set({
//             products: data.products,
//             total: data.total,
//             loading: false,
//         });
//     },

//     fetchCategories: async () => {
//         const res = await fetch("https://dummyjson.com/products/categories");
//         const data = await res.json();

//         set({ categories: data });
//     },
// }));

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

export const useProductsStore = create<ProductsState>((set, get) => ({
    products: [],
    total: 0,
    categories: [],
    loading: false,

    // ✅ Fetch products with in-memory + localStorage caching
    fetchProducts: async (limit: number, skip: number) => {
        // 🔹 1️⃣ In-memory cache
        if (get().products.length > 0 && skip === 0) return;

        // 🔹 2️⃣ localStorage cache
        const cached = localStorage.getItem("products");
        if (cached && skip === 0) {
            set({ products: JSON.parse(cached) });
            return;
        }

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

        // 🔹 Save to localStorage
        if (skip === 0) {
            localStorage.setItem("products", JSON.stringify(data.products));
        }
    },

    // 🔍 Search products
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

    // 🗂 Category filter
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

    // 📦 Fetch categories once (cached)
    fetchCategories: async () => {
        if (get().categories.length > 0) return;

        const res = await fetch(
            "https://dummyjson.com/products/categories"
        );
        const data = await res.json();

        set({ categories: data });
    },
}));


// // src/store/productsStore.ts
// import { create } from "zustand";
// import api from "@/lib/axios";

// interface Product {
//     id: number;
//     title: string;
//     description: string;
//     price: number;
//     rating: number;
//     category: string;
//     thumbnail: string;
// }

// interface ProductsState {
//     products: Product[];
//     total: number;
//     categories: { slug: string; name: string }[];
//     selectedProduct: Product | null;

//     fetchProducts: (limit: number, skip: number) => Promise<void>;
//     searchProducts: (query: string) => Promise<void>;
//     fetchCategories: () => Promise<void>;
//     fetchByCategory: (category: string) => Promise<void>;
//     fetchProductById: (id: number) => Promise<void>;
// }

// export const useProductsStore = create<ProductsState>((set) => ({
//     products: [],
//     total: 0,
//     categories: [],
//     selectedProduct: null,

//     fetchProducts: async (limit, skip) => {
//         const res = await api.get(`/products?limit=${limit}&skip=${skip}`);
//         set({ products: res.data.products, total: res.data.total });
//     },

//     searchProducts: async (query) => {
//         if (!query) return;
//         const res = await api.get(`/products/search?q=${query}`);
//         set({ products: res.data.products, total: res.data.total });
//     },

//     fetchCategories: async () => {
//         const res = await api.get("/products/categories");
//         set({
//             categories: res.data.map((c: string) => ({
//                 slug: c,
//                 name: c,
//             })),
//         });
//     },

//     fetchByCategory: async (category) => {
//         const res = await api.get(`/products/category/${category}`);
//         set({ products: res.data.products, total: res.data.total });
//     },

//     fetchProductById: async (id) => {
//         const res = await api.get(`/products/${id}`);
//         set({ selectedProduct: res.data });
//     },
// }));




// import { create } from "zustand";
// import axios from "@/lib/axios";

// type ProductsStore = {
//     products: any[];
//     total: number;
//     categories: any[];
//     selectedProduct: any | null;

//     fetchProducts: (limit: number, skip: number) => Promise<void>;
//     fetchByCategory: (category: string) => Promise<void>;
//     fetchCategories: () => Promise<void>;
//     searchProducts: (query: string) => Promise<void>;
//     fetchProductById: (id: number) => Promise<void>;
// };

// export const useProductsStore = create<ProductsStore>((set) => ({
//     products: [],
//     total: 0,
//     categories: [],
//     selectedProduct: null,

//     fetchProducts: async (limit, skip) => {
//         const res = await axios.get(`/products?limit=${limit}&skip=${skip}`);
//         set({
//             products: res.data.products,
//             total: res.data.total,
//         });
//     },

//     fetchByCategory: async (category) => {
//         const res = await axios.get(`/products/category/${category}`);
//         set({
//             products: res.data.products,
//             total: res.data.products.length,
//         });
//     },

//     fetchCategories: async () => {
//         const res = await axios.get("/products/categories");
//         set({ categories: res.data });
//     },

//     searchProducts: async (query) => {
//         if (!query) return;
//         const res = await axios.get(`/products/search?q=${query}`);
//         set({
//             products: res.data.products,
//             total: res.data.total,
//         });
//     },

//     // ✅ THIS FIXES YOUR ERROR
//     fetchProductById: async (id) => {
//         const res = await axios.get(`/products/${id}`);
//         set({ selectedProduct: res.data });
//     },
// }));
