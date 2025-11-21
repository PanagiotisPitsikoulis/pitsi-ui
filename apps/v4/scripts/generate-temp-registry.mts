import * as fs from "fs"
import * as path from "path"

const TEMP_REGISTRY_PATH = path.join(
  process.cwd(),
  "../..",
  ".claude/_temp/_registry.json"
)
const OUTPUT_DIR = path.join(process.cwd(), "registry/new-york-v4")

type RegistryItem = {
  name: string
  type: string
  title?: string
  description?: string
  files: Array<{
    path: string
    type: string
  }>
  dependencies?: string[]
  registryDependencies?: string[]
  categories?: string[]
}

function transformPath(originalPath: string): string {
  // Transform paths from "src/registry/blocks/..." to "blocks/..."
  return originalPath
    .replace(/^src\/registry\//, "")
    .replace(/^blocks\//, "blocks/")
    .replace(/^animations\//, "animations/")
}

function generateRegistryEntry(item: RegistryItem): string {
  const files = item.files
    .map((file) => {
      const transformedPath = transformPath(file.path)
      return `      {
        path: "${transformedPath}",
        type: "${file.type}",
      }`
    })
    .join(",\n")

  const deps = item.dependencies
    ? `dependencies: ${JSON.stringify(item.dependencies, null, 2)},\n    `
    : ""
  const regDeps = item.registryDependencies
    ? `registryDependencies: ${JSON.stringify(item.registryDependencies, null, 2)},\n    `
    : ""
  const categories = item.categories
    ? `categories: ${JSON.stringify(item.categories, null, 2)},\n    `
    : ""

  return `  {
    name: "${item.name}",
    type: "${item.type}",
    description: "${item.description || ""}",
    ${deps}${regDeps}${categories}files: [
${files}
    ],
  }`
}

async function main() {
  console.log("Reading temp registry JSON...")
  const registryData = JSON.parse(
    fs.readFileSync(TEMP_REGISTRY_PATH, "utf-8")
  )

  const blocks: RegistryItem[] = []
  const animations: RegistryItem[] = []

  for (const item of registryData.items) {
    if (item.type === "registry:block") {
      // Filter blocks from temp that we want (application, marketing, e-commerce, full-pages)
      if (
        item.name.startsWith("application-") ||
        item.name.startsWith("marketing-") ||
        item.name.startsWith("e-commerce-") ||
        item.name.startsWith("full-pages-")
      ) {
        blocks.push(item)
      }
    } else if (item.type === "registry:animation") {
      animations.push(item)
    }
  }

  console.log(`Found ${blocks.length} blocks`)
  console.log(`Found ${animations.length} animations`)

  // Generate animations registry
  if (animations.length > 0) {
    const animationsRegistry = `import { type Registry } from "pitsi/schema"

export const animations: Registry["items"] = [
${animations.map((item) => generateRegistryEntry(item)).join(",\n")}
]
`
    const animationsPath = path.join(OUTPUT_DIR, "animations/_registry.ts")
    fs.mkdirSync(path.dirname(animationsPath), { recursive: true })
    fs.writeFileSync(animationsPath, animationsRegistry)
    console.log(`✅ Created animations registry at ${animationsPath}`)
  }

  // Generate blocks registry additions
  if (blocks.length > 0) {
    const blocksAdditions = `
// ========================================
// NEW BLOCKS FROM TEMP REGISTRY
// ========================================
${blocks.map((item) => generateRegistryEntry(item)).join(",\n")}
`
    console.log("\n" + "=".repeat(60))
    console.log("Add these to apps/v4/registry/new-york-v4/blocks/_registry.ts:")
    console.log("=".repeat(60))
    console.log(blocksAdditions)
  }

  console.log("\n✨ Done! Don't forget to:")
  console.log("1. Add animations import to registry.ts")
  console.log("2. Add new blocks to blocks/_registry.ts")
  console.log("3. Run 'pnpm registry:build'")
}

main().catch(console.error)
