"use client"

import React from "react"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react"

function NavbarLink({ href, access, children }) {
    const rawPathname = usePathname();
    const pathname = decodeURIComponent(rawPathname);

    const { data: session } = useSession();
    const userRole = session?.user?.access;
    const isLoggedIn = !!session?.user;

    const checkAccess = () => {
        switch (access) {
            case "everyone":
                return true;

            case "guest":
                return !isLoggedIn;

            case "user":
                return userRole === "user" || userRole === "admin";

            case "admin":
                return userRole === "admin";

            default:
                return true;
        }
    };

    if (!checkAccess()) return null;

    const isAuthPage = href === "/sign in" && (pathname === "/sign in" || pathname === "/sign up");
    const isActive = pathname === href || isAuthPage;

    return (
        <Link href = {href} className = {`transition-all duration-200 ${isActive ? "text-neutral-900" : "text-neutral-400"} hover:underline hover:underline-offset-6`}>{children}</Link>
    )
}

export default NavbarLink