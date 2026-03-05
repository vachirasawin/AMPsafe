// import from Next.js
import React from "react";

// import from components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Page() {
    return (
        <div>
            <Navbar dashboard session/>
            <div className = "mt-24 relative">
                <div className = "px-4 bg-[#f7f7f7] border-b border-[#ececec]">
                    <div className = "container mx-auto justify-self-center flex justify-center items-center">
                    </div>
                </div>
            </div>
            <Footer dashboard session/>
        </div>
    );
}

export default Page