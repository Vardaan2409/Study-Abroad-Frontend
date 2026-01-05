import { create } from "zustand";

interface UsersState {
    users: any[];
    total: number;
    loading: boolean;

    fetchUsers: (limit: number, skip: number) => Promise<void>;
    searchUsers: (query: string) => Promise<void>;
}

export const useUsersStore = create<UsersState>((set) => ({
    users: [],
    total: 0,
    loading: false,

    // ✅ Correct pagination-safe fetch
    fetchUsers: async (limit: number, skip: number) => {
        set({ loading: true });

        // ✅ Cache ONLY first page
        if (skip === 0) {
            const cached = localStorage.getItem("users_page_1");
            if (cached) {
                const parsed = JSON.parse(cached);
                set({
                    users: parsed.users,
                    total: parsed.total,
                    loading: false,
                });
                return;
            }
        }

        const res = await fetch(
            `https://dummyjson.com/users?limit=${limit}&skip=${skip}`
        );
        const data = await res.json();

        set({
            users: data.users,     // 🔴 REPLACE users (not append)
            total: data.total,
            loading: false,
        });

        // ✅ Save only page 1
        if (skip === 0) {
            localStorage.setItem(
                "users_page_1",
                JSON.stringify({ users: data.users, total: data.total })
            );
        }
    },

    // 🔍 Search users (pagination intentionally ignored)
    searchUsers: async (query: string) => {
        if (!query) return;

        set({ loading: true });

        const res = await fetch(
            `https://dummyjson.com/users/search?q=${query}`
        );
        const data = await res.json();

        set({
            users: data.users,
            total: data.total,
            loading: false,
        });
    },
}));
