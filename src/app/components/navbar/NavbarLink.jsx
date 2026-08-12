"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

function NavbarLink({ href, children }) {
    const rawPathname = usePathname();
    const pathname = decodeURIComponent(rawPathname);

    const isAuthPage = href === "/sign in" && (pathname === "/sign in" || pathname === "/sign up");
    const isActive = pathname === href || isAuthPage;

    return (
        <Link href = {href} className = {`transition-all duration-200 ${isActive ? "text-neutral-900" : "text-neutral-400"} hover:underline hover:underline-offset-6`}>{children}</Link>
    )
}

export default NavbarLink