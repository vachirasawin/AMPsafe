// import from Next.js
import React from "react";
import Image from "next/image";
import Link from "next/link";

function Card({ contents, title, description, downloadType, downloadTitle, id }) {
    return (
        <div className = "px-4 border-b border-[#ececec] bg-[#f7f7f7] scroll-mt-24" id = {id}>
            <div className = {`container mx-auto justify-self-center flex flex-col gap-8 max-md:gap-4 pt-24 max-md:pt-8 justify-center items-center`}>
                <div className = "flex justify-center w-full" data-aos = "fade-up">
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
                            <div className = {`shadow-lg bg-white rounded-lg py-11 px-8 w-82 h-full flex flex-col gap-7`}>
                                <div className = "h-full flex flex-col gap-7">
                                    {content.image !== "-" ? (
                                        <div className = "shadow-md border border-[#ececec] w-16 h-16 min-w-16 min-h-16 flex justify-center items-center rounded-xl aspect-square px-4">
                                            <div className = "w-8 h-8 relative">
                                                <Image src = {content.extension !== "-" ? `/${content.image}.${content.extension}` : `${content.image}`} alt = {content.title} unoptimized fill className = {`object-contain ${content.extension === "-" && "rounded-full"}`}/>
                                            </div>
                                        </div>
                                    ) : content.symbol !== "-" && (
                                        <div className = "shadow-md border w-16 h-16 min-w-16 min-h-16 flex justify-center items-center rounded-xl aspect-square text-xl">
                                            <i className = {content.symbol}></i>
                                        </div>
                                    )}
                                    <div className = "flex flex-col gap-4">
                                        <div className = "flex flex-col">
                                            <h1 className = {`text-xl font-bold ${content.main === "true" && "text-blue-500"}`} dangerouslySetInnerHTML = {{ __html: content.title }}></h1>
                                            <p className = "text-[#9497a1] text-xs font-medium" dangerouslySetInnerHTML = {{ __html: content.description }}></p>
                                        </div>
                                        <div className = "font-normal text-[#9497a1]" dangerouslySetInnerHTML = {{ __html: content.content }}></div>
                                    </div>
                                </div>
                                {content.link !== "-" && (
                                    downloadType ? (
                                        downloadTitle ? (
                                            <a download href = {content.link} className = "flex justify-center items-center bg-white shadow-md border border-[#ececec] hover:border-blue-500 hover:bg-blue-500 hover:text-white transform duration-200 w-max h-max px-3 py-1 rounded-md text-sm font-[700] text-blue-500" dangerouslySetInnerHTML={{ __html: `Download ${content.name ? content.name : downloadTitle}` }}></a>
                                        ) : (
                                            <a download href = {content.link} className = "flex justify-center items-center bg-white shadow-md border border-[#ececec] hover:border-blue-500 hover:bg-blue-500 hover:text-white transform duration-200 w-max h-max px-3 py-1 rounded-md text-sm font-[700] text-blue-500" dangerouslySetInnerHTML={{ __html: `Download ${content.name ? content.name : content.title}` }}></a>
                                        )
                                    ) : (
                                        <Link target = "_blank" href = {content.link} className = "flex justify-center items-center bg-white shadow-md border border-[#ececec] hover:border-blue-500 hover:bg-blue-500 hover:text-white transform duration-200 w-max h-max px-3 py-1 rounded-md text-sm font-[700] text-blue-500" dangerouslySetInnerHTML={{ __html: `${content.name ? content.name : content.title}` }}></Link>
                                    )
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Card