"use client";

import { useEffect, useState, useCallback } from "react";
import { Pagination, Stack, Typography, Box } from "@mui/material";
import { useUsersStore } from "@/store/usersStore";
import UsersTable from "@/components/UsersTable";
import SearchBar from "@/components/SearchBar";

export default function UsersPage() {
    const { users, total, fetchUsers, searchUsers } = useUsersStore();
    const [page, setPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");

    const limit = 10;

    // ✅ Pagination fetch (only when NOT searching)
    useEffect(() => {
        if (!searchQuery) {
            fetchUsers(limit, (page - 1) * limit);
        }
    }, [page, searchQuery, fetchUsers]);

    // ✅ Pagination handler
    const handlePageChange = useCallback(
        (_: any, value: number) => setPage(value),
        []
    );

    // ✅ Search handler
    const handleSearch = useCallback(
        async (query: string) => {
            setSearchQuery(query);
            setPage(1); // reset pagination

            if (query.trim()) {
                await searchUsers(query);
            } else {
                fetchUsers(limit, 0); // restore normal list
            }
        },
        [searchUsers, fetchUsers]
    );

    return (
        <Stack spacing={3}>
            <Typography variant="h4" fontWeight={600}>
                Users
            </Typography>

            {/* 🔍 Search */}
            <SearchBar
                placeholder="Search users..."
                onSearch={handleSearch}
            />

            {/* 👥 Users table */}
            <UsersTable users={users} />

            {/* 📄 Pagination (disabled during search) */}
            {!searchQuery && (
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
