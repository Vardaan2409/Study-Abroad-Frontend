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

export default function UserDetailPage() {
    const { id } = useParams();
    const router = useRouter();

    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!id) return;

        const fetchUser = async () => {
            try {
                const res = await fetch(
                    `https://dummyjson.com/users/${id}`
                );
                const data = await res.json();
                setUser(data);
            } catch (error) {
                console.error("Failed to fetch user", error);
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, [id]);

    // ⏳ Loader
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

    // ❌ Safety check
    if (!user) {
        return (
            <Typography color="error">
                User not found
            </Typography>
        );
    }

    return (
        <Box
            sx={{
                minHeight: "calc(100vh - 160px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Card
                sx={{
                    maxWidth: 700,
                    width: "100%",
                    p: 4,
                    boxShadow: 4,
                }}
            >
                {/* Back Button */}
                <Button
                    variant="outlined"
                    sx={{ mb: 2 }}
                    onClick={() => router.push("/dashboard/users")}
                >
                    ← Back to Users
                </Button>

                {/* User Name */}
                <Typography
                    variant="h4"
                    sx={{ fontWeight: 600, color: "#000" }}
                    gutterBottom
                >
                    {user.firstName} {user.lastName}
                </Typography>

                <Divider sx={{ my: 2 }} />

                {/* User Details */}
                <Typography sx={{ mb: 1, color: "#000" }}>
                    <strong>Email:</strong> {user.email}
                </Typography>

                <Typography sx={{ mb: 1, color: "#000" }}>
                    <strong>Phone:</strong> {user.phone}
                </Typography>

                <Typography sx={{ mb: 1, color: "#000" }}>
                    <strong>Gender:</strong> {user.gender}
                </Typography>

                <Typography sx={{ color: "#000" }}>
                    <strong>Company:</strong>{" "}
                    {user.company?.name}
                </Typography>
            </Card>
        </Box>
    );
}
