// import from Next.js
import React from "react";
import Link from "next/link";

function Information() {
    return (
        <div className = "px-4 border-b border-[#ececec] bg-white" data-aos = "fade-up">
            <div className = "container mx-auto justify-self-center flex justify-around flex-wrap-reverse items-center gap-4 py-24 max-md:py-8">
                <div className = "w-lg flex flex-col gap-8 max-md:gap-4">
                    <div className = "flex flex-col gap-7 max-md:gap-4">
                        <div>
                            <h1 className = "text-5xl max-md:text-3xl font-bold text-[#171717]">
                                <span className = "text-[#eab308]">AMP</span>
                                <span>safe</span>
                            </h1>
                            <h2 className = "text-md max-md:text-xs font-medium">AI พยากรณ์ช่วงของกระแสไฟฟ้าที่อาจทำให้เกิดความเสียหาย</h2>
                            <div className = "w-36 border-2 border-[#eab308] rounded-md mt-2"></div>
                        </div>
                        <div className = "text-[#9497a1] text-xl max-md:text-base">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing.
                            </p>
                        </div>
                    </div>
                    <div className = "flex gap-2 max-md:flex-col">
                        <Link href = "/about us" className = "shadow-md w-1/2 max-md:w-full border-2 border-[#171717] bg-[#171717] text-white hover:bg-white hover:text-[#171717] h-12 max-md:h-10 flex justify-center items-center rounded-xl font-medium text-sm transition-all duration-200">About Us</Link>
                        <Link href = "/dashboard" className = "shadow-md w-1/2 max-md:w-full border-2 border-[#171717] bg-white text-[#171717] hover:bg-[#171717] hover:text-white h-12 max-md:h-10 flex justify-center items-center rounded-xl font-medium text-sm transition-all duration-200">Dashboard</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Information