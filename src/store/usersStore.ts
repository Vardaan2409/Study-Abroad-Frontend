// import { create } from "zustand";

// type User = {
//     id: number;
//     firstName: string;
//     lastName: string;
//     email: string;
//     gender: string;
//     phone: string;
//     company?: { name: string };
// };

// type UsersState = {
//     users: User[];
//     total: number;
//     loading: boolean;
//     fetchUsers: (limit: number, skip: number) => Promise<void>;
//     searchUsers: (query: string) => Promise<void>;
// };

// export const useUsersStore = create<UsersState>((set) => ({
//     users: [],
//     total: 0,
//     loading: false,

//     fetchUsers: async (limit, skip) => {
//         set({ loading: true });

//         const res = await fetch(
//             `https://dummyjson.com/users?limit=${limit}&skip=${skip}`
//         );
//         const data = await res.json();

//         set({
//             users: data.users,
//             total: data.total,
//             loading: false,
//         });
//     },

//     searchUsers: async (query) => {
//         if (!query) return;

//         set({ loading: true });

//         const res = await fetch(
//             `https://dummyjson.com/users/search?q=${query}`
//         );
//         const data = await res.json();

//         set({
//             users: data.users,
//             total: data.total,
//             loading: false,
//         });
//     },
// }));


import { create } from "zustand";

interface UsersState {
    users: any[];
    total: number;
    loading: boolean;

    fetchUsers: (limit: number, skip: number) => Promise<void>;
    searchUsers: (query: string) => Promise<void>;
}

export const useUsersStore = create<UsersState>((set, get) => ({
    users: [],
    total: 0,
    loading: false,

    // ✅ Fetch users with in-memory + localStorage caching
    fetchUsers: async (limit: number, skip: number) => {
        // 🔹 1️⃣ In-memory cache (Zustand)
        if (get().users.length > 0 && skip === 0) return;

        // 🔹 2️⃣ localStorage cache (optional bonus)
        const cached = localStorage.getItem("users");
        if (cached && skip === 0) {
            set({ users: JSON.parse(cached) });
            return;
        }

        set({ loading: true });

        const res = await fetch(
            `https://dummyjson.com/users?limit=${limit}&skip=${skip}`
        );
        const data = await res.json();

        set({
            users: data.users,
            total: data.total,
            loading: false,
        });

        // 🔹 Save to localStorage
        if (skip === 0) {
            localStorage.setItem("users", JSON.stringify(data.users));
        }
    },

    // 🔍 Search users (no caching needed)
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
