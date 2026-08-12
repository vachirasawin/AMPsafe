import React from "react"

import Navbar from "../components/navbar/Navbar"
import SignUp from "../components/auth/SignUp"

function page() {
    return (
        <div>
            <Navbar/>
            <SignUp/>
        </div>
    )
}

export default page