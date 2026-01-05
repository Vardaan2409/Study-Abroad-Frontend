"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useAuthStore } from "@/store/authStore";

export default function Header() {
    const pathname = usePathname();
    const router = useRouter();
    const { token, logout } = useAuthStore();

    const navItem = (href: string, label: string) => (
        <Link
            href={href}
            className={`px-4 py-2 rounded-md text-sm font-medium transition ${pathname === href
                    ? "bg-white/20 text-white"
                    : "text-white/90 hover:bg-white/10"
                }`}
        >
            {label}
        </Link>
    );

    return (
        <header className="fixed top-0 left-0 z-50 w-full bg-[#5e6eff] shadow-md">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

                {/* ✅ Brand (Clickable → Home Page) */}
                <Link
                    href="/"
                    className="text-lg font-semibold text-white hover:opacity-90 transition"
                >
                    Study Abroad Admin
                </Link>

                {/* Navigation */}
                <div className="flex items-center gap-2">
                    {!token ? (
                        <Link
                            href="/login"
                            className="rounded-md bg-white px-4 py-2 text-sm font-medium text-[#5e6eff] hover:bg-gray-100"
                        >
                            Login
                        </Link>
                    ) : (
                        <>
                            {navItem("/dashboard", "Dashboard")}
                            {navItem("/dashboard/users", "Users")}
                            {navItem("/dashboard/products", "Products")}

                            <button
                                onClick={() => {
                                    logout();
                                    router.push("/login");
                                }}
                                className="ml-3 rounded-md bg-white px-4 py-2 text-sm font-medium text-[#5e6eff] hover:bg-gray-100"
                            >
                                Logout
                            </button>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
}
