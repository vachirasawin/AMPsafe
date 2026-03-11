"use client";

// import from Next.js
import React, { useState } from "react";

function Subscription({ title, description, contents, id }) {
    const [time, setTime] = useState(true);
    const [select, setSelect] = useState(0);

    return (
        <div className = "px-4 border-b border-[#ececec] bg-[#f7f7f7] scroll-mt-24" id = {id}>
            <div className = "container mx-auto justify-self-center flex flex-col gap-8 max-md:gap-4 pt-24 max-md:pt-8 justify-center items-center">
                <div className = "flex justify-center w-full">
                    <div className = "flex flex-col gap-2 text-center w-full justify-center items-center">
                        <div className = {`flex justify-center items-center gap-2.5 flex-wrap`}>
                            <h1 className = "text-4xl font-bold max-md:text-2xl" dangerouslySetInnerHTML = {{ __html: title }}></h1>
                        </div>
                        <p className = "text-[#9497a1] text-lg max-md:text-sm w-lg max-sm:w-full" dangerouslySetInnerHTML = {{ __html: description }}></p>
                    </div>
                </div>
                <div className = "flex overflow-x-auto styleScrollbar gap-4 pb-24 max-md:pb-8 text-[#171717] max-w-full">
                    {contents.map((content, index) => (
                        <div className = "flex flex-col" key = {index}>
                            <div className = {`shadow-lg rounded-lg py-11 px-8 w-82 h-full flex flex-col gap-7 ${index == select ? "bg-blue-500 text-white" : "bg-white text-[#171717]"}`}>
                                <div className = "h-full flex flex-col gap-7">
                                    <div className = "flex flex-col gap-4">
                                        <h4 className = "text-xl font-semibold">{content.title}</h4>
                                        <div className = "flex justify-between items-center">
                                            <h2 className = "text-4xl font-bold">{time ? content.price[0] : content.price[1]}</h2>
                                            <div className = "flex gap-2">
                                                <div onClick = {() => setTime(!time)} className = {`flex justify-center items-center w-12 py-2 font-medium border shadow-md rounded-lg transform duration-200 cursor-pointer ${time ? (index == select ? "bg-white border-blue-500 text-blue-500" : "bg-blue-500 border-blue-500 text-white") : (index == select ? "bg-blue-500 border-white text-white" : "bg-white border-blue-500 text-blue-500")}`}>Mo</div>
                                                <div onClick = {() => setTime(!time)} className = {`flex justify-center items-center w-12 py-2 font-medium border shadow-md rounded-lg transform duration-200 cursor-pointer ${time ? (index == select ? "bg-blue-500 border-white text-white" : "bg-white border-blue-500 text-blue-500") : (index == select ? "bg-white border-blue-500 text-blue-500" : "bg-blue-500 border-blue-500 text-white")}`}>Yr</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div onClick = {() => setSelect(index)} className = {`w-full flex justify-center items-center py-2 border shadow-md rounded-lg transform duration-200 font-medium border-blue-500 ${index == select ? "bg-white text-blue-500" : "bg-blue-500 text-white hover:bg-white hover:text-blue-500"}`}>Get Started</div>
                                    <div className = "flex flex-col gap-4">
                                        {content.content.map((func, indexFunc) => (
                                            <div className = {`flex items-center gap-2 ${index == select ? "text-white" : "text-[#171717]"}`} key = {indexFunc}>
                                                <i className = {`fa-solid fa-check ${index == select ? "text-white" : "text-blue-500"}`}></i>
                                                <p>{func}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Subscription