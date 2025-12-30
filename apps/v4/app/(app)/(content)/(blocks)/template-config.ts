import type { TintLevel } from "./_components"

// Template type discriminator
export type TemplateType = "service" | "application"

// Template metadata (base)
export interface TemplateMetadata {
  slug: string
  name: string
  description: string
  heroBlock: string // The hero block to use for preview
}

// Block configuration within a template
export interface BlockConfig {
  name: string
  tint?: TintLevel
  forceDark?: boolean
  forceLight?: boolean
}

// Complete service template configuration
export interface TemplateConfig {
  metadata: TemplateMetadata
  blocks: BlockConfig[]
}

// ============================================
// Application Template Types
// ============================================

// Navigation item for application sidebar
export interface NavigationItem {
  name: string // View block name (e.g., "app-dashboard-1")
  label: string // Display label (e.g., "Dashboard")
  icon: string // Lucide icon name (e.g., "LayoutDashboard")
  shortcut?: string // Keyboard shortcut (e.g., "1")
}

// Application template metadata
export interface ApplicationTemplateMetadata extends TemplateMetadata {
  type: "application"
  defaultView: string // Initial view to show
  palette: string // Theme palette name (e.g., "amber")
}

// Application template configuration
export interface ApplicationTemplateConfig {
  metadata: ApplicationTemplateMetadata
  shell: string // Shell wrapper block name
  navigation: NavigationItem[]
  views: BlockConfig[]
}

// All template configurations
export const templateConfigs: Record<string, TemplateConfig> = {
  "service-travel": {
    metadata: {
      slug: "service-travel",
      name: "Travel Agency",
      description: "A stunning template for travel agencies and tour operators",
      heroBlock: "hero-2",
    },
    blocks: [
      { name: "hero-2", forceLight: true },
    ],
  },
  "service-boat": {
    metadata: {
      slug: "service-boat",
      name: "Yacht Charter",
      description: "A luxury template for yacht rentals and marine services",
      heroBlock: "hero-3",
    },
    blocks: [
      { name: "hero-3", forceLight: true },
    ],
  },
  "service-plants": {
    metadata: {
      slug: "service-plants",
      name: "Service Plants",
      description: "A modern template for plant care services and nurseries",
      heroBlock: "hero-1",
    },
    blocks: [
      { name: "header-1", tint: "tinted", forceLight: true },
      { name: "hero-1", tint: "tinted", forceLight: true },
      { name: "logos-1", tint: "deep" },
      { name: "features-1", tint: "tinted" },
      { name: "features-2", tint: "tinted" },
      { name: "features-3", tint: "tinted" },
      { name: "features-4", tint: "tinted" },
      { name: "features-5", tint: "tinted" },
      { name: "products-1", tint: "tinted" },
      { name: "pricing-1", tint: "tinted" },
      { name: "testimonials-1", tint: "deep" },
      { name: "gallery-1", tint: "tinted" },
      { name: "team-1", tint: "tinted" },
      { name: "stats-1", tint: "deep" },
      { name: "faq-1", tint: "tinted" },
      { name: "blog-1", tint: "tinted" },
      { name: "contact-1", tint: "tinted" },
      { name: "newsletter-1", tint: "deep" },
      { name: "cta-1", tint: "tinted" },
      { name: "footer-1", tint: "tinted" },
    ],
  },
}

// Get all template slugs
export const TEMPLATE_SLUGS = Object.keys(templateConfigs) as TemplateSlug[]
export type TemplateSlug = keyof typeof templateConfigs

// Get all templates metadata for listing (service templates only)
export function getAllTemplatesMetadata(): TemplateMetadata[] {
  return Object.values(templateConfigs).map((config) => config.metadata)
}

// Get template config by slug
export function getTemplateConfig(slug: string): TemplateConfig | null {
  return templateConfigs[slug] || null
}

// Get template metadata by slug
export function getTemplateMetadata(slug: string): TemplateMetadata | null {
  return templateConfigs[slug]?.metadata || null
}

// Get block configuration from a template
export function getBlockConfig(
  templateSlug: string,
  blockName: string
): BlockConfig | null {
  // Check service templates
  const serviceConfig = templateConfigs[templateSlug]
  if (serviceConfig) {
    return serviceConfig.blocks.find((b) => b.name === blockName) || null
  }
  // Check application templates
  const appConfig = applicationTemplateConfigs[templateSlug]
  if (appConfig) {
    if (appConfig.shell === blockName) {
      return { name: blockName }
    }
    return appConfig.views.find((v) => v.name === blockName) || null
  }
  return null
}

// Reverse lookup: find which template a block belongs to
export function getTemplateForBlock(blockName: string): string | null {
  // Check service templates
  for (const [slug, config] of Object.entries(templateConfigs)) {
    if (config.blocks.some((b) => b.name === blockName)) {
      return slug
    }
  }
  // Check application templates (shell + views)
  for (const [slug, config] of Object.entries(applicationTemplateConfigs)) {
    if (config.shell === blockName) {
      return slug
    }
    if (config.views.some((v) => v.name === blockName)) {
      return slug
    }
  }
  return null
}

// Get block index within its template (for alternating backgrounds)
export function getBlockIndex(
  templateSlug: string,
  blockName: string
): number {
  // Check service templates
  const serviceConfig = templateConfigs[templateSlug]
  if (serviceConfig) {
    const index = serviceConfig.blocks.findIndex((b) => b.name === blockName)
    return index === -1 ? 0 : index
  }
  // Check application templates
  const appConfig = applicationTemplateConfigs[templateSlug]
  if (appConfig) {
    if (appConfig.shell === blockName) return 0
    const index = appConfig.views.findIndex((v) => v.name === blockName)
    return index === -1 ? 0 : index + 1 // +1 because shell is index 0
  }
  return 0
}

// Get complete block settings for standalone rendering
export function getBlockRenderSettings(blockName: string): {
  templateSlug: string | null
  tint: TintLevel | undefined
  forceDark: boolean | undefined
  forceLight: boolean | undefined
  blockType: string | null
  index: number
} {
  const templateSlug = getTemplateForBlock(blockName)

  if (!templateSlug) {
    return {
      templateSlug: null,
      tint: undefined,
      forceDark: undefined,
      forceLight: undefined,
      blockType: null,
      index: 0,
    }
  }

  const blockConfig = getBlockConfig(templateSlug, blockName)
  const index = getBlockIndex(templateSlug, blockName)

  // Extract block type from name (e.g., "hero-1" -> "hero", "app-dashboard-1" -> "app-dashboard")
  const match = blockName.match(/^([a-z-]+)-\d+$/)
  const blockType = match ? match[1] : null

  return {
    templateSlug,
    tint: blockConfig?.tint,
    forceDark: blockConfig?.forceDark,
    forceLight: blockConfig?.forceLight,
    blockType,
    index,
  }
}

// ============================================
// Application Template Configurations
// ============================================

export const applicationTemplateConfigs: Record<
  string,
  ApplicationTemplateConfig
> = {
  "app-gym-tracker": {
    metadata: {
      type: "application",
      slug: "app-gym-tracker",
      name: "Gym Tracker",
      description: "Progressive overload tracker for strength training",
      heroBlock: "app-dashboard-1",
      defaultView: "app-dashboard-1",
      palette: "sage",
    },
    shell: "app-shell-1",
    navigation: [
      { name: "app-dashboard-1", label: "Dashboard", icon: "LayoutDashboard" },
      { name: "app-workout-log-1", label: "Log Workout", icon: "Dumbbell" },
      { name: "app-calendar-1", label: "Calendar", icon: "Calendar" },
      { name: "app-progress-1", label: "Progress", icon: "TrendingUp" },
      { name: "app-exercises-1", label: "Exercises", icon: "Library" },
      { name: "app-settings-1", label: "Settings", icon: "Settings" },
    ],
    views: [
      { name: "app-dashboard-1" },
      { name: "app-workout-log-1" },
      { name: "app-calendar-1" },
      { name: "app-progress-1" },
      { name: "app-exercises-1" },
      { name: "app-settings-1" },
    ],
  },
  "app-quiz": {
    metadata: {
      type: "application",
      slug: "app-quiz",
      name: "Quiz App",
      description: "Interactive quiz application with progress tracking",
      heroBlock: "app-quiz-dashboard-1",
      defaultView: "app-quiz-dashboard-1",
      palette: "violet",
    },
    shell: "app-quiz-shell-1",
    navigation: [
      { name: "app-quiz-dashboard-1", label: "Dashboard", icon: "LayoutDashboard" },
      { name: "app-quiz-browse-1", label: "Browse", icon: "Search" },
      { name: "app-quiz-active-1", label: "Active Quiz", icon: "Play" },
      { name: "app-quiz-results-1", label: "Results", icon: "Trophy" },
      { name: "app-quiz-settings-1", label: "Settings", icon: "Settings" },
    ],
    views: [
      { name: "app-quiz-dashboard-1" },
      { name: "app-quiz-browse-1" },
      { name: "app-quiz-active-1" },
      { name: "app-quiz-results-1" },
      { name: "app-quiz-settings-1" },
    ],
  },
  "app-database": {
    metadata: {
      type: "application",
      slug: "app-database",
      name: "Database Dashboard",
      description: "Database management and query interface",
      heroBlock: "app-database-dashboard-1",
      defaultView: "app-database-dashboard-1",
      palette: "cyan",
    },
    shell: "app-database-shell-1",
    navigation: [
      { name: "app-database-dashboard-1", label: "Overview", icon: "LayoutDashboard" },
      { name: "app-database-tables-1", label: "Tables", icon: "Table" },
      { name: "app-database-query-1", label: "Query", icon: "Terminal" },
      { name: "app-database-settings-1", label: "Settings", icon: "Settings" },
    ],
    views: [
      { name: "app-database-dashboard-1" },
      { name: "app-database-tables-1" },
      { name: "app-database-query-1" },
      { name: "app-database-settings-1" },
    ],
  },
}

// Application template slugs
export const APPLICATION_TEMPLATE_SLUGS = Object.keys(
  applicationTemplateConfigs
) as ApplicationTemplateSlug[]
export type ApplicationTemplateSlug = keyof typeof applicationTemplateConfigs

// Get all application templates metadata
export function getAllApplicationTemplatesMetadata(): ApplicationTemplateMetadata[] {
  return Object.values(applicationTemplateConfigs).map((config) => config.metadata)
}

// Get application template config by slug
export function getApplicationTemplateConfig(
  slug: string
): ApplicationTemplateConfig | null {
  return applicationTemplateConfigs[slug] || null
}

// Get application template navigation
export function getApplicationNavigation(slug: string): NavigationItem[] {
  return applicationTemplateConfigs[slug]?.navigation || []
}

// Get application shell for a view block
export function getApplicationShellForBlock(blockName: string): {
  shell: string
  templateSlug: string
  navigation: NavigationItem[]
  activeView: string
} | null {
  for (const [slug, config] of Object.entries(applicationTemplateConfigs)) {
    // Check if this block is a view in this application
    if (config.views.some((v) => v.name === blockName)) {
      return {
        shell: config.shell,
        templateSlug: slug,
        navigation: config.navigation,
        activeView: blockName,
      }
    }
  }
  return null
}

// ============================================
// Combined Template Utilities
// ============================================

// Get all templates metadata including application templates
export function getAllTemplatesMetadataIncludingApps(): TemplateMetadata[] {
  const serviceTemplates = Object.values(templateConfigs).map((config) => config.metadata)
  const appTemplates = Object.values(applicationTemplateConfigs).map((config) => config.metadata)
  return [...serviceTemplates, ...appTemplates]
}

// Combined template slugs (service + application)
export const ALL_TEMPLATE_SLUGS = [
  ...Object.keys(templateConfigs),
  ...Object.keys(applicationTemplateConfigs),
] as string[]
