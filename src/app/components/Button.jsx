"use client";

// import from Next.js
import React from "react";

function Button({ name, type, onClick, full }) {
    return (
        <button type = {type} onClick = {onClick} className = {`${full ? "w-full" : "w-1/2"} max-xxs:w-full py-2 ${type === "submit" || type === "button" ? "bg-[#171717] border-[#171717] hover:text-[#171717]" : "bg-[#f55555] border-[#f55555] hover:text-[#f55555]"} border-2 hover:bg-white transition-all duration-200 rounded-xl text-white text-sm font-medium text-center`}>
            {name}
        </button>
    );
}

export default Button