// import from Next.js
import React from "react";

// import from components
import DoughnutChart from "./DoughnutChart";

function DoughnutDashboard({ contentsItem, contentsCount}) {
    return (
        <div className = "bg-white p-8 shadow-lg rounded-xl flex flex-col gap-4 w-max max-md:w-full">
            <h3 className = "font-bold text-[#171717] text-xl">Device Distribution</h3>
            <DoughnutChart contentsItem = {contentsItem} showCount = "safe"/>
            <div className = "flex flex-col gap-2">
                {contentsCount.map((item, index) => (
                    <div key = {index} className = "flex justify-between items-center text-sm">
                        <div className = "flex items-center gap-2">
                            <div className = {`w-4 h-4 rounded-sm ${item.bg}`}></div>
                            <span className = "text-[#9497a1]">{item.name}</span>
                        </div>
                        <span className = "font-bold">
                            {new Intl.NumberFormat('en-US', {
                                notation: item.count >= 1000 ? "compact" : "standard",
                                compactDisplay: "short",
                            }).format(item.count)}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DoughnutDashboard