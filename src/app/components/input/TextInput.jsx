"use client"

import React, { useState } from "react"

function TextInput({ symbol, title, placeholder, value, onChange }) {
    const [isFocus, setIsFocus] = useState(false);

    return (
        <div className = "flex flex-col gap-2 w-72">
            <p className = "text-lg font-bold">{title}</p>
            <div className = "flex">
                {symbol && (
                    <div className = {`w-12 h-12 shrink-0 flex justify-center items-center border ${isFocus ? "border-blue-500 text-blue-500" : "border-gray-200"} rounded-l-sm border-r-0 transition-all duration-200`}>
                        <i className = {symbol}></i>
                    </div>
                )}
                <input value = {value} onChange = {onChange} onFocus={() => setIsFocus(true)} onBlur={() => setIsFocus(false)} className = {`w-full h-12 py-[13px] border ${isFocus ? "border-blue-500" : "border-gray-200"} ${symbol ? "rounded-r-sm" : "rounded-sm"} outline-none text-sm font-medium px-4 transition-colors duration-200`} placeholder = {placeholder}/>
            </div>
        </div>
    )
}

export default TextInput