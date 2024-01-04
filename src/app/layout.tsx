
import Link from 'next/link'
import './globals.css';

export default function RootLayout({ children,modal }: { children: React.ReactNode, modal: React.ReactNode }) {
  return (
    <html>
      <body>
        <div><Link href="/login">Open Auth Modal</Link></div>
        <div><Link href="/">Back To Home</Link></div>
        <h1>/app/layout.js</h1>
        {children}
        {/* {modal} */}
      </body>
    </html>
  )
}