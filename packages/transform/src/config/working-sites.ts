/**
 * Working sites configuration
 * These are the sites currently being worked on for transformation
 */

export interface WorkingSite {
  category: string
  index: number
  url: string
  name: string
}

/**
 * All sites being worked on
 */
export const workingSites: WorkingSite[] = [
  {
    category: "e-commerce",
    index: 1,
    url: "https://quora.framer.website",
    name: "e-commerce-1",
  },
  {
    category: "agency",
    index: 2,
    url: "https://oma-biogax.framer.website",
    name: "agency-2",
  },
  {
    category: "agency",
    index: 4,
    url: "https://medexpert-template.framer.website",
    name: "agency-4",
  },
  {
    category: "agency",
    index: 5,
    url: "https://perform.framer.website",
    name: "agency-5",
  },
  {
    category: "saas",
    index: 3,
    url: "https://evotrack.framer.website",
    name: "saas-3",
  },
  {
    category: "saas",
    index: 5,
    url: "https://leaflife.framer.website",
    name: "saas-5",
  },
  {
    category: "simple",
    index: 3,
    url: "https://surfing-template.framer.website",
    name: "simple-3",
  },
]

/**
 * Priority sites - these are processed first by capture/generate commands
 * Add site names here to focus on specific sites
 */
export const prioritySiteNames: string[] = ["agency-2", "simple-3"]

/**
 * Get priority sites (filtered from workingSites)
 */
export const prioritySites: WorkingSite[] = workingSites.filter((site) =>
  prioritySiteNames.includes(site.name)
)

/**
 * Get sites to process - returns priority sites if any, otherwise all working sites
 */
export function getSitesToProcess(): WorkingSite[] {
  return prioritySites.length > 0 ? prioritySites : workingSites
}

/**
 * Get a working site by name
 */
export function getWorkingSite(name: string): WorkingSite | undefined {
  return workingSites.find((site) => site.name === name)
}

/**
 * Get all working sites for a category
 */
export function getWorkingSitesByCategory(category: string): WorkingSite[] {
  return workingSites.filter((site) => site.category === category)
}

/**
 * Check if a site is in the working list
 */
export function isWorkingSite(
  category: string,
  index: number
): WorkingSite | undefined {
  return workingSites.find(
    (site) => site.category === category && site.index === index
  )
}

/**
 * Check if a site is in the priority list
 */
export function isPrioritySite(name: string): boolean {
  return prioritySiteNames.includes(name)
}
