"use client";

import { useEffect, useState, useCallback } from "react";
import {
    Pagination,
    Stack,
    Typography,
    Select,
    MenuItem,
    Box,
} from "@mui/material";
import { useProductsStore } from "@/store/productsStore";
import ProductCard from "@/components/ProductCard";
import SearchBar from "@/components/SearchBar";

export default function ProductsPage() {
    const {
        products,
        total,
        fetchProducts,
        searchProducts,
        fetchByCategory,
        fetchCategories,
        categories,
    } = useProductsStore();

    const [page, setPage] = useState(1);
    const [category, setCategory] = useState("");
    const [searchQuery, setSearchQuery] = useState("");

    const limit = 10;

    /* ---------------- Pagination handler ---------------- */
    const handlePageChange = useCallback(
        (_: any, value: number) => setPage(value),
        []
    );

    /* ---------------- Fetch products (pagination only) ---------------- */
    useEffect(() => {
        if (!searchQuery && !category) {
            fetchProducts(limit, (page - 1) * limit);
        }
    }, [page, searchQuery, category, fetchProducts]);

    /* ---------------- Fetch categories once ---------------- */
    useEffect(() => {
        fetchCategories();
    }, [fetchCategories]);

    /* ---------------- Search handler ---------------- */
    const handleSearch = useCallback(
        async (query: string) => {
            setSearchQuery(query);
            setPage(1);

            if (query.trim()) {
                await searchProducts(query);
            } else {
                fetchProducts(limit, 0);
            }
        },
        [searchProducts, fetchProducts]
    );

    /* ---------------- Category handler ---------------- */
    const handleCategoryChange = useCallback(
        async (value: string) => {
            setCategory(value);
            setPage(1);
            setSearchQuery("");

            if (value) {
                await fetchByCategory(value);
            } else {
                fetchProducts(limit, 0);
            }
        },
        [fetchByCategory, fetchProducts]
    );

    return (
        <Stack spacing={3} sx={{ width: "100%" }}>
            {/* Title */}
            <Box>
                <Typography variant="h4" fontWeight={600}>
                    Products
                </Typography>
                <Typography color="text.secondary">
                    Browse and manage products
                </Typography>
            </Box>

            {/* 🔍 Search (REUSED COMPONENT) */}
            <SearchBar
                placeholder="Search products..."
                onSearch={handleSearch}
            />

            {/* 🗂 Category Filter */}
            <Select
                value={category}
                displayEmpty
                onChange={(e) => handleCategoryChange(e.target.value as string)}
            >
                <MenuItem value="">All Categories</MenuItem>
                {categories.map((cat: any) => (
                    <MenuItem key={cat.slug} value={cat.slug}>
                        {cat.name}
                    </MenuItem>
                ))}
            </Select>

            {/* 🛍 Products Grid */}
            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: {
                        xs: "1fr",
                        sm: "repeat(2, 1fr)",
                        md: "repeat(3, 1fr)",
                    },
                    gap: 2,
                }}
            >
                {products.map((product: any) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </Box>

            {/* 📄 Pagination (disabled during search / category filter) */}
            {!searchQuery && !category && (
                <Box display="flex" justifyContent="center" mt={2}>
                    <Pagination
                        count={Math.ceil(total / limit)}
                        page={page}
                        onChange={handlePageChange}
                    />
                </Box>
            )}
        </Stack>
    );
}
