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
            title: "Traditional Thresholding",
            description: "Fixed Rule Detection",
            content: `
                <p>ไม่ใช้ model นี้เพราะการตั้งค่าตายตัวไม่ยืดหยุ่น เครื่องจักรแต่ละตัวมีกระแสปกติไม่เท่ากัน False Alarm สูงมากไม่เหมาะกับโรงงานจริง</p>
                <div class = "flex items-start gap-2 mt-2 max-md:mt-1">
                    <i class = "fa-regular fa-circle-check text-lg max-md:text-xs text-blue-500 mt-1 max-md:mt-[6px]"></i>
                    <div>
                        <p>เข้าใจง่ายมาก</p>
                        <p>ไม่ต้องเทรน</p>
                    </div>
                </div>
                <div class = "flex items-start gap-2">
                    <i class = "fa-regular fa-circle-xmark text-lg max-md:text-xs text-[#f55555] mt-1 max-md:mt-[6px]"></i>
                    <div>
                        <p>False Alarm สูง</p>
                        <p>ปรับตามเครื่องจักรไม่ได้</p>
                        <p>ความแม่นยำต่ำสุด 60% - 75%</p>
                    </div>
                </div>
            `,
            link: "",
            image: "model1",
            width: 1890,
            height: 1193
        },
        {
            title: "One-Class SVM",
            description: "Decision Boundary",
            content: `
                <p>ไม่ใช้ model นี้เพราะถึงเเม้จะทำงานได้ดีกับข้อมูลน้อยแต่ช้ามากเมื่อ scale ขึ้นไม่เหมาะกับ real-time monitoring หลายเครื่อง</p>
                <div class = "flex items-start gap-2 mt-2 max-md:mt-1">
                    <i class = "fa-regular fa-circle-check text-lg max-md:text-xs text-blue-500 mt-1 max-md:mt-[6px]"></i>
                    <div>
                        <p>ทำงานได้ดีกับ Data น้อย</p>
                        <p>ไม่ต้องการ Fault Labels</p>
                    </div>
                </div>
                <div class = "flex items-start gap-2">
                    <i class = "fa-regular fa-circle-xmark text-lg max-md:text-xs text-[#f55555] mt-1 max-md:mt-[6px]"></i>
                    <div>
                        <p>ช้าเมื่อ Data เยอะ</p>
                        <p>เลือก Kernel ยาก</p>
                    </div>
                </div>
            `,
            link: "",
            image: "model2",
            width: 1890,
            height: 1193
        },
        {
            title: "Random Forest",
            description: "Feature Importance",
            content: `
                <p>ไม่ใช้ model นี้เพราะต้องการ fault labels ก่อนแต่โรงงานจริงไม่มีข้อมูลเครื่องพังเก็บไว้ ต้องรอให้เครื่องพังก่อนถึงจะเทรนได้</p>
                <div class = "flex items-start gap-2 mt-2 max-md:mt-1">
                    <i class = "fa-regular fa-circle-check text-lg max-md:text-xs text-blue-500 mt-1 max-md:mt-[6px]"></i>
                    <div>
                        <p>แม่นยำสูงเมื่อมี Labels</p>
                        <p>บอกได้ว่า Feature ไหนสำคัญ</p>
                        <p>Inference เร็ว</p>
                    </div>
                </div>
                <div class = "flex items-start gap-2">
                    <i class = "fa-regular fa-circle-xmark text-lg max-md:text-xs text-[#f55555] mt-1 max-md:mt-[6px]"></i>
                    <div>
                        <p>ต้องการ Fault Labels</p>
                        <p>ไม่รู้จัก Fault ใหม่</p>
                    </div>
                </div>
            `,
            link: "",
            image: "model3",
            width: 1890,
            height: 1193
        },
        {
            title: "LSTM Autoencoder",
            description: "Reconstruction Error",
            content: `
                <p>ไม่ใช้ model นี้เพราะถึงเเม้จะแม่นยำที่สุดแต่ต้องการข้อมูลหลายเดือนและ GPU ในการเทรน ซับซ้อนเกินไปสำหรับ Prototype</p>
                <div class = "flex items-start gap-2 mt-2 max-md:mt-1">
                    <i class = "fa-regular fa-circle-check text-lg max-md:text-xs text-blue-500 mt-1 max-md:mt-[6px]"></i>
                    <div>
                        <p>จับ Pattern ซับซ้อนได้ดี</p>
                        <p>ไม่ต้องการ Fault Data</p>
                        <p>แม่นยำสูงสุด</p>
                    </div>
                </div>
                <div class = "flex items-start gap-2">
                    <i class = "fa-regular fa-circle-xmark text-lg max-md:text-xs text-[#f55555] mt-1 max-md:mt-[6px]"></i>
                    <div>
                        <p>เทรนช้า ต้องการ GPU</p>
                        <p>ต้องการข้อมูลเยอะ</p>
                    </div>
                </div>
            `,
            link: "",
            image: "model4",
            width: 1890,
            height: 1193
        },
        {
            title: "Isolation Forest",
            description: "Anomaly Detection",
            content: `
                <p>ใช้ model นี้เพราะไม่ต้องการ fault data เลย เร็ว deploy ง่ายเหมาะกับ Prototype มากที่สุด</p>
                <div class = "flex items-start gap-2 mt-2 max-md:mt-1">
                    <i class = "fa-regular fa-circle-check text-lg max-md:text-xs text-blue-500 mt-1 max-md:mt-[6px]"></i>
                    <div>
                        <p>แม่นยำสูงเมื่อมี Labels</p>
                        <p>บอกได้ว่า Feature ไหนสำคัญ</p>
                        <p>Inference เร็ว</p>
                    </div>
                </div>
                <div class = "flex items-start gap-2">
                    <i class = "fa-regular fa-circle-xmark text-lg max-md:text-xs text-[#f55555] mt-1 max-md:mt-[6px]"></i>
                    <div>
                        <p>ต้องการ Fault Labels</p>
                        <p>ไม่รู้จัก Fault ใหม่</p>
                    </div>
                </div>
            `,
            link: "",
            image: "model5",
            width: 1890,
            height: 1193
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