import { fontVariables } from "@/lib/fonts"
import { cn } from "@/lib/utils"

import "@/styles/globals.css"

export default function SandboxLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="robots" content="noindex, nofollow" />
      </head>
      <body
        className={cn(
          "overscroll-none antialiased",
          fontVariables
        )}
      >
        {children}
      </body>
    </html>
  )
}
