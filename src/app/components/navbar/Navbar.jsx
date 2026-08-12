import React from "react"

import NavbarLink from "./NavbarLink";
import NavbarButton from "./NavbarButton";
import { fetchNavbarLink } from "../../utils/fetchNavbarLink";

async function Navbar() {
    const linksData = await fetchNavbarLink();

    return (
        <div className = "mb-24">
            <div className = "z-40 fixed top-0 left-0">
                <div className = "bg-white w-screen h-24 px-4 border-b border-gray-200">
                    <div className = "container mx-auto flex justify-around max-lg:justify-between items-center h-full">
                        <div>
                            <p className = "text-3xl font-bold">
                                <span className = "text-blue-500">AMP</span>
                                <span className = "text-neutral-900">safe</span>
                            </p>
                        </div>
                        <div className = "text-sm font-medium flex gap-12 max-lg:hidden">
                            {linksData.map((data) => (
                                <NavbarLink key = {data.id} href = {data.url[1]}>{data.url[0]}</NavbarLink>
                            ))}
                        </div>
                        <NavbarButton datas = {linksData}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar