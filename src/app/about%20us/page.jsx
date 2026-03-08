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

    const contentsSoftware = [
        {
            title: "Node.js",
            image: "nodejs",
            extension: "png",
            content: "Runtime สำหรับรัน JavaScript บนเซิร์ฟเวอร์ได้",
            description: "version 22.17.1",
            width: "1200",
            height: "735",
            link: "https://nodejs.org/en",
            symbol: "-",
            main: "-"
        },
        {
            title: "Next.js",
            image: "nextjs",
            extension: "avif",
            content: "Framework สำหรับพัฒนาเว็บแอปพลิเคชัน",
            description: "version 16.1.6",
            width: "512",
            height: "512",
            link: "https://nextjs.org/",
            symbol: "-",
            main: "-"
        },
        {
            title: "React",
            image: "react",
            extension: "png",
            content: "Library JavaScript สำหรับสร้าง UI",
            description: "version 19.2.3",
            width: "800",
            height: "720",
            link: "https://react.dev/",
            symbol: "-",
            main: "-"
        },
        {
            title: "Tailwind CSS",
            image: "tailwindcss",
            extension: "png",
            content: "Framework ของ CSS ที่ใช้สำหรับออกแบบ UI แบบรวดเร็ว",
            description: "version 4",
            width: "1280",
            height: "770",
            link: "https://tailwindcss.com/",
            symbol: "-",
            main: "-"
        },
        {
            title: "Font Awesome",
            image: "fontawesome",
            extension: "png",
            content: "Icon library สำหรับเอาสัญลักษณ์ต่าง ๆ มาใช้",
            description: "",
            width: "1200",
            height: "490",
            link: "https://www.fontawesome.com/",
            symbol: "-",
            main: "-"
        },
        {
            title: "Color Hunt",
            image: "colorhunt",
            extension: "gif",
            content: "Website ที่รวบรวมสีต่าง ๆ ที่เข้ากันได้อย่างสวยงาม",
            description: "",
            width: "320",
            height: "320",
            link: "https://colorhunt.co/",
            symbol: "-",
            main: "-"
        },
        {
            title: "Mongoose",
            image: "mongoose",
            extension: "png",
            content: "Library สำหรับทำงานกับฐานข้อมูล",
            description: "version 9.2.4",
            width: "280",
            height: "280",
            link: "https://mongoosejs.com/",
            symbol: "-",
            main: "-"
        },
        {
            title: "MongoDB Atlas",
            image: "mongodb",
            extension: "png",
            content: "ฐานข้อมูลแบบ MongoDB แบบคลาวด์",
            description: "",
            width: "512",
            height: "512",
            link: "https://www.mongodb.com/products/platform",
            symbol: "-",
            main: "-"
        },
        {
            title: "BCrypt.js",
            image: "bcrypt",
            extension: "webp",
            content: "Algorithm สำหรับเข้ารหัสของรหัสผ่าน",
            description: "version 3.0.3",
            width: "400",
            height: "400",
            link: "https://www.npmjs.com/package/bcryptjs",
            symbol: "-",
            main: "-"
        },
        {
            title: "NextAuth.js",
            image: "nextauthjs",
            extension: "png",
            content: "Library สำหรับจัดการระบบ authentication",
            description: "version 4.24.13",
            width: "327",
            height: "361",
            link: "https://next-auth.js.org/",
            symbol: "-",
            main: "-"
        },
        {
            title: "Chart.js",
            image: "chartjs",
            extension: "svg",
            content: "Library สำหรับจัดสร้างกราฟและแผนภูมิ",
            description: "version 4.5.1",
            width: "327",
            height: "361",
            link: "https://next-auth.js.org/",
            symbol: "-",
            main: "-"
        },
        {
            title: "Github Developers",
            image: "github",
            extension: "png",
            content: "ใช้เป็น Providers สำหรับการเข้าสู่ระบบ",
            description: "",
            width: "1200",
            height: "1200",
            link: "https://developer.github.com/",
            symbol: "-",
            main: "-"
        },
        {
            title: "Google Developers",
            image: "google",
            extension: "webp",
            content: "ใช้เป็น Providers สำหรับการเข้าสู่ระบบ",
            description: "",
            width: "250",
            height: "250",
            link: "https://developers.google.com/?hl=th",
            symbol: "-",
            main: "-"
        },
        {
            title: "Facebook Developers",
            image: "meta",
            extension: "webp",
            content: "ใช้เป็น Providers สำหรับการเข้าสู่ระบบ",
            description: "",
            width: "1280",
            height: "851",
            link: "https://developers.facebook.com/?locale=th_TH",
            symbol: "-",
            main: "-"
        },
        {
            title: "Visual Studio Code",
            image: "vscode",
            extension: "png",
            content: "Code editor สำหรับใช้เพื่อพัฒนาเว็บแอปพลิเคชันและโมเดล",
            description: "version 1.110.1",
            width: "1080",
            height: "1080",
            link: "https://code.visualstudio.com/",
            symbol: "-",
            main: "-"
        },
        {
            title: "Google Chrome",
            image: "google",
            extension: "webp",
            content: "Web Browser ใช้สำหรับแสดงเว็บแอพลิเคชันขณะพัฒนา",
            description: "version 145.0.7632.117",
            width: "250",
            height: "256",
            link: "https://www.google.com/intl/th_th/chrome/",
            symbol: "-",
            main: "-"
        },
        {
            title: "Vercel",
            image: "vercel",
            extension: "png",
            content: "Platform สำหรับ host เว็บไซต์แบบ dynamic",
            description: "version 47.0.5",
            width: "360",
            height: "360",
            link: "https://vercel.com/",
            symbol: "-",
            main: "-"
        },
        {
            title: "Vercel Analytics",
            image: "vercel",
            extension: "png",
            content: "Feature ใน Vercel ที่ให้ข้อมูลจากการวิเคราะห์เว็บไซต์",
            description: "version 1.6.1",
            width: "360",
            height: "360",
            link: "https://vercel.com/docs/analytics",
            symbol: "-",
            main: "-"
        },
        {
            title: "Vercel Speed Insights",
            image: "vercel",
            extension: "png",
            content: "Feature ใน Vercel ที่ให้ข้อมูลความเร็วในการโหลดเว็บไซต์",
            description: "version 1.3.1",
            width: "360",
            height: "360",
            link: "https://vercel.com/docs/speed-insights",
            symbol: "-",
            main: "-"
        },
        {
            title: "Git",
            image: "git",
            extension: "png",
            content: "โปรแกรมสำหรับ push source code เว็บแอปพลิเคชันขึ้น github",
            description: "version 2.49.0.windows.1",
            width: "383",
            height: "383",
            link: "https://git-scm.com/",
            symbol: "-",
            main: "-"
        },
    ];

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
            <Card title = "Software" subTitle = "We Use" description = "ซอฟแวร์ที่ใช้ในการพัฒนาเว็บแอปพลิเคชัน" contents = {contentsSoftware} w = "min-w-72 max-w-72" h = "h-70"/>
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