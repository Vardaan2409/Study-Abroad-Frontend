import { create } from "zustand";

type User = {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    gender: string;
    phone: string;
    company?: { name: string };
};

type UsersState = {
    users: User[];
    total: number;
    loading: boolean;
    fetchUsers: (limit: number, skip: number) => Promise<void>;
    searchUsers: (query: string) => Promise<void>;
};

export const useUsersStore = create<UsersState>((set) => ({
    users: [],
    total: 0,
    loading: false,

    fetchUsers: async (limit, skip) => {
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
    },

    searchUsers: async (query) => {
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
