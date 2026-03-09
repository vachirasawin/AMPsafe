// import from Next.js
import React from "react";

// import from components
import Navbar from "../components/Navbar";
import TitleImage from "../components/TitleImage";
import Card from "../components/Card";
import Information from "../components/Information";
import Footer from "../components/Footer";

function Page() {
    const contentsHowTuUseAMPnode = [
        {
            title: "Connect System",
            image: "-",
            extension: "-",
            content: "กรอก Key ที่มาพร้อม AMPnode ในหน้า Dashboard",
            description: "เชื่อมต่ออุปกรณ์",
            width: "-",
            height: "-",
            link: "-",
            symbol: "bx bx-plus-circle bx-remove-padding"
        },
        {
            title: "Connect System",
            image: "-",
            extension: "-",
            content: "กรอก Key ที่มาพร้อม AMPnode ในหน้า Dashboard",
            description: "เชื่อมต่ออุปกรณ์",
            width: "-",
            height: "-",
            link: "-",
            symbol: "bx bx-minus-circle bx-remove-padding"
        },
        {
            title: "Add Device",
            image: "-",
            extension: "-",
            content: "กรอก Key ที่มาพร้อม AMPnode ในหน้า Dashboard",
            description: "เพิ่มอุปกรณ์",
            width: "-",
            height: "-",
            link: "/dashboard#connect",
            symbol: "fa-solid fa-key"
        }
    ]

    const contentsHowToUseAMPsafe = [
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

    const contentsDeveloper = [
        {
            nameENG: "Mr. Vachirasawin Mahantaplanon",
            nameTH: "นายวชิรัศวิน มหันตพลานนท์",
            information: "<p>vachirasawin.mah@gmail.com</p><p>Tel. 095-591-1041</p>",
            image: "vachirasawin",
            width: 3000,
            height: 2000
        },
        {
            nameENG: "Mr. Possavee Meelun",
            nameTH: "นายพศวีร์ มีลุน",
            information: "<p>possavee.mee@sk-thonburi.ac.th</p><p>Tel. 065-587-9005</p>",
            image: "possavee",
            width: 3000,
            height: 2000,
        },
        {
            nameENG: "Ms. Kullamas Kaewthida",
            nameTH: "นางสาวกุลมาศ แก้วธิดา",
            information: "<p>kullamas.kae@sk-thonburi.ac.th</p><p>Tel. 096-749-6741</p>",
            image: "kullamas",
            width: 3000,
            height: 2000,
        }
    ]

    const contentsFAQs = [
        {
            title: "เหมาะกับโรงงานแบบไหน",
            image: "-",
            extension: "-",
            content: "เหมาะกับโรงงานที่ใช้มอเตอร์ไฟฟ้าเป็นหลัก และต้องการลดการหยุดชะงักของการผลิต",
            description: "",
            width: "-",
            height: "-",
            link: "-",
            symbol: "-",
            name: ""
        },
        {
            title: "ระบบต้องบำรุงรักษาบ่อยไหม",
            image: "-",
            extension: "-",
            content: "ระบบออกแบบมาให้ดูแลรักษาน้อยที่สุดโดยใช้ AMPnode อุปกรณ์ขนาดเล็กที่ติดตั้งกับเครื่องจักรโดยตรง ติดตั้งครั้งเดียวแล้วใช้งานได้ยาวนาน",
            description: "",
            width: "-",
            height: "-",
            link: "-",
            symbol: "-",
            name: ""
        },
        {
            title: "ระบบรองรับกี่เครื่อง",
            image: "-",
            extension: "-",
            content: "รองรับการเชื่อมต่อได้ไม่จำกัดจำนวน เพียงติดตั้ง AMPnode 1 ตัวต่อ 1 เครื่องจักร แล้วกรอก Key ผ่านหน้า Dashboard ได้เลย",
            description: "",
            width: "-",
            height: "-",
            link: "-",
            symbol: "-",
            name: ""
        },
        {
            title: "วิธีการสมัครสมาชิก",
            image: "-",
            extension: "-",
            content: "สมัครสมาชิกโดยการกรอกชื่อจริง email และรหัสผ่าน",
            description: "",
            width: "-",
            height: "-",
            link: "/sign%20up",
            symbol: "-",
            name: "Sign In"
        },
        {
            title: "วิธีการติดต่อกับทีมงาน",
            image: "-",
            extension: "-",
            content: "สามารถติดต่อกับทีมงานเพื่อให้คำแนะนำได้ผ่าน email ใน About Us",
            description: "",
            width: "-",
            height: "-",
            link: "/about%20us#developers",
            symbol: "-",
            name: "Developers"
        },
        {
            title: "วิธีการเชื่อมต่อ AMPnode ด้วย Key",
            image: "-",
            extension: "-",
            content: "สามารถกรอก Key ที่มาพร้อมกับ AMPnode ได้ในหน้า Dashboard เพื่อแสดงผล",
            description: "",
            width: "-",
            height: "-",
            link: "/dashboard#connect",
            symbol: "-",
            name: "Add Device"
        },
        {
            title: "วิธีการดูข้อมูล",
            image: "-",
            extension: "-",
            content: "สามารถดูข้อมูลผ่านการวิเคราะห์ด้วย AI ในหน้า Dashboard",
            description: "",
            width: "-",
            height: "-",
            link: "/dashboard",
            symbol: "-",
            name: "Dashboard"
        },
        {
            title: "วิธีการลบการเชื่อมต่อ AMPnode",
            image: "-",
            extension: "-",
            content: "สามารถลบการเชื่อมต่อ AMPnode ด้วยการกรอกชื่อที่ตั้งขึ้นเองในหน้า Dashboard",
            description: "",
            width: "-",
            height: "-",
            link: "/dashboard#delete",
            symbol: "-",
            name: "Delete Device"
        },
        {
            title: "วิธีการส่งออกข้อมูลการวิเคราะห์ของ AI",
            image: "-",
            extension: "-",
            content: "สามารถส่งออกข้อมูลการวิเคราะห์เพื่อนำไปใช้ต่อได้ในหน้า Dashboard",
            description: "",
            width: "-",
            height: "-",
            link: "/dashboard#export",
            symbol: "-",
            name: "Export Datas"
        }
    ]

    return (
        <div className = "scroll-mt-24">
            <Navbar aboutUs faqs/>
            <TitleImage image = "/industry.jpg" title = "การพยากรณ์ช่วงของกระแสไฟฟ้าที่อาจทำให้เกิดความเสียหาย" relative/>
            <Card title = {`<span>How to Use </span><span class = "text-blue-500">AMP</span><span>node</span>`} description = "วิธีการใช้งาน AMPnode" contents = {contentsHowTuUseAMPnode} w = "min-w-72 max-w-72" h = "h-70"/>
            <Card title = {`<span>How to Use </span><span class = "text-blue-500">AMP</span><span>safe</span>`} description = "วิธีการใช้งาน AMPsafe" contents = {contentsHowToUseAMPsafe} w = "min-w-72 max-w-72" h = "h-70"/>
            <div id = "developers" className = "scroll-mt-24">
                <TitleImage image = "/developers.jpg" title = "Developers"/>
                {contentsDeveloper.map((content, item) => (
                    <Information
                        title = {content.nameENG}
                        description = {content.nameTH}
                        content = {content.information}
                        image = {[content.image, "png", content.width, content.height]}
                        reverse = {item % 2 === 0 ? false : true}
                        id = {item}
                        key = {item}
                    />
                ))}
            </div>
            <div id = "faqs" className = "scroll-mt-24">
                <Card title = {`<span class = "text-blue-500">FAQs</span>`} description = "คำถามที่พบบ่อย" contents = {contentsFAQs} w = "min-w-72 max-w-72" h = "h-70"/>
            </div>
            <Footer aboutUs faqs developers/>
        </div>
    );
}

export default Page