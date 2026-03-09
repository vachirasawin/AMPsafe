"use client";

// import from Next.js
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";

// import from components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import StatusDashboard from "../components/Chart/StatusDashboard";
import CountDashboard from "../components/Chart/CountDashboard";
import LineDashboard from "../components/Chart/LineDashboard";
import BarDashboard from "../components/Chart/BarDashboard";
import DoughnutDashboard from "../components/Chart/DoughnutDashboard";
import Input from "../components/Input";
import Button from "../components/Button";
import Message from "../components/Message";

function Page() {
    // const { data: session } = useSession();
    const session = true

    const [contentsItem, setContentsItem] = useState([]);
    const [historyCount, setHistoryCount] = useState([]);
    const lastStatusRef = useRef(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("https://web-production-b804.up.railway.app/latest");
                const data = await res.json();

                const newItem = {
                    name: data.online && (data.name ?? "DEVICE-01"),
                    value: data.online && `${Number(data.current).toFixed(2)} A`,
                    status: data.online && data.status,
                    online: data.online
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
        },
        {
            name: "Online Devices",
            status: "online",
            count: contentsItem.filter(item => item.online).length,
            color: "text-[#4caf50]",
            bg: "bg-[#4caf50]",
            symbol: "ri-wifi-fill",
        },
        {
            name: "Offline Devices",
            status: "offline",
            count: contentsItem.filter(item => !item.online).length,
            color: "text-[#f55555]",
            bg: "bg-[#f55555]",
            symbol: "ri-wifi-off-fill",
        }
    ]

    const [nameAdd, setNameAdd] = useState("");
    const [keyAdd, setKeyAdd] = useState("");
    const [confirmKeyAdd, setConfirmKeyAdd] = useState("");

    const [nameDelete, setNameDelete] = useState("");
    const [confirmNameDelete, setConfirmNameDelete] = useState("");
        
    const [message, setMessage] = useState("");
    const [type, setType] = useState("");
    const [alert, setAlert] = useState(false);
    const resetAlert = () => {
        setAlert(false);
        setMessage("");
        setType("");
    };

    const formatKey = (value) => {
        const rawValue = value.replace(/-/g, "").toUpperCase();
        const groups = rawValue.match(/.{1,4}/g);

        return groups ? groups.join("-").substring(0, 19) : rawValue;
    };

    const handleSubmitAdd = async (e) => {
        e.preventDefault();

        if (!nameAdd || !keyAdd || !confirmKeyAdd) {
            setAlert(true);
            setMessage("Please complete all inputs.");
            setType("error");
            console.log("Name NaN");
            console.log(message, type, alert);
            return;
        };

        if (keyAdd != confirmKeyAdd) {
            setAlert(true);
            setMessage("Key do not match.");
            setType("error");
            return;
        };
    }

    const handleSubmitDelete = async (e) => {
        e.preventDefault();

        if (!nameDelete || !confirmNameDelete) {
            setAlert(true);
            setMessage("Please complete all inputs.");
            setType("error");
            console.log("Name NaN");
            console.log(message, type, alert);
            return;
        };

        if (nameDelete != confirmNameDelete) {
            setAlert(true);
            setMessage("Name do not match.");
            setType("error");
            return;
        };
    }

    return (
        <div>
            <Navbar dashboard/>
            <Message message = {message} type = {type} alert = {alert}/>
            <div className = "mt-24 relative">
                <div className = "px-4 bg-[#f7f7f7]">
                    <div className = "container mx-auto justify-self-center flex flex-wrap justify-center items-center gap-4 py-8 max-md:py-4">
                        <StatusDashboard contentsItem = {session ? contentsItem : []} status = "safe"/>
                        <StatusDashboard contentsItem = {session ? contentsItem : []} status = "warning"/>
                        <StatusDashboard contentsItem = {session ? contentsItem : []} status = "dangerous"/>
                        <CountDashboard contentsCount = {session ? contentsCount : []}/>
                        <LineDashboard historyCount = {session ? historyCount : []} contentsCount = {session ? contentsCount : []}/>
                        <BarDashboard historyCount = {session ? historyCount : []} contentsCount = {session ? contentsCount : []}/>
                        <DoughnutDashboard contentsItem = {session ? contentsItem : []} contentsCount = {session ? contentsCount : []} session = {session}/>
                        <div className = "bg-white shadow-lg rounded-xl flex flex-col w-[20rem] max-md:w-full h-[28.5rem] max-md:h-[25.5rem] relative overflow-hidden scroll-mt-28" id = "export">
                            <div className = "absolute inset-0 flex flex-col justify-center items-center text-[#ececec] gap-2 pointer-events-none select-none z-0">
                                <i className = "text-7xl ri-file-chart-line"></i>
                                <p className = "font-bold text-xl uppercase">Export Datas</p>
                            </div>
                            <div className = "p-8 pr-6 flex flex-col gap-4 w-full h-full relative z-10">
                                <h3 className = "font-bold text-[#171717] text-xl">Export Datas</h3>
                                {session && (
                                    <div className = "flex flex-col gap-4 overflow-y-auto styleScrollbar pr-2 w-full h-full">
                                        <Button name = "Status History (.csv)" type = "button" onClick = {() => {}} full/>
                                        <Button name = "Status History (.json)" type = "button" onClick = {() => {}} full/>
                                        <Button name = "Uptime History (.csv)" type = "button" onClick = {() => {}} full/>
                                        <Button name = "Uptime History (.json)" type = "button" onClick = {() => {}} full/>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className = "bg-white shadow-lg rounded-xl flex flex-col w-[20rem] max-md:w-full h-[28.5rem] max-md:h-[25.5rem] relative overflow-hidden scroll-mt-28" id = "connect">
                            <div className = "absolute inset-0 flex flex-col justify-center items-center text-[#ececec] gap-2 pointer-events-none select-none z-0">
                                <i className = "text-7xl fa-solid fa-plug-circle-plus"></i>
                                <p className = "font-bold text-xl uppercase">Add Device</p>
                            </div>
                            <div className = "p-8 pr-6 flex flex-col gap-4 w-full h-full relative z-10">
                                <h3 className = "font-bold text-[#171717] text-xl">Add Device</h3>
                                {session && (
                                    <form onSubmit = {handleSubmitAdd} className = "flex flex-col gap-4 overflow-y-auto styleScrollbar pr-2 w-full h-full">
                                        <Input
                                            name = "Name"
                                            placeholder = "Name"
                                            typr = "text"
                                            onChange = {(e) => {
                                                setNameAdd(e.target.value);
                                                resetAlert();
                                            }}
                                            symbol = "fa-solid fa-plug"
                                        />
                                        <Input
                                            name = "Key"
                                            placeholder = "Key"
                                            type = "text"
                                            value = {keyAdd}
                                            onChange = {(e) => {
                                                const formatted = formatKey(e.target.value);
                                                setKeyAdd(formatted);
                                                resetAlert();
                                            }}
                                            symbol = "ri-key-2-fill"
                                            noAction
                                        />
                                        <Input
                                            name = "Confirm Key"
                                            placeholder = "Confirm Key"
                                            type = "text"
                                            value = {confirmKeyAdd}
                                            onChange = {(e) => {
                                                const formatted = formatKey(e.target.value);
                                                setConfirmKeyAdd(formatted);
                                                resetAlert();
                                            }}
                                            symbol = "ri-key-2-fill"
                                            noAction
                                        />
                                        <div className = "flex gap-4 max-xxs:flex-col">
                                            <Button name = "Add Device" type = "submit" onClick = {() => { resetAlert(); }}/>
                                            <Button name = "Cancel" type = "reset" onClick = {() => {
                                                setKeyAdd("");
                                                setConfirmKeyAdd("");
                                                resetAlert();
                                            }}/>
                                        </div>
                                    </form>
                                )}
                            </div>
                        </div>
                        <div className = "bg-white shadow-lg rounded-xl flex flex-col w-[20rem] max-md:w-full h-[28.5rem] max-md:h-[25.5rem] relative overflow-hidden scroll-mt-28" id = "delete">
                            <div className = "absolute inset-0 flex flex-col justify-center items-center text-[#ececec] gap-2 pointer-events-none select-none z-0">
                                <i className = "text-7xl fa-solid fa-plug-circle-minus"></i>
                                <p className = "font-bold text-xl uppercase">Delete Device</p>
                            </div>
                            <div className = "p-8 pr-6 flex flex-col gap-4 w-full h-full relative z-10">
                                <h3 className = "font-bold text-[#171717] text-xl">Delete Device</h3>
                                {session && (
                                    <form onSubmit = {handleSubmitDelete} className = "flex flex-col gap-4 overflow-y-auto styleScrollbar pr-2 w-full h-full">
                                        <Input
                                            name = "Name"
                                            placeholder = "Name"
                                            typr = "text"
                                            onChange = {(e) => {
                                                setNameDelete(e.target.value);
                                                resetAlert();
                                            }}
                                            symbol = "fa-solid fa-plug"
                                            noAction
                                        />
                                        <Input
                                            name = "Confirm Name"
                                            placeholder = "Confirm Name"
                                            typr = "text"
                                            onChange = {(e) => {
                                                setConfirmNameDelete(e.target.value);
                                                resetAlert();
                                            }}
                                            symbol = "fa-solid fa-plug"
                                            noAction
                                        />
                                        <div className = "flex gap-4 max-xxs:flex-col">
                                            <Button name = "Delete Device" type = "submit" onClick = {() => { resetAlert(); }}/>
                                            <Button name = "Cancel" type = "reset" onClick = {() => { resetAlert(); }}/>
                                        </div>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer dashboard/>
        </div>
    );
}

export default Page