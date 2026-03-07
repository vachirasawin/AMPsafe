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

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    
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

        if (!firstName || !lastName || !email || !password || !confirmPassword) {
            setAlert(true);
            setMessage("Please complete all inputs.");
            setType("error");
            return;
        };

        if (password != confirmPassword) {
            setAlert(true);
            setMessage("Password do not match.");
            setType("error");
            return;
        };

        try {
            const responseCheckEmail = await fetch("/api/checkEmail", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({ email })
            });
            const { userEmail } = await responseCheckEmail.json();
            if (userEmail) {
                setAlert(true);
                setMessage("Email already exists.");
                setType("error");
                return;
            };

            const response = await fetch("/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ firstName, lastName, email, password })
            });
            if (response.ok) {
                const form = e.target;
                form.reset();
                setAlert(true);
                setMessage("User registered successfully.");
                setType("success");
            } else {
                setAlert(true);
                setMessage("User registration failed.");
                setType("error");
            }
        } catch (error) {
            setAlert(true);
            setMessage("An error occurred while registering the user.");
            setType("error");
        }
    }

    return (
        <div>
            <Navbar signUp/>
            <Message message = {message} type = {type} alert = {alert}/>
            <div className = "p-4">
                <form onSubmit = {handleSubmit} className = "container mx-auto justify-self-center flex flex-col items-center gap-4 min-md:h-[calc(100vh-12rem)] mt-24 justify-center">
                    <div className = "bg-white rounded-2xl shadow-md">
                        <div className = "flex flex-col gap-4 p-4 md:p-8">
                            <div className = "flex gap-4 max-md:flex-col">
                                <Input
                                    name = "First Name"
                                    placeholder = "First Name"
                                    type = "text"
                                    onChange = {(e) => {
                                        setFirstName(e.target.value);
                                        resetAlert();
                                    }}
                                    symbol = "fa-solid fa-user"
                                />
                                <Input
                                    name = "Last Name"
                                    placeholder = "Last Name"
                                    type = "text"
                                    onChange = {(e) => {
                                        setLastName(e.target.value);
                                        resetAlert();
                                    }}
                                    symbol = "fa-solid fa-user"
                                />
                            </div>
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
                            <div className = "flex gap-4 max-md:flex-col">
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
                                    noAction
                                />
                                <Input
                                    name = "Confirm Password"
                                    placeholder = "Confirm Password"
                                    type = {showConfirmPassword ? "text" : "password"}
                                    onChange = {(e) => {
                                        setConfirmPassword(e.target.value);
                                        resetAlert();
                                    }}
                                    symbol = {`fa-solid ${showConfirmPassword ? "fa-lock-open" : "fa-lock"}`}
                                    onClick = {() => setShowConfirmPassword(!showConfirmPassword)}
                                    noAction
                                />
                            </div>
                            <div className = "flex justify-center gap-x-2 text-sm">
                                <p>Already have an account?</p><Link href = "/sign%20in" className = "text-blue-500">Sign In</Link>
                            </div>
                            <div className = "flex gap-4 max-xxs:flex-col">
                                <Button
                                    name = "Sign Up"
                                    type = "submit"
                                    onClick = {() => {
                                        setShowPassword(false);
                                        setShowConfirmPassword (false);
                                        resetAlert();
                                    }}
                                />
                                <Button
                                    name = "Cancel"
                                    type = "reset"
                                    onClick = {() => {
                                        setShowPassword(false);
                                        setShowConfirmPassword (false);
                                        resetAlert();
                                    }}
                                />
                            </div>
                        </div>
                        <div className = "flex h-12 border-t border-[#ececec] max-md:w-full w-full text-lg">
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