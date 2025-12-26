import {
  DM_Sans,
  Fraunces,
  Geist_Mono as FontMono,
  Inter,
  Poppins,
} from "next/font/google"

import { cn } from "@/lib/utils"

// Global sans font - Inter
const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400"],
})

// Display font - Poppins
const fontDisplay = Poppins({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
})

// Template-specific fonts
const fontFraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600", "700"],
})

const fontDMSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700"],
})

export const fontVariables = cn(
  fontSans.variable,
  fontMono.variable,
  fontDisplay.variable,
  fontFraunces.variable,
  fontDMSans.variable
)
