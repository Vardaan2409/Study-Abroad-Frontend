"use client";

import { useEffect, useState } from "react";
import {
    TextField,
    Pagination,
    Stack,
    Typography,
    Button,
    Select,
    MenuItem,
    Box,
} from "@mui/material";
import { useProductsStore } from "@/store/productsStore";
import ProductCard from "@/components/ProductCard";
import { useRouter } from "next/navigation";

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
    const limit = 9; // perfect for 3-column grid
    const router = useRouter();

    useEffect(() => {
        fetchProducts(limit, (page - 1) * limit);
        fetchCategories();
    }, [page]);

    return (
        <Box
            sx={{
                minHeight: "calc(100vh - 160px)",
                display: "flex",
                flexDirection: "column",
            }}
        >
            {/* Top Section */}
            <Stack spacing={3}>
                {/* Back Button */}
                {/* <Button
                    variant="outlined"
                    onClick={() => router.push("/dashboard")}
                    sx={{ alignSelf: "flex-start" }}
                >
                    ← Back to Dashboard
                </Button> */}

                {/* Heading */}
                <Typography variant="h4" sx={{ fontWeight: 600, color: "#000" }}>
                    Products
                </Typography>

                <Typography color="text.secondary">
                    Browse and manage product listings
                </Typography>

                {/* Search */}
                <TextField
                    label="Search products"
                    onChange={(e) => {
                        setPage(1);
                        searchProducts(e.target.value);
                    }}
                />

                {/* Category Filter */}
                <Select
                    value={category}
                    displayEmpty
                    onChange={(e) => {
                        const value = e.target.value as string;
                        setCategory(value);
                        setPage(1);

                        if (value) {
                            fetchByCategory(value);
                        } else {
                            fetchProducts(limit, 0);
                        }
                    }}
                >
                    <MenuItem value="">All Categories</MenuItem>
                    {categories.map((cat) => (
                        <MenuItem key={cat.slug} value={cat.slug}>
                            {cat.name}
                        </MenuItem>
                    ))}
                </Select>

                {/* Products Grid (NO ProductGrid component) */}
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: {
                            xs: "1fr",
                            sm: "repeat(2, 1fr)",
                            md: "repeat(3, 1fr)",
                        },
                        gap: 3,
                    }}
                >
                    {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    ))}
                </Box>
            </Stack>

            {/* Pagination at Bottom Center */}
            <Box
                sx={{
                    mt: "auto",
                    display: "flex",
                    justifyContent: "center",
                    py: 3,
                }}
            >
                <Pagination
                    count={Math.ceil(total / limit)}
                    page={page}
                    onChange={(_, value) => setPage(value)}
                    color="primary"
                />
            </Box>
        </Box>
    );
}
