import fs from "fs/promises"
import { tmpdir } from "os"
import path from "path"
import { registryItemFileSchema, registryItemSchema } from "pitsi/schema"
import { Project, ScriptKind } from "ts-morph"
import { z } from "zod"

import { type Style } from "@/registry/styles"



export type RegistryItemType = z.infer<typeof registryItemSchema>["type"]

export type RegistryItem = z.infer<typeof registryItemSchema>

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

  
  excludeCharts?: boolean
}


export async function queryRegistry(
  options: QueryRegistryOptions = {}
): Promise<
  RegistryItem[] | string[] | Record<string, number> | RegistryItem | null
> {
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
    excludeCharts = true,
  } = options

  
  if (name && style) {
    return await getRegistryItemWithContent(name, style)
  }

  
  if (name && !style) {
    const allItems = await getAllRegistryItems()
    return allItems.find((item) => item.name === name) || null
  }

  
  let items = await getAllRegistryItems({
    types: types.length > 0 ? types : undefined,
    mainCategory,
    subcategory,
  })

  
  
  

  
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

  
  if (excludeCharts) {
    items = items.filter((item) => !item.name.startsWith("chart-"))
  }

  
  
  const alreadyFilteredByCategory = mainCategory && subcategory
  if (mainCategory && !alreadyFilteredByCategory) {
    items = items.filter((item) => {
      const itemMainCategory = getBlockMainCategory(item)
      if (itemMainCategory !== mainCategory) return false

      if (subcategory) {
        const itemSubcategory = getBlockSubcategory(item)
        return itemSubcategory === subcategory
      }

      return true
    })
  }

  
  if (filter) {
    items = items.filter(filter)
  }

  
  switch (returnType) {
    case "ids":
      return items.map((item) => item.name)

    case "categories":
      const categorySet = new Set<string>()
      items.forEach((item) => {
        
        if (
          item.type === "registry:block" ||
          item.type === "registry:internal"
        ) {
          const cat = getBlockMainCategory(item)
          if (cat) categorySet.add(cat)
        } else {
          
          item.categories?.forEach((cat) => categorySet.add(cat))
        }
      })
      return Array.from(categorySet).sort()

    case "subcategories":
      if (!mainCategory) {
        throw new Error(
          'returnType "subcategories" requires mainCategory option'
        )
      }
      const subcategorySet = new Set<string>()
      items.forEach((item) => {
        const itemMainCategory = getBlockMainCategory(item)
        const itemSubcategory = getBlockSubcategory(item)
        if (itemMainCategory === mainCategory && itemSubcategory) {
          subcategorySet.add(itemSubcategory)
        }
      })
      return Array.from(subcategorySet).sort()

    case "counts":
      const counts: Record<string, number> = {}
      items.forEach((item) => {
        
        if (
          item.type === "registry:block" ||
          item.type === "registry:internal"
        ) {
          const cat = getBlockMainCategory(item)
          if (cat) {
            counts[cat] = (counts[cat] || 0) + 1
          }
        } else {
          
          item.categories?.forEach((cat) => {
            counts[cat] = (counts[cat] || 0) + 1
          })
        }
      })
      return counts

    case "subcategoryCounts":
      if (!mainCategory) {
        throw new Error(
          'returnType "subcategoryCounts" requires mainCategory option'
        )
      }
      const subcategoryCounts: Record<string, number> = {}
      items.forEach((item) => {
        const itemMainCategory = getBlockMainCategory(item)
        const itemSubcategory = getBlockSubcategory(item)
        if (itemMainCategory === mainCategory && itemSubcategory) {
          subcategoryCounts[itemSubcategory] =
            (subcategoryCounts[itemSubcategory] || 0) + 1
        }
      })
      return subcategoryCounts

    case "items":
    default:
      return items
  }
}






async function getRegistryItemWithContent(
  name: string,
  styleName: Style["name"]
): Promise<RegistryItem | null> {
  
  const allItems = await getAllRegistryItems()
  const item = allItems.find((i) => i.name === name)

  if (!item) {
    return null
  }

  
  const itemFiles =
    item.files?.map((file: unknown) => {
      const fileObj = typeof file === "string" ? { path: file } : file
      
      
      const absolutePath = path.join(process.cwd(), fileObj.path)
      return {
        ...fileObj,
        path: absolutePath,
      }
    }) ?? []

  
  const result = registryItemSchema.safeParse({
    ...item,
    files: itemFiles,
  })

  if (!result.success) {
    return null
  }

  let files: typeof result.data.files = []
  for (const file of itemFiles) {
    const content = await getFileContent(file)
    const relativePath = path.relative(process.cwd(), file.path)

    files.push({
      ...file,
      path: relativePath,
      content,
    })
  }

  
  files = fixFilePaths(files)

  const parsed = registryItemSchema.safeParse({
    ...result.data,
    files,
  })

  if (!parsed.success) {
    console.error(parsed.error.message)
    return null
  }

  return parsed.data
}

async function getFileContent(file: z.infer<typeof registryItemFileSchema>) {
  const raw = await fs.readFile(file.path, "utf-8")

  const project = new Project({
    compilerOptions: {},
  })

  const tempFile = await createTempSourceFile(file.path)
  const sourceFile = project.createSourceFile(tempFile, raw, {
    scriptKind: ScriptKind.TSX,
  })

  let code = sourceFile.getFullText()

  
  
  if (file.type !== "registry:page") {
    code = code.replaceAll("export default", "export")
  }

  
  code = fixImport(code)

  return code
}

function getFileTarget(file: z.infer<typeof registryItemFileSchema>) {
  let target = file.target

  if (!target || target === "") {
    const fileName = file.path.split("/").pop()
    if (
      file.type === "registry:block" ||
      file.type === "registry:component" ||
      file.type === "registry:example"
    ) {
      target = `components/${fileName}`
    }

    if (file.type === "registry:ui") {
      target = `components/ui/${fileName}`
    }

    if (file.type === "registry:hook") {
      target = `hooks/${fileName}`
    }

    if (file.type === "registry:lib") {
      target = `lib/${fileName}`
    }
  }

  return target ?? ""
}

async function createTempSourceFile(filename: string) {
  const dir = await fs.mkdtemp(path.join(tmpdir(), "pitsi-"))
  return path.join(dir, filename)
}

export function fixFilePaths(files: z.infer<typeof registryItemSchema>["files"]) {
  if (!files || files.length === 0) {
    return []
  }

  
  const firstFilePath = files[0].path
  const firstFilePathDir = path.dirname(firstFilePath)

  return files.map((file) => {
    return {
      ...file,
      path: path.relative(firstFilePathDir, file.path),
      target: getFileTarget(file),
    }
  })
}

export function fixImport(content: string) {
  const regex = /@\/(.+?)\/((?:.*?\/)?(?:components|ui|hooks|lib))\/([\w-]+)/g

  const replacement = (
    match: string,
    path: string,
    type: string,
    component: string
  ) => {
    if (type.endsWith("components")) {
      return `@/components/${component}`
    } else if (type.endsWith("ui")) {
      return `@/components/ui/${component}`
    } else if (type.endsWith("hooks")) {
      return `@/hooks/${component}`
    } else if (type.endsWith("lib")) {
      return `@/lib/${component}`
    }

    return match
  }

  return content.replace(regex, replacement)
}






export async function getAllRegistryItems(options?: {
  types?: RegistryItemType[]
  mainCategory?: string
  subcategory?: string
}): Promise<RegistryItem[]> {
  const allItems: RegistryItem[] = []

  
  const indexFilesToLoad: string[] = []

  if (options?.types && options.types.length > 0) {
    
    for (const type of options.types) {
      if (type === "registry:block" || type === "registry:internal") {
        
        if (options.mainCategory && options.subcategory) {
          indexFilesToLoad.push(
            `__index__blocks-${options.mainCategory}-${options.subcategory}`
          )
        } else if (options.mainCategory) {
          indexFilesToLoad.push(`__index__blocks-${options.mainCategory}`)
        } else {
          
          const blockCategories = [
            "application",
            "e-commerce",
            "full-pages",
            "marketing",
          ]
          blockCategories.forEach((cat) => {
            indexFilesToLoad.push(`__index__blocks-${cat}`)
          })
        }
      } else {
        
        const typeName = type.replace("registry:", "")
        indexFilesToLoad.push(`__index__${typeName}`)
      }
    }
  } else if (options?.mainCategory) {
    
    if (options.subcategory) {
      indexFilesToLoad.push(
        `__index__blocks-${options.mainCategory}-${options.subcategory}`
      )
    } else {
      indexFilesToLoad.push(`__index__blocks-${options.mainCategory}`)
    }
  } else {
    
    const allIndexes = [
      "__index__ui",
      "__index__lib",
      "__index__hook",
      "__index__example",
      "__index__theme",
      "__index__style",
      "__index__blocks-application",
      "__index__blocks-e-commerce",
      "__index__blocks-full-pages",
      "__index__blocks-marketing",
    ]
    indexFilesToLoad.push(...allIndexes)
  }


  for (const indexFile of indexFilesToLoad) {
    try {
      const indexModule = await import(`@/registry/${indexFile}.tsx`)
      const indexKey = Object.keys(indexModule).find((key) =>
        key.startsWith("Index")
      )

      if (indexKey && indexModule[indexKey]) {
        const Index = indexModule[indexKey]


        for (const style in Index) {
          const styleIndex = Index[style]
          if (typeof styleIndex === "object" && styleIndex !== null) {
            for (const itemName in styleIndex) {
              const item = styleIndex[itemName]
              allItems.push(item)
            }
          }
        }
      }
    } catch (error) {

      console.warn(`⚠️  Index file ${indexFile} not found, skipping`)
    }
  }


  const validatedItems = allItems
    .map((item) => {
      const result = registryItemSchema.safeParse(item)
      return result.success ? result.data : null
    })
    .filter((item): item is RegistryItem => item !== null)

  // Filter out alpha items if HIDE_ALPHA_ITEMS env variable is set
  const hideAlpha = process.env.HIDE_ALPHA_ITEMS === "true"
  if (hideAlpha) {
    return validatedItems.filter((item) => item.readiness !== "alpha")
  }

  return validatedItems
}


export async function getRegistryItems(options: {
  types?: RegistryItemType[]
  categories?: string[]
  excludeNamePrefix?: string[]
}): Promise<RegistryItem[]> {
  const { types = [], categories = [], excludeNamePrefix = [] } = options

  const allItems = await getAllRegistryItems({
    types: types.length > 0 ? types : undefined,
  })

  return allItems.filter((item) => {
    
    const typeMatch = types.length === 0 || types.includes(item.type)
    if (!typeMatch) return false

    
    const categoryMatch =
      categories.length === 0 ||
      item.categories?.some((category) => categories.includes(category))
    if (!categoryMatch) return false

    
    const excludeMatch = excludeNamePrefix.some((prefix) =>
      item.name.startsWith(prefix)
    )
    if (excludeMatch) return false

    return true
  })
}


export async function getRegistryItemIds(options: {
  types?: RegistryItemType[]
  categories?: string[]
  excludeNamePrefix?: string[]
}): Promise<string[]> {
  const items = await getRegistryItems(options)
  return items.map((item) => item.name)
}


export async function getRegistryCategories(options: {
  types?: RegistryItemType[]
}): Promise<string[]> {
  const { types = [] } = options

  const items = await getRegistryItems({ types })
  const categories = new Set<string>()

  items.forEach((item) => {
    item.categories?.forEach((category) => {
      categories.add(category)
    })
  })

  return Array.from(categories).sort()
}


export async function getRegistryItemsByCategory(options: {
  category: string
  types?: RegistryItemType[]
}): Promise<string[]> {
  const { category, types = [] } = options

  const items = await getRegistryItems({ types, categories: [category] })
  return items.map((item) => item.name)
}


export async function getRegistryCategoryCounts(options: {
  types?: RegistryItemType[]
}): Promise<Record<string, number>> {
  const { types = [] } = options

  const items = await getRegistryItems({ types })
  const counts: Record<string, number> = {}

  items.forEach((item) => {
    item.categories?.forEach((category) => {
      counts[category] = (counts[category] || 0) + 1
    })
  })

  return counts
}






export function getBlockMainCategory(block: RegistryItem): string | null {
  const firstFile = block.files?.[0]
  if (!firstFile?.path) return null

  const match = firstFile.path.match(/blocks\/([^/]+)\//)
  return match ? match[1] : null
}


export function getBlockSubcategory(block: RegistryItem): string | null {
  const firstFile = block.files?.[0]
  if (!firstFile?.path) return null

  const match = firstFile.path.match(/blocks\/[^/]+\/([^/]+)\//)
  return match ? match[1] : null
}


export async function getAllBlocks(options: {
  categories?: string[]
  excludeCharts?: boolean
}): Promise<RegistryItem[]> {
  const { categories = [], excludeCharts = true } = options

  const items = await getRegistryItems({
    types: ["registry:block", "registry:internal"],
    categories,
    excludeNamePrefix: excludeCharts ? ["chart-"] : [],
  })

  return items
}


export async function getBlockMainCategories(): Promise<string[]> {
  const blocks = await getAllBlocks({})
  const categories = new Set<string>()

  blocks.forEach((block) => {
    const category = getBlockMainCategory(block)
    if (category) categories.add(category)
  })

  return Array.from(categories).sort()
}


export async function getBlockSubcategories(
  mainCategory: string
): Promise<string[]> {
  const blocks = await getAllBlocks({})
  const subcategories = new Set<string>()

  blocks.forEach((block) => {
    const blockMainCategory = getBlockMainCategory(block)
    const blockSubcategory = getBlockSubcategory(block)

    if (blockMainCategory === mainCategory && blockSubcategory) {
      subcategories.add(blockSubcategory)
    }
  })

  return Array.from(subcategories).sort()
}


export async function getBlocksByCategoryNames(
  mainCategory: string,
  subcategory?: string
): Promise<string[]> {
  const blocks = await getAllBlocks({})

  const filteredBlocks = blocks.filter((block) => {
    const blockMainCategory = getBlockMainCategory(block)
    if (blockMainCategory !== mainCategory) return false

    if (subcategory) {
      const blockSubcategory = getBlockSubcategory(block)
      return blockSubcategory === subcategory
    }

    return true
  })

  return filteredBlocks.map((block) => block.name)
}


export async function getBlockCategoryBlockCounts(): Promise<
  Record<string, number>
> {
  const blocks = await getAllBlocks({})
  const counts: Record<string, number> = {}

  blocks.forEach((block) => {
    const category = getBlockMainCategory(block)
    if (category) {
      counts[category] = (counts[category] || 0) + 1
    }
  })

  return counts
}


export async function getBlockSubcategoryBlockCounts(
  mainCategory: string
): Promise<Record<string, number>> {
  const blocks = await getAllBlocks({})
  const counts: Record<string, number> = {}

  blocks.forEach((block) => {
    const blockMainCategory = getBlockMainCategory(block)
    const blockSubcategory = getBlockSubcategory(block)

    if (blockMainCategory === mainCategory && blockSubcategory) {
      counts[blockSubcategory] = (counts[blockSubcategory] || 0) + 1
    }
  })

  return counts
}






export async function getAllComponents(options: {
  types?: RegistryItemType[]
  categories?: string[]
}): Promise<RegistryItem[]> {
  const { types = ["registry:ui"], categories = [] } = options

  return await getRegistryItems({ types, categories })
}


export async function getAllComponentIds(options: {
  types?: RegistryItemType[]
  categories?: string[]
}): Promise<string[]> {
  const components = await getAllComponents(options)
  return components.map((component) => component.name)
}


export async function getAllComponentCategories(): Promise<string[]> {
  return await getRegistryCategories({ types: ["registry:ui"] })
}


export async function getComponentsByCategory(
  category: string
): Promise<string[]> {
  return await getRegistryItemsByCategory({
    category,
    types: ["registry:ui"],
  })
}


export async function getCategoryComponentCounts(): Promise<
  Record<string, number>
> {
  return await getRegistryCategoryCounts({ types: ["registry:ui"] })
}






export async function getAllThemes(options: {
  categories?: string[]
}): Promise<RegistryItem[]> {
  const { categories = [] } = options

  return await getRegistryItems({
    types: ["registry:theme"],
    categories,
  })
}


export async function getAllThemeIds(options: {
  categories?: string[]
}): Promise<string[]> {
  const themes = await getAllThemes(options)
  return themes.map((theme) => theme.name)
}






export async function getAllStyles(options: {
  categories?: string[]
}): Promise<RegistryItem[]> {
  const { categories = [] } = options

  return await getRegistryItems({
    types: ["registry:style"],
    categories,
  })
}


export async function getAllStyleIds(options: {
  categories?: string[]
}): Promise<string[]> {
  const styles = await getAllStyles(options)
  return styles.map((style) => style.name)
}






export async function getAllHooks(options: {
  categories?: string[]
}): Promise<RegistryItem[]> {
  const { categories = [] } = options

  return await getRegistryItems({
    types: ["registry:hook"],
    categories,
  })
}


export async function getAllHookIds(options: {
  categories?: string[]
}): Promise<string[]> {
  const hooks = await getAllHooks(options)
  return hooks.map((hook) => hook.name)
}






export async function getAllExamples(options: {
  categories?: string[]
}): Promise<RegistryItem[]> {
  const { categories = [] } = options

  return await getRegistryItems({
    types: ["registry:example"],
    categories,
  })
}


export async function getAllExampleIds(options: {
  categories?: string[]
}): Promise<string[]> {
  const examples = await getAllExamples(options)
  return examples.map((example) => example.name)
}







export async function getItemsByType(
  type: RegistryItemType
): Promise<RegistryItem[]> {
  return (await queryRegistry({ types: [type] })) as RegistryItem[]
}


export async function getBlocksByCategory(
  mainCategory: string
): Promise<RegistryItem[]> {
  return (await queryRegistry({ mainCategory })) as RegistryItem[]
}


export async function getBlocksBySubcategory(
  mainCategory: string,
  subcategory: string
): Promise<RegistryItem[]> {
  return (await queryRegistry({
    mainCategory,
    subcategory,
  })) as RegistryItem[]
}


export async function getItemIdsByType(
  type: RegistryItemType
): Promise<string[]> {
  return (await queryRegistry({
    types: [type],
    returnType: "ids",
  })) as string[]
}


export async function getAvailableBlockCategories(): Promise<string[]> {
  return (await queryRegistry({
    types: ["registry:block", "registry:internal"],
    returnType: "categories",
  })) as string[]
}


export async function getAvailableBlockSubcategories(
  mainCategory: string
): Promise<string[]> {
  return (await queryRegistry({
    mainCategory,
    returnType: "subcategories",
  })) as string[]
}


export async function getBlockCategoryCounts(): Promise<
  Record<string, number>
> {
  return (await queryRegistry({
    types: ["registry:block", "registry:internal"],
    returnType: "counts",
  })) as Record<string, number>
}


export async function searchItemsByName(
  pattern: string
): Promise<RegistryItem[]> {
  return (await queryRegistry({
    filter: (item) => item.name.includes(pattern),
  })) as RegistryItem[]
}


export async function getItemByName(
  name: string
): Promise<RegistryItem | null> {
  return (await queryRegistry({ name })) as RegistryItem | null
}


export async function getItemWithContent(
  name: string,
  style: Style["name"]
): Promise<RegistryItem | null> {
  return (await queryRegistry({ name, style })) as RegistryItem | null
}

// Legacy export alias
export async function getRegistryItem(
  name: string,
  style: Style["name"]
): Promise<RegistryItem | null> {
  return await getItemWithContent(name, style)
}

/**
 * File tree utilities
 */
export type FileTree = {
  name: string
  path?: string
  children?: FileTree[]
}

export function createFileTreeForRegistryItemFiles(
  files: Array<{ path: string; target?: string }>
) {
  const root: FileTree[] = []

  for (const file of files) {
    const path = file.target ?? file.path
    const parts = path.split("/")
    let currentLevel = root

    for (let i = 0; i < parts.length; i++) {
      const part = parts[i]
      const isFile = i === parts.length - 1
      const existingNode = currentLevel.find((node) => node.name === part)

      if (existingNode) {
        if (isFile) {
          // Update the path for file nodes
          existingNode.path = path
        } else {
          // Navigate into the folder
          currentLevel = existingNode.children!
        }
      } else {
        const newNode: FileTree = isFile
          ? { name: part, path }
          : { name: part, children: [] }

        currentLevel.push(newNode)

        if (!isFile) {
          currentLevel = newNode.children!
        }
      }
    }
  }

  return root
}






