import type { RegistryItem } from "@/lib/registry"

// Re-export pages constants
export { PAGES_NEW, PAGES_UPDATED } from "./pages"




export function createComponentCategoryMap(
  registryComponents: RegistryItem[]
): Map<string, string[]> {
  const componentCategoryMap = new Map<string, string[]>()
  registryComponents.forEach((comp) => {
    componentCategoryMap.set(comp.name, comp.categories || [])
  })
  return componentCategoryMap
}

export interface ComponentData {
  $id: string
  url: string
  name: string
  registryName: string
  categories: string[]
  description?: string
}

export interface PageSource {
  getPage: (slug: string[]) => {
    data: {
      description?: string
    }
  } | null
}


export function buildComponentsDataFromPageTree(
  folder: any | undefined,
  componentCategoryMap: Map<string, string[]>,
  source: PageSource,
  excludeUrl?: string
): ComponentData[] {
  if (!folder || folder.type !== "folder") {
    return []
  }

  return folder.children
    .filter(
      (c: any) => c.type === "page" && (!excludeUrl || c.url !== excludeUrl)
    )
    .map((c: any) => {
      
      const urlParts = c.url.split("/").filter(Boolean)
      const registryName = urlParts[urlParts.length - 1] || ""

      
      const categories = componentCategoryMap.get(registryName) || []

      
      const slug = urlParts.slice(1) 
      const componentPage = source.getPage(slug)
      const description = componentPage?.data.description

      return {
        $id: registryName,
        url: c.url,
        name: c.name,
        registryName,
        categories,
        description,
      }
    })
}

export interface TocEntry {
  title: string
  url: string
  depth: number
}


export function buildEnhancedTocWithCategories(
  toc: TocEntry[],
  allComponents: ComponentData[],
  isComponentsPage: boolean,
  isAnimationsPage: boolean
): TocEntry[] {
  if (!isComponentsPage && !isAnimationsPage) {
    return toc
  }

  
  const componentsByCategory: Record<string, ComponentData[]> = {}

  allComponents.forEach((item) => {
    
    const primaryCategory =
      item.categories && item.categories.length > 0
        ? item.categories[0]
        : "uncategorized"

    if (!componentsByCategory[primaryCategory]) {
      componentsByCategory[primaryCategory] = []
    }
    componentsByCategory[primaryCategory].push(item)
  })

  
  const CATEGORY_URLS: Record<string, string> = {
    "core-components": "#core-components",
    primitives: "#primitives",
    sectorial: "#sectorial",
    animations: "#animations",
  }

  
  const newToc: TocEntry[] = []

  toc.forEach((entry) => {
    
    newToc.push(entry)

    
    const matchingCategory = Object.keys(CATEGORY_URLS).find(
      (category) => CATEGORY_URLS[category] === entry.url
    )

    if (matchingCategory && componentsByCategory[matchingCategory]) {
      
      componentsByCategory[matchingCategory].forEach((item) => {
        newToc.push({
          title: typeof item.name === "string" ? item.name : item.$id,
          url: `#${item.$id}`,
          depth: 3,
        })
      })
    }
  })

  return newToc
}
