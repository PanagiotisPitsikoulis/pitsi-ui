import {
  DM_Sans,
  Fraunces,
  Geist_Mono as FontMono,
  Inter,
  Nunito,
  Orbitron,
  Playfair_Display,
  Poppins,
  Rajdhani,
  Source_Sans_3,
  Space_Grotesk,
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

// Template-specific fonts - Elegant preset
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

// Template-specific fonts - Classic preset
const fontPlayfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
})

const fontSourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  weight: ["400", "500", "600", "700"],
})

// Template-specific fonts - Playful preset
const fontSpaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["400", "500", "600", "700"],
})

const fontNunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["400", "500", "600", "700"],
})

// Template-specific fonts - Futuristic preset
const fontOrbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  weight: ["400", "500", "600", "700"],
})

const fontRajdhani = Rajdhani({
  subsets: ["latin"],
  variable: "--font-rajdhani",
  weight: ["400", "500", "600", "700"],
})

export const fontVariables = cn(
  fontSans.variable,
  fontMono.variable,
  fontDisplay.variable,
  fontFraunces.variable,
  fontDMSans.variable,
  fontPlayfair.variable,
  fontSourceSans.variable,
  fontSpaceGrotesk.variable,
  fontNunito.variable,
  fontOrbitron.variable,
  fontRajdhani.variable
)
