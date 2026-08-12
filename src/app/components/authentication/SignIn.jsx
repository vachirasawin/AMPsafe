"use client"

import React, { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"

import TextInput from "../input/TextInput"
import PasswordInput from "../input/PasswordInput"
import ButtonInput from "../input/ButtonInput"

import WarningAlert from "../alert/WarningAlert"

function SignIn() {
    const [isWarning, setIsWarning] = useState(false);
    const router = useRouter();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const resetForm = () => {
        setUsername("");
        setPassword("");
    }

    const handleSumbit = async (e) => {
        e.preventDefault();

        if (!username || !password) {
            setIsWarning(true);
            return;
        }
    }

    return (
        <div className = "fixed top-24 left-0 w-screen h-[calc(100vh-6rem)] bg-transparent z-30 flex justify-center items-center max-lg:items-start max-lg:py-4 overflow-y-auto styleScrollbar">
            <form onSubmit = {handleSumbit} onReset = {resetForm} className = "bg-white p-8 max-lg:p-4 rounded-xl shadow-md flex flex-col gap-4">
                <TextInput symbol = "fa-regular fa-user" title = "ชื่อผู้ใช้งาน" placeholder = "กรอกชื่อผู้ใช้งาน" onChange = {(e) => setUsername(e.target.value)} request/>
                <PasswordInput title = "รหัสผ่าน" placeholder = "กรอกรหัสผ่านของผู้ใช้งาน" onChange = {(e) => setPassword(e.target.value)} request/>
                <div className = "w-full flex justify-center items-center gap-2 text-sm font-medium">
                    <p>หากยังไม่มีบัญชีผู้ใช้</p>
                    <Link href = "/sign%20up" className = "text-blue-500">สมัครสมาชิก</Link>
                </div>
                <ButtonInput title = "ยืนยันการเข้าสู่ระบบ" type = "submit" width = "w-full" color = "text-blue-500 hover:bg-blue-500"/>
                <ButtonInput title = "ยกเลิกการเข้าสู่ระบบ" type = "reset" width = "w-full" color = "text-red-500 hover:bg-red-500"/>
            </form>

            {isWarning && (
                <WarningAlert title = "กรอกข้อมูลไม่ครบถ้วน" detail = "กรุณากรอกข้อมูลในช่องที่มีเครื่องหมายสำคัญให้ครบถ้วนก่อนยืนยัน" button = "ตกลงเพื่อแก้ไข" onClose = {() => setIsWarning(false)}/>
            )}
        </div>
    )
}

export default SignIn