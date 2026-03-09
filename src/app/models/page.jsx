// import from Next.js
import React from "react";

// import from components
import Navbar from "../components/Navbar";
import TitleImage from "../components/TitleImage";
import Footer from "../components/Footer";

function Page() {
    return (
        <div>
            <Navbar/>
            <TitleImage image = "/ai.jpg" title = "เปรียบเทียบโมเดลในการวิเคราะห์กระแสไฟฟ้า" relative/>
            <Footer models/>
        </div>
    );
}

export default Page