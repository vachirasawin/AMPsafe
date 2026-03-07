// import from Next.js
import React from "react";

function Message({ message, type, alert }) {
    return (
        <div className = "fixed top-0 left-0 w-full flex justify-center pointer-events-none z-[9999]">
            <p className = {`px-6 py-2 rounded-xl text-sm ${type === "success" && "bg-[#4caf50] text-white"} ${type === "error" && "bg-[#f55555] text-white"} ${alert ? "translate-y-32 opacity-100" : "translate-y-0 opacity-0"} transfrom transition-all duration-200 ease-in-out`}>{message}</p>
        </div>
    )
}

export default Message