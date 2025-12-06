/**
 * Powered By Configuration
 *
 * Central definition of "powered by" libraries with their logos and URLs.
 * Logos are stored in /public/powered-by/
 */

export interface PoweredByLibrary {
  id: string
  name: string
  url: string
  logo: string
}

export const LIBRARIES: Record<string, PoweredByLibrary> = {
  shadcn: {
    id: "shadcn",
    name: "shadcn/ui",
    url: "https://ui.shadcn.com",
    logo: "shadcn.webp",
  },
  skiperui: {
    id: "skiperui",
    name: "Skiper UI",
    url: "https://skiper-ui.com",
    logo: "skiper-ui.webp",
  },
  motion: {
    id: "motion",
    name: "Motion",
    url: "https://motion.dev",
    logo: "motion.webp",
  },
}

export const POWERED_BY = {
  shadcn: [LIBRARIES.shadcn],
  skiperui: [LIBRARIES.skiperui],
  motion: [LIBRARIES.motion],
} as const

export function getPoweredBy(ids: string[]): PoweredByLibrary[] {
  return ids
    .map((id) => Object.values(LIBRARIES).find((lib) => lib.id === id))
    .filter((lib): lib is PoweredByLibrary => lib !== undefined)
}

export function getLogoPath(library: PoweredByLibrary): string {
  return `/powered-by/${library.logo}`
}
