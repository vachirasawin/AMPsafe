import React from "react"

import Navbar from "./components/navbar/Navbar"
import CardList from "./components/card/CardList"

function page() {
    return (
        <div>
            <Navbar/>
            <CardList title = {
                <>
                    <span>วิธีการใช้งาน&nbsp;</span>
                    <span className="text-blue-500">AMP</span>
                    <span>node</span>
                </>
            }/>
        </div>
    )
}

export default page