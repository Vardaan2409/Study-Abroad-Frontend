"use client";

import * as React from "react";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import {
    ThemeProvider,
    CssBaseline,
    createTheme,
} from "@mui/material";

// ✅ Modern custom MUI theme
const theme = createTheme({
    palette: {
        primary: {
            main: "#5e6eff", // modern blue
        },
        text: {
            primary: "#000000", // 🔥 ensures black text
            secondary: "#555555",
        },
    },
    typography: {
        h4: {
            fontWeight: 600,
            color: "#000000",
        },
        h5: {
            fontWeight: 600,
            color: "#000000",
        },
        h6: {
            fontWeight: 600,
            color: "#000000",
        },
    },
    shape: {
        borderRadius: 10,
    },
});

export default function ThemeRegistry({
    children,
}: {
    children: React.ReactNode;
}) {
    const cache = React.useMemo(
        () =>
            createCache({
                key: "mui",
                prepend: true, // ✅ fixes hydration issues
            }),
        []
    );

    return (
        <CacheProvider value={cache}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </CacheProvider>
    );
}
