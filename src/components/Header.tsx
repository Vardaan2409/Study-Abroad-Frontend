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
import { usePathname } from "next/navigation";
import { useAuthStore } from "@/store/authStore";
import { useState } from "react";

export default function Header() {
    const pathname = usePathname();
    const token = useAuthStore((state) => state.token);
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

    return (
        <header className="fixed top-0 left-0 z-50 w-full bg-[#5e6eff] shadow">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
                {/* Logo */}
                <Link
                    href="/"
                    className="text-base sm:text-lg font-semibold text-white"
                >
                    Study Abroad Admin
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-4">
                    {token && (
                        <>
                            {navItem("/dashboard", "Dashboard")}
                            {navItem("/dashboard/users", "Users")}
                            {navItem("/dashboard/products", "Products")}
                        </>
                    )}

                    <Link
                        href={token ? "/" : "/login"}
                        className="rounded-md bg-white px-4 py-1.5 text-sm font-medium text-[#5e6eff]"
                    >
                        {token ? "Logout" : "Login"}
                    </Link>
                </div>

                {/* Mobile Hamburger */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden flex items-center justify-center rounded-md p-2 text-white hover:bg-white/10"
                    aria-label="Menu"
                >
                    ☰
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden bg-[#5e6eff] border-t border-white/20">
                    <div className="flex flex-col px-4 py-3 space-y-1">
                        {token && (
                            <>
                                {navItem("/dashboard", "Dashboard")}
                                {navItem("/dashboard/users", "Users")}
                                {navItem("/dashboard/products", "Products")}
                            </>
                        )}

                        <Link
                            href={token ? "/" : "/login"}
                            onClick={() => setOpen(false)}
                            className="mt-2 block rounded-md bg-white px-4 py-2 text-sm font-medium text-[#5e6eff] text-center"
                        >
                            {token ? "Logout" : "Login"}
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}


// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useAuthStore } from "@/store/authStore";
// import { useState } from "react";

// export default function Header() {
//     const pathname = usePathname() || ""; // ✅ FIX null issue
//     const token = useAuthStore((state) => state.token);
//     const clearToken = useAuthStore((state) => state.clearToken);
//     const [open, setOpen] = useState(false);

//     const navItem = (href: string, label: string) => (
//         <Link
//             href={href}
//             onClick={() => setOpen(false)}
//             className={`block px-4 py-2 rounded-md text-sm font-medium transition ${pathname.startsWith(href)
//                     ? "bg-white/20 text-white"
//                     : "text-white/90 hover:bg-white/10"
//                 }`}
//         >
//             {label}
//         </Link>
//     );

//     return (
//         <header className="fixed top-0 left-0 z-50 w-full bg-[#5e6eff] shadow">
//             <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
//                 {/* Logo */}
//                 <Link href="/" className="text-base sm:text-lg font-semibold text-white">
//                     Study Abroad Admin
//                 </Link>

//                 {/* Desktop Navigation */}
//                 <div className="hidden md:flex items-center gap-4">
//                     {token && (
//                         <>
//                             {navItem("/dashboard", "Dashboard")}
//                             {navItem("/dashboard/users", "Users")}
//                             {navItem("/dashboard/products", "Products")}
//                         </>
//                     )}

//                     {token ? (
//                         <button
//                             onClick={clearToken}
//                             className="rounded-md bg-white px-4 py-1.5 text-sm font-medium text-[#5e6eff]"
//                         >
//                             Logout
//                         </button>
//                     ) : (
//                         <Link
//                             href="/login"
//                             className="rounded-md bg-white px-4 py-1.5 text-sm font-medium text-[#5e6eff]"
//                         >
//                             Login
//                         </Link>
//                     )}
//                 </div>

//                 {/* Mobile Hamburger */}
//                 <button
//                     onClick={() => setOpen(!open)}
//                     className="md:hidden rounded-md p-2 text-white hover:bg-white/10"
//                 >
//                     ☰
//                 </button>
//             </div>

//             {/* Mobile Menu */}
//             {open && (
//                 <div className="md:hidden bg-[#5e6eff] border-t border-white/20">
//                     <div className="flex flex-col px-4 py-3 space-y-1">
//                         {token && (
//                             <>
//                                 {navItem("/dashboard", "Dashboard")}
//                                 {navItem("/dashboard/users", "Users")}
//                                 {navItem("/dashboard/products", "Products")}
//                             </>
//                         )}

//                         {token ? (
//                             <button
//                                 onClick={() => {
//                                     clearToken();
//                                     setOpen(false);
//                                 }}
//                                 className="mt-2 rounded-md bg-white px-4 py-2 text-sm font-medium text-[#5e6eff]"
//                             >
//                                 Logout
//                             </button>
//                         ) : (
//                             <Link
//                                 href="/login"
//                                 onClick={() => setOpen(false)}
//                                 className="mt-2 rounded-md bg-white px-4 py-2 text-sm font-medium text-[#5e6eff] text-center"
//                             >
//                                 Login
//                             </Link>
//                         )}
//                     </div>
//                 </div>
//             )}
//         </header>
//     );
// }
