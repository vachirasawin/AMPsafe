"use client"

import React, { useState } from "react"

function TextareaInput({ symbol, title, placeholder, height, value, onChange, request }) {
    const [isFocus, setIsFocus] = useState(false);

    return (
        <div className = "flex flex-col gap-2 w-72">
            <div className = "w-full flex justify-between items-center gap-4">
                <p className = "text-lg font-bold">{title}</p>
                {request && (<i className = "fa-solid fa-asterisk text-red-500 text-[8px]"></i>)}
            </div>
            <div className = "flex">
                <textarea value = {value} onChange = {onChange} onFocus={() => setIsFocus(true)} onBlur={() => setIsFocus(false)} className = {`w-full py-[13px] ${height} border ${isFocus ? "border-blue-500" : "border-gray-200"} rounded-sm outline-none text-sm font-medium px-4 transition-colors duration-200 resize-none`} placeholder = {placeholder}></textarea>
            </div>
        </div>
    )
}

export default TextareaInput