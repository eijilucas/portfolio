import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['200', '400', '600', '700']
})

export const metadata: Metadata = {
  title: 'Portfólio | Lucas Eiji',
  description: 'Portfólio criado com NextJs e React',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
