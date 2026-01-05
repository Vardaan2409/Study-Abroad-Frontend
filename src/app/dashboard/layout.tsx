// "use client";

// import { ReactNode } from "react";
// import {
//     AppBar,
//     Toolbar,
//     Typography,
//     Container,
//     Box,
//     Button,
// } from "@mui/material";
// import { useRouter } from "next/navigation";

// export default function DashboardLayout({
//     children,
// }: {
//     children: ReactNode;
// }) {
//     const router = useRouter();

//     return (
//         <>
//             {/* Dashboard Header */}
//             <AppBar position="static" elevation={1}>
//                 <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                    
//                     {/* Brand */}
//                     <Typography
//                         variant="h6"
//                         sx={{ fontWeight: 600, cursor: "pointer" }}
//                         onClick={() => router.push("/")}
//                     >
//                         Study Abroad Admin
//                     </Typography>

//                     {/* Navigation */}
//                     <Box sx={{ display: "flex", gap: 2 }}>
//                         <Button color="inherit" onClick={() => router.push("/dashboard")}>
//                             Dashboard
//                         </Button>

//                         <Button color="inherit" onClick={() => router.push("/dashboard/users")}>
//                             Users
//                         </Button>

//                         <Button color="inherit" onClick={() => router.push("/dashboard/products")}>
//                             Products
//                         </Button>
//                     </Box>
//                 </Toolbar>
//             </AppBar>

//             {/* Page Content */}
//             <Container maxWidth="lg" sx={{ mt: 4 }}>
//                 {children}
//             </Container>
//         </>
//     );
// }


import { ReactNode } from "react";
import { Container } from "@mui/material";

export default function DashboardLayout({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <Container
            maxWidth="lg"
            sx={{
                py: 4,
                height: "100%",
            }}
        >
            {children}
        </Container>
    );
}
