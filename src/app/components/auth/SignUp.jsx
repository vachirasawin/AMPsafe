"use client"

import React, { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useSession } from "next-auth/react"
import Link from "next/link"

import TextInput from "../input/TextInput"
import EmailInput from "../input/EmailInput"
import PasswordInput from "../input/PasswordInput"
import ButtonInput from "../input/ButtonInput"

import WarningAlert from "../alert/WarningAlert"
import ErrorAlert from "../alert/ErrorAlert"
import SuccessAlert from "../alert/SuccessAlert"

function SignUp() {
    const [isWarning, setIsWarning] = useState(false);
    const [warningTitle, setWarningTitle] = useState("");
    const [warningDetail, setWarningDetail] = useState("");
    const [warningButton, setWarningButton] = useState("");
    
    const [isError, setIsError] = useState(false);
    const [errorTitle, setErrorTitle] = useState("");
    const [errorDetail, setErrorDetail] = useState("");
    const [errorButton, setErrorButton] = useState("");
    
    const [isSuccess, setIsSuccess] = useState(false);
    const [successTitle, setSuccessTitle] = useState("");
    const [successDetail, setSuccessDetail] = useState("");
    const [successButton, setSuccessButton] = useState("");

    const router = useRouter();
    const { data: session } = useSession();

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const resetForm = () => {
        setFirstname("");
        setLastname("");
        setEmail("");
        setUsername("");
        setPassword("");
        setConfirmPassword("");
    }

    useEffect(() => {
        if (session?.user?.access === "user" || session?.user?.access === "admin") {
            router.replace("/");
        }
    }, [session, router])

    const handleSumbit = async (e) => {
        e.preventDefault();

        if (!firstname || !lastname || !email || !username || !password || !confirmPassword) {
            setIsWarning(true);
            setWarningTitle("กรอกข้อมูลไม่ครบถ้วน");
            setWarningDetail("กรุณากรอกข้อมูลในช่องที่มีเครื่องหมายสำคัญให้ครบถ้วนก่อนยืนยัน");
            setWarningButton("ตกลงเพื่อแก้ไข");
            return;
        }

        if (password != confirmPassword) {
            setIsWarning(true);
            setWarningTitle("รหัสผ่านไม่ตรงกัน");
            setWarningDetail("กรุณากรอกรหัสผ่านให้ตรงกัน");
            setWarningButton("ตกลงเพื่อแก้ไข");
            return;
        }

        try {
            const responseCheckUser = await fetch("/api/auth/checkUser", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ username })
            })

            const { user } = await responseCheckUser.json();

            if (user) {
                setIsError(true);
                setErrorTitle("เกิดความผิดพลาด");
                setErrorDetail("มีผู้ใช้งานบัญชีนี้แล้ว");
                setErrorButton("รับทราบ");
                return
            }

            const response = await fetch("/api/auth/createUser", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ firstname, lastname, email, username, password, access: "user" })
            })
        
            if (response.ok) {
                resetForm();
                setIsSuccess(true);
                setSuccessTitle("สมัครสมาชิกสำเร็จ");
                setSuccessDetail("การสมัครสมาชิกเสร็จสมบูรณ์");
                setSuccessButton("รับทราบ");
                router.refresh();
            } else {
                setIsError(true);
                setErrorTitle("เกิดความผิดพลาด");
                setErrorDetail("เกิดความผิดพลาดกับการสมัครสมาชิก");
                setErrorButton("รับทราบ");
            }
        } catch(error) {
            setIsError(true);
            setErrorTitle("เกิดความผิดพลาดขณะสมัครสมาขิก");
            setErrorDetail(error);
            setErrorButton("รับทราบ");
            return;
        }
    }

    return (
        <div className = "fixed top-24 left-0 w-screen h-[calc(100vh-6rem)] bg-transparent z-30 flex justify-center items-center max-lg:items-start max-lg:py-4 overflow-y-auto styleScrollbar">
            <form onSubmit = {handleSumbit} onReset = {resetForm} className = "bg-white p-8 max-lg:p-4 rounded-xl shadow-md flex flex-col gap-4">
                <div className = "flex gap-4 max-lg:flex-col">
                    <TextInput title = "ชื่อจริง" placeholder = "กรอกชื่อจริงของผู้ใช้งาน" onChange = {(e) => setFirstname(e.target.value)} request/>
                    <TextInput title = "นามสกุล" placeholder = "กรอกนามสกุลของผู้ใช้งาน" onChange = {(e) => setLastname(e.target.value)} request/>
                </div>
                <div className = "flex gap-4 max-lg:flex-col">
                    <TextInput symbol = "fa-regular fa-user" title = "ชื่อผู้ใช้งาน" placeholder = "กรอกชื่อผู้ใช้งาน" onChange = {(e) => setUsername(e.target.value)} request/>
                    <EmailInput title = "ที่อยู่อีเมล" placeholder = "กรอกที่อยู่อีเมลของผู้ใช้งาน" onChange = {(e) => setEmail(e.target.value)} request/>
                </div>
                <div className = "flex gap-4 max-lg:flex-col">
                    <PasswordInput title = "รหัสผ่าน" placeholder = "กรอกรหัสผ่านของผู้ใช้งาน" onChange = {(e) => setPassword(e.target.value)} request/>
                    <PasswordInput title = "ยืนยันรหัสผ่าน" placeholder = "กรอกรหัสผ่านอีกครั้งเพื่อยืนยันรหัสผ่าน" onChange = {(e) => setConfirmPassword(e.target.value)} request/>
                </div>
                <div className = "w-full flex justify-center items-center gap-2 text-sm font-medium">
                    <p>หากมีบัญชีผู้ใช้แล้ว</p>
                    <Link href = "/sign%20in" className = "text-blue-500">เข้าสู่ระบบ</Link>
                </div>
                <div className = "flex gap-4 max-lg:flex-col">
                    <ButtonInput title = "ยืนยันการสมัครสมาชิก" type = "submit" width = "w-full" color = "text-blue-500 hover:bg-blue-500"/>
                    <ButtonInput title = "ยกเลิกการสมัครสมาชิก" type = "reset" width = "w-full" color = "text-red-500 hover:bg-red-500"/>
                </div>
            </form>

            {isWarning && (
                <WarningAlert title = {warningTitle} detail = {warningDetail} button = {warningButton} onClose = {() => setIsWarning(false)}/>
            )}
            {isError && (
                <ErrorAlert title = {errorTitle} detail = {errorDetail} button = {errorButton} onClose = {() => setIsError(false)}/>
            )}
            {isSuccess && (
                <SuccessAlert title = {successTitle} detail = {successDetail} button = {successButton} onClose = {() => setIsSuccess(false)}/>
            )}
        </div>
    )
}

export default SignUp