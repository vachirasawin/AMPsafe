// import from Next.js
import React from "react";

// import from components
import Navbar from "./components/Navbar";
import Title from "./components/TitleImage";
import Information from "./components/Information";
import Card from "./components/Card";
import Footer from "./components/Footer";

function Page() {
    const contentsHowTo = [
        {
            title: "Sign In",
            image: "-",
            extension: "-",
            content: "เข้าสู่ระบบเพื่อใช้งาน",
            description: "เข้าสู่ระบบ",
            width: "-",
            height: "-",
            link: "/sign%20in",
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
            link: "/dashboard#connect",
            symbol: "fa-solid fa-plug-circle-plus"
        },
        {
            title: "Dashboard",
            description: "ระบบแจ้งเตือนเมื่อพบความเสี่ยง",
            image: "-",
            extension: "-",
            content: "ดูข้อมูลต่าง ๆ ผ่านการวิเคราะห์ของ AI",
            width: "-",
            height: "-",
            link: "/dashboard",
            symbol: "bx bx-dashboard bx-remove-padding"
        },
        {
            title: "Export Datas",
            description: "ส่งออกข้อมูล",
            image: "-",
            extension: "-",
            content: "ส่งออกข้อมูลเป็นไฟล์ .csv / .json เพื่อนำไปวิเคราะห์ต่อได้",
            width: "-",
            height: "-",
            link: "/dashboard#export",
            symbol: "fa-solid fa-file"
        }
    ]

    return (
        <div>
            <Navbar home/>
            <Title image = "/industry.avif" title = "การพยากรณ์ช่วงของกระแสไฟฟ้าที่อาจทำให้เกิดความเสียหาย" relative/>
            <Information/>
            <Card title = "AMPsafe" subTitle = "How to Use" description = "วิธีการใช้งาน AMPsafe" contents = {contentsHowTo} w = "min-w-72 max-w-72" h = "h-70" inverse/>
            <div className = "px-4 bg-[#f7f7f7] border-b border-[#ececec]">
                <div className = "container mx-auto justify-self-center flex justify-center items-center">
                </div>
            </div>
            <Footer home/>
        </div>
    );
}

export default Page