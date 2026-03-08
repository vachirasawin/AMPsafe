"use client";

// import from Next.js
import React, { useState } from "react";
import GenerateKey from "../components/GenerateKey";
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";

// import from components
import Navbar from "../components/Navbar";
import Input from "../components/Input";
import Button from "../components/Button";
import Message from "../components/Message";

function Page() {
    const { data: session } = useSession();
    if (!session || (session?.user?.email !== "vachirasawin.mah@gmail.com" && session?.user?.email !== "possavee.mee@sk-thonburi.ac.th" && session?.user?.email !== "kullamas.kae@sk-thonburi.ac.th")) redirect ("/");
    const [generatedKey, setGeneratedKey] = useState("");

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

        const newKey = GenerateKey();
        setGeneratedKey(newKey);
    }

    const handleCopy = async () => {
        if (!generatedKey) {
            setAlert(true);
            setMessage("No key to copy!");
            setType("error");
            return;
        }

        try {
            await navigator.clipboard.writeText(generatedKey);

            setAlert(true);
            setMessage("Key copied to clipboard!");
            setType("success");
            
            setTimeout(() => {
                resetAlert();
            }, 3000);
        } catch (error) {
            setAlert(true);
            setMessage(error.message || "An unexpected error occurred");
            setType("error");
            return;
        }
    }

    return (
        <div>
            <Navbar generateKey/>
            <Message message = {message} type = {type} alert = {alert}/>
            <div className = "p-4">
                <form onSubmit = {handleSubmit} className = "container mx-auto justify-self-center flex flex-col items-center gap-4 h-[calc(100vh-12rem)] mt-24 justify-center">
                    <div className = "bg-white rounded-2xl shadow-md">
                        <div className = "flex flex-col gap-4 p-4 md:p-8">
                            <Input
                                name = "Generated Key"
                                value = {generatedKey}
                                placeholder = "Generated Key"
                                type = "text"
                                onChange = {(e) => {
                                    resetAlert();
                                }}
                                symbol = "fa-solid fa-key"
                            />
                            <div className = "flex gap-4 max-xxs:flex-col">
                                <Button
                                    name = "Genarate"
                                    type = "submit"
                                    onClick = {() => {
                                        resetAlert();
                                    }}
                                />
                                <Button
                                    name = "Copy"
                                    type = "button"
                                    onClick = {handleCopy}
                                />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Page