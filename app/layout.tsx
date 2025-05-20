import type React from "react"
import "./globals.css"
import type {Metadata} from "next"
import {Inter} from "next/font/google"

const inter = Inter({subsets: ["latin"]})

export const metadata: Metadata = {
    title: "Computers Have Feelings Too | ACM-VIT",
    description: "Explore how machines can sense, analyze, and express emotions with Dr. Peter Robinson from Cambridge University. This exclusive talk examines the intersection of psychology and technology that's enabling computers to understand human emotions, revolutionizing how we interact with machines and opening new possibilities in education, commerce, therapy, and everyday life.",
    icons: {
        icon: "/favicon.png",
        apple: "/favicon.png",
        shortcut: "/favicon.png",
    },

}

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" className="scroll-smooth">
        <body className={inter.className}>{children}</body>
        </html>
    )
}
