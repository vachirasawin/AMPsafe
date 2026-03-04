// import from Next.js
import React from "react";

// import from components
import Navbar from "../components/Navbar";
import Title from "../components/Title";

function Page() {
    return (
        <div>
            <Navbar dashboard/>
            <Title image = "/industry.avif" title = "การพยากรณ์ช่วงของกระแสไฟฟ้าที่อาจทำให้เกิดความเสียหาย"/>
            <div className = "px-4 bg-[#f7f7f7] border-b border-[#ececec]">
                <div className = "container mx-auto justify-self-center flex justify-center items-center">
                </div>
            </div>
        </div>
    );
}

export default Page