"use client";

// import from Next.js
import React from "react";

function FooterSection({ name, onClick, rotate }) {
    return (
        <div className = "flex justify-between items-center">
            <h1 className = "font-semibold text-sm">{name}</h1>
            <div className = {`md:hidden h-4 w-4 flex justify-center items-center transition-all duration-500 ${rotate && "rotate-180"}`} onClick = {onClick}>
                <i className = "fa-solid fa-angle-down"></i>
            </div>
        </div>
    );
}

export default FooterSection