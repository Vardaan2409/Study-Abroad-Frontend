"use client";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TableContainer,
    Paper,
    Button,
} from "@mui/material";
import Link from "next/link";

export default function UsersTable({ users }: { users: any[] }) {
    return (
        <TableContainer component={Paper} elevation={2}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Gender</TableCell>
                        <TableCell>Phone</TableCell>
                        <TableCell>Company</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {users.map((user) => (
                        <TableRow
                            key={user.id}
                            hover
                            sx={{ cursor: "pointer" }}
                        >
                            <TableCell>
                                {user.firstName} {user.lastName}
                            </TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.gender}</TableCell>
                            <TableCell>{user.phone}</TableCell>
                            <TableCell>{user.company?.name}</TableCell>
                            <TableCell>
                                <Link href={`/dashboard/users/${user.id}`}>
                                    <Button size="small">View</Button>
                                </Link>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
