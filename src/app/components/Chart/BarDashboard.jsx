// import from Next.js
import React from "react";

// import from components
import BarChart from "./BarChart";

function LineDashboard({ historyCount, contentsCount }) {
    return (
        <div className = "bg-white shadow-lg rounded-xl flex flex-col w-[41rem] max-md:w-full h-[28.5rem] max-md:h-[25.5rem] relative overflow-hidden scroll-mt-28">
            <div className = "absolute inset-0 flex flex-col justify-center items-center text-[#ececec] gap-2 pointer-events-none select-none z-0">
                <i className = "text-7xl fa-solid fa-chart-column"></i>
                <p className = "font-bold text-xl uppercase">Device Status Distribution</p>
            </div>
            <div className = "p-8 flex flex-col gap-4 w-full h-full relative z-10">
                <h3 className = "font-bold text-[#171717] text-xl">Device Status Distribution</h3>
                <BarChart historyCount = {historyCount}/>
                <div className = "flex flex-col gap-2">
                    {contentsCount.map((item, index) => (item.status != "online" && item.status != "offline") && (
                        <div key = {index} className = "flex justify-between items-center text-sm">
                            <div className = "flex items-center gap-2">
                                <div className = {`w-4 h-4 rounded-sm ${item.bg}`}></div>
                                <span className = "text-[#9497a1]">{item.name}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default LineDashboard