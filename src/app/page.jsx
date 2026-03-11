// import from Next.js
import React from "react";

// import from components
import Navbar from "./components/Navbar";
import TitleImage from "./components/TitleImage";
import Information from "./components/Information";
import Card from "./components/Card";
import Subscription from "./components/Subscription";
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

    const contentsSubscription = [
        {
            title: "Free Trial",
            price: ["$0", "$0"],
            content: ["", "", ""]
        },
        {
            title: "Professional",
            price: ["$20", "$200"],
            content: ["", "", ""]
        },
        {
            title: "Organization",
            price: ["$50", "$500"],
            content: ["", "", ""]
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
            <Card title = {`How to Use <span class = "text-blue-500">AMP</span>node`} description = "วิธีการใช้งาน AMPnode" contents = {contentsHowTuUseAMPnode} id = "AMPnode"/>
            <Card title = {`How to Use <span class = "text-blue-500">AMP</span>safe`} description = "วิธีการใช้งาน AMPsafe" contents = {contentsHowToUseAMPsafe} id = "AMPsafe"/>
            {/* <Subscription title = {`<span class = "text-blue-500">Pricing</span> Plans`} description = "แพ็กเกจราคา" contents = {contentsSubscription} id = "subscription"/> */}
            <Footer home/>
        </div>
    );
}

export default Page