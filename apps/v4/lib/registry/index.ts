import fs from "fs/promises"
import { tmpdir } from "os"
import path from "path"
import { fileURLToPath } from "url"
import {
  registryItemFileSchema,
  registryItemSchema,
  type RegistryItem,
} from "pitsi/schema"
import { Project, ScriptKind } from "ts-morph"
import { z } from "zod"

import { Index } from "@/registry/__index__"
import { type Style } from "@/registry/styles"

// =============================================================================
// STATIC PATH RESOLUTION (avoids dynamic process.cwd() for better build perf)
// =============================================================================

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const APP_ROOT = path.resolve(__dirname, "../..")

// =============================================================================
// LAZY-INITIALIZED SINGLETON INDEXES
// Built once on first access, reused forever for O(1) lookups
// =============================================================================

let _allItemsArray: RegistryItem[] | null = null
let _itemsByName: Map<string, RegistryItem> | null = null
let _itemsByType: Map<RegistryItemType, RegistryItem[]> | null = null
let _blockCategories: Map<
  string,
  { main: string | null; sub: string | null }
> | null = null

// Cached ts-morph Project instance
let _cachedProject: Project | null = null

function getProject(): Project {
  if (!_cachedProject) {
    _cachedProject = new Project({ compilerOptions: {} })
  }
  return _cachedProject
}

// =============================================================================
// INDEX BUILDERS (run once, lazy)
// =============================================================================

function buildAllItemsArray(): RegistryItem[] {
  if (_allItemsArray) return _allItemsArray

  const items: RegistryItem[] = []
  for (const style in Index) {
    const styleIndex = Index[style]
    if (typeof styleIndex === "object" && styleIndex !== null) {
      for (const name in styleIndex) {
        items.push(styleIndex[name])
      }
    }
  }
  _allItemsArray = items
  return items
}

function buildItemsByNameMap(): Map<string, RegistryItem> {
  if (_itemsByName) return _itemsByName

  const map = new Map<string, RegistryItem>()
  for (const item of buildAllItemsArray()) {
    map.set(item.name, item)
  }
  _itemsByName = map
  return map
}

function buildItemsByTypeMap(): Map<RegistryItemType, RegistryItem[]> {
  if (_itemsByType) return _itemsByType

  const map = new Map<RegistryItemType, RegistryItem[]>()
  for (const item of buildAllItemsArray()) {
    const existing = map.get(item.type)
    if (existing) {
      existing.push(item)
    } else {
      map.set(item.type, [item])
    }
  }
  _itemsByType = map
  return map
}

// Extract category from file path (internal helper)
function extractMainCategoryFromPath(filePath: string): string | null {
  const match = filePath.match(/blocks\/([^/]+)\//)
  return match ? match[1] : null
}

function extractSubcategoryFromPath(filePath: string): string | null {
  const match = filePath.match(/blocks\/[^/]+\/([^/]+)\//)
  return match ? match[1] : null
}

function buildBlockCategoriesMap(): Map<
  string,
  { main: string | null; sub: string | null }
> {
  if (_blockCategories) return _blockCategories

  const map = new Map<string, { main: string | null; sub: string | null }>()
  for (const item of buildAllItemsArray()) {
    if (item.type === "registry:block" || item.type === "registry:internal") {
      const firstFilePath = item.files?.[0]?.path
      if (firstFilePath) {
        map.set(item.name, {
          main: extractMainCategoryFromPath(firstFilePath),
          sub: extractSubcategoryFromPath(firstFilePath),
        })
      } else {
        map.set(item.name, { main: null, sub: null })
      }
    }
  }
  _blockCategories = map
  return map
}

// =============================================================================
// PUBLIC API - Types
// =============================================================================

export type RegistryItemType = z.infer<typeof registryItemSchema>["type"]
export type { RegistryItem }

export interface QueryRegistryOptions {
  returnType?:
    | "items"
    | "ids"
    | "categories"
    | "subcategories"
    | "counts"
    | "subcategoryCounts"
  types?: RegistryItemType[]
  categories?: string[]
  excludeNamePrefix?: string[]
  mainCategory?: string
  subcategory?: string
  name?: string
  style?: Style["name"]
  filter?: (item: RegistryItem) => boolean
}

// =============================================================================
// PUBLIC API - Core Functions
// =============================================================================

/**
 * Get all registry items with optional filtering
 * Uses pre-built indexes for O(1) type filtering
 */
export function getAllRegistryItems(options?: {
  types?: RegistryItemType[]
  mainCategory?: string
  subcategory?: string
}): RegistryItem[] {
  // Fast path: filter by types using pre-built index
  let items: RegistryItem[]
  if (options?.types && options.types.length > 0) {
    const typeMap = buildItemsByTypeMap()
    items = options.types.flatMap((t) => typeMap.get(t) || [])
  } else {
    items = buildAllItemsArray()
  }

  // Filter by mainCategory using cached block categories
  if (options?.mainCategory) {
    const blockCats = buildBlockCategoriesMap()
    items = items.filter((item) => {
      if (item.type === "registry:block" || item.type === "registry:internal") {
        return blockCats.get(item.name)?.main === options.mainCategory
      }
      return item.categories?.includes(options.mainCategory!)
    })
  }

  // Filter by subcategory using cached block categories
  if (options?.subcategory) {
    const blockCats = buildBlockCategoriesMap()
    items = items.filter((item) => {
      if (item.type === "registry:block" || item.type === "registry:internal") {
        return blockCats.get(item.name)?.sub === options.subcategory
      }
      return item.categories?.includes(options.subcategory!)
    })
  }

  // Always filter alpha items
  return items.filter((item) => item.readiness !== "alpha")
}

/**
 * Get item by name - O(1) Map lookup
 */
export function getItemByName(name: string): RegistryItem | null {
  return buildItemsByNameMap().get(name) ?? null
}

/**
 * Check if item exists - O(1) lookup
 * When style provided, uses direct Index access
 */
export function itemExists(name: string, style?: Style["name"]): boolean {
  if (style) {
    return !!Index[style]?.[name]
  }
  return buildItemsByNameMap().has(name)
}

/**
 * Get block main category - O(1) cached lookup with fallback computation
 */
export function getBlockMainCategory(block: RegistryItem): string | null {
  if (block.type !== "registry:block" && block.type !== "registry:internal") {
    return null
  }
  // Try cached lookup first
  const cached = buildBlockCategoriesMap().get(block.name)
  if (cached !== undefined) {
    return cached.main
  }
  // Fallback: compute from file path (for test mocks or dynamic items)
  const firstFilePath = block.files?.[0]?.path
  return firstFilePath ? extractMainCategoryFromPath(firstFilePath) : null
}

/**
 * Get block subcategory - O(1) cached lookup with fallback computation
 */
export function getBlockSubcategory(block: RegistryItem): string | null {
  if (block.type !== "registry:block" && block.type !== "registry:internal") {
    return null
  }
  // Try cached lookup first
  const cached = buildBlockCategoriesMap().get(block.name)
  if (cached !== undefined) {
    return cached.sub
  }
  // Fallback: compute from file path (for test mocks or dynamic items)
  const firstFilePath = block.files?.[0]?.path
  return firstFilePath ? extractSubcategoryFromPath(firstFilePath) : null
}

/**
 * Unified query interface
 */
export async function queryRegistry(
  options: QueryRegistryOptions = {}
): Promise<
  RegistryItem[] | string[] | Record<string, number> | RegistryItem | null
> {
  try {
    const {
      returnType = "items",
      types = [],
      categories = [],
      excludeNamePrefix = [],
      mainCategory,
      subcategory,
      name,
      style,
      filter,
    } = options

    // Fast path: single item with content
    if (name && style) {
      return await getRegistryItemWithContent(name, style)
    }

    // Fast path: single item by name (O(1) lookup)
    if (name && !style) {
      return getItemByName(name)
    }

    // Get items with type/category pre-filtering
    let items = getAllRegistryItems({
      types: types.length > 0 ? types : undefined,
      mainCategory,
      subcategory,
    })

    // Additional filters
    if (categories.length > 0) {
      items = items.filter((item) =>
        item.categories?.some((cat) => categories.includes(cat))
      )
    }

    if (excludeNamePrefix.length > 0) {
      items = items.filter(
        (item) =>
          !excludeNamePrefix.some((prefix) => item.name.startsWith(prefix))
      )
    }

    // Handle mainCategory filter for non-type-filtered queries
    const alreadyFilteredByCategory = mainCategory && subcategory
    if (mainCategory && !alreadyFilteredByCategory) {
      const blockCats = buildBlockCategoriesMap()
      items = items.filter((item) => {
        const cached = blockCats.get(item.name)
        if (cached) {
          if (cached.main !== mainCategory) return false
          if (subcategory && cached.sub !== subcategory) return false
        }
        return true
      })
    }

    if (filter) {
      items = items.filter(filter)
    }

    // Return based on requested type
    switch (returnType) {
      case "ids":
        return items.map((item) => item.name)

      case "categories": {
        const categorySet = new Set<string>()
        const blockCats = buildBlockCategoriesMap()
        for (const item of items) {
          if (
            item.type === "registry:block" ||
            item.type === "registry:internal"
          ) {
            const cat = blockCats.get(item.name)?.main
            if (cat) categorySet.add(cat)
          } else {
            item.categories?.forEach((cat) => categorySet.add(cat))
          }
        }
        return Array.from(categorySet).sort()
      }

      case "subcategories": {
        if (!mainCategory) {
          return Promise.reject(
            new Error('returnType "subcategories" requires mainCategory option')
          )
        }
        const subcategorySet = new Set<string>()
        const blockCats = buildBlockCategoriesMap()
        for (const item of items) {
          const cached = blockCats.get(item.name)
          if (cached?.main === mainCategory && cached.sub) {
            subcategorySet.add(cached.sub)
          }
        }
        return Array.from(subcategorySet).sort()
      }

      case "counts": {
        const counts: Record<string, number> = {}
        const blockCats = buildBlockCategoriesMap()
        for (const item of items) {
          if (
            item.type === "registry:block" ||
            item.type === "registry:internal"
          ) {
            const cat = blockCats.get(item.name)?.main
            if (cat) counts[cat] = (counts[cat] || 0) + 1
          } else {
            item.categories?.forEach((cat) => {
              counts[cat] = (counts[cat] || 0) + 1
            })
          }
        }
        return counts
      }

      case "subcategoryCounts": {
        if (!mainCategory) {
          return Promise.reject(
            new Error(
              'returnType "subcategoryCounts" requires mainCategory option'
            )
          )
        }
        const subcategoryCounts: Record<string, number> = {}
        const blockCats = buildBlockCategoriesMap()
        for (const item of items) {
          const cached = blockCats.get(item.name)
          if (cached?.main === mainCategory && cached.sub) {
            subcategoryCounts[cached.sub] =
              (subcategoryCounts[cached.sub] || 0) + 1
          }
        }
        return subcategoryCounts
      }

      default:
        return items
    }
  } catch (error) {
    console.warn("queryRegistry error:", error)
    const { returnType = "items", name } = options
    if (name) return null
    if (returnType === "items" || returnType === "ids") return []
    if (returnType === "categories" || returnType === "subcategories") return []
    if (returnType === "counts" || returnType === "subcategoryCounts") return {}
    return null
  }
}

// =============================================================================
// FILE CONTENT PROCESSING
// =============================================================================

/**
 * Get registry item with file content populated
 * Uses direct Index access for O(1) item lookup
 */
async function getRegistryItemWithContent(
  name: string,
  styleName: Style["name"]
): Promise<RegistryItem | null> {
  try {
    // O(1) direct access instead of iterating
    const item = Index[styleName]?.[name] as RegistryItem | undefined
    if (!item) return null

    const itemFiles =
      item.files?.map((file: unknown) => {
        const fileObj =
          typeof file === "string"
            ? { path: file }
            : (file as { path: string; [key: string]: unknown })
        return {
          ...fileObj,
          path: path.join(APP_ROOT, fileObj.path),
        }
      }) ?? []

    const result = registryItemSchema.safeParse({ ...item, files: itemFiles })
    if (!result.success) return null

    const filesList: NonNullable<typeof result.data.files> = []
    for (const file of itemFiles) {
      const content = await getFileContent(file as { path: string })
      if (content === null) continue

      filesList.push({
        ...file,
        path: path.relative(APP_ROOT, file.path),
        content,
      } as NonNullable<typeof result.data.files>[number])
    }

    const files = fixFilePaths(filesList)
    const parsed = registryItemSchema.safeParse({ ...result.data, files })

    return parsed.success ? parsed.data : null
  } catch (error) {
    console.error(`Failed to get registry item "${name}" with content:`, error)
    return null
  }
}

async function getFileContent(file: {
  path: string
  type?: string
}): Promise<string | null> {
  try {
    const raw = await fs.readFile(file.path, "utf-8")
    const project = getProject()
    const tempFile = await createTempSourceFile(file.path)
    const sourceFile = project.createSourceFile(tempFile, raw, {
      scriptKind: ScriptKind.TSX,
    })

    let code = sourceFile.getFullText()
    if (file.type !== "registry:page") {
      code = code.replaceAll("export default", "export")
    }
    code = fixImport(code)
    sourceFile.delete()

    return code
  } catch (error) {
    console.warn(`Failed to read file ${file.path}:`, error)
    return null
  }
}

async function createTempSourceFile(filename: string) {
  const dir = await fs.mkdtemp(path.join(tmpdir(), "pitsi-"))
  return path.join(dir, filename)
}

// =============================================================================
// PATH & IMPORT UTILITIES
// =============================================================================

function getFileTarget(file: z.infer<typeof registryItemFileSchema>) {
  let target = file.target
  if (!target || target === "") {
    const fileName = file.path.split("/").pop()
    if (
      ["registry:block", "registry:component", "registry:example"].includes(
        file.type!
      )
    ) {
      target = `components/${fileName}`
    } else if (file.type === "registry:ui") {
      target = `components/ui/${fileName}`
    } else if (file.type === "registry:hook") {
      target = `hooks/${fileName}`
    } else if (file.type === "registry:lib") {
      target = `lib/${fileName}`
    }
  }
  return target ?? ""
}

export function fixFilePaths(
  files: z.infer<typeof registryItemSchema>["files"]
) {
  if (!files || files.length === 0) return []

  const firstFilePathDir = path.dirname(files[0].path)
  return files.map((file) => ({
    ...file,
    path: path.relative(firstFilePathDir, file.path),
    target: getFileTarget(file),
  }))
}

export function fixImport(content: string) {
  return content.replace(
    /@\/(.+?)\/((?:.*?\/)?(?:components|ui|hooks|lib))\/([\w-]+)/g,
    (match, _path, type, component) => {
      if (type.endsWith("components")) return `@/components/${component}`
      if (type.endsWith("ui")) return `@/components/ui/${component}`
      if (type.endsWith("hooks")) return `@/hooks/${component}`
      if (type.endsWith("lib")) return `@/lib/${component}`
      return match
    }
  )
}

// =============================================================================
// LEGACY EXPORTS & UTILITIES
// =============================================================================

/** Legacy alias for getRegistryItemWithContent */
export async function getRegistryItem(
  name: string,
  style: Style["name"]
): Promise<RegistryItem | null> {
  return await getRegistryItemWithContent(name, style)
}

/** Get summary counts for homepage */
export function getRegistrySummaryCounts(): {
  animations: number
  components: number
  blocks: number
} {
  const typeMap = buildItemsByTypeMap()
  const allItems = buildAllItemsArray()

  const animations = allItems.filter((item) =>
    item.categories?.includes("animations")
  ).length

  const uiItems = typeMap.get("registry:ui") || []
  const components = uiItems.filter(
    (item) => !item.categories?.includes("animations")
  ).length

  const blocks =
    (typeMap.get("registry:block")?.length || 0) +
    (typeMap.get("registry:internal")?.length || 0)

  return { animations, components, blocks }
}

/** File tree utilities */
export type FileTree = {
  name: string
  path?: string
  children?: FileTree[]
}

export function createFileTreeForRegistryItemFiles(
  files: Array<{ path: string; target?: string }>
): FileTree[] {
  const root: FileTree[] = []

  for (const file of files) {
    const filePath = file.target ?? file.path
    const parts = filePath.split("/")
    let currentLevel = root

    for (let i = 0; i < parts.length; i++) {
      const part = parts[i]
      const isFile = i === parts.length - 1
      let node = currentLevel.find((n) => n.name === part)

      if (!node) {
        node = isFile
          ? { name: part, path: filePath }
          : { name: part, children: [] }
        currentLevel.push(node)
      } else if (isFile) {
        node.path = filePath
      }

      if (!isFile) currentLevel = node.children!
    }
  }

  return root
}
