import {
  Geist_Mono as FontMono,
  Poppins,
  Source_Sans_3,
} from "next/font/google"

import { cn } from "@/lib/utils"

const fontSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400"],
})

const fontDisplay = Poppins({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
})

export const fontVariables = cn(
  fontSans.variable,
  fontMono.variable,
  fontDisplay.variable
)
