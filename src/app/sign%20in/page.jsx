import React from "react"

import Navbar from "../components/navbar/Navbar"
import SignIn from "../components/authentication/SignIn"

function page() {
    return (
        <div>
            <Navbar/>
            <SignIn/>
        </div>
    )
}

export default page