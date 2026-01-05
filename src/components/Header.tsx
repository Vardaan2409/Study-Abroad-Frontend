// "use client";

// import Link from "next/link";
// import { usePathname, useRouter } from "next/navigation";
// import { useAuthStore } from "@/store/authStore";

// export default function Header() {
//     const pathname = usePathname();
//     const router = useRouter();
//     const { token, logout } = useAuthStore();

//     const navItem = (href: string, label: string) => (
//         <Link
//             href={href}
//             className={`px-4 py-2 rounded-md text-sm font-medium transition ${pathname === href
//                     ? "bg-white/20 text-white"
//                     : "text-white/90 hover:bg-white/10"
//                 }`}
//         >
//             {label}
//         </Link>
//     );

//     return (
//         <header className="fixed top-0 left-0 z-50 w-full bg-[#5e6eff] shadow-md">
//             <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

//                 {/* ✅ Brand (Clickable → Home Page) */}
//                 <Link
//                     href="/"
//                     className="text-lg font-semibold text-white hover:opacity-90 transition"
//                 >
//                     Study Abroad Admin
//                 </Link>

//                 {/* Navigation */}
//                 <div className="flex items-center gap-2">
//                     {!token ? (
//                         <Link
//                             href="/login"
//                             className="rounded-md bg-white px-4 py-2 text-sm font-medium text-[#5e6eff] hover:bg-gray-100"
//                         >
//                             Login
//                         </Link>
//                     ) : (
//                         <>
//                             {navItem("/dashboard", "Dashboard")}
//                             {navItem("/dashboard/users", "Users")}
//                             {navItem("/dashboard/products", "Products")}

//                             <button
//                                 onClick={() => {
//                                     logout();
//                                     router.push("/login");
//                                 }}
//                                 className="ml-3 rounded-md bg-white px-4 py-2 text-sm font-medium text-[#5e6eff] hover:bg-gray-100"
//                             >
//                                 Logout
//                             </button>
//                         </>
//                     )}
//                 </div>
//             </div>
//         </header>
//     );
// }



"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useAuthStore } from "@/store/authStore";
import { useState } from "react";

export default function Header() {
    const pathname = usePathname();
    const router = useRouter();
    const { token, setToken } = useAuthStore();
    const [open, setOpen] = useState(false);

    const navItem = (href: string, label: string) => (
        <Link
            href={href}
            onClick={() => setOpen(false)}
            className={`block px-4 py-2 rounded-md text-sm font-medium transition ${pathname.startsWith(href)
                    ? "bg-white/20 text-white"
                    : "text-white/90 hover:bg-white/10"
                }`}
        >
            {label}
        </Link>
    );

    const handleLogout = () => {
        setToken(null);          // ✅ clear token
        setOpen(false);
        router.push("/");        // ✅ go to home
    };

    return (
        <header className="fixed top-0 left-0 z-50 w-full bg-[#5e6eff] shadow">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
                {/* Logo */}
                <Link href="/" className="text-lg font-semibold text-white">
                    Study Abroad Admin
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-4">
                    {token && (
                        <>
                            {navItem("/dashboard", "Dashboard")}
                            {navItem("/dashboard/users", "Users")}
                            {navItem("/dashboard/products", "Products")}
                        </>
                    )}

                    {!token ? (
                        <Link
                            href="/login"
                            className="rounded-md bg-white px-4 py-1.5 text-sm font-medium text-[#5e6eff]"
                        >
                            Login
                        </Link>
                    ) : (
                        <button
                            onClick={handleLogout}
                            className="rounded-md bg-white px-4 py-1.5 text-sm font-medium text-[#5e6eff]"
                        >
                            Logout
                        </button>
                    )}
                </div>

                {/* Mobile Hamburger */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden text-white text-xl"
                >
                    ☰
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden bg-[#5e6eff] border-t border-white/20 px-4 py-3">
                    {token && (
                        <>
                            {navItem("/dashboard", "Dashboard")}
                            {navItem("/dashboard/users", "Users")}
                            {navItem("/dashboard/products", "Products")}
                        </>
                    )}

                    {!token ? (
                        <Link
                            href="/login"
                            onClick={() => setOpen(false)}
                            className="mt-2 block rounded-md bg-white px-4 py-2 text-sm font-medium text-[#5e6eff] text-center"
                        >
                            Login
                        </Link>
                    ) : (
                        <button
                            onClick={handleLogout}
                            className="mt-2 w-full rounded-md bg-white px-4 py-2 text-sm font-medium text-[#5e6eff]"
                        >
                            Logout
                        </button>
                    )}
                </div>
            )}
        </header>
    );
}