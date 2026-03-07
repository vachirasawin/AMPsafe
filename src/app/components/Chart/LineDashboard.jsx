// import from Next.js
import React from "react";

// import from components
import LineChart from "./LineChart";

function LineDashboard({ contentsItem }) {
    return (
        <div className = "bg-white shadow-lg rounded-xl flex flex-col w-[41rem] max-md:w-full h-[28.5rem] max-md:h-[25.5rem] relative overflow-hidden">
            <div className = "absolute inset-0 flex flex-col justify-center items-center text-[#ececec] gap-2 pointer-events-none select-none z-0">
                <i className = "text-7xl fa-solid fa-chart-area"></i>
                <p className = "font-bold text-xl uppercase">
                    Device Status Overview
                </p>
            </div>
            <div className = "p-8 flex flex-col gap-4 w-full h-full relative z-10">
                <h3 className = "font-bold text-[#171717] text-xl">Device Status Overview</h3>
                <LineChart contentsItem = {contentsItem}/>
            </div>
        </div>
    );
}

export default LineDashboard