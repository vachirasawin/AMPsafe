// import from Next.js
import React from "react";

// import from components
import DoughnutChart from "./DoughnutChart";

function DoughnutDashboard({ contentsItem, contentsCount}) {
    const totalDevices = contentsCount.reduce((acc, item) => acc + item.count, 0);

    return (
        <div className = "bg-white shadow-lg rounded-xl flex flex-col w-[20rem] max-md:w-full h-[28.5rem] max-md:h-[25.5rem] relative overflow-hidden">
            <div className = "absolute inset-0 flex flex-col justify-center items-center text-[#ececec] gap-2 pointer-events-none select-none z-0">
                <i className = "text-7xl fa-solid fa-chart-pie"></i>
                <p className = "font-bold text-xl uppercase">
                    Device Status Overview
                </p>
            </div>
            <div className = "p-8 flex flex-col gap-4 w-full h-full relative z-10">
                <h3 className = "font-bold text-[#171717] text-xl">Device Status Overview</h3>
                <DoughnutChart contentsItem = {contentsItem}/>
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
        </div>
    );
}

export default DoughnutDashboard