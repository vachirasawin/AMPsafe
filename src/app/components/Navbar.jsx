"use client";

// import from Next.js
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

function Navbar({ home, aboutUs, dashboard, generateKey, signIn, signUp }) {
    const [menu, setMenu] = useState(false);
    const { data: session } = useSession();

    useEffect(() => {
        if (menu) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [menu]);

    return (
        <div className = "relative">
            <div className = "px-4 bg-white border-b border-[#ececec] z-30 fixed top-0 left-0 w-screen">
                <div className = "container mx-auto justify-self-center flex justify-between items-center h-24">
                    <div className = "flex items-center gap-2">
                        <Image src = "/logo.png" unoptimized alt = "AMPsafe Logo" width = {1000} height = {1000} className = "w-11"/>
                        <h1 className = "text-2xl font-bold text-[#171717]">
                            <span className = "text-blue-500">AMP</span>
                            <span>safe</span>
                        </h1>
                    </div>
                    <div className = "flex text-sm font-medium text-[#9497a1] gap-8 max-lg:hidden">
                        <Link href = "/" className = {`${home && "text-[#171717] hover:underline hover:underline-offset-4"} hover:bg-[#171717] hover:text-white transition-all duration-200 h-10 px-4 rounded-xl hover:shadow-md flex justify-center items-center`}>Home</Link>
                        <Link href = "/about us" className = {`${aboutUs && "text-[#171717] hover:underline hover:underline-offset-4"} hover:bg-[#171717] hover:text-white transition-all duration-200 h-10 px-4 rounded-xl hover:shadow-md flex justify-center items-center`}>About Us</Link>
                        <Link href = "/dashboard" className = {`${dashboard && "text-[#171717] hover:underline hover:underline-offset-4"} hover:bg-[#171717] hover:text-white transition-all duration-200 h-10 px-4 rounded-xl hover:shadow-md flex justify-center items-center`}>Dashboard</Link>
                        {(session && (session?.user?.email == "vachirasawin.mah@gmail.com" || session?.user?.email == "possavee.mee@sk-thonburi.ac.th" || session?.user?.email == "kullamas.kae@sk-thonburi.ac.th")) && (
                            <Link href = "/generate%20key" className = {`${generateKey && "text-[#171717] hover:underline hover:underline-offset-4"} hover:bg-[#171717] hover:text-white transition-all duration-200 h-10 px-4 rounded-xl hover:shadow-md flex justify-center items-center`}>Generate Key</Link>
                        )}
                    </div>
                    {session ? (
                        <div className = "flex gap-4">
                            <div onClick = {() => signOut()} className = "bg-[#f55555] text-[#f7f7f7] shadow-md w-28 h-10 gap-2 flex justify-center items-center font-medium rounded-xl text-sm cursor-pointer max-lg:hidden">
                                <i className = "fa-solid fa-arrow-right-from-bracket"></i>
                                <p>Sign Out</p>
                            </div>
                        </div>
                    ) : (
                        <Link href = {`/${signIn ? "sign%20up" : "sign%20in"}`} className = {`border-2 border-[#171717] shadow-md w-28 h-10 gap-2 flex justify-center items-center font-medium rounded-xl text-sm cursor-pointer max-lg:hidden ${(signIn || signUp) ? "bg-white text-[#171717]" : "bg-[#171717] text-white"}`}>
                            <i className = "fa-solid fa-arrow-right-to-bracket"></i>
                            {signIn ? "Sign Up" : "Sign In"}
                        </Link>
                    )}
                    <div onClick = {() => setMenu(!menu)} className = {`w-10 h-10 flex justify-center items-center rounded-xl text-base border-2 border-[#171717] ${menu ? "bg-white text-[#171717]" : "bg-[#171717] text-white"} min-lg:hidden`}><i className = "fa-solid fa-bars"></i></div>
                </div>
            </div>
            <div className = {`fixed w-screen h-[calc(100vh-6rem)] flex flex-col gap-8 bg-white p-4 left-0 z-20 border-t border-[#ececec] ${menu ? ((home || aboutUs || dashboard) ? "opacity-100" : "translate-y-24 opacity-100") : "-translate-y-[calc(100vh-6rem)] opacity-100"} transform transition-all duration-500 ease-in-out min-lg:hidden`}>
                <div className = "flex flex-col text-sm font-medium text-[#9497a1] gap-8">
                    <Link href = "/" className = {home && "text-[#171717]"}>Home</Link>
                    <Link href = "/about us" className = {aboutUs && "text-[#171717]"}>About Us</Link>
                    <Link href = "/dashboard" className = {dashboard && "text-[#171717]"}>Dashboard</Link>
                    {(session && (session?.user?.email == "vachirasawin.mah@gmail.com" || session?.user?.email == "possavee.mee@sk-thonburi.ac.th" || session?.user?.email == "kullamas.kae@sk-thonburi.ac.th")) && (
                        <Link href = "/generate%20key" className = {generateKey && "text-[#171717]"}>Generate Key</Link>
                    )}
                </div>
                {session ? (
                    <div className = "flex flex-col gap-4">
                        <div onClick = {() => signOut()} className = "bg-[#f55555] text-[#f7f7f7] shadow-md w-full h-10 gap-2 flex justify-center items-center font-medium rounded-xl text-sm cursor-pointer">
                            <i className = "fa-solid fa-arrow-right-from-bracket"></i>
                            <p>Sign Out</p>
                        </div>
                    </div>
                ) : (
                    <Link href = {`/${signIn ? "sign%20up" : "sign%20in"}`} className = {`border-2 border-[#171717] shadow-md w-full h-10 gap-2 flex justify-center items-center font-medium rounded-xl text-sm cursor-pointer ${(signIn || signUp) ? "bg-white text-[#171717]" : "bg-[#171717] text-white"}`}>
                        <i className = "fa-solid fa-arrow-right-to-bracket"></i>
                        {signIn ? "Sign Up" : "Sign In"}
                    </Link>
                )}
            </div>
        </div>
    );
}

export default Navbar