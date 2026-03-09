// import from Next.js
import React from "react";
import Link from "next/link";
import Image from "next/image";

function Information({ title, description, content, link, image, reverse }) {
    return (
        <div className = "px-4 border-b border-[#ececec] bg-white">
            <div className = {`container mx-auto justify-self-center flex justify-around flex-wrap-reverse ${reverse ? "flex-row" : "flex-row-reverse"} items-center gap-4 py-24 max-md:py-8`}>
                <div className = "w-lg flex flex-col gap-8 max-md:gap-4">
                    <div className = "flex flex-col gap-7 max-md:gap-4">
                        <div>
                            <h1 className = "text-5xl max-md:text-3xl font-bold text-[#171717]" dangerouslySetInnerHTML = {{ __html: title }}></h1>
                            <h2 className = "text-md max-md:text-xs font-medium" dangerouslySetInnerHTML = {{ __html: description }}></h2>
                            <div className = "w-36 border-2 border-blue-500 rounded-md mt-2"></div>
                        </div>
                        <div className = "text-[#9497a1] text-xl max-md:text-base" dangerouslySetInnerHTML = {{ __html: content }}></div>
                    </div>
                    {link && (
                        <div className = "flex gap-2 max-md:flex-col">
                            <Link href = {link[0].link} className = "shadow-md w-1/2 max-md:w-full border-2 border-[#171717] bg-[#171717] text-white hover:bg-white hover:text-[#171717] h-12 max-md:h-10 flex justify-center items-center rounded-xl font-medium text-sm transition-all duration-200">{link[0].name}</Link>
                            <Link href = {link[1].link} className = "shadow-md w-1/2 max-md:w-full border-2 border-[#171717] bg-white text-[#171717] hover:bg-[#171717] hover:text-white h-12 max-md:h-10 flex justify-center items-center rounded-xl font-medium text-sm transition-all duration-200">{link[1].name}</Link>
                        </div>
                    )}
                </div>
                <Image src = {`/${image[0]}.${image[1]}`} unoptimized width = {image[2]} height = {image[3]} className = "object-contain w-lg max-lg:w-full rounded-2xl shadow-md" alt = {image[0]}/>
            </div>
        </div>
    )
}

export default Information