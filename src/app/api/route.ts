import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export default async function GET() {
    // const res = await fetch('https://dog-api.kinduff.com/api/facts')
    // const data = await res.json()
    // console.log(data)

    // return NextResponse.json({ data })
    const cookieStore = cookies()
    const token = cookieStore.get('token')

    return new Response('Hello, Next.js!', {
        status: 200,
        headers: { 'Set-Cookie': `token=${token}` },
    })
}