"use client";

export default function Footer() {
    return (
        <footer className="h-14 border-t border-black/10 bg-white">
            <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6 text-sm text-gray-600">
                <span>© {new Date().getFullYear()} Study Abroad Admin</span>
                <span>Next.js • MUI • Zustand</span>
            </div>
        </footer>
    );
}
