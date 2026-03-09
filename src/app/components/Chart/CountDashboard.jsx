// import from Next.js
import React from "react";

function CountDashboard({ contentsCount }) {
    return (
        <div className = "bg-white shadow-lg rounded-xl flex flex-col w-[20rem] max-md:w-full h-[28.5rem] max-md:h-[25.5rem] relative overflow-hidden scroll-mt-28">
            <div className = "absolute inset-0 flex flex-col justify-center items-center text-[#ececec] gap-2 pointer-events-none select-none z-0">
                <i className = "text-7xl fa-solid fa-boxes-stacked"></i>
                <p className = "font-bold text-xl uppercase">Device Inventory</p>
            </div>
            <div className = "p-8 pr-6 flex flex-col gap-4 w-full h-full relative z-10">
                <h3 className = "font-bold text-[#171717] text-xl">Device Inventory</h3>
                <div className = "flex flex-col gap-2 overflow-y-auto styleScrollbar pr-2 w-full h-full">
                    {contentsCount.map((item, index) => (
                        <div key = {index} className = "border border-[#ececec] bg-white backdrop-blur-[2px] rounded-xl w-full h-max">
                            <div className = "py-0 px-0 flex justify-start items-center gap-4">
                                <div className = {`border-r border-[#ececec] w-16 h-16 min-w-16 min-h-16 flex justify-center items-center rounded-l-xl aspect-square text-xl ${item.color}`}>
                                    <i className = {item.symbol}></i>
                                </div>
                                <div className = "flex flex-col gap-4">
                                    <div className = "flex flex-col">
                                        <h1 className = "text-xl font-bold">
                                            {new Intl.NumberFormat('en-US', {
                                                notation: item.count >= 1000 ? "compact" : "standard",
                                                compactDisplay: "short",
                                            }).format(item.count)}
                                            &nbsp;Devices
                                        </h1>
                                        <p className = "text-[#9497a1] text-xs font-medium">{item.name}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CountDashboard