/**
 * Block configuration for blocks-first architecture
 */
export interface BlockConfig {
  template: string
  blockType: string
  order: number
  palette: string
  typography: string
  tint?: "base" | "tinted" | "deep"
  forceLight?: boolean
  forceDark?: boolean
}

/**
 * Registry item config exported from .config.ts files
 * The `files` array is omitted - inferred from config file location
 */
export interface RegistryItemConfig {
  name: string
  type:
    | "registry:lib"
    | "registry:block"
    | "registry:component"
    | "registry:ui"
    | "registry:hook"
    | "registry:page"
    | "registry:file"
    | "registry:theme"
    | "registry:style"
    | "registry:item"
    | "registry:example"
    | "registry:internal"
  title?: string
  author?: string
  description?: string
  dependencies?: string[]
  devDependencies?: string[]
  registryDependencies?: string[]
  categories?: string[]
  tier?: "free" | "pro"
  readiness?: "alpha" | "beta" | "production"
  meta?: Record<string, unknown>
  blockConfig?: BlockConfig
}
