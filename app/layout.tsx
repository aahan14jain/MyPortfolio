import type { Metadata } from 'next'
import { Outfit, Source_Sans_3, Fraunces } from 'next/font/google'
import './globals.css'

const display = Outfit({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const body = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Aahan Jain | AI Engineer & Software Engineer',
  description: 'Portfolio of Aahan Jain — AI Engineer and Software Engineer building agentic AI systems, RAG applications, and scalable backends.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${fraunces.variable}`}>
      <body className="antialiased font-body">{children}</body>
    </html>
  )
}
