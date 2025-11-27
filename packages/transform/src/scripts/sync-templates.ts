/**
 * Sync Templates Script
 *
 * Automatically syncs generated components to the v4 app:
 * 1. Copies components from output/ to _components/{family}/
 * 2. Auto-generates preview route with imports
 * 3. Auto-generates templates page with family metadata
 * 4. Reports all changes
 */

import * as fs from "fs"
import * as path from "path"
import { fileURLToPath } from "url"
import { execSync } from "child_process"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Paths
const OUTPUT_DIR = path.join(__dirname, "..", "..", "output", "components")
const V4_APP_DIR = path.join(__dirname, "..", "..", "..", "..", "apps", "v4")
const TEMPLATES_COMPONENTS_DIR = path.join(
  V4_APP_DIR,
  "app",
  "(app)",
  "templates",
  "_components"
)
const PREVIEW_ROUTE_FILE = path.join(
  V4_APP_DIR,
  "app",
  "(template-preview)",
  "templates",
  "preview",
  "[slug]",
  "page.tsx"
)
const TEMPLATES_PAGE_FILE = path.join(
  V4_APP_DIR,
  "app",
  "(app)",
  "templates",
  "page.tsx"
)
const TEMPLATE_DETAIL_FILE = path.join(
  V4_APP_DIR,
  "app",
  "(app)",
  "templates",
  "[slug]",
  "page.tsx"
)

interface ComponentInfo {
  family: string
  name: string
  filename: string
  componentName: string
  slug: string
  category: string
}

interface FamilyInfo {
  id: string
  name: string
  description: string
  components: ComponentInfo[]
}

/**
 * Infer category from component name
 */
function inferCategory(name: string): string {
  const lowerName = name.toLowerCase()

  if (lowerName.includes("home") || lowerName.includes("hero")) {
    return "Landing Page"
  }
  if (lowerName.includes("about") || lowerName.includes("team")) {
    return "Marketing"
  }
  if (lowerName.includes("service")) {
    return "Marketing"
  }
  if (lowerName.includes("project") || lowerName.includes("portfolio")) {
    return "Portfolio"
  }
  if (lowerName.includes("blog") || lowerName.includes("article")) {
    return "Content"
  }
  if (lowerName.includes("contact")) {
    return "Marketing"
  }
  if (
    lowerName.includes("privacy") ||
    lowerName.includes("terms") ||
    lowerName.includes("legal")
  ) {
    return "Legal"
  }
  if (lowerName.includes("pricing")) {
    return "Marketing"
  }
  if (lowerName.includes("faq")) {
    return "Content"
  }

  return "Page"
}

/**
 * Convert filename to readable name
 */
function filenameToReadableName(filename: string): string {
  // Remove "Page.tsx" suffix
  let name = filename.replace(/Page\.tsx$/, "")

  // Split by capital letters and join with spaces
  name = name.replace(/([A-Z])/g, " $1").trim()

  // Handle special cases
  name = name
    .replace(/Blog How/, "Blog Post -")
    .replace(/Blog The/, "Blog Post -")
    .replace(/Projects /, "Project - ")

  return name
}

/**
 * Scan output directory for generated families
 */
function scanOutputDirectory(): FamilyInfo[] {
  const families: FamilyInfo[] = []

  if (!fs.existsSync(OUTPUT_DIR)) {
    console.log("⚠️  No output directory found.")
    return families
  }

  // Scan category directories
  const categories = fs.readdirSync(OUTPUT_DIR).filter((f) => {
    const fullPath = path.join(OUTPUT_DIR, f)
    return fs.statSync(fullPath).isDirectory() && !f.startsWith("_")
  })

  for (const category of categories) {
    const categoryPath = path.join(OUTPUT_DIR, category)
    const sites = fs.readdirSync(categoryPath).filter((f) => {
      const fullPath = path.join(categoryPath, f)
      return fs.statSync(fullPath).isDirectory() && !f.startsWith("_")
    })

    for (const site of sites) {
      const sitePath = path.join(categoryPath, site)
      const files = fs.readdirSync(sitePath).filter((f) => f.endsWith(".tsx"))

      if (files.length === 0) continue

      const components: ComponentInfo[] = files.map((filename) => {
        const componentName = filename.replace(".tsx", "")
        const readableName = filenameToReadableName(filename)

        return {
          family: site,
          name: readableName,
          filename,
          componentName,
          slug: `${site}-${readableName.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, "")}`,
          category: inferCategory(readableName),
        }
      })

      families.push({
        id: site,
        name: formatFamilyName(site),
        description: `Website template collection from ${site}`,
        components,
      })
    }
  }

  return families
}

/**
 * Scan existing _components directory for already synced families
 */
function scanExistingComponents(): FamilyInfo[] {
  const families: FamilyInfo[] = []

  if (!fs.existsSync(TEMPLATES_COMPONENTS_DIR)) {
    return families
  }

  const familyDirs = fs.readdirSync(TEMPLATES_COMPONENTS_DIR).filter((f) => {
    const fullPath = path.join(TEMPLATES_COMPONENTS_DIR, f)
    return fs.statSync(fullPath).isDirectory() && !f.startsWith("_")
  })

  for (const familyId of familyDirs) {
    const familyPath = path.join(TEMPLATES_COMPONENTS_DIR, familyId)
    const files = fs.readdirSync(familyPath).filter((f) => f.endsWith(".tsx"))

    if (files.length === 0) continue

    const components: ComponentInfo[] = files.map((filename) => {
      const componentName = filename.replace(".tsx", "")
      const readableName = filenameToReadableName(filename)

      return {
        family: familyId,
        name: readableName,
        filename,
        componentName,
        slug: `${familyId}-${readableName.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, "")}`,
        category: inferCategory(readableName),
      }
    })

    families.push({
      id: familyId,
      name: formatFamilyName(familyId),
      description: `Website template collection from ${familyId}`,
      components,
    })
  }

  return families
}

/**
 * Format family ID to readable name
 */
function formatFamilyName(id: string): string {
  return id
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ")
}

/**
 * Copy components to v4 app (only from output directory)
 */
function copyComponentsToV4(newFamilies: FamilyInfo[]): void {
  if (newFamilies.length === 0) {
    console.log("\n📁 No new components to copy (using existing)")
    return
  }

  console.log("\n📁 Copying new components to v4 app...")

  for (const family of newFamilies) {
    // Try multiple possible source paths (including category subdirectories)
    const possiblePaths = [
      path.join(OUTPUT_DIR, "agency", family.id),
      path.join(OUTPUT_DIR, "simple", family.id),
      path.join(OUTPUT_DIR, "agencies", family.id),
      path.join(OUTPUT_DIR, family.id),
    ]

    // Also search all subdirectories of OUTPUT_DIR
    if (fs.existsSync(OUTPUT_DIR)) {
      const categories = fs.readdirSync(OUTPUT_DIR).filter(f => {
        const fullPath = path.join(OUTPUT_DIR, f)
        return fs.statSync(fullPath).isDirectory()
      })
      for (const category of categories) {
        possiblePaths.push(path.join(OUTPUT_DIR, category, family.id))
      }
    }

    let sourcePath: string | null = null
    for (const p of possiblePaths) {
      if (fs.existsSync(p)) {
        sourcePath = p
        break
      }
    }

    if (!sourcePath) {
      console.log(`  ⚠️  Source not found for ${family.id}`)
      continue
    }

    const destPath = path.join(TEMPLATES_COMPONENTS_DIR, family.id)

    // Create family directory
    fs.mkdirSync(destPath, { recursive: true })

    // Copy each component file
    for (const component of family.components) {
      const sourceFile = path.join(sourcePath, component.filename)
      const destFile = path.join(destPath, component.filename)

      if (fs.existsSync(sourceFile)) {
        fs.copyFileSync(sourceFile, destFile)
        console.log(`  ✓ ${family.id}/${component.filename}`)
      }
    }
  }
}

/**
 * Generate a unique import name by prefixing with family name
 */
function generateUniqueImportName(familyId: string, componentName: string): string {
  // Convert family-id to FamilyId format
  const familyPrefix = familyId
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("")
  return `${familyPrefix}${componentName}`
}

/**
 * Generate preview route page.tsx
 */
function generatePreviewRoute(families: FamilyInfo[]): void {
  console.log("\n📝 Generating preview route...")

  const imports: string[] = []
  const templateEntries: string[] = []

  for (const family of families) {
    imports.push(`// Import all template components from ${family.id} family`)

    for (const component of family.components) {
      const uniqueName = generateUniqueImportName(family.id, component.componentName)
      const importPath = `../../../../(app)/templates/_components/${family.id}/${component.componentName}`
      imports.push(`import ${uniqueName} from "${importPath}"`)
      templateEntries.push(`  "${component.slug}": ${uniqueName},`)
    }

    imports.push("")
  }

  const code = `import { notFound } from "next/navigation"

${imports.join("\n")}

export const templates = {
${templateEntries.join("\n")}
}

export async function generateStaticParams() {
  return Object.keys(templates).map((slug) => ({
    slug,
  }))
}

export default async function TemplatePreviewPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const TemplateComponent = templates[slug as keyof typeof templates]

  if (!TemplateComponent) {
    notFound()
  }

  return (
    <div style={{ width: "100%", overflowX: "hidden" }}>
      <TemplateComponent />
    </div>
  )
}
`

  // Ensure directory exists
  fs.mkdirSync(path.dirname(PREVIEW_ROUTE_FILE), { recursive: true })
  fs.writeFileSync(PREVIEW_ROUTE_FILE, code)
  console.log(`  ✓ Generated ${path.relative(V4_APP_DIR, PREVIEW_ROUTE_FILE)}`)
}

/**
 * Generate templates page.tsx
 */
function generateTemplatesPage(families: FamilyInfo[]): void {
  console.log("\n📝 Generating templates page...")

  const familiesJson = families.map((family) => ({
    id: family.id,
    name: family.name,
    description: family.description,
    templates: family.components.map((c) => ({
      name: c.name,
      slug: c.slug,
      description: `${c.name} page template`,
      category: c.category,
    })),
  }))

  const code = `import Link from "next/link"

import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/new-york-v4/ui/accordion"

const templateFamilies = ${JSON.stringify(familiesJson, null, 2)}

export default function TemplatesPage() {
  return (
    <div className="container py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Templates
          </h1>
          <p className="text-muted-foreground mt-4 text-lg">
            Production-ready templates built with pitsi/ui components. Start
            your next project with a solid foundation.
          </p>
        </div>

        <div className="space-y-16">
          {templateFamilies.map((family) => (
            <div key={family.id} className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold tracking-tight">
                  {family.name}
                </h2>
                <p className="text-muted-foreground">{family.description}</p>
              </div>

              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                {family.templates.map((template) => (
                  <div
                    key={template.slug}
                    className="group relative flex scroll-mt-20 flex-col gap-4"
                  >
                    <div className="overflow-hidden rounded-2xl border shadow-xs">
                      <div className="bg-background relative transition-all">
                        <div className="absolute right-3 top-3 z-10 rounded-full border bg-background/80 px-3 py-1 text-xs font-medium backdrop-blur-sm">
                          {template.category}
                        </div>
                        <div data-slot="preview" className="overflow-hidden">
                          <div
                            data-align="center"
                            className="preview relative flex aspect-[4/3] w-full items-center justify-center"
                          >
                            <iframe
                              src={\`/templates/preview/\${template.slug}\`}
                              className="pointer-events-none absolute inset-0 size-full border-0"
                              title={\`\${template.name} preview\`}
                              sandbox="allow-scripts allow-same-origin"
                              loading="lazy"
                              style={{
                                transform: "scale(0.4)",
                                transformOrigin: "top left",
                                width: "250%",
                                height: "250%",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <Link
                      href={\`/templates/\${template.slug}\`}
                      className="group/link flex flex-col gap-1 px-2"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="group-hover/link:text-primary text-base font-medium transition-colors group-hover/link:underline">
                          {template.name}
                        </span>
                      </div>
                      <p className="text-muted-foreground text-sm">
                        {template.description}
                      </p>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
`

  fs.writeFileSync(TEMPLATES_PAGE_FILE, code)
  console.log(`  ✓ Generated ${path.relative(V4_APP_DIR, TEMPLATES_PAGE_FILE)}`)
}

/**
 * Generate template detail page [slug]/page.tsx
 */
function generateTemplateDetailPage(families: FamilyInfo[]): void {
  console.log("\n📝 Generating template detail page...")

  const templatesObj: Record<string, { name: string; description: string }> = {}

  for (const family of families) {
    for (const component of family.components) {
      templatesObj[component.slug] = {
        name: component.name,
        description: `${component.name} page template`,
      }
    }
  }

  const code = `import { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Code, Maximize2 } from "lucide-react"

import { Button } from "@/registry/new-york-v4/ui/button"

const templates = ${JSON.stringify(templatesObj, null, 2)}

export async function generateStaticParams() {
  return Object.keys(templates).map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const template = templates[slug as keyof typeof templates]

  if (!template) {
    return {
      title: "Template Not Found",
    }
  }

  return {
    title: \`\${template.name} Template\`,
    description: template.description,
  }
}

export default async function TemplatePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const template = templates[slug as keyof typeof templates]

  if (!template) {
    notFound()
  }

  const previewUrl = \`/templates/preview/\${slug}\`

  return (
    <div className="relative flex h-screen flex-col">
      {/* Top bar with controls */}
      <div className="bg-background/95 supports-[backdrop-filter]:bg-background/60 z-50 border-b backdrop-blur">
        <div className="container flex h-14 items-center justify-between">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/templates">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Templates
              </Link>
            </Button>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" asChild>
              <Link href={previewUrl} target="_blank">
                <Maximize2 className="mr-2 h-4 w-4" />
                Open in New Tab
              </Link>
            </Button>
            <Button variant="outline" size="sm">
              <Code className="mr-2 h-4 w-4" />
              View Code
            </Button>
          </div>
        </div>
      </div>

      {/* Template iframe */}
      <div className="flex-1 overflow-hidden bg-white">
        <iframe
          key={slug}
          src={previewUrl}
          className="h-full w-full border-0"
          title={\`\${template.name} Template Preview\`}
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox allow-downloads"
          loading="eager"
        />
      </div>
    </div>
  )
}
`

  fs.writeFileSync(TEMPLATE_DETAIL_FILE, code)
  console.log(
    `  ✓ Generated ${path.relative(V4_APP_DIR, TEMPLATE_DETAIL_FILE)}`
  )
}

/**
 * Run TypeScript type checking
 */
function runTypeCheck(): boolean {
  console.log("\n🔍 Running type check...")

  try {
    execSync("pnpm typecheck", {
      cwd: V4_APP_DIR,
      stdio: "pipe",
    })
    console.log("  ✓ Type check passed")
    return true
  } catch (error) {
    console.log("  ⚠️  Type check had issues (non-critical)")
    return false
  }
}

/**
 * Test template routes
 */
async function testRoutes(families: FamilyInfo[]): Promise<boolean> {
  console.log("\n🧪 Testing template routes...")

  const allSlugs = families.flatMap((f) => f.components.map((c) => c.slug))
  let allPassed = true

  for (const slug of allSlugs.slice(0, 3)) {
    // Test first 3 routes
    try {
      const response = await fetch(`http://localhost:4000/templates/${slug}`)
      if (response.status === 200) {
        console.log(`  ✓ /templates/${slug} - OK`)
      } else {
        console.log(`  ✗ /templates/${slug} - ${response.status}`)
        allPassed = false
      }
    } catch {
      console.log(`  ⚠️  /templates/${slug} - Could not connect (dev server running?)`)
    }
  }

  return allPassed
}

/**
 * Main function
 */
async function main(): Promise<void> {
  console.log("🔄 Sync Templates - Auto-sync generated components to v4 app")
  console.log("=".repeat(60))

  // Scan for new generated families
  console.log("\n🔍 Scanning for components...")
  const newFamilies = scanOutputDirectory()
  const existingFamilies = scanExistingComponents()

  // Merge families (new ones take precedence)
  const familyMap = new Map<string, FamilyInfo>()

  // Add existing families first
  for (const family of existingFamilies) {
    familyMap.set(family.id, family)
  }

  // Then add/override with new families
  for (const family of newFamilies) {
    familyMap.set(family.id, family)
  }

  const families = Array.from(familyMap.values())

  if (families.length === 0) {
    console.log("\n❌ No components found.")
    console.log("   Either run component generation first: pnpm generate")
    console.log("   Or add components to: apps/v4/app/(app)/templates/_components/{family}/")
    process.exit(1)
  }

  console.log(`  Found ${newFamilies.length} new families from output`)
  console.log(`  Found ${existingFamilies.length} existing families in v4 app`)

  console.log(`\n📦 Total ${families.length} template families:`)
  for (const family of families) {
    console.log(`   - ${family.name} (${family.components.length} components)`)
  }

  // Copy only new components (existing ones are already in place)
  copyComponentsToV4(newFamilies)

  // Generate preview route
  generatePreviewRoute(families)

  // Generate templates page
  generateTemplatesPage(families)

  // Generate template detail page
  generateTemplateDetailPage(families)

  // Run type check
  runTypeCheck()

  // Test routes (non-blocking)
  await testRoutes(families)

  console.log("\n" + "=".repeat(60))
  console.log("✅ Sync complete!")
  console.log(`\n📊 Summary:`)
  console.log(`   - ${families.length} families synced`)
  console.log(
    `   - ${families.reduce((acc, f) => acc + f.components.length, 0)} total templates`
  )
  console.log(`\n🚀 View templates at: http://localhost:4000/templates`)
}

main().catch(console.error)
