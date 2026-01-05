// // "use client";

// // import { Box, Button, Stack, Typography } from "@mui/material";
// // import { useRouter } from "next/navigation";
// // import { useAuthStore } from "@/store/authStore";

// // export default function Home() {
// //     const router = useRouter();
// //     const token = useAuthStore((state) => state.token);

// //     const handleDashboardClick = () => {
// //         router.push(token ? "/dashboard" : "/login");
// //     };

// //     return (
// //         <Box
// //             sx={{
// //                 flex: 1,
// //                 display: "flex",
// //                 alignItems: "center",
// //                 justifyContent: "center",
// //                 background: "linear-gradient(135deg, #f5f7ff 0%, #ffffff 100%)",
// //                 px: 2,
// //             }}
// //         >
// //             <Stack
// //                 spacing={3}
// //                 textAlign="center"
// //                 maxWidth={600}
// //                 sx={{
// //                     p: 4,
// //                     borderRadius: 3,
// //                     backgroundColor: "#ffffff",
// //                     boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
// //                 }}
// //             >
// //                 <Typography variant="h4" fontWeight={700}>
// //                     Study Abroad Admin Dashboard
// //                 </Typography>

// //                 <Typography color="text.secondary">
// //                     Manage users and products through a modern, clean
// //                     administrative interface built with Next.js and MUI.
// //                 </Typography>

// //                 <Stack direction="row" spacing={2} justifyContent="center">
// //                     <Button
// //                         variant="contained"
// //                         size="large"
// //                         onClick={() => router.push("/login")}
// //                     >
// //                         Login
// //                     </Button>

// //                     <Button
// //                         variant="outlined"
// //                         size="large"
// //                         onClick={handleDashboardClick}
// //                     >
// //                         Go to Dashboard
// //                     </Button>
// //                 </Stack>
// //             </Stack>
// //         </Box>
// //     );
// // }


// // "use client";

// // import { Box, Button, Stack, Typography } from "@mui/material";
// // import { useRouter } from "next/navigation";
// // import { useAuthStore } from "@/store/authStore";

// // export default function HomePage() {
// //   const router = useRouter();
// //   const token = useAuthStore((state) => state.token);

// //   const handleDashboardClick = () => {
// //     router.push(token ? "/dashboard" : "/login");
// //   };

// //   return (
// //     <Box
// //       sx={{
// //         minHeight: "calc(100vh - 128px)",
// //         display: "flex",
// //         alignItems: "center",
// //         justifyContent: "center",
// //         px: 2,
// //       }}
// //     >
// //       <Stack
// //         spacing={3}
// //         textAlign="center"
// //         maxWidth={600}
// //         sx={{
// //           backgroundColor: "#ffffff",
// //           p: 4,
// //           borderRadius: 4,
// //           boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
// //         }}
// //       >
// //         <Typography variant="h4" fontWeight={700}>
// //           Study Abroad Admin Dashboard
// //         </Typography>

// //         <Typography color="text.secondary">
// //           Manage users and products through a modern admin interface.
// //         </Typography>

// //         <Stack direction="row" spacing={2} justifyContent="center">
// //           <Button variant="contained" onClick={() => router.push("/login")}>
// //             Login
// //           </Button>

// //           <Button variant="outlined" onClick={handleDashboardClick}>
// //             Go to Dashboard
// //           </Button>
// //         </Stack>
// //       </Stack>
// //     </Box>
// //   );
// // }


// "use client";

// import { Box, Button, Stack, Typography } from "@mui/material";
// import { useRouter } from "next/navigation";
// import { useAuthStore } from "@/store/authStore";

// export default function Home() {
//     const router = useRouter();
//     const token = useAuthStore((state) => state.token);

//     const handleDashboardClick = () => {
//         router.push(token ? "/dashboard" : "/login");
//     };

//     return (
//         <Box
//             sx={{
//                 minHeight: "calc(100vh - 140px)", // header + footer
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//             }}
//         >
//             <Stack
//                 spacing={3}
//                 textAlign="center"
//                 maxWidth={600}
//                 sx={{
//                     backgroundColor: "#fff",
//                     p: 5,
//                     borderRadius: 4,
//                     boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
//                 }}
//             >
//                 <Typography
//                     variant="h4"
//                     fontWeight={700}
//                     color="text.primary"
//                 >
//                     Study Abroad Admin Dashboard
//                 </Typography>

//                 <Typography color="text.secondary">
//                     Manage users and products through a modern admin interface.
//                 </Typography>

//                 <Stack direction="row" spacing={2} justifyContent="center">
//                     {/* <Button
//                         variant="contained"
//                         onClick={() => router.push("/login")}
//                     >
//                         Login
//                     </Button> */}

//                     <Button
//                         variant="outlined"
//                         onClick={handleDashboardClick}
//                     >
//                         Go to Dashboard
//                     </Button>
//                 </Stack>
//             </Stack>
//         </Box>
//     );
// }

"use client";

import { Box, Button, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/authStore";

export default function Home() {
    const router = useRouter();
    const token = useAuthStore((state) => state.token);

    return (
        <Box sx={{ width: "100%", maxWidth: 600 }}>
            <Stack spacing={3} textAlign="center">
                <Typography
                    variant="h4"
                    fontWeight={700}
                    sx={{ fontSize: { xs: "1.6rem", sm: "2rem" } }}
                >
                    Study Abroad Admin Dashboard
                </Typography>

                <Typography color="text.secondary">
                    Manage users and products through a modern admin interface.
                </Typography>

                <Stack
                    direction={{ xs: "column", sm: "row" }}
                    spacing={2}
                    justifyContent="center"
                >
                    {/* <Button variant="contained" onClick={() => router.push("/login")}>
                        Login
                    </Button> */}

                    <Button
                        variant="outlined"
                        onClick={() =>
                            router.push(token ? "/dashboard" : "/login")
                        }
                    >
                        Go to Dashboard
                    </Button>
                </Stack>
            </Stack>
        </Box>
    );
}
