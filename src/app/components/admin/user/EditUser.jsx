"use client"

import React, { useState } from "react"
import { useRouter } from "next/navigation"

import TextInput from "../../input/TextInput"
import EmailInput from "../../input/EmailInput"
import SelectInput from "../../input/SelectInput"
import ButtonInput from "../../input/ButtonInput"

import WarningAlert from "../../alert/WarningAlert"
import ErrorAlert from "../../alert/ErrorAlert"

function EditUser({ data }) {
    const [isEdit, setIsEdit] = useState(false);
    const router = useRouter();

    const [isWarning, setIsWarning] = useState(false);
    const [warningTitle, setWarningTitle] = useState("");
    const [warningDetail, setWarningDetail] = useState("");
    const [warningButton, setWarningButton] = useState("");

    const [isError, setIsError] = useState(false);
    const [errorTitle, setErrorTitle] = useState("");
    const [errorDetail, setErrorDetail] = useState("");
    const [errorButton, setErrorButton] = useState("");

    const options = [
        { value: "user", label: "ผู้ใช้งาน" },
        { value: "admin", label: "ผู้ดูแลระบบ" }
    ];

    const [firstname, setFirstname] = useState(data?.firstname || "");
    const [lastname, setLastname] = useState(data?.lastname || "");
    const [username, setUsername] = useState(data?.username || "");
    const [email, setEmail] = useState(data?.email || "");
    const [access, setAccess] = useState(data?.access || "");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!firstname || !lastname || !username || !email || !access) {
            setIsWarning(true);
            setWarningTitle("กรอกข้อมูลไม่ครบถ้วน");
            setWarningDetail("กรุณากรอกข้อมูลในช่องที่มีเครื่องหมายสำคัญให้ครบถ้วนก่อนยืนยัน");
            setWarningButton("ตกลงเพื่อแก้ไข");
            return;
        }

        try {
            const response = await fetch(`/api/auth/user/editUser/${data._id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ firstname, lastname, username, email, access })
            });

            if (response.ok) {
                setIsEdit(false);
                router.refresh();
            } else {
                setIsError(true);
                setErrorTitle("เกิดความผิดพลาด");
                setErrorDetail("เกิดความผิดพลาดกับการแก้ไขข้อมูลผู้ใช้งาน");
                setErrorButton("รับทราบ");
            }
        } catch (error) {
            console.error(error);
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
                        <div className = "flex gap-4 max-lg:flex-col">
                            <TextInput title = "ชื่อจริง" placeholder = "กรอกชื่อจริงของผู้ใช้งาน" value = {firstname} onChange = {(e) => setFirstname(e.target.value)} request/>
                            <TextInput title = "นามสกุล" placeholder = "กรอกนามสกุลของผู้ใช้งาน" value = {lastname} onChange = {(e) => setLastname(e.target.value)} request/>
                        </div>
                        <div className = "flex gap-4 max-lg:flex-col">
                            <TextInput symbol = "fa-regular fa-user" title = "ชื่อผู้ใช้งาน" placeholder = "กรอกชื่อผู้ใช้งาน" value = {username} onChange = {(e) => setUsername(e.target.value)} request/>
                            <EmailInput title = "ที่อยู่อีเมล" placeholder = "กรอกที่อยู่อีเมลของผู้ใช้งาน" value = {email} onChange = {(e) => setEmail(e.target.value)} request/>
                        </div>
                        <SelectInput title = "สิทธิในการเข้าถึง" data = {options} value = {access} onChange = {(value) => setAccess(value)} request/>
                        <div className = "flex gap-4 max-lg:flex-col">
                            <ButtonInput title = "ยืนยันการแก้ไขข้อมูล" type = "submit" width = "w-full" color = "text-blue-500 hover:bg-blue-500"/>
                            <ButtonInput title = "ยกเลิกการแก้ไขข้อมูล" type = "reset" width = "w-full" color = "text-red-500 hover:bg-red-500"/>
                        </div>
                    </form>
                </div>
            )}

            {isWarning && (
                <WarningAlert title = {warningTitle} detail = {warningDetail} button = {warningButton} onClose = {() => setIsWarning(false)}/>
            )}
            {isError && (
                <ErrorAlert title = {errorTitle} detail = {errorDetail} button = {errorButton} onClose = {() => setIsError(false)}/>
            )}
        </div>
    )
}

export default EditUser