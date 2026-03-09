// import from Next.js
import React from "react";

// import from components
import Navbar from "../components/Navbar";
import TitleImage from "../components/TitleImage";
import Card from "../components/Card";
import Information from "../components/Information";
import Footer from "../components/Footer";

function Page() {
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

    const contentsSoftware = [
        {
            title: "Node.js",
            image: "nodejs",
            extension: "webp",
            content: "JS Runtime Environment แบบโอเพนซอร์สที่ทำงานฝั่ง Server",
            description: "version 22.14.0",
            width: "1280",
            height: "784",
            link: "https://nodejs.org/en",
            symbol: "-",
            name: ""
        },
        {
            title: "npm",
            image: "npm",
            extension: "png",
            content: "Node Package Manager มาตรฐานสำหรับ Environment ของ Next.js",
            description: "version 10.9.2",
            width: "1280",
            height: "498",
            link: "https://www.npmjs.com/",
            symbol: "-",
            name: ""
        },
        {
            title: "React",
            image: "react",
            extension: "png",
            content: "Library JS ที่ใช้สร้าง UI ที่ตอบสนองได้รวดเร็ว",
            description: "version 19.2.3",
            width: "960",
            height: "855",
            link: "https://react.dev/",
            symbol: "-",
            name: ""
        },
        {
            title: "Next.js",
            image: "nextjs",
            extension: "svg",
            content: "React Framework ประสิทธิภาพสูงสำหรับพัฒนา Full-stack Web Application",
            description: "version 16.1.6",
            width: "1365",
            height: "1365",
            link: "https://nextjs.org/",
            symbol: "-",
            name: ""
        },
        {
            title: "MongoDB Atlas",
            image: "mongodb",
            extension: "svg",
            content: "ระบบจัดการฐานข้อมูล NoSQL แบบ Cloud Service ที่มีความยืดหยุ่นสูง",
            description: "version 8.0.19",
            width: "120",
            height: "258",
            link: "https://www.mongodb.com/",
            symbol: "-",
            name: ""
        },
        {
            title: "Mongoose",
            image: "mongoose",
            extension: "png",
            content: "Library สำหรับจัดการโครงสร้างข้อมูลและเชื่อมต่อ MongoDB บน Node.js",
            description: "version 9.2.4",
            width: "840",
            height: "370",
            link: "https://mongoosejs.com/",
            symbol: "-",
            name: ""
        },
        {
            title: "BCrypt.js",
            image: "bcryptjs",
            extension: "webp",
            content: "Library สำหรับการเข้ารหัสผ่าน (Hashing) เพื่อความปลอดภัยสูงสุดของข้อมูล",
            description: "version 3.0.3",
            width: "400",
            height: "400",
            link: "https://www.npmjs.com/package/bcryptjs",
            symbol: "-",
            name: ""
        },
        {
            title: "NextAuth.js",
            image: "nextauthjs",
            extension: "png",
            content: "Open-Source Library สำหรับจัดการระบบ Authentication และการ Login ที่ออกแบบมาเพื่อ Next.js โดยเฉพาะ",
            description: "version 4.24.13",
            width: "327",
            height: "361",
            link: "https://next-auth.js.org/",
            symbol: "-",
            name: ""
        },
        {
            title: "Github Developers",
            image: "github",
            extension: "webp",
            content: "Platform ให้บริการ OAuth API เพื่อรองรับการ Login ผ่านบัญชี Github",
            description: "Cloud API Service",
            width: "512",
            height: "512",
            link: "https://developer.github.com/",
            symbol: "-",
            name: ""
        },
        {
            title: "Google Developers",
            image: "google",
            extension: "png",
            content: "Platform ให้บริการ OAuth API เพื่อรองรับการ Login ผ่านบัญชี Google",
            description: "Cloud API Service",
            width: "3840",
            height: "3840",
            link: "https://developers.google.com/?hl=th",
            symbol: "-",
            name: ""
        },
        {
            title: "Facebook Developers",
            image: "meta",
            extension: "png",
            content: "Platform ให้บริการ OAuth API เพื่อรองรับการ Login ผ่านบัญชี Facebook และ Meta",
            description: "Cloud API Service",
            width: "1567",
            height: "1041",
            link: "https://developers.facebook.com/?locale=th_TH",
            symbol: "-",
            name: ""
        },
        {
            title: "Chart.js",
            image: "chartjs",
            extension: "png",
            content: "Library สำหรับสร้างกราฟและแผนภูมิแสดงข้อมูลที่สวยงามและใช้งานง่าย",
            description: "version 4.5.1",
            width: "1280",
            height: "1280",
            link: "https://www.chartjs.org/",
            symbol: "-",
            name: ""
        },
        {
            title: "React Chart.js 2",
            image: "reactchart",
            extension: "svg",
            content: "Component เสริมสำหรับนำ Chart.js มาใช้งานร่วมกับ React ได้อย่างสมบูรณ์",
            description: "version 5.3.1",
            width: "200",
            height: "200",
            link: "https://react-chartjs-2.js.org/",
            symbol: "-",
            name: ""
        },
        {
            title: "ESLint",
            image: "eslint",
            extension: "svg",
            content: "เครื่องมือตรวจสอบและจัดระเบียบโครงสร้างโค้ด JavaScript ให้มีคุณภาพ",
            description: "version 9.0",
            width: "324",
            height: "285",
            link: "https://eslint.org/",
            symbol: "-",
            name: ""
        },
        {
            title: "Google Font",
            image: "googlefont",
            extension: "png",
            content: "Font Library",
            description: "Font Service สำหรับฟอนต์ต่าง ๆ",
            width: "600",
            height: "600",
            link: "https://fonts.google.com/",
            symbol: "-",
            name: ""
        },
        {
            title: "Tailwind CSS",
            image: "tailwindcss",
            extension: "png",
            content: "Framework สำหรับเขียน CSS ที่เน้นความรวดเร็วและการปรับแต่งที่เป็นอิสระ",
            description: "version 4.0",
            width: "800",
            height: "489",
            link: "https://tailwindcss.com/",
            symbol: "-",
            name: ""
        },
        {
            title: "cdnjs",
            image: "cdnjs",
            extension: "svg",
            content: "เครือข่ายส่งข้อมูลประสิทธิภาพสูงสำหรับดึง Library มาใช้งานบนหน้าเว็บ",
            description: "CDN Service for Icons Library",
            width: "412",
            height: "113",
            link: "https://cdnjs.com/",
            symbol: "-",
            name: ""
        },
        {
            title: "Font Awesome",
            image: "fontawesome",
            extension: "png",
            content: "Icon Library สำหรับสัญลักษณ์ต่าง ๆ",
            description: "version 7.0.0",
            width: "920",
            height: "920",
            link: "https://fontawesome.com/",
            symbol: "-",
            name: ""
        },
        {
            title: "Remix Icon",
            image: "remixicon",
            extension: "png",
            content: "Icon Library สำหรับสัญลักษณ์ต่าง ๆ",
            description: "version 4.9.1",
            width: "1000",
            height: "1000",
            link: "https://remixicon.com/",
            symbol: "-",
            name: ""
        },
        {
            title: "Vercel CLI",
            image: "vercel",
            extension: "png",
            content: "Cloud Platform สำหรับ Deploy และ Hosting เว็บไซต์ที่มีประสิทธิภาพสูง",
            description: "version 47.0.5",
            width: "400",
            height: "400",
            link: "https://vercel.com/",
            symbol: "-",
            name: ""
        },
        {
            title: "Vercel Web Analytics",
            image: "vercel",
            extension: "png",
            content: "ระบบวิเคราะห์พฤติกรรมผู้ใช้งานและปริมาณการเข้าชมเว็บแบบ Real-time",
            description: "version 1.6.1",
            width: "400",
            height: "400",
            link: "https://vercel.com/docs/analytics",
            symbol: "-",
            name: ""
        },
        {
            title: "Vercel Speed Insights",
            image: "vercel",
            extension: "png",
            content: "เครื่องมือวัดประสิทธิภาพความเร็วของเว็บไซต์ตามมาตรฐาน Core Web Vitals",
            description: "version 1.3.1",
            width: "400",
            height: "400",
            link: "https://vercel.com/docs/speed-insights",
            symbol: "-",
            name: ""
        },
        {
            title: "Git",
            image: "git",
            extension: "png",
            content: "ระบบควบคุมเวอร์ชันของซอฟต์แวร์เพื่อติดตามการเปลี่ยนแปลงของโค้ด",
            description: "version 2.49.0.windows.1",
            width: "1024",
            height: "1024",
            link: "https://git-scm.com/",
            symbol: "-",
            name: ""
        },
        {
            title: "Google Chrome",
            image: "chrome",
            extension: "webp",
            content: "Browser มาตรฐานที่ใช้ในการทดสอบและปรับแต่งการแสดงผลเว็บไซต์",
            description: "version 145.0.7632.160",
            width: "1280",
            height: "1280",
            link: "https://www.google.com/intl/th_th/chrome/",
            symbol: "-",
            name: ""
        }
    ]

    return (
        <div className = "scroll-mt-24">
            <Navbar aboutUs/>
            <div id = "developers" className = "scroll-mt-28">
                <TitleImage image = "/developers.jpg" title = "Developers" relative/>
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
            <Card title = {`<span class = "text-blue-500">Software</span> We Use`} description = "ซอฟต์แวร์ที่ใช้ในการสร้างเว็บแอปพลิเคชัน" contents = {contentsSoftware} w = "min-w-72 max-w-72" h = "h-82" id = "software"/>
            <Footer aboutUs/>
        </div>
    );
}

export default Page