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
