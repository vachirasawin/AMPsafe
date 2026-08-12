"use client"

import { useState, useEffect } from "react"
import NavbarLink from "./NavbarLink";

function NavbarButton({ datas }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        <div>
            <button type = "button" onClick = {() => setIsMenuOpen(!isMenuOpen)} className = {`w-10 h-10 min-lg:hidden justify-center items-center rounded-md shadow-md border border-gray-200 transition-all duration-200 relative z-30 ${isMenuOpen ? "text-neutral-900" : "text-gray-400"}`}>
                <i className = "fa-solid fa-bars"></i>
            </button>

            <div className = {`text-sm font-medium fixed left-0 top-0 w-full h-[calc(100vh-6rem)] bg-white p-4 flex flex-col min-lg:hidden gap-8 -z-10 transition-all duration-500 ease-in-out border-b border-gray-200 ${isMenuOpen ? "translate-y-24" : "-translate-y-[calc(100vh-6rem)]"}`}>
                {datas.map((data) => (
                    <NavbarLink key = {data.id} href = {data.url[1]}>{data.url[0]}</NavbarLink>
                ))}
            </div>
        </div>
    )
}

export default NavbarButton