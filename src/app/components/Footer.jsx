"use client";

// import from Next.js
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSession } from "next-auth/react";

// import from components
import FooterSection from "./FooterSection";

function Footer({ home, aboutUs, signIn, signUp, dashboard, generateKey, faqs, developers, models }) {
    const { data: session } = useSession();
    
    const [quickLink, setQuickLink] = useState(false);
    const [information, setInformation] = useState(false);
    const [modelsPage, setModelsPage] = useState(false);
    const [contactInfo, setContactInfo] = useState(false);

    return (
        <div className = "px-4 border-t border-[#607D94] bg-[#002B4E]">
            <div className = "container mx-auto justify-self-center flex flex-wrap gap-4 justify-around py-8 max-md:py-4 text-white max-md:flex-col">
                <div className = "flex flex-col gap-2">
                    <div className = "flex items-center gap-2">
                        <Image src = "/logo.png" unoptimized alt = "codingSKT Logo" width = {1000} height = {1000} className = "w-11"/>
                        <h1 className = "text-2xl font-bold">
                            <span className = "text-blue-500">AMP</span>
                            <span>safe</span>
                        </h1>
                    </div>
                </div>
                <div className = "flex gap-8 max-md:flex-col max-md:gap-4">
                    <div className = "flex flex-col gap-4 max-md:border-b border-[#f7f7f7] pb-4">
                        <FooterSection name = "Quick Link" onClick = {() => setQuickLink(!quickLink)} rotate = {quickLink}/>
                        <div className = {`flex flex-col gap-2 text-xs font-medium text-[#9497a1] max-md:pl-4 ${quickLink ? "max-md:flex" : "max-md:hidden"}`}>
                            <Link href = "/" className = {`${home && "text-white"}`}>Home</Link>
                            <Link href = "/about us" className = {`${aboutUs && "text-white"}`}>About Us</Link>
                            <Link href = "/dashboard" className = {`${dashboard && "text-white"}`}>Dashboard</Link>
                            {session ? (
                                (session?.user?.email != "vachirasawin.mah@gmail.com" || session?.user?.email != "possavee.mee@sk-thonburi.ac.th" || session?.user?.email != "kullamas.kae@sk-thonburi.ac.th") && (
                                    <Link href = "/generate%20key" className = {`${generateKey && "text-white"}`}>Generate Key</Link>
                                )
                            ) : (
                                <>
                                    <Link href = "/sign%20in" className = {`${signIn && "text-white"}`}>Sign In</Link>
                                    <Link href = "/sign%20up" className = {`${signUp && "text-white"}`}>Sign Up</Link>
                                </>
                            )}
                        </div>
                    </div>
                    <div className = "flex flex-col gap-4 max-md:border-b border-[#f7f7f7] pb-4">
                        <FooterSection name = "Information" onClick = {() => setInformation(!information)} rotate = {information}/>
                        <div className = {`flex flex-col gap-2 text-xs font-medium text-[#9497a1] max-md:pl-4 ${information ? "max-md:flex" : "max-md:hidden"}`}>
                            <Link href = "/about%20us#faqs" className = {`${faqs && "text-white"}`}>FAQs</Link>
                            <Link href = "/about%20us#developers" className = {`${developers && "text-white"}`}>Developers</Link>
                        </div>
                    </div>
                    <div className = "flex flex-col gap-4 max-md:border-b border-[#f7f7f7] pb-4">
                        <FooterSection name = "Models" onClick = {() => setModelsPage(!modelsPage)} rotate = {modelsPage}/>
                        <div className = {`flex flex-col gap-2 text-xs font-medium text-[#9497a1] max-md:pl-4 ${modelsPage ? "max-md:flex" : "max-md:hidden"}`}>
                            <Link href = "/models" className = {`${models && "text-white"}`}>Models</Link>
                        </div>
                    </div>
                    <div className = "flex flex-col gap-4 max-md:border-b border-[#f7f7f7] pb-4">
                        <FooterSection name = "Contact Info" onClick = {() => setContactInfo(!contactInfo)} rotate = {contactInfo}/>
                        <div className = {`flex flex-col gap-2 text-xs font-medium text-[#9497a1] max-md:pl-4 ${contactInfo ? "max-md:flex" : "max-md:hidden"}`}>
                            <p>vachirasawin.mah@gmail.com</p>
                            <p>possavee.mee@sk-thonburi.ac.th</p>
                            <p>kullamas.kae@sk-thonburi.ac.th</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer