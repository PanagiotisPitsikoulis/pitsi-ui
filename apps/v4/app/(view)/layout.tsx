import { fontVariables } from "@/lib/config/fonts"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme/theme-provider"

export default function ViewLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="robots" content="noindex, nofollow" />
      </head>
      <body className={cn("bg-background overscroll-none antialiased", fontVariables)}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
