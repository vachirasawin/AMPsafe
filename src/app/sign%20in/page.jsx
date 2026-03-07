"use client";

// import from Next.js
import React, { useState }  from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";

// import from components
import Navbar from "../components/Navbar";
import Input from "../components/Input";
import Button from "../components/Button";
import Message from "../components/Message";

function Page() {
    const { data: session } = useSession();
    if (session) redirect ("/");
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
        
    const [message, setMessage] = useState("");
    const [type, setType] = useState("");
    const [alert, setAlert] = useState(false);
    const resetAlert = () => {
        setAlert(false);
        setMessage("");
        setType("");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            setAlert(true);
            setMessage("Please complete all inputs.");
            setType("error");
            return;
        }

        try {
            const response = await signIn("credentials", {
                email, password, redirect: false
            })

            if (response.error) {
                setAlert(true);
                setMessage("Invalid credentials");
                setType("error");
                return;
            }

            redirect("/");
        } catch (error) {
            setAlert(true);
            setMessage(error.message || "An unexpected error occurred");
            setType("error");
            return;
        }
    }

    return (
        <div>
            <Navbar signIn/>
            <Message message = {message} type = {type} alert = {alert}/>
            <div className = "p-4">
                <form onSubmit = {handleSubmit} className = "container mx-auto justify-self-center flex flex-col items-center gap-4 h-[calc(100vh-12rem)] mt-24 justify-center">
                    <div className = "bg-white rounded-2xl shadow-md">
                        <div className = "flex flex-col gap-4 p-4 md:p-8">
                            <Input
                                name = "Email"
                                placeholder = "Email Address"
                                type = "email"
                                onChange = {(e) => {
                                    setEmail(e.target.value);
                                    resetAlert();
                                }}
                                symbol = "fa-solid fa-at"
                            />
                            <Input
                                name = "Password"
                                placeholder = "Password"
                                type = {showPassword ? "text" : "password"}
                                onChange = {(e) => {
                                    setPassword(e.target.value);
                                    resetAlert();
                                }}
                                symbol = {`fa-solid ${showPassword ? "fa-lock-open" : "fa-lock"}`}
                                onClick = {() => setShowPassword(!showPassword)}
                            />
                            <div className = "flex justify-center gap-x-2 text-sm">
                                <p>Don't have an account yet?</p><Link href = "/sign%20up" className = "text-blue-500">Sign Up</Link>
                            </div>
                            <div className = "flex gap-4 max-xxs:flex-col">
                                <Button name = "Sign In" type = "submit" onClick = {() => {
                                    setShowPassword(false);
                                    resetAlert();
                                }}/>
                                <Button name = "Cancel" type = "reset" onClick = {() => {
                                    setShowPassword(false);
                                    resetAlert();
                                }}/>
                            </div>
                        </div>
                        <div className = "flex h-12 border-t border-[#ececec] w-full max-md:w-full">
                            <div onClick = {() => signIn("github")} className = "w-1/3 rounded-bl-2xl border-r border-[#ececec] flex justify-center items-center text-[#171717] hover:bg-[#171717] hover:text-white transition-all duration-200">
                                <i className = "fa-brands fa-github"></i>
                            </div>
                            <div onClick = {() => signIn("google")} className = "w-1/3 border-r border-[#ececec] flex justify-center items-center text-[#171717] hover:bg-[#171717] hover:text-white transition-all duration-200">
                                <i className = "fa-brands fa-google"></i>
                            </div>
                            <div onClick = {() => signIn("facebook")} className = "w-1/3 rounded-br-2xl flex justify-center items-center text-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-200">
                                <i className = "fa-brands fa-facebook"></i>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Page