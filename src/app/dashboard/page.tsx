"use client";

import React from "react"

async function getData() {
    await new Promise((resolve) => setTimeout(resolve, 3000))
    return {
        message: 'Hello, Dashboard!',
    }
}

export default async function Page() {
    // const { message } = await getData()
    // return <h1>{message}</h1>
    const [error, setError] = React.useState(false);
    const handleGetError = () => {
        setError(true);
    };
    return (
        <>
        {error ? Error() : <button onClick={handleGetError}>Get Error</button>}
        </>
    )

}