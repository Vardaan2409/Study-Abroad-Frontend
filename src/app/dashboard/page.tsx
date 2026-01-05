"use client";

import { Card, CardContent, Stack, Typography, Box } from "@mui/material";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
    const router = useRouter();

    return (
        <Box
            sx={{
                width: "100%",
                maxWidth: 900,
                mx: "auto",
            }}
        >
            <Stack spacing={4}>
                <Typography variant="h4" fontWeight={600}>
                    Dashboard Overview
                </Typography>

                <Stack
                    direction={{ xs: "column", md: "row" }}
                    spacing={3}
                >
                    <Card
                        sx={{
                            flex: 1,
                            cursor: "pointer",
                            transition: "0.3s",
                            "&:hover": {
                                transform: "translateY(-4px)",
                                boxShadow: 6,
                            },
                        }}
                        onClick={() => router.push("/dashboard/users")}
                    >
                        <CardContent>
                            <Typography variant="h6">Users</Typography>
                            <Typography color="text.secondary">
                                View and manage users
                            </Typography>
                        </CardContent>
                    </Card>

                    <Card
                        sx={{
                            flex: 1,
                            cursor: "pointer",
                            transition: "0.3s",
                            "&:hover": {
                                transform: "translateY(-4px)",
                                boxShadow: 6,
                            },
                        }}
                        onClick={() => router.push("/dashboard/products")}
                    >
                        <CardContent>
                            <Typography variant="h6">Products</Typography>
                            <Typography color="text.secondary">
                                Browse and manage products
                            </Typography>
                        </CardContent>
                    </Card>
                </Stack>
            </Stack>
        </Box>
    );
}
