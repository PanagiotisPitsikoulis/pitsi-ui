/**
 * Types for block transformation
 */

export interface BlockDefinition {
  name: string
  type: string
  description?: string
  dependencies?: string[]
  registryDependencies?: string[]
  files: BlockFile[]
  categories?: string[]
  tier?: "free" | "pro"
  readiness?: "alpha" | "beta" | "stable"
  meta?: Record<string, unknown>
}

export interface BlockFile {
  path: string
  type: string
  target?: string
}

export interface ScannedBlock {
  definition: BlockDefinition
  files: ScannedBlockFile[]
  basePath: string
}

export interface ScannedBlockFile {
  path: string
  absolutePath: string
  content: string
  type: string
}

export interface ExtractedContent {
  texts: ContentItem[]
  images: ContentItem[]
  icons: ContentItem[]
  links: ContentItem[]
  lists: ListContent[]
  metadata: Record<string, unknown>
}

export interface ContentItem {
  value: string
  location: string
  context?: string
  propName?: string
}

export interface ListContent {
  items: ContentItem[]
  location: string
  propName?: string
}

export interface TransformResult {
  blockName: string
  originalFiles: ScannedBlockFile[]
  transformedFiles: TransformedFile[]
  propsInterface: string
  defaultProps: string
  success: boolean
  error?: string
}

export interface TransformedFile {
  path: string
  content: string
  propsAdded: string[]
}

export interface TransformOptions {
  registryPath: string
  outputPath: string
  readinessFilter?: ("alpha" | "beta" | "stable")[]
  tierFilter?: ("free" | "pro")[]
  categoryFilter?: string[]
  blockNames?: string[]
  dryRun?: boolean
  concurrency?: number
}
