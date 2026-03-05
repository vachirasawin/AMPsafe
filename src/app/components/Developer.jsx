// import from Next.js
import React from "react";
import Image from "next/image";
import Link from "next/link";

function Developer({ contents }) {
    return (
        contents.map((content, indexContent) => (
            <div key = {indexContent} className = "px-4 border-b border-[#ececec] bg-white">
                <div className = {`container mx-auto justify-self-center flex justify-around ${indexContent % 2 === 0 ? "flex-row" : "flex-row-reverse"} flex-wrap-reverse items-center gap-16 max-md:gap-8 py-24 max-md:py-4`}>
                    <div className = "w-lg flex flex-col gap-8 max-md:gap-4">
                        <div className = "flex flex-col gap-7 max-md:gap-4">
                            <div>
                                <h1 className = "text-5xl max-md:text-3xl font-bold text-[#171717]">{content.nameENG}</h1>
                                <h2 className = "text-md max-md:text-xs font-medium">{content.nameTH}</h2>
                                <div className = "w-36 border-2 border-blue-500 rounded-md mt-2"></div>
                            </div>
                            <div className = "text-[#9497a1] text-xl max-md:text-base">
                                {content.information.map((info, indexInfo) => (
                                    <p key = {indexInfo}>{info}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                    <Image src = {`/${content.image}.png`} unoptimized width = {content.width} height = {content.height} className = "object-contain w-lg max-lg:w-full rounded-2xl shadow-md" alt = {content.nameENG}/>
                </div>
            </div>
        ))  
    )
}

export default Developer