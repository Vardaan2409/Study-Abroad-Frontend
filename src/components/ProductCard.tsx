"use client";

import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Button,
} from "@mui/material";
import Link from "next/link";

const USD_TO_INR = 83;

const convertToINR = (usd: number) => {
    const inr = Math.round(usd * USD_TO_INR);
    return inr.toLocaleString("en-IN");
};

export default function ProductCard({ product }: { product: any }) {
    return (
        <Card
            sx={{
                height: "100%",
                transition: "0.3s",
                "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: 6,
                },
            }}
        >
            <CardMedia
                component="img"
                image={product.thumbnail}
                alt={product.title}
                sx={{
                    height: 180,
                    objectFit: "contain",
                    backgroundColor: "#f5f5f5",
                    padding: 1,
                }}
            />

            <CardContent>
                <Typography variant="h6" noWrap>
                    {product.title}
                </Typography>

                <Typography>
                    ₹ {convertToINR(product.price)}
                    <span style={{ color: "#777", fontSize: "0.85rem" }}>
                        {" "}(${product.price})
                    </span>
                </Typography>

                <Typography variant="body2">
                    Category: {product.category}
                </Typography>

                <Typography variant="body2">
                    Rating: {product.rating}
                </Typography>

                <Link href={`/dashboard/products/${product.id}`}>
                    <Button size="small">View</Button>
                </Link>
            </CardContent>
        </Card>
    );
}