// import from Next.js
import React from "react";

// import from components
import Navbar from "./components/Navbar";
import TitleImage from "./components/TitleImage";
import Information from "./components/Information";
import Card from "./components/Card";
import Footer from "./components/Footer";

function Page() {
    const contentsHowTuUseAMPnode = [
        {
            title: "Connect System",
            image: "-",
            extension: "-",
            content: "หนีบ AMPnode กับสายไฟของเครื่องจักร",
            description: "เชื่อมต่ออุปกรณ์",
            width: "-",
            height: "-",
            link: "-",
            symbol: "fa-solid fa-bolt"
        },
        {
            title: "Connect WiFi",
            image: "-",
            extension: "-",
            content: "เชื่อมต่อ WiFi เพื่อให้ AMPnode ส่งข้อมูล",
            description: "เชื่อมต่อ WiFi",
            width: "-",
            height: "-",
            link: "-",
            symbol: "ri-wifi-fill"
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
            symbol: "ri-key-2-fill"
        },
        
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
            symbol: "ri-dashboard-line"
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
            symbol: "ri-file-chart-line"
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
        <div>
            <Navbar home/>
            <TitleImage image = "/industry.jpg" title = "ระบบตรวจจับความผิดปกติทางไฟฟ้าในเครื่องจักรอุตสาหกรรมด้วย AI" relative/>
            <Information
                title = {`<span class = "text-blue-500">AMP</span><span>safe</span>`}
                description = "ระบบตรวจจับความผิดปกติทางไฟฟ้าในเครื่องจักรอุตสาหกรรมด้วย AI"
                content = {`
                    <p>
                        ระบบที่สามารถวัดกระแสไฟฟ้าและสามารถบอกได้ว่าเครื่องจักรของคุณมีกระแสไฟฟ้าที่สามารถเกิดความเสียหายได้หรือไม่ทั้งหมดนี้ขับเคลื่อนด้วยปัญญาประดิษฐ์เฉพาะของ AMPsafe ที่มีความแม่นยำเป็นอย่างสูงและสร้างความปลอดภัยให้แก่เครื่องจักรของคุณ
                    </p>
                `}
                link = {[
                    {
                        name: "How to Use",
                        link: "/#AMPsafe"
                    },
                    {
                        name: "FAQs",
                        link: "/about%20us#faqs"
                    }
                ]}
                image = {["industry", "jpg", 1422, 800]}
            />
            <Information
                title = {`<span class = "text-blue-500">AMP</span><span>node</span>`}
                description = "อุปกรณ์เซ็นเซอร์วัดกระแสไฟฟ้า"
                content = {`
                    <p>
                        อุปกรณ์ IoT ขนาดเล็ก ทำหน้าที่ วัดกระแสไฟฟ้าส่งข้อมูลผ่าน WiFi แปลงค่ากระแสเป็นข้อมูลดิจิทัลแล้วส่งไปยัง AMPsafe API ผ่านอินเทอร์เน็ต โดยอุปกรณ์ประกอบไปด้วย CT Sensor (ACS712) สำหรับวัดกระเเสไฟฟ้าเเละ microcontroller (ESP32) สำหรับประมวลผล
                    </p>
                `}
                link = {[
                    {
                        name: "How to Use",
                        link: "/#AMPnode"
                    },
                    {
                        name: "FAQs",
                        link: "/about%20us#faqs"
                    }
                ]}
                image = {["ampnode", "png", 1146, 828]}
                reverse
            />
            <Card title = {`<span>How to Use </span><span class = "text-blue-500">AMP</span><span>node</span>`} description = "วิธีการใช้งาน AMPnode" contents = {contentsHowTuUseAMPnode} id = "AMPnode"/>
            <Card title = {`<span>How to Use </span><span class = "text-blue-500">AMP</span><span>safe</span>`} description = "วิธีการใช้งาน AMPsafe" contents = {contentsHowToUseAMPsafe} id = "AMPsafe"/>
            <Card title = {`<span class = "text-blue-500">FAQs</span>`} description = "คำถามที่พบบ่อย" contents = {contentsFAQs}/>
            <Footer home/>
        </div>
    );
}

export default Page