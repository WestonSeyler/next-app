
import Link from 'next/link'
import './globals.css';

export default function RootLayout({ children,modal }: { children: React.ReactNode, modal: React.ReactNode }) {
  return (
    <html>
      <body>
        {/* <div><Link href="/login">Open Auth Modal</Link></div> */}
        {children}
      </body>
    </html>
  )
}