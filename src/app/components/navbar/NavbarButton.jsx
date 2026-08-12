"use client"

import React, { useState, useEffect } from "react"
import { signOut, useSession } from "next-auth/react"
import NavbarLink from "./NavbarLink";

function NavbarButton({ datas }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const { data: session } = useSession();
    const userRole = session?.user?.access;

    const canSignOut = userRole === "user" || userRole === "admin";

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isMenuOpen]);

    return (
        <div className = "flex gap-4">
            <button type = "button" onClick = {() => setIsMenuOpen(!isMenuOpen)} className = {`w-10 h-10 min-lg:hidden justify-center items-center rounded-md shadow-md border border-gray-200 transition-all duration-200 relative z-30 ${isMenuOpen ? "text-neutral-900" : "text-gray-400"}`}>
                <i className = "fa-solid fa-bars"></i>
            </button>
            {canSignOut && (
                <button type = "button" onClick = {() => signOut()} className = "w-max h-10 max-lg:hidden justify-center items-center rounded-md shadow-md transition-all duration-200 relative z-30 px-2 bg-red-500 text-sm font-medium text-neutral-50">
                    ออกจากระบบ
                </button>
            )}

            <div className = {`text-sm font-medium fixed left-0 top-0 w-full h-[calc(100vh-6rem)] bg-white p-4 flex flex-col min-lg:hidden gap-8 -z-10 transition-all duration-500 ease-in-out border-b border-gray-200 ${isMenuOpen ? "translate-y-24" : "-translate-y-[calc(100vh-6rem)]"}`}>
                {datas.map((data) => (
                    <NavbarLink key = {data._id} href = {data.url[1]} access = {data.access}>{data.url[0]}</NavbarLink>
                ))}
                {canSignOut && (
                    <button type = "button" onClick = {() => signOut()} className = "w-full h-10 justify-center items-center rounded-md shadow-md transition-all duration-200 relative z-30 px-2 bg-red-500 text-sm font-medium text-neutral-50">
                        ออกจากระบบ
                    </button>
                )}
            </div>
        </div>
    )
}

export default NavbarButton