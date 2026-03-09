// import from Next.js
import React from "react";

// import from components
import Navbar from "../components/Navbar";
import TitleImage from "../components/TitleImage";
import Information from "../components/Information";
import Footer from "../components/Footer";

function Page() {
    const contentsModel = [
        {
            title: "Model Name",
            description: "ชื่อโมเดล",
            content: `
                <p>เนื้อหาของโมเดล</p>
                <div class = "flex items-center gap-2 mt-2 max-md:mt-1">
                    <i class = "fa-regular fa-circle-check text-lg max-md:text-xs text-blue-500"></i>
                    <p>ข้อดีโมเดล</p>
                </div>
                <div class = "flex items-center gap-2">
                    <i class = "fa-regular fa-circle-xmark text-lg max-md:text-xs text-[#f55555]"></i>
                    <p>ข้อเสียโมเดล</p>
                </div>
            `,
            link: "",
            image: "-",
            width: 3000,
            height: 2000
        },
        {
            title: "Model Name",
            description: "ชื่อโมเดล",
            content: `
                <p>เนื้อหาของโมเดล</p>
                <div class = "flex items-center gap-2 mt-2 max-md:mt-1">
                    <i class = "fa-regular fa-circle-check text-lg max-md:text-xs text-blue-500"></i>
                    <p>ข้อดีโมเดล</p>
                </div>
                <div class = "flex items-center gap-2">
                    <i class = "fa-regular fa-circle-xmark text-lg max-md:text-xs text-[#f55555]"></i>
                    <p>ข้อเสียโมเดล</p>
                </div>
            `,
            link: "",
            image: "-",
            width: 3000,
            height: 2000
        },
        {
            title: "Model Name",
            description: "ชื่อโมเดล",
            content: `
                <p>เนื้อหาของโมเดล</p>
                <div class = "flex items-center gap-2 mt-2 max-md:mt-1">
                    <i class = "fa-regular fa-circle-check text-lg max-md:text-xs text-blue-500"></i>
                    <p>ข้อดีโมเดล</p>
                </div>
                <div class = "flex items-center gap-2">
                    <i class = "fa-regular fa-circle-xmark text-lg max-md:text-xs text-[#f55555]"></i>
                    <p>ข้อเสียโมเดล</p>
                </div>
            `,
            link: "",
            image: "-",
            width: 3000,
            height: 2000
        }
    ]

    return (
        <div>
            <Navbar/>
            <TitleImage image = "/ai.jpg" title = "เปรียบเทียบโมเดลในการวิเคราะห์กระแสไฟฟ้า" relative/>
            {contentsModel.map((content, item) => (
                <Information
                    key = {item}
                    title = {content.title}
                    description = {content.description}
                    content = {content.content}
                    link = {content.link}
                    image = {[content.image, "png", content.width, content.height]}
                    reverse = {item % 2 === 0 ? false : true}
                    id = {item}
                />
            ))}
            <Footer models/>
        </div>
    );
}

export default Page