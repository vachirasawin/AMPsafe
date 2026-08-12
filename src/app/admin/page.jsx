import React from "react"

import Navbar from "../components/navbar/Navbar"
import { fetchCardsData } from "../utils/fetchCardsData"
import EditCard from "../components/admin/card/EditCard";
import DeleteCard from "../components/admin/card/DeleteCard";
import CreateCard from "../components/admin/card/CreateCard";

async function page() {
    const cardsData = await fetchCardsData();

    return (
        <div>
            <Navbar/>
            <div className = "w-full h-max bg-neutral-50 px-4 py-24 border-b border-gray-200">
                <div className = "container mx-auto flex gap-8 flex-wrap justify-center items-center">
                    <div className = "flex flex-col gap-4 bg-white p-8 rounded-xl shadow-md w-sm h-96">
                        <div className = "w-full flex justify-between items-center gap-4">
                            <p className = "text-xl font-bold">ข้อมูลวิธีการใช้งาน AMPnode</p>
                            <CreateCard/>
                        </div>
                        <div className = "flex flex-col gap-2">
                            {cardsData.map((data) => (
                                <div key = {data._id} className = "flex gap-2">
                                    <EditCard data = {data}/>
                                    <DeleteCard data = {data}/>
                                    <div className = "rounded-sm shadow-sm w-max h-7 flex justify-center items-center bg-white border border-gray-200 text-sm font-semibold text-neutral-900 px-4 py-1">
                                        {data.title}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page