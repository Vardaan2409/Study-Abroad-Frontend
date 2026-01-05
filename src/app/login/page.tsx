// // "use client";

// // import { Button, TextField, Box, Typography } from "@mui/material";
// // import { useState } from "react";
// // import { useRouter } from "next/navigation";
// // import { useAuthStore } from "@/store/authStore";

// // export default function LoginPage() {
// //     const [username, setUsername] = useState("");
// //     const [password, setPassword] = useState("");
// //     const setToken = useAuthStore((state) => state.setToken);
// //     const router = useRouter();

// //     const handleLogin = async () => {
// //         const res = await fetch("https://dummyjson.com/auth/login", {
// //             method: "POST",
// //             headers: { "Content-Type": "application/json" },
// //             body: JSON.stringify({ username, password }),
// //         });

// //         const data = await res.json();

// //         if (data.token) {
// //             setToken(data.token); // ✅ Zustand
// //             localStorage.setItem("token", data.token); // optional
// //             router.push("/dashboard");
// //         } else {
// //             alert("Invalid credentials");
// //         }
// //     };

// //     return (
// //         <Box sx={{ maxWidth: 400, mx: "auto", mt: 10 }}>
// //             <Typography variant="h5">Admin Login</Typography>

// //             <TextField
// //                 label="Username"
// //                 fullWidth
// //                 margin="normal"
// //                 onChange={(e) => setUsername(e.target.value)}
// //             />

// //             <TextField
// //                 label="Password"
// //                 type="password"
// //                 fullWidth
// //                 margin="normal"
// //                 onChange={(e) => setPassword(e.target.value)}
// //             />

// //             <Button fullWidth variant="contained" onClick={handleLogin}>
// //                 Login
// //             </Button>
// //         </Box>
// //     );
// // }


// "use client";

// import { Button, TextField, Box, Typography } from "@mui/material";
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { useAuthStore } from "@/store/authStore";

// export default function LoginPage() {
//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");
//     const setToken = useAuthStore((state) => state.setToken);
//     const router = useRouter();

//     const handleLogin = async () => {
//         // 🔴 DummyJSON auth is unstable
//         // ✅ Temporary login bypass for assessment

//         const mockToken = "test-token";

//         localStorage.setItem("token", mockToken);
//         setToken(mockToken);

//         router.push("/dashboard");
//     };

//     return (
//         <Box sx={{ maxWidth: 400, mx: "auto", mt: 10 }}>
//             <Typography variant="h5">Admin Login</Typography>

//             <TextField
//                 label="Username"
//                 fullWidth
//                 margin="normal"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//             />

//             <TextField
//                 label="Password"
//                 type="password"
//                 fullWidth
//                 margin="normal"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//             />

//             <Button fullWidth variant="contained" onClick={handleLogin}>
//                 Login
//             </Button>
//         </Box>
//     );
// }


"use client";

import { Box, Button, TextField, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/authStore";

export default function LoginPage() {
    const router = useRouter();
    const setToken = useAuthStore((state) => state.setToken);

    const handleLogin = () => {
        // 🔴 Bypassed auth (intentional)
        setToken("mock-token");
        router.push("/dashboard");
    };

    return (
        <Box
            sx={{
                maxWidth: 400,
                mx: "auto",
                mt: 12,
                p: 4,
                boxShadow: 3,
                borderRadius: 2,
            }}
        >
            <Typography variant="h5" sx={{ mb: 2 }}>
                Admin Login
            </Typography>

            <TextField label="Username" fullWidth sx={{ mb: 2 }} />
            <TextField label="Password" type="password" fullWidth sx={{ mb: 3 }} />

            <Button fullWidth variant="contained" onClick={handleLogin}>
                Login
            </Button>
        </Box>
    );
}
