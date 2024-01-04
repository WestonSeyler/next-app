'use client'

import { useState } from "react"
import Link from "next/link"


export default function DashboardLayout({ children }) {
    const [count, setCount] = useState(0)
    return (
        <section>
            {/* <Link href="/dashboard/about" >About</Link>
            <br />
            <Link href="/dashboard/settings">Settings</Link>
            <br />
            <h1>Layout {count}</h1>
            <button onClick={() => setCount(count + 1)}>
                Increment
            </button> */}
            {children}
        </section>
    )
}