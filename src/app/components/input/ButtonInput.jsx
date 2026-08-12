"use client"

import React from "react"

function ButtonInput({ title, type, width }) {
    return (
        <button type = {type} className = {`${width} h-12 py-[13px] rounded-sm text-sm font-medium transition-colors duration-200 flex justify-center items-center border border-gray-200 ${type == "submit" && "text-blue-500 hover:bg-blue-500 hover:text-neutral-50"} ${type == "reset" && "text-red-500 hover:bg-red-500 hover:text-neutral-50"}`}>{title}</button>
    )
}

export default ButtonInput