import type { Metadata } from "next"
import { Geist_Mono, Geist, Inter } from "next/font/google"
import "../../styles/globals.css"

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400"],
})

const fontInter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "pitsi/ui",
  description: "Beautiful UI components for your next project",
}

export default function StandaloneLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body
        className={`${fontSans.variable} ${fontMono.variable} ${fontInter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
