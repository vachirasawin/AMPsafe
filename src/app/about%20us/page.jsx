// import from Next.js
import React from "react";

// import from components
import Navbar from "../components/Navbar";
import Title from "../components/TitleImage";
import Card from "../components/Card";
import Developer from "../components/Developer";
import Footer from "../components/Footer";

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

    const contentsDeveloper = [
        {
            nameENG: "Mr. Vachirasawin Mahantaplanon",
            nameTH: "นายวชิรัศวิน มหันตพลานนท์",
            information: [
                "vachirasawin.mah@gmail.com",
                "Tel. 095-591-1041"
            ],
            image: "vachirasawin",
            width: 3000,
            height: 2000
        },
        {
            nameENG: "Mr. Possavee Meelun",
            nameTH: "นายพศวีร์ มีลุน",
            information: [
                "possavee.mee@sk-thonburi.ac.th",
                "Tel. 065-587-9005"
            ],
            image: "possavee",
            width: 3000,
            height: 2000,
        },
        {
            nameENG: "Ms. Kullamas Kaewthida",
            nameTH: "นางสาวกุลมาศ แก้วธิดา",
            information: [
                "kullamas.kae@sk-thonburi.ac.th",
                "Tel. 096-749-6741"
            ],
            image: "kullamas",
            width: 3000,
            height: 2000,
        }
    ]
    const contentsFAQs = [
        {
            title: "Question",
            image: "-",
            extension: "-",
            content: "Answer",
            description: "คำถาม",
            width: "-",
            height: "-",
            link: "-",
            symbol: "-"
        },
        {
            title: "Question",
            image: "-",
            extension: "-",
            content: "Answer",
            description: "คำถาม",
            width: "-",
            height: "-",
            link: "-",
            symbol: "-"
        },
        {
            title: "Question",
            image: "-",
            extension: "-",
            content: "Answer",
            description: "คำถาม",
            width: "-",
            height: "-",
            link: "-",
            symbol: "-"
        }
    ]

    return (
        <div className = "scroll-mt-24">
            <Navbar aboutUs/>
            <Title image = "/industry.avif" title = "การพยากรณ์ช่วงของกระแสไฟฟ้าที่อาจทำให้เกิดความเสียหาย" relative/>
            <Card title = "AMPsafe" subTitle = "How to Use" description = "วิธีการใช้งาน AMPsafe" contents = {contentsHowTo} w = "min-w-72 max-w-72" h = "h-70" inverse/>
            <div id = "developers" className = "scroll-mt-24">
                <Title image = "/developers.jpg" title = "Developers"/>
                <Developer contents = {contentsDeveloper}/>
            </div>
            <div id = "faqs" className = "scroll-mt-24">
                <Card title = "FAQs" description = "คำถามที่พบบ่อย" contents = {contentsFAQs} w = "min-w-72 max-w-72" h = "h-70" inverse/>
            </div>
            <div className = "px-4 bg-[#f7f7f7] border-b border-[#ececec]">
                <div className = "container mx-auto justify-self-center flex justify-center items-center">
                </div>
            </div>
            <Footer aboutUs faqs developers/>
        </div>
    );
}

export default Page