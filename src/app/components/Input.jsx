"use client";

// import from Next.js
import React from "react";

function Input({ name, placeholder, type, onChange, symbol, onClick }) {
    return (
        <div className = "flex flex-col gap-2">
            <p className = "font-semibold">{name}</p>
            <div className = "border border-[#ececec] rounded-xl flex h-12 focus-within:border-blue-500 transition-all duration-200 bg-white">
                {symbol && (
                    <div onClick = {onClick} className = "w-14 flex justify-center items-center border-r border-[#ececec]">
                        <i className = {symbol}></i>
                    </div>
                )}
                <input
                    onChange = {onChange}
                    type = {type}
                    placeholder = {placeholder}
                    className = {`${symbol ? "w-full" : "w-60"} px-2 outline-none font-medium text-sm`}
                />
            </div>
        </div>
    );
}

export default Input