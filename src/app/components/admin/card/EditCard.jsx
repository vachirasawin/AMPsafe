"use client"

import React, { useState } from "react"
import { useRouter } from "next/navigation";

import TextInput from "../../input/TextInput";
import TextareaInput from "../../input/TextareaInput";
import ButtonInput from "../../input/ButtonInput";

function EditCard({ data }) {
    const [isEdit, setIsEdit] = useState(false);
    const router = useRouter();
    
    const [symbol, setSymbol] = useState(data?.symbol || "");
    const [title, setTitle] = useState(data?.title || "");
    const [urlLink, setUrlLink] = useState(data?.url?.[1] || "");
    const [urlName, setUrlName] = useState(data?.url?.[0] || "");
    const [detail, setDetail] = useState(data?.detail || "");
    const [width, setWidth] = useState(data?.width || "");
    const [height, setHeight] = useState(data?.height || "");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title || !detail || !width || !height) {
            alert("Please complete all inputs.");
            return;
        }

        try {
            const response = await fetch(`/api/editCard/${data._id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ symbol, title, urlLink, urlName, detail, width, height })
            });

            if (response.ok) {
                setIsEdit(false);
                router.refresh();
            } else {
                throw new Error("Failed to update card.");
            }
        } catch (error) {
            console.error("Error updating card:", error);
        }
    }

    return (
        <div className = "relative">
            <div onClick = {() => setIsEdit(!isEdit)} className = "rounded-sm shadow-sm w-7 h-7 flex justify-center items-center bg-white border border-gray-200 text-[12px] font-semibold text-blue-500">
                <i className = "fa-solid fa-wrench"></i>
            </div>

            {isEdit && (
                <div className = "fixed top-24 left-0 w-screen h-[calc(100vh-6rem)] bg-neutral-900/80 z-30 flex justify-center items-center max-lg:items-start max-lg:py-4 overflow-y-auto styleScrollbar">
                    <form onSubmit = {handleSubmit} onReset = {() => setIsEdit(!isEdit)} className = "bg-white p-8 rounded-xl shadow-md flex flex-col gap-4">
                        <div className = "flex gap-4 max-lg:flex-col">
                            <div className = "flex flex-col gap-4">
                                <TextInput symbol = "" title = "สัญลักษณ์ของข้อมูล" placeholder = "กรอกสัญลักษณ์ของข้อมูล" value = {symbol} onChange = {(e) => setSymbol(e.target.value)}/>
                                <TextInput symbol = "" title = "หัวข้อของข้อมูล" placeholder = "กรอกหัวข้อของข้อมูล" value = {title} onChange = {(e) => setTitle(e.target.value)}/>
                                <TextInput symbol = "" title = "ชื่อลิงก์ของข้อมูล" placeholder = "กรอกชื่อลิงก์ของข้อมูล" value = {urlLink} onChange = {(e) => setUrlLink(e.target.value)}/>
                                <TextInput symbol = "" title = "ลิงก์ของข้อมูล" placeholder = "กรอกลิงก์ของข้อมูล" value = {urlName} onChange = {(e) => setUrlName(e.target.value)}/>
                            </div>
                            <TextareaInput symbol = "" title = "เนื้อหาของข้อมูล" placeholder = "กรอกเนื้อหาของข้อมูล" height = "h-[348px]" value = {detail} onChange = {(e) => setDetail(e.target.value)}/>
                        </div>
                        <div className = "flex gap-4 max-lg:flex-col">
                            <TextInput symbol = "" title = "ความกว้างของกรอบข้อมูล" placeholder = "กรอกความกว้างของกรอบข้อมูล" value = {width} onChange = {(e) => setWidth(e.target.value)}/>
                            <TextInput symbol = "" title = "ความสูงของกรอบข้อมูล" placeholder = "กรอกความสูงของกรอบข้อมูล" value = {height} onChange = {(e) => setHeight(e.target.value)}/>
                        </div>
                        <div className = "flex gap-4 w-full max-lg:flex-col">
                            <ButtonInput title = "ยืนยันการแก้ไขข้อมูล" type = "submit" width = "w-1/2 max-lg:w-full"/>
                            <ButtonInput title = "ยกเลิกการแก้ไขข้อมูล" type = "reset" width = "w-1/2 max-lg:w-full"/>
                        </div>
                    </form>
                </div>
            )}
        </div>
    )
}

export default EditCard