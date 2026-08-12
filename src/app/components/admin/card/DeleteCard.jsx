"use client"

import React, { useState } from "react"
import { useRouter } from "next/navigation"

import ButtonInput from "../../input/ButtonInput";

function DeleteCard({ data }) {
    const [isDelete, setIsDelete] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleDelete = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(`/api/deleteCard/${data._id}`, {
                method: "DELETE",
            });

            if (response.ok) {
                setIsDelete(false);
                router.refresh();
            } else {
                throw new Error("Failed to delete card.");
            }
        } catch (error) {
            console.error("Error deleting card:", error);
            alert("Failed to delete card.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className = "relative">
            <div onClick = {() => setIsDelete(!isDelete)} className = "rounded-sm shadow-sm w-7 h-7 flex justify-center items-center bg-white border border-gray-200 text-[12px] font-semibold text-red-500">
                <i className = "fa-solid fa-xmark"></i>
            </div>

            {isDelete && (
                <div className = "fixed top-24 left-0 w-screen h-[calc(100vh-6rem)] bg-neutral-900/80 z-30 flex justify-center items-center">
                    <form onSubmit = {handleDelete} onReset = {() => setIsDelete(!isDelete)} className = "bg-white p-8 rounded-xl shadow-md flex flex-col gap-4">
                        <p className = "text-lg font-bold">ยืนยันที่จะลบข้อมูลนี้หรือไม่</p>
                        <div className = "flex gap-4 w-md">
                            <ButtonInput title = "ยืนยันการลบข้อมูล" type = "submit" width = "w-1/2"/>
                            <ButtonInput title = "ยกเลิกการลบข้อมูล" type = "reset" width = "w-1/2"/>
                        </div>
                    </form>
                </div>
            )}
        </div>
    )
}

export default DeleteCard