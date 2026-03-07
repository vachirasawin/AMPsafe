"use client";

// import from Next.js
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";

// import from components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import StatusDashboard from "../components/Chart/StatusDashboard";
import DoughnutDashboard from "../components/Chart/DoughnutDashboard";
import LineDashboard from "../components/Chart/LineDashboard";
import BarDashboard from "../components/Chart/BarDashboard";

function Page() {
    const { data: session } = useSession();
    // const session = true

    const [contentsItem, setContentsItem] = useState([]);
    const [historyData, setHistoryData] = useState([]);
    const [historyCount, setHistoryCount] = useState([]);
    const lastStatusRef = useRef(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("https://web-production-b804.up.railway.app/latest");
                const data = await res.json();

                const newItem = {
                    name: "Machine 1",
                    value: `${Number(data.current).toFixed(2)} A`,
                    status: data.status
                };
                setContentsItem([newItem]);

                const currentCounts = {
                    safe: contentsItem.filter(i => i.status === 'safe').length,
                    warning: contentsItem.filter(i => i.status === 'warning').length,
                    dangerous: contentsItem.filter(i => i.status === 'dangerous').length
                };
                setHistoryCount(prev => [...prev.slice(-14), currentCounts]);

                const currentStatus = data.status;
                if (currentStatus !== lastStatusRef.current) {
                    // await fetch("/api/logs", {
                    //     method: "POST",
                    //     headers: { "Content-Type": "application/json" },
                    //     body: JSON.stringify({ 
                    //         name: newItem.name, 
                    //         value: Number(data.current),
                    //         status: currentStatus 
                    //     })
                    // });

                    lastStatusRef.current = currentStatus;
                }
            } catch (error) {
                console.error("API Error:", error);
            }
        };

        fetchData();
        const interval = setInterval(fetchData, 3000);
        return () => clearInterval(interval);
    }, [contentsItem]);

    const contentsCount = [
        {
            name: "Safe Devices",
            status: "safe",
            count: contentsItem.filter(item => item.status === 'safe').length,
            color: "text-[#4caf50]",
            bg: "bg-[#4caf50]",
            symbol: "fa-solid fa-plug-circle-check"
        },
        {
            name: "Warning Devices",
            status: "warning",
            count: contentsItem.filter(item => item.status === 'warning').length,
            color: "text-[#eab949]",
            bg: "bg-[#eab949]",
            symbol: "fa-solid fa-plug-circle-bolt"
        },
        {
            name: "Dangerous Devices",
            status: "dangerous",
            count: contentsItem.filter(item => item.status === 'dangerous').length,
            color: "text-[#f55555]",
            bg: "bg-[#f55555]",
            symbol: "fa-solid fa-plug-circle-xmark"
        }
    ]

    return (
        <div>
            <Navbar dashboard/>
            <div className = "mt-24 relative">
                <div className = "px-4 bg-[#f7f7f7]">
                    <div className = "container mx-auto justify-self-center flex flex-col justify-center items-center gap-4 py-8 max-md:py-4">
                        <div className = "flex flex-wrap justify-center items-center gap-4 w-full">
                            {contentsCount.map((item, index) => (
                                <Link href = {`/dashboard#${item.status}`} key = {index} className = "shadow-lg bg-white rounded-xl w-56 max-xxs:w-full h-max">
                                    <div className = "py-2 px-2 flex justify-start items-center gap-4">
                                        <div className = {`shadow-md border border-[#ececec] w-16 h-16 min-w-16 min-h-16 flex justify-center items-center rounded-xl aspect-square text-xl ${item.color} hover:scale-108 transition duration-200 ease-in-out`}>
                                            <i className = {item.symbol}></i>
                                        </div>
                                        <div className = "flex flex-col gap-4">
                                            <div className = "flex flex-col">
                                                <h1 className = "text-xl font-bold">
                                                    {session ? (
                                                        new Intl.NumberFormat('en-US', {
                                                            notation: item.count >= 1000 ? "compact" : "standard",
                                                            compactDisplay: "short",
                                                        }).format(item.count)
                                                    ) : (
                                                        0
                                                    )}
                                                </h1>
                                                <p className = "text-[#9497a1] text-xs font-medium">{item.name}</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                            <Link href = {`/add%20devicde`} className = "shadow-lg bg-white rounded-xl w-56 max-xxs:w-full h-max">
                                <div className = "py-2 px-2 flex justify-start items-center gap-4">
                                    <div className = "shadow-md border border-[#ececec] w-16 h-16 min-w-16 min-h-16 flex justify-center items-center rounded-xl aspect-square text-xl text-[#171717] hover:scale-108 transition duration-200 ease-in-out">
                                        <i className = "fa-solid fa-plug-circle-plus"></i>
                                    </div>
                                    <div className = "flex flex-col gap-4">
                                        <div className = "flex flex-col">
                                            <h1 className = "text-xl font-bold">
                                                Add Devices
                                            </h1>
                                            <p className = "text-[#9497a1] text-xs font-medium">คลิกเพื่อเพิ่มอุปกรณ์</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className = "flex flex-wrap gap-4 justify-center items-center">
                            <StatusDashboard contentsItem = {session ? contentsItem : []} status = "safe"/>
                            <StatusDashboard contentsItem = {session ? contentsItem : []} status = "warning"/>
                            <StatusDashboard contentsItem = {session ? contentsItem : []} status = "dangerous"/>
                            <DoughnutDashboard contentsItem = {session ? contentsItem : []} contentsCount = {session ? contentsCount : []}/>
                            <LineDashboard historyCount = {session ? historyCount : []} contentsCount = {session ? contentsCount : []}/>
                            <BarDashboard historyCount = {session ? historyCount : []} contentsCount = {session ? contentsCount : []}/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer dashboard/>
        </div>
    );
}

export default Page