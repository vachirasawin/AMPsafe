"use client";

// import from Next.js
import React, { useState, useEffect } from "react";
import Link from "next/link";

// import from components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DoughnutDashboard from "../components/DoughnutDashboard";
import StatusDashboard from "../components/StatusDashboard";

function Page() {
    const [contentsItem, setContentsItem] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('https://web-production-b804.up.railway.app/predict', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ current: Math.random() * 10 })
                });
                const data = await res.json();

                const newItem = {
                    name: "Machine 1",
                    description: `${data.current} A`,
                    content: data.message,
                    status: data.status === "normal" ? "safe" : "dangerous"
                };

                setContentsItem(prev => [...prev.slice(-9), newItem]);
            } catch (err) {
                console.error("API Error:", err);
            }
        };

        fetchData();
        const interval = setInterval(fetchData, 3000);
        return () => clearInterval(interval);
    }, []);

    const safeCount = contentsItem.filter(item => item.status === 'safe').length;
    const warningCount = contentsItem.filter(item => item.status === 'warning').length;
    const dangerousCount = contentsItem.filter(item => item.status === 'dangerous').length;
    const contentsCount = [
        {
            name: "Safe Devices",
            status: "safe",
            count: safeCount,
            color: "text-[#4caf50]",
            bg: "bg-[#4caf50]",
            symbol: "fa-solid fa-plug-circle-check"
        },
        {
            name: "Warning Devices",
            status: "warning",
            count: warningCount,
            color: "text-[#eab949]",
            bg: "bg-[#eab949]",
            symbol: "fa-solid fa-plug-circle-bolt"
        },
        {
            name: "Dangerous Devices",
            status: "dangerous",
            count: dangerousCount,
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
                                <Link href = {`/dashboard#${item.status}`} key = {index} className = "shadow-lg bg-white rounded-xl w-54 max-xxs:w-full h-max">
                                    <div className = "py-2 px-2 flex justify-start items-center gap-4">
                                        <div className = {`shadow-md border border-[#ececec] w-16 h-16 min-w-16 min-h-16 flex justify-center items-center rounded-xl aspect-square text-xl ${item.color}`}>
                                            <i className = {item.symbol}></i>
                                        </div>
                                        <div className = "flex flex-col gap-4">
                                            <div className = "flex flex-col">
                                                <h1 className = "text-xl font-bold">
                                                    {new Intl.NumberFormat('en-US', {
                                                        notation: item.count >= 1000 ? "compact" : "standard",
                                                        compactDisplay: "short",
                                                    }).format(item.count)}
                                                </h1>
                                                <p className = "text-[#9497a1] text-xs font-medium">{item.name}</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                        <div className = "flex flex-wrap gap-4 justify-center items-center">
                            <StatusDashboard contentsItem = {contentsItem} status = "safe"/>
                            <StatusDashboard contentsItem = {contentsItem} status = "warning"/>
                            <StatusDashboard contentsItem = {contentsItem} status = "dangerous"/>
                            <DoughnutDashboard contentsItem = {contentsItem} contentsCount = {contentsCount}/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer dashboard/>
        </div>
    );
}

export default Page