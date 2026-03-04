"use client";

// import from Next.js
import { useEffect } from "react";

// import from components
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSProvider({ children }) {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true })
    }, [])

    return children
}