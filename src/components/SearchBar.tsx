"use client";

import { TextField } from "@mui/material";
import { useState } from "react";

interface SearchBarProps {
    placeholder?: string;
    onSearch: (query: string) => void;
}

export default function SearchBar({
    placeholder = "Search...",
    onSearch,
}: SearchBarProps) {
    const [value, setValue] = useState("");

    return (
        <TextField
            fullWidth
            size="small"
            placeholder={placeholder}
            value={value}
            onChange={(e) => {
                const query = e.target.value;
                setValue(query);
                onSearch(query);
            }}
        />
    );
}
