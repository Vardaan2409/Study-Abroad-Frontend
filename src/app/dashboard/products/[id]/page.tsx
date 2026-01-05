// "use client";

// import { useEffect, useState } from "react";
// import {
//     Box,
//     Typography,
//     Divider,
//     Button,
//     Card,
//     CircularProgress,
// } from "@mui/material";
// import { useParams, useRouter } from "next/navigation";

// export default function ProductDetailPage() {
//     const { id } = useParams();
//     const router = useRouter();

//     const [product, setProduct] = useState<any>(null);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         if (!id) return;

//         const fetchProduct = async () => {
//             try {
//                 const res = await fetch(
//                     `https://dummyjson.com/products/${id}`
//                 );
//                 const data = await res.json();
//                 setProduct(data);
//             } catch (error) {
//                 console.error("Failed to fetch product", error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchProduct();
//     }, [id]);

//     // ⏳ Loading state
//     if (loading) {
//         return (
//             <Box
//                 sx={{
//                     minHeight: "calc(100vh - 160px)",
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                 }}
//             >
//                 <CircularProgress />
//             </Box>
//         );
//     }

//     // ❌ Safety check
//     if (!product) {
//         return (
//             <Typography color="error">
//                 Product not found
//             </Typography>
//         );
//     }

//     return (
//         <Box
//             sx={{
//                 minHeight: "calc(100vh - 160px)",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//             }}
//         >
//             <Card
//                 sx={{
//                     maxWidth: 900,
//                     width: "100%",
//                     p: 4,
//                     boxShadow: 4,
//                 }}
//             >
//                 <Button
//                     variant="outlined"
//                     sx={{ mb: 2 }}
//                     onClick={() => router.push("/dashboard/products")}
//                 >
//                     ← Back to Products
//                 </Button>

//                 <Box sx={{ display: "flex", gap: 4 }}>
//                     {/* Product Image */}
//                     <Box
//                         component="img"
//                         src={product.thumbnail}
//                         alt={product.title}
//                         sx={{
//                             width: 300,
//                             height: 300,
//                             objectFit: "contain",
//                             backgroundColor: "#f5f5f5",
//                             borderRadius: 2,
//                         }}
//                     />

//                     {/* Product Info */}
//                     <Box>
//                         <Typography variant="h4" gutterBottom>
//                             {product.title}
//                         </Typography>

//                         <Typography sx={{ mb: 2 }}>
//                             {product.description}
//                         </Typography>

//                         <Divider sx={{ my: 2 }} />

//                         <Typography>
//                             <strong>Price:</strong> ₹{" "}
//                             {(product.price * 83).toLocaleString("en-IN")}
//                         </Typography>

//                         <Typography>
//                             <strong>Category:</strong> {product.category}
//                         </Typography>

//                         <Typography>
//                             <strong>Rating:</strong> {product.rating}
//                         </Typography>
//                     </Box>
//                 </Box>
//             </Card>
//         </Box>
//     );
// }


"use client";

import { useEffect, useState } from "react";
import {
    Box,
    Typography,
    Divider,
    Button,
    Card,
    CircularProgress,
} from "@mui/material";
import { useParams, useRouter } from "next/navigation";

export default function ProductDetailPage() {
    const params = useParams();
    const router = useRouter();
    const id = params?.id as string;

    const [product, setProduct] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!id) return;

        const fetchProduct = async () => {
            try {
                const res = await fetch(`https://dummyjson.com/products/${id}`);
                const data = await res.json();
                setProduct(data);
            } catch (err) {
                console.error("Failed to fetch product", err);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    /* ---------------- Loading ---------------- */
    if (loading) {
        return (
            <Box
                sx={{
                    minHeight: "calc(100vh - 160px)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <CircularProgress />
            </Box>
        );
    }

    /* ---------------- Error ---------------- */
    if (!product) {
        return (
            <Typography color="error" sx={{ textAlign: "center", mt: 4 }}>
                Product not found
            </Typography>
        );
    }

    /* ---------------- UI ---------------- */
    return (
        <Box
            sx={{
                minHeight: "calc(100vh - 160px)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                px: 2,
            }}
        >
            <Card
                sx={{
                    maxWidth: 900,
                    width: "100%",
                    p: { xs: 2, sm: 3, md: 4 },
                    borderRadius: 3,
                    boxShadow: 4,
                }}
            >
                {/* Back Button */}
                <Button
                    variant="outlined"
                    sx={{ mb: 3 }}
                    onClick={() => router.push("/dashboard/products")}
                >
                    ← Back to Products
                </Button>

                {/* Responsive Layout */}
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                        gap: 4,
                        alignItems: { xs: "center", md: "flex-start" },
                    }}
                >
                    {/* Image */}
                    <Box
                        sx={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <Box
                            component="img"
                            src={product.thumbnail}
                            alt={product.title}
                            sx={{
                                width: { xs: "100%", sm: 280, md: 300 },
                                maxWidth: 300,
                                height: "auto",
                                objectFit: "contain",
                                backgroundColor: "#f5f5f5",
                                borderRadius: 2,
                                p: 2,
                            }}
                        />
                    </Box>

                    {/* Details */}
                    <Box sx={{ width: "100%" }}>
                        <Typography
                            variant="h4"
                            gutterBottom
                            sx={{ fontSize: { xs: "1.6rem", md: "2rem" } }}
                        >
                            {product.title}
                        </Typography>

                        <Typography sx={{ mb: 2 }}>
                            {product.description}
                        </Typography>

                        <Divider sx={{ my: 2 }} />

                        <Typography sx={{ mb: 1 }}>
                            <strong>Price:</strong>{" "}
                            ₹ {(product.price * 83).toLocaleString("en-IN")}
                        </Typography>

                        <Typography sx={{ mb: 1 }}>
                            <strong>Category:</strong> {product.category}
                        </Typography>

                        <Typography>
                            <strong>Rating:</strong> {product.rating}
                        </Typography>
                    </Box>
                </Box>
            </Card>
        </Box>
    );
}
