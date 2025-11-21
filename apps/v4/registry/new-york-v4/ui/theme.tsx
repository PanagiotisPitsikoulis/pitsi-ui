"use client"

import { useTheme } from "next-themes"

declare module "react" {
  interface CSSProperties {
    [key: `--${string}`]: string | number
  }
}

function generateJsxStylesFromCssThemeString(themeString: string): {
  light: Record<string, string>
  dark: Record<string, string>
} {
  const lightStyles: Record<string, string> = {}
  const darkStyles: Record<string, string> = {}

  // Helper function to parse CSS properties
  const parseProperties = (cssBlock: string): Record<string, string> => {
    const properties: Record<string, string> = {}
    const lines = cssBlock.split(";")

    for (const line of lines) {
      const trimmed = line.trim()
      if (!trimmed || trimmed.startsWith("/*")) continue

      const colonIndex = trimmed.indexOf(":")
      if (colonIndex === -1) continue

      const property = trimmed.substring(0, colonIndex).trim()
      const value = trimmed.substring(colonIndex + 1).trim()

      if (property.startsWith("--")) {
        properties[property] = value
      }
    }

    return properties
  }

  // Find all :root blocks using global regex
  const rootRegex = /:root\s*\{([^}]+)\}/gs
  let rootMatch
  while ((rootMatch = rootRegex.exec(themeString)) !== null) {
    Object.assign(lightStyles, parseProperties(rootMatch[1]))
  }

  // Find all .dark blocks using global regex
  const darkRegex = /\.dark\s*\{([^}]+)\}/gs
  let darkMatch
  while ((darkMatch = darkRegex.exec(themeString)) !== null) {
    Object.assign(darkStyles, parseProperties(darkMatch[1]))
  }

  return { light: lightStyles, dark: darkStyles }
}

export type ThemeProps = {
  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
} & {
  theme: string
  forceMode?: "light" | "dark"
}

export default function Theme({
  children,
  theme,
  style,
  forceMode,
  ...props
}: ThemeProps) {
  const { resolvedTheme } = useTheme()

  if (!theme) {
    console.warn("Theme component requires a theme prop")
    return children
  }

  const deviceTheme = forceMode ? forceMode : resolvedTheme
  const themeStyles = generateJsxStylesFromCssThemeString(theme)

  return (
    <div
      style={{
        ...(deviceTheme === "light" ? themeStyles.light : themeStyles.dark),
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  )
}
