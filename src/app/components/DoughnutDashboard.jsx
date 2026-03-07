// import from Next.js
import React from "react";

// import from components
import DoughnutChart from "./DoughnutChart";

function DoughnutDashboard({ contentsItem, contentsCount}) {
    const totalDevices = contentsCount.reduce((acc, item) => acc + item.count, 0);

    return (
        <div className = "bg-white p-8 shadow-lg rounded-xl flex flex-col gap-4 w-max max-md:w-full">
            <h3 className = "font-bold text-[#171717] text-xl">Device Status Overview</h3>
            <DoughnutChart contentsItem = {contentsItem} showCount = "safe"/>
            <div className = "flex flex-col gap-2">
                {contentsCount.map((item, index) => {
                    const percentage = totalDevices > 0 ? Math.round((item.count / totalDevices) * 100) : 0;

                    return (
                        <div key = {index} className = "flex justify-between items-center text-sm">
                            <div className = "flex items-center gap-2">
                                <div className = {`w-4 h-4 rounded-sm ${item.bg}`}></div>
                                <span className = "text-[#9497a1]">{item.name}</span>
                            </div>
                            <div className = "w-max flex gap-4 items-center">
                                <p className = "font-bold w-10 flex justify-center items-center">
                                    {new Intl.NumberFormat('en-US', {
                                        notation: item.count >= 1000 ? "compact" : "standard",
                                        compactDisplay: "short",
                                    }).format(item.count)}
                                </p>
                                <p className = "font-bold w-10 flex justify-center items-center">
                                    {percentage}%
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default DoughnutDashboard