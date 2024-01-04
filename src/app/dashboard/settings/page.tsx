'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'


export default function Page({ navLinks }: { navLinks: { name: string; href: string  }[] }) {
    const pathname = usePathname()
    return <>
        {navLinks?.map((link) => {
            const isActive = pathname === link.href

            return (
                <Link
                    className={isActive ? 'text-blue' : 'text-black'}
                    href={link.href}
                    key={link.name}
                >
                    {link.name}
                </Link>
            )
        })||123}
    </>

}