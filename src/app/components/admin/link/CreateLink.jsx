"use client"

import React, { useState } from "react"
import { useRouter } from "next/navigation";

import TextInput from "../../input/TextInput";
import SelectInput from "../../input/SelectInput";
import ButtonInput from "../../input/ButtonInput";

import WarningAlert from "../../alert/WarningAlert";

function CreateLink() {
    const [isCreate, setIsCreate] = useState(false);
    const router = useRouter();
    
    const [isWarning, setIsWarning] = useState(false);
    const [warningTitle, setWarningTitle] = useState("");
    const [warningDetail, setWarningDetail] = useState("");
    const [warningButton, setWarningButton] = useState("");

    const options = [
        { value: "everyone", label: "ทุกคน" },
        { value: "guest", label: "ผู้เยี่ยมชม" },
        { value: "user", label: "ผู้ใช้งาน" },
        { value: "admin", label: "ผู้ดูแลระบบ" }
    ];

    const [urlName, setUrlName] = useState("");
    const [urlLink, setUrlLink] = useState("");
    const [access, setAccess] = useState("");

    const resetForm = () => {
        setUrlName("");
        setUrlLink("");
        setAccess("");
    }

    const handleSumbit = async (e) => {
        e.preventDefault();

        if (!urlName || !urlLink || !access) {
            setIsWarning(true);
            setWarningTitle("กรอกข้อมูลไม่ครบถ้วน");
            setWarningDetail("กรุณากรอกข้อมูลในช่องที่มีเครื่องหมายสำคัญให้ครบถ้วนก่อนยืนยัน");
            setWarningButton("ตกลงเพื่อแก้ไข");
            return;
        }

        try {
            const response = await fetch("/api/link/createLink", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ urlName, urlLink, access })
            })

            if (response.ok) {
                setIsCreate(false);
                resetForm();
                router.refresh();
            } else {
                throw new Error("Failed to crete a link.");
            }
        } catch(error) {
            console.log(error);
        }
    }

    return (
        <div className = "relative">
            <div onClick = {() => setIsCreate(!isCreate)} className = "rounded-sm cursor-pointer shadow-sm w-7 h-7 flex justify-center items-center bg-white border border-gray-200 text-[12px] font-semibold">
                <i className = "fa-solid fa-plus"></i>
            </div>

            {isCreate && (
                <div className = "fixed top-24 left-0 w-screen h-[calc(100vh-6rem)] bg-neutral-900/80 z-30 flex justify-center items-center max-lg:items-start max-lg:py-4 overflow-y-auto styleScrollbar">
                    <form onSubmit = {handleSumbit} onReset = {() => setIsCreate(!isCreate)} className = "bg-white p-8 max-lg:p-4 rounded-xl shadow-md flex flex-col gap-4">
                        <TextInput symbol = "" title = "ชื่อลิงก์ของข้อมูล" placeholder = "กรอกชื่อลิงก์ของข้อมูล" onChange = {(e) => setUrlName(e.target.value)} request/>
                        <TextInput symbol = "" title = "ลิงก์ของข้อมูล" placeholder = "กรอกลิงก์ของข้อมูล" onChange = {(e) => setUrlLink(e.target.value)} request/>
                        <SelectInput title = "สิทธิในการเข้าถึง" data = {options} value = {access} onChange = {(value) => setAccess(value)} request/>
                        <ButtonInput title = "ยืนยันการสร้างข้อมูล" type = "submit" width = "w-full" color = "text-blue-500 hover:bg-blue-500"/>
                        <ButtonInput title = "ยกเลิกการสร้างข้อมูล" type = "reset" width = "w-full" color = "text-red-500 hover:bg-red-500"/>
                    </form>
                </div>
            )}

            {isWarning && (
                <WarningAlert title = {warningTitle} detail = {warningDetail} button = {warningButton} onClose = {() => setIsWarning(false)}/>
            )}
        </div>
    )
}

export default CreateLink