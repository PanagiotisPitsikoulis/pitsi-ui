import type { TintLevel } from "./_components"

// ============================================
// Unified Template System
// ============================================

// Color palettes available
export type ColorPalette =
  | "slate"
  | "azure"
  | "violet"
  | "rose"
  | "sage"
  | "amber"
  | "cyan"
  | "indigo"
  | "coral"
  | "forest"
  | "neon"

// Template type discriminator
export type TemplateType = "service" | "application"

// Block configuration within a template
export interface BlockConfig {
  name: string
  tint?: TintLevel
  forceDark?: boolean
  forceLight?: boolean
}

// Navigation item for application sidebar
export interface NavigationItem {
  name: string // View block name (e.g., "app-dashboard-1")
  label: string // Display label (e.g., "Dashboard")
  icon: string // Lucide icon name (e.g., "LayoutDashboard")
  shortcut?: string // Keyboard shortcut (e.g., "1")
}

// Base template configuration (shared by all templates)
export interface BaseTemplateConfig {
  slug: string
  name: string
  description: string
  palette: ColorPalette // Required for ALL templates
  heroBlock: string // The hero block to use for preview (default)
  heroOptions?: string[] // Available hero alternatives (including default)
}

// Service template configuration (landing pages)
export interface ServiceTemplateConfig extends BaseTemplateConfig {
  type: "service"
  blocks: BlockConfig[]
}

// Application template configuration (SPA-like apps)
export interface ApplicationTemplateConfig extends BaseTemplateConfig {
  type: "application"
  shell: string // Shell wrapper block name
  defaultView: string // Initial view to show
  navigation: NavigationItem[]
  views: BlockConfig[]
}

// Unified template type (discriminated union)
export type UnifiedTemplateConfig = ServiceTemplateConfig | ApplicationTemplateConfig

// Type guards
export function isServiceTemplate(config: UnifiedTemplateConfig): config is ServiceTemplateConfig {
  return config.type === "service"
}

export function isApplicationTemplate(config: UnifiedTemplateConfig): config is ApplicationTemplateConfig {
  return config.type === "application"
}

// ============================================
// Legacy Types (for backwards compatibility during migration)
// ============================================

// Template metadata (base) - DEPRECATED: Use BaseTemplateConfig
export interface TemplateMetadata {
  slug: string
  name: string
  description: string
  heroBlock: string
}

// Complete service template configuration - DEPRECATED: Use ServiceTemplateConfig
export interface TemplateConfig {
  metadata: TemplateMetadata
  blocks: BlockConfig[]
}

// Application template metadata - DEPRECATED: Use ApplicationTemplateConfig
export interface ApplicationTemplateMetadata extends TemplateMetadata {
  type: "application"
  defaultView: string
  palette: string
}

// Old application config - DEPRECATED: Use ApplicationTemplateConfig
export interface LegacyApplicationTemplateConfig {
  metadata: ApplicationTemplateMetadata
  shell: string
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
      // Core blocks
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
      // Additional blocks (orphans assigned to service-plants)
      { name: "auth-1", tint: "tinted" },
      { name: "auth-2", tint: "tinted" },
      { name: "auth-3", tint: "tinted" },
      { name: "auth-4", tint: "tinted" },
      { name: "auth-5", tint: "tinted" },
      { name: "auth-6", tint: "tinted" },
      { name: "blog-2", tint: "tinted" },
      { name: "blog-3", tint: "tinted" },
      { name: "blog-4", tint: "tinted" },
      { name: "blog-5", tint: "tinted" },
      { name: "blog-6", tint: "tinted" },
      { name: "contact-2", tint: "tinted" },
      { name: "contact-3", tint: "tinted" },
      { name: "contact-4", tint: "tinted" },
      { name: "contact-5", tint: "tinted" },
      { name: "contact-6", tint: "tinted" },
      { name: "cta-2", tint: "tinted" },
      { name: "cta-3", tint: "tinted" },
      { name: "cta-4", tint: "tinted" },
      { name: "cta-5", tint: "tinted" },
      { name: "cta-6", tint: "tinted" },
      { name: "faq-2", tint: "tinted" },
      { name: "faq-3", tint: "tinted" },
      { name: "faq-4", tint: "tinted" },
      { name: "faq-5", tint: "tinted" },
      { name: "faq-6", tint: "tinted" },
      { name: "features-6", tint: "tinted" },
      { name: "features-7", tint: "tinted" },
      { name: "features-8", tint: "tinted" },
      { name: "footer-2", tint: "tinted" },
      { name: "footer-3", tint: "tinted" },
      { name: "footer-4", tint: "tinted" },
      { name: "footer-5", tint: "tinted" },
      { name: "footer-6", tint: "tinted" },
      { name: "footer-7", tint: "tinted" },
      { name: "footer-8", tint: "tinted" },
      { name: "gallery-2", tint: "tinted" },
      { name: "gallery-3", tint: "tinted" },
      { name: "gallery-4", tint: "tinted" },
      { name: "gallery-5", tint: "tinted" },
      { name: "gallery-6", tint: "tinted" },
      { name: "header-2", tint: "tinted", forceLight: true },
      { name: "header-3", tint: "tinted", forceLight: true },
      { name: "header-4", tint: "tinted", forceLight: true },
      { name: "header-5", tint: "tinted", forceLight: true },
      { name: "header-6", tint: "tinted", forceLight: true },
      { name: "header-7", tint: "tinted", forceLight: true },
      { name: "header-8", tint: "tinted", forceLight: true },
      { name: "logos-2", tint: "deep" },
      { name: "logos-3", tint: "deep" },
      { name: "logos-4", tint: "deep" },
      { name: "logos-5", tint: "deep" },
      { name: "logos-6", tint: "deep" },
      { name: "maps-1", tint: "tinted" },
      { name: "maps-2", tint: "tinted" },
      { name: "maps-3", tint: "tinted" },
      { name: "maps-4", tint: "tinted" },
      { name: "maps-5", tint: "tinted" },
      { name: "newsletter-2", tint: "deep" },
      { name: "newsletter-3", tint: "deep" },
      { name: "newsletter-4", tint: "deep" },
      { name: "newsletter-5", tint: "deep" },
      { name: "newsletter-6", tint: "deep" },
      { name: "pricing-2", tint: "tinted" },
      { name: "pricing-3", tint: "tinted" },
      { name: "pricing-4", tint: "tinted" },
      { name: "pricing-5", tint: "tinted" },
      { name: "pricing-6", tint: "tinted" },
      { name: "pricing-7", tint: "tinted" },
      { name: "products-2", tint: "tinted" },
      { name: "products-3", tint: "tinted" },
      { name: "products-4", tint: "tinted" },
      { name: "products-5", tint: "tinted" },
      { name: "products-6", tint: "tinted" },
      { name: "stats-2", tint: "deep" },
      { name: "stats-3", tint: "deep" },
      { name: "stats-4", tint: "deep" },
      { name: "stats-5", tint: "deep" },
      { name: "stats-6", tint: "deep" },
      { name: "stats-7", tint: "deep" },
      { name: "team-2", tint: "tinted" },
      { name: "team-3", tint: "tinted" },
      { name: "team-4", tint: "tinted" },
      { name: "team-5", tint: "tinted" },
      { name: "team-6", tint: "tinted" },
      { name: "team-7", tint: "tinted" },
      { name: "testimonials-2", tint: "deep" },
      { name: "testimonials-3", tint: "deep" },
      { name: "testimonials-4", tint: "deep" },
      { name: "testimonials-5", tint: "deep" },
      { name: "testimonials-6", tint: "deep" },
      { name: "testimonials-7", tint: "deep" },
    ],
  },
  "service-fitness": {
    metadata: {
      slug: "service-fitness",
      name: "Personal Training",
      description: "A professional template for personal trainers and fitness coaches",
      heroBlock: "hero-5",
    },
    blocks: [
      { name: "header-1", tint: "tinted", forceLight: true },
      { name: "hero-5", tint: "tinted" },
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
  LegacyApplicationTemplateConfig
> = {
  "app-gym-tracker": {
    metadata: {
      type: "application",
      slug: "app-gym-tracker",
      name: "Gym Tracker",
      description: "Progressive overload tracker for strength training",
      heroBlock: "app-gym-today-1",
      defaultView: "app-gym-today-1",
      palette: "sage",
    },
    shell: "app-gym-shell-1",
    navigation: [
      { name: "app-gym-today-1", label: "Today", icon: "LayoutDashboard" },
      { name: "app-gym-log-1", label: "Log", icon: "Dumbbell" },
      { name: "app-gym-history-1", label: "History", icon: "Calendar" },
      { name: "app-gym-gains-1", label: "Gains", icon: "TrendingUp" },
      { name: "app-gym-library-1", label: "Library", icon: "Library" },
      { name: "app-gym-profile-1", label: "Profile", icon: "User" },
    ],
    views: [
      { name: "app-gym-today-1" },
      { name: "app-gym-log-1" },
      { name: "app-gym-history-1" },
      { name: "app-gym-gains-1" },
      { name: "app-gym-library-1" },
      { name: "app-gym-profile-1" },
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
): LegacyApplicationTemplateConfig | null {
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
// UNIFIED TEMPLATES (New Architecture)
// ============================================

// Single source of truth for all templates
export const templates: Record<string, UnifiedTemplateConfig> = {
  // Service Templates
  "service-plants": {
    type: "service",
    slug: "service-plants",
    name: "Service Plants",
    description: "A modern template for plant care services and nurseries",
    palette: "sage",
    heroBlock: "hero-1",
    blocks: [
      // Core blocks
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
      // Additional blocks (orphans assigned to service-plants)
      { name: "auth-1", tint: "tinted" },
      { name: "auth-2", tint: "tinted" },
      { name: "auth-3", tint: "tinted" },
      { name: "auth-4", tint: "tinted" },
      { name: "auth-5", tint: "tinted" },
      { name: "auth-6", tint: "tinted" },
      { name: "blog-2", tint: "tinted" },
      { name: "blog-3", tint: "tinted" },
      { name: "blog-4", tint: "tinted" },
      { name: "blog-5", tint: "tinted" },
      { name: "blog-6", tint: "tinted" },
      { name: "contact-2", tint: "tinted" },
      { name: "contact-3", tint: "tinted" },
      { name: "contact-4", tint: "tinted" },
      { name: "contact-5", tint: "tinted" },
      { name: "contact-6", tint: "tinted" },
      { name: "cta-2", tint: "tinted" },
      { name: "cta-3", tint: "tinted" },
      { name: "cta-4", tint: "tinted" },
      { name: "cta-5", tint: "tinted" },
      { name: "cta-6", tint: "tinted" },
      { name: "faq-2", tint: "tinted" },
      { name: "faq-3", tint: "tinted" },
      { name: "faq-4", tint: "tinted" },
      { name: "faq-5", tint: "tinted" },
      { name: "faq-6", tint: "tinted" },
      { name: "features-6", tint: "tinted" },
      { name: "features-7", tint: "tinted" },
      { name: "features-8", tint: "tinted" },
      { name: "footer-2", tint: "tinted" },
      { name: "footer-3", tint: "tinted" },
      { name: "footer-4", tint: "tinted" },
      { name: "footer-5", tint: "tinted" },
      { name: "footer-6", tint: "tinted" },
      { name: "footer-7", tint: "tinted" },
      { name: "footer-8", tint: "tinted" },
      { name: "gallery-2", tint: "tinted" },
      { name: "gallery-3", tint: "tinted" },
      { name: "gallery-4", tint: "tinted" },
      { name: "gallery-5", tint: "tinted" },
      { name: "gallery-6", tint: "tinted" },
      { name: "header-2", tint: "tinted", forceLight: true },
      { name: "header-3", tint: "tinted", forceLight: true },
      { name: "header-4", tint: "tinted", forceLight: true },
      { name: "header-5", tint: "tinted", forceLight: true },
      { name: "header-6", tint: "tinted", forceLight: true },
      { name: "header-7", tint: "tinted", forceLight: true },
      { name: "header-8", tint: "tinted", forceLight: true },
      { name: "logos-2", tint: "deep" },
      { name: "logos-3", tint: "deep" },
      { name: "logos-4", tint: "deep" },
      { name: "logos-5", tint: "deep" },
      { name: "logos-6", tint: "deep" },
      { name: "maps-1", tint: "tinted" },
      { name: "maps-2", tint: "tinted" },
      { name: "maps-3", tint: "tinted" },
      { name: "maps-4", tint: "tinted" },
      { name: "maps-5", tint: "tinted" },
      { name: "newsletter-2", tint: "deep" },
      { name: "newsletter-3", tint: "deep" },
      { name: "newsletter-4", tint: "deep" },
      { name: "newsletter-5", tint: "deep" },
      { name: "newsletter-6", tint: "deep" },
      { name: "pricing-2", tint: "tinted" },
      { name: "pricing-3", tint: "tinted" },
      { name: "pricing-4", tint: "tinted" },
      { name: "pricing-5", tint: "tinted" },
      { name: "pricing-6", tint: "tinted" },
      { name: "pricing-7", tint: "tinted" },
      { name: "products-2", tint: "tinted" },
      { name: "products-3", tint: "tinted" },
      { name: "products-4", tint: "tinted" },
      { name: "products-5", tint: "tinted" },
      { name: "products-6", tint: "tinted" },
      { name: "stats-2", tint: "deep" },
      { name: "stats-3", tint: "deep" },
      { name: "stats-4", tint: "deep" },
      { name: "stats-5", tint: "deep" },
      { name: "stats-6", tint: "deep" },
      { name: "stats-7", tint: "deep" },
      { name: "team-2", tint: "tinted" },
      { name: "team-3", tint: "tinted" },
      { name: "team-4", tint: "tinted" },
      { name: "team-5", tint: "tinted" },
      { name: "team-6", tint: "tinted" },
      { name: "team-7", tint: "tinted" },
      { name: "testimonials-2", tint: "deep" },
      { name: "testimonials-3", tint: "deep" },
      { name: "testimonials-4", tint: "deep" },
      { name: "testimonials-5", tint: "deep" },
      { name: "testimonials-6", tint: "deep" },
      { name: "testimonials-7", tint: "deep" },
    ],
  },
  "service-travel": {
    type: "service",
    slug: "service-travel",
    name: "Travel Agency",
    description: "A stunning template for travel agencies and tour operators",
    palette: "azure",
    heroBlock: "hero-2",
    blocks: [
      { name: "hero-2", forceLight: true },
    ],
  },
  "service-boat": {
    type: "service",
    slug: "service-boat",
    name: "Yacht Charter",
    description: "A luxury template for yacht rentals and marine services",
    palette: "azure",
    heroBlock: "hero-3",
    blocks: [
      { name: "hero-3", forceLight: true },
    ],
  },
  "service-fitness": {
    type: "service",
    slug: "service-fitness",
    name: "Personal Training",
    description: "A professional template for personal trainers and fitness coaches",
    palette: "neon",
    heroBlock: "hero-5",
    heroOptions: ["hero-5", "hero-4", "hero-6"],
    blocks: [
      { name: "header-1", tint: "tinted", forceLight: true },
      { name: "hero-5", tint: "tinted" },
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

  // Application Templates
  "app-gym-tracker": {
    type: "application",
    slug: "app-gym-tracker",
    name: "Gym Tracker",
    description: "Progressive overload tracker for strength training",
    palette: "sage",
    heroBlock: "app-gym-today-1",
    shell: "app-gym-shell-1",
    defaultView: "app-gym-today-1",
    navigation: [
      { name: "app-gym-today-1", label: "Today", icon: "LayoutDashboard" },
      { name: "app-gym-log-1", label: "Log", icon: "Dumbbell" },
      { name: "app-gym-history-1", label: "History", icon: "Calendar" },
      { name: "app-gym-gains-1", label: "Gains", icon: "TrendingUp" },
      { name: "app-gym-library-1", label: "Library", icon: "Library" },
      { name: "app-gym-profile-1", label: "Profile", icon: "User" },
    ],
    views: [
      { name: "app-gym-today-1" },
      { name: "app-gym-log-1" },
      { name: "app-gym-history-1" },
      { name: "app-gym-gains-1" },
      { name: "app-gym-library-1" },
      { name: "app-gym-profile-1" },
    ],
  },
  "app-quiz": {
    type: "application",
    slug: "app-quiz",
    name: "Quiz App",
    description: "Interactive quiz application with progress tracking",
    palette: "violet",
    heroBlock: "app-quiz-dashboard-1",
    shell: "app-quiz-shell-1",
    defaultView: "app-quiz-dashboard-1",
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
}

// ============================================
// Unified Helper Functions
// ============================================

// Get template by slug (unified)
export function getTemplate(slug: string): UnifiedTemplateConfig | null {
  return templates[slug] || null
}

// Get template palette (unified)
export function getTemplatePalette(slug: string): ColorPalette {
  const template = templates[slug]
  if (template) return template.palette
  // Fallback to legacy configs
  const appConfig = applicationTemplateConfigs[slug]
  if (appConfig?.metadata.palette) {
    return appConfig.metadata.palette as ColorPalette
  }
  return "azure"
}

// Find which template a block belongs to (unified)
export function getTemplateForBlockUnified(blockName: string): UnifiedTemplateConfig | null {
  for (const template of Object.values(templates)) {
    if (isServiceTemplate(template)) {
      if (template.blocks.some((b) => b.name === blockName)) {
        return template
      }
    } else {
      if (template.shell === blockName) return template
      if (template.views.some((v) => v.name === blockName)) return template
    }
  }
  return null
}

// Get block config from unified templates
export function getBlockConfigUnified(
  templateSlug: string,
  blockName: string
): BlockConfig | null {
  const template = templates[templateSlug]
  if (!template) return null

  if (isServiceTemplate(template)) {
    return template.blocks.find((b) => b.name === blockName) || null
  } else {
    if (template.shell === blockName) return { name: blockName }
    return template.views.find((v) => v.name === blockName) || null
  }
}

// Get block index within template (unified)
export function getBlockIndexUnified(templateSlug: string, blockName: string): number {
  const template = templates[templateSlug]
  if (!template) return 0

  if (isServiceTemplate(template)) {
    const index = template.blocks.findIndex((b) => b.name === blockName)
    return index === -1 ? 0 : index
  } else {
    if (template.shell === blockName) return 0
    const index = template.views.findIndex((v) => v.name === blockName)
    return index === -1 ? 0 : index + 1
  }
}

// Get shell info for application view block (unified)
export function getShellForBlock(blockName: string): {
  shell: string
  template: ApplicationTemplateConfig
} | null {
  for (const template of Object.values(templates)) {
    if (isApplicationTemplate(template)) {
      if (template.views.some((v) => v.name === blockName)) {
        return { shell: template.shell, template }
      }
    }
  }
  return null
}

// Get complete block settings for rendering (unified)
export function getBlockSettingsUnified(blockName: string): {
  template: UnifiedTemplateConfig | null
  templateSlug: string | null
  tint: TintLevel | undefined
  forceDark: boolean | undefined
  forceLight: boolean | undefined
  blockType: string | null
  index: number
} {
  const template = getTemplateForBlockUnified(blockName)

  if (!template) {
    return {
      template: null,
      templateSlug: null,
      tint: undefined,
      forceDark: undefined,
      forceLight: undefined,
      blockType: null,
      index: 0,
    }
  }

  const blockConfig = getBlockConfigUnified(template.slug, blockName)
  const index = getBlockIndexUnified(template.slug, blockName)

  // Extract block type from name
  const match = blockName.match(/^([a-z-]+)-\d+$/)
  const blockType = match ? match[1] : null

  return {
    template,
    templateSlug: template.slug,
    tint: blockConfig?.tint,
    forceDark: blockConfig?.forceDark,
    forceLight: blockConfig?.forceLight,
    blockType,
    index,
  }
}

// Get all unified templates
export function getAllTemplates(): UnifiedTemplateConfig[] {
  return Object.values(templates)
}

// Get service templates only
export function getServiceTemplates(): ServiceTemplateConfig[] {
  return Object.values(templates).filter(isServiceTemplate)
}

// Get application templates only
export function getApplicationTemplates(): ApplicationTemplateConfig[] {
  return Object.values(templates).filter(isApplicationTemplate)
}

// Get available hero options for a template
export function getTemplateHeroOptions(slug: string): string[] {
  const template = templates[slug]
  if (!template) return []
  return template.heroOptions || [template.heroBlock]
}

// Get default hero for a template
export function getTemplateDefaultHero(slug: string): string | null {
  const template = templates[slug]
  return template?.heroBlock || null
}

// ============================================
// Legacy Helpers (for backwards compatibility)
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
