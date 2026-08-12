"use client"

import React, { useState } from "react"
import { useRouter } from "next/navigation";

import TextInput from "../../input/TextInput";
import TextareaInput from "../../input/TextareaInput";
import ButtonInput from "../../input/ButtonInput";

import WarningAlert from "../../alert/WarningAlert";

function CreateCard() {
    const [isCreate, setIsCreate] = useState(false);
    const router = useRouter();
    
    const [isWarning, setIsWarning] = useState(false);
    const [warningTitle, setWarningTitle] = useState("");
    const [warningDetail, setWarningDetail] = useState("");
    const [warningButton, setWarningButton] = useState("");

    const [symbol, setSymbol] = useState("");
    const [title, setTitle] = useState("");
    const [urlName, setUrlName] = useState("");
    const [urlLink, setUrlLink] = useState("");
    const [detail, setDetail] = useState("");
    const [width, setWidth] = useState("");
    const [height, setHeight] = useState("");

    const resetForm = () => {
        setSymbol("");
        setTitle("");
        setUrlName("");
        setUrlLink("");
        setDetail("");
        setWidth("");
        setHeight("");
    }

    const handleSumbit = async (e) => {
        e.preventDefault();

        if (!title || !detail || !width || !height) {
            setIsWarning(true);
            setWarningTitle("กรอกข้อมูลไม่ครบถ้วน");
            setWarningDetail("กรุณากรอกข้อมูลในช่องที่มีเครื่องหมายสำคัญให้ครบถ้วนก่อนยืนยัน");
            setWarningButton("ตกลงเพื่อแก้ไข");
            return;
        }

        try {
            const response = await fetch("/api/card/createCard", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ symbol, title, urlName, urlLink, detail, width, height })
            })

            if (response.ok) {
                setIsCreate(false);
                resetForm();
                router.refresh();
            } else {
                throw new Error("Failed to crete a card.");
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
                        <div className = "flex gap-4 max-lg:flex-col">
                            <div className = "flex flex-col gap-4">
                                <TextInput symbol = "" title = "สัญลักษณ์ของข้อมูล" placeholder = "กรอกสัญลักษณ์ของข้อมูล" onChange = {(e) => setSymbol(e.target.value)}/>
                                <TextInput symbol = "" title = "หัวข้อของข้อมูล" placeholder = "กรอกหัวข้อของข้อมูล" onChange = {(e) => setTitle(e.target.value)} request/>
                                <TextInput symbol = "" title = "ชื่อลิงก์ของข้อมูล" placeholder = "กรอกชื่อลิงก์ของข้อมูล" onChange = {(e) => setUrlName(e.target.value)}/>
                                <TextInput symbol = "" title = "ลิงก์ของข้อมูล" placeholder = "กรอกลิงก์ของข้อมูล" onChange = {(e) => setUrlLink(e.target.value)}/>
                            </div>
                            <TextareaInput symbol = "" title = "เนื้อหาของข้อมูล" placeholder = "กรอกเนื้อหาของข้อมูล" height = "h-[348px]" onChange = {(e) => setDetail(e.target.value)} request/>
                        </div>
                        <div className = "flex gap-4 max-lg:flex-col">
                            <TextInput symbol = "" title = "ความกว้างของกรอบข้อมูล" placeholder = "กรอกความกว้างของกรอบข้อมูล" onChange = {(e) => setWidth(e.target.value)} request/>
                            <TextInput symbol = "" title = "ความสูงของกรอบข้อมูล" placeholder = "กรอกความสูงของกรอบข้อมูล" onChange = {(e) => setHeight(e.target.value)} request/>
                        </div>
                        <div className = "flex gap-4 max-lg:flex-col">
                            <ButtonInput title = "ยืนยันการสร้างข้อมูล" type = "submit" width = "w-1/2 max-lg:w-full" color = "text-blue-500 hover:bg-blue-500"/>
                            <ButtonInput title = "ยกเลิกการสร้างข้อมูล" type = "reset" width = "w-1/2 max-lg:w-full" color = "text-red-500 hover:bg-red-500"/>
                        </div>
                    </form>
                </div>
            )}

            {isWarning && (
                <WarningAlert title = {warningTitle} detail = {warningDetail} button = {warningButton} onClose = {() => setIsWarning(false)}/>
            )}
        </div>
    )
}

export default CreateCard