"use client"

import React, { useState } from "react"
import { useRouter } from "next/navigation";

import TextInput from "../../input/TextInput";
import SelectInput from "../../input/SelectInput";
import ButtonInput from "../../input/ButtonInput";

import WarningAlert from "../../alert/WarningAlert";

function EditLink({ data }) {
    const [isEdit, setIsEdit] = useState(false);
    const [isWarning, setIsWarning] = useState(false);
    const router = useRouter();

    const options = [
        { value: "everyone", label: "ทุกคน" },
        { value: "guest", label: "ผู้เยี่ยมชม" },
        { value: "user", label: "ผู้ใช้งาน" },
        { value: "admin", label: "ผู้ดูแลระบบ" }
    ];

    const [urlName, setUrlName] = useState(data?.url?.[0] || "");
    const [urlLink, setUrlLink] = useState(data?.url?.[1] || "");
    const [access, setAccess] = useState(data?.access || "");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!urlName || !urlLink || !access) {
            setIsWarning(true);
            return;
        }

        try {
            const response = await fetch(`/api/link/editLink/${data._id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ urlName, urlLink, access })
            });

            if (response.ok) {
                setIsEdit(false);
                router.refresh();
            } else {
                throw new Error("Failed to update link.");
            }
        } catch (error) {
            console.error("Error updating link:", error);
        }
    }

    return (
        <div className = "relative">
            <div onClick = {() => setIsEdit(!isEdit)} className = "rounded-sm cursor-pointer shadow-sm w-7 h-7 flex justify-center items-center bg-white border border-gray-200 text-[12px] font-semibold text-blue-500">
                <i className = "fa-solid fa-wrench"></i>
            </div>

            {isEdit && (
                <div className = "fixed top-24 left-0 w-screen h-[calc(100vh-6rem)] bg-neutral-900/80 z-30 flex justify-center items-center max-lg:items-start max-lg:py-4 overflow-y-auto styleScrollbar">
                    <form onSubmit = {handleSubmit} onReset = {() => setIsEdit(!isEdit)} className = "bg-white p-8 max-lg:p-4 rounded-xl shadow-md flex flex-col gap-4">
                        <TextInput symbol = "" title = "ชื่อลิงก์ของข้อมูล" placeholder = "กรอกชื่อลิงก์ของข้อมูล" value = {urlName} onChange = {(e) => setUrlLink(e.target.value)}/>
                        <TextInput symbol = "" title = "ลิงก์ของข้อมูล" placeholder = "กรอกลิงก์ของข้อมูล" value = {urlLink} onChange = {(e) => setUrlName(e.target.value)}/>
                        <SelectInput title = "สิทธิในการเข้าถึง" data = {options} value = {access} onChange = {(value) => setAccess(value)} request/>
                        <ButtonInput title = "ยืนยันการแก้ไขข้อมูล" type = "submit" width = "w-full" color = "text-blue-500 hover:bg-blue-500"/>
                        <ButtonInput title = "ยกเลิกการแก้ไขข้อมูล" type = "reset" width = "w-full" color = "text-red-500 hover:bg-red-500"/>
                    </form>
                </div>
            )}

            {isWarning && (
                <WarningAlert title = "กรอกข้อมูลไม่ครบถ้วน" detail = "กรุณากรอกข้อมูลในช่องที่มีเครื่องหมายสำคัญให้ครบถ้วนก่อนยืนยัน" button = "ตกลงเพื่อแก้ไข" onClose = {() => setIsWarning(false)}/>
            )}
        </div>
    )
}

export default EditLink