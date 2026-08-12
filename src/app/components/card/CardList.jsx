import React from "react"

import Card from "./Card"
import { fetchCardsData } from "@/app/utils/fetchCardsData"

export const revalidate = 0;

async function CardList({ title }) {
    const cardsData = await fetchCardsData();

    return (
        cardsData.length > 0 && (
            <div className = "w-full h-max bg-neutral-50 px-4 py-24 max-lg:py-4 border-b border-gray-200 flex flex-col gap-12 max-lg:gap-4">
                <p className = "container mx-auto flex justify-center items-center text-3xl max-lg:text-2xl font-bold">
                    {title}
                </p>
                <div className = "container mx-auto w-full max-w-full flex gap-6 overflow-x-auto styleScrollbar pb-4 px-2 items-stretch">
                    {cardsData.map((data) => (
                        <Card key = {data._id} datas = {data}/>
                    ))}
                </div>
            </div>
        )
    )
}

export default CardList