// import from Next.js
import React from "react";

// import from components
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import Information from "./components/Information";
import Card from "./components/Card";

function Page() {
    const contentsPredict = [
        {
            title: "Sign In",
            image: "-",
            extension: "-",
            content: "เข้าสู่ระบบเพื่อใช้งาน",
            description: "เข้าสู่ระบบ",
            width: "-",
            height: "-",
            link: "/signin",
            symbol: "fa-solid fa-arrow-right-to-bracket"
        },
        {
            title: "Connect System",
            description: "เชื่อมต่ออุปกรณ์",
            image: "-",
            extension: "-",
            content: "เชื่อมต่ออุปกรณ์วัดกระแสไฟฟ้าเข้ากับระบบ",
            width: "-",
            height: "-",
            link: "/signin",
            symbol: "fa-solid fa-plug-circle-plus"
        },
        {
            title: "AI Monitoring",
            description: "AI วิเคราะห์ข้อมูลแบบ Real-time",
            image: "-",
            extension: "-",
            content: "ตรวจจับความผิดปกติของกระแสไฟฟ้า",
            width: "-",
            height: "-",
            link: "/dashboard",
            symbol: "fa-solid fa-chart-line"
        },
        {
            title: "Dashboard",
            description: "ระบบแจ้งเตือนเมื่อพบความเสี่ยง",
            image: "-",
            extension: "-",
            content: "ดูกราฟแนวโน้มของกระแสไฟฟ้าและความเสี่ยง",
            width: "-",
            height: "-",
            link: "/dashboard",
            symbol: "fa-solid fa-table"
        }
    ]

    return (
        <div>
            <Navbar home/>
            <Title image = "/industry.avif" title = "การพยากรณ์ช่วงของกระแสไฟฟ้าที่อาจทำให้เกิดความเสียหาย"/>
            <Information/>
            <Card title = "AMPsafe" subTitle = "How to Use" description = "วิธีการใช้งาน AMPsafe" contents = {contentsPredict} h = "h-70" inverse/>
            <div className = "px-4 bg-[#f7f7f7] border-b border-[#ececec]">
                <div className = "container mx-auto justify-self-center flex justify-center items-center">
                </div>
            </div>
        </div>
    );
}

export default Page