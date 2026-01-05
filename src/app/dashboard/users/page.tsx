// "use client";

// import { useEffect, useState } from "react";
// import {
//     TextField,
//     Pagination,
//     Stack,
//     Typography,
//     Button,
//     Box,
// } from "@mui/material";
// import { useUsersStore } from "@/store/usersStore";
// import UsersTable from "@/components/UsersTable";
// import { useRouter } from "next/navigation";

// export default function UsersPage() {
//     const { users, total, fetchUsers, searchUsers } = useUsersStore();
//     const [page, setPage] = useState(1);
//     const limit = 10;
//     const router = useRouter();

//     useEffect(() => {
//         fetchUsers(limit, (page - 1) * limit);
//     }, [page]);

//     return (
//         <Box
//             sx={{
//                 minHeight: "calc(100vh - 160px)",
//                 display: "flex",
//                 flexDirection: "column",
//             }}
//         >
//             {/* Top Content */}
//             <Stack spacing={3}>
//                 {/* Back Button */}
//                 {/* <Button
//                     variant="outlined"
//                     onClick={() => router.push("/dashboard")}
//                     sx={{ alignSelf: "flex-start" }}
//                 >
//                     ← Back to Dashboard
//                 </Button> */}

//                 {/* Heading */}
//                 <Typography variant="h4" sx={{ fontWeight: 600, color: "#000" }}>
//                     Users
//                 </Typography>

//                 <Typography color="text.secondary">
//                     Manage and explore user information
//                 </Typography>

//                 {/* Search */}
//                 <TextField
//                     label="Search users"
//                     onChange={(e) => searchUsers(e.target.value)}
//                 />

//                 {/* Table */}
//                 <UsersTable users={users} />
//             </Stack>

//             {/* Pagination at bottom center */}
//             <Box
//                 sx={{
//                     mt: "auto",
//                     display: "flex",
//                     justifyContent: "center",
//                     py: 3,
//                 }}
//             >
//                 <Pagination
//                     count={Math.ceil(total / limit)}
//                     page={page}
//                     onChange={(_, value) => setPage(value)}
//                     color="primary"
//                 />
//             </Box>
//         </Box>
//     );
// }


"use client";

import { useEffect, useState, useCallback } from "react";
import {
    TextField,
    Pagination,
    Stack,
    Typography,
    Box,
} from "@mui/material";
import { useUsersStore } from "@/store/usersStore";
import UsersTable from "@/components/UsersTable";

export default function UsersPage() {
    const { users, total, fetchUsers, searchUsers } = useUsersStore();

    const [page, setPage] = useState(1);
    const limit = 10;

    // ✅ Pagination handler optimized
    const handlePageChange = useCallback(
        (_: any, value: number) => {
            setPage(value);
        },
        []
    );

    useEffect(() => {
        fetchUsers(limit, (page - 1) * limit);
    }, [page, fetchUsers]);

    return (
        <Stack spacing={3} sx={{ width: "100%" }}>
            {/* Title */}
            <Box>
                <Typography variant="h4" fontWeight={600}>
                    Users
                </Typography>
                <Typography color="text.secondary">
                    Manage and explore user information
                </Typography>
            </Box>

            {/* Search */}
            <TextField
                label="Search users"
                onChange={(e) => searchUsers(e.target.value)}
                fullWidth
            />

            {/* Table */}
            <UsersTable users={users} />

            {/* Pagination centered at bottom */}
            <Box display="flex" justifyContent="center" mt={2}>
                <Pagination
                    count={Math.ceil(total / limit)}
                    page={page}
                    onChange={handlePageChange}
                />
            </Box>
        </Stack>
    );
}
