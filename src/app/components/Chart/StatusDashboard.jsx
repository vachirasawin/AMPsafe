// import from Next.js
import React from "react";

function StatusDashboard({ contentsItem, status }) {
    return (
        <div className = "bg-white shadow-lg rounded-xl flex flex-col gap-4 w-[20rem] max-md:w-full h-[28.5rem] max-md:h-[25.5rem] scroll-mt-28 relative overflow-hidden" id = {status}>
            <div className = "absolute inset-0 flex flex-col justify-center items-center text-[#ececec] gap-2 pointer-events-none select-none z-0">
                <i className = {`
                    text-7xl
                    ${status === "safe" && "fa-solid fa-plug-circle-check"}
                    ${status === "warning" && "fa-solid fa-plug-circle-bolt"}
                    ${status === "dangerous" && "fa-solid fa-plug-circle-xmark"}
                `}></i>
                <p className = "font-bold text-xl uppercase">
                    {status} Devices
                </p>
            </div>
            <div className = "p-8 pr-6 flex flex-col gap-4 w-full h-full relative z-10">
                <h3 className = "font-bold text-[#171717] text-xl">
                    {status === "safe" && "Safe Devices"}
                    {status === "warning" && "Warning Devices"}
                    {status === "dangerous" && "Dangerous Devices"}
                </h3>
                <div className = "flex flex-col gap-2 overflow-y-auto styleScrollbar pr-2 w-full h-full">
                    {contentsItem.map((item, index) => item.status === status && (
                        <div key = {index} className = "border border-[#ececec] bg-white/80 backdrop-blur-[2px] rounded-xl w-full h-max">
                            <div className = "py-0 px-0 flex justify-start items-center gap-4">
                                <div className = {`border-r border-[#ececec] w-16 h-16 min-w-16 min-h-16 flex justify-center items-center rounded-l-xl aspect-square text-xl ${item.color}`}>
                                    <i className = {`
                                        ${item.status === "safe" && "fa-solid fa-plug-circle-check text-[#4caf50]"}
                                        ${item.status === "warning" && "fa-solid fa-plug-circle-bolt text-[#eab949]"}
                                        ${item.status === "dangerous" && "fa-solid fa-plug-circle-xmark text-[#f55555]"}
                                    `}></i>
                                </div>
                                <div className = "flex flex-col gap-4">
                                    <div className = "flex flex-col">
                                        <h1 className = "text-xl font-bold">{item.name}</h1>
                                        <p className = "text-[#9497a1] text-xs font-medium">{item.value}</p>
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

export default StatusDashboard;