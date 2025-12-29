#!/usr/bin/env bun

import { execSync } from "child_process"
import {
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  writeFileSync,
} from "fs"
import path from "path"
import prompts from "prompts"

const REGISTRY_PATH = path.join(process.cwd(), "registry/new-york-v4")
const CONTENT_PATH = path.join(process.cwd(), "content/docs")
const TEMPLATE_CONFIG_PATH = path.join(
  process.cwd(),
  "app/(app)/(content)/(blocks)/template-config.ts"
)

// Known templates
const TEMPLATES = ["service-plants", "service-travel", "service-boat"]

// ============================================================================
// Helpers
// ============================================================================

function toPascalCase(str: string): string {
  return str
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("")
}

function toTitleCase(str: string): string {
  return str
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
}

function createFile(filePath: string, content: string): void {
  const dir = path.dirname(filePath)
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true })
  }
  writeFileSync(filePath, content)
  console.log(`  ✓ Created: ${path.relative(process.cwd(), filePath)}`)
}

function appendToRegistry(registryPath: string, entry: string): void {
  const content = readFileSync(registryPath, "utf-8")

  // Find the last ] in the file (closing of the array)
  const lastBracketIndex = content.lastIndexOf("]")
  if (lastBracketIndex === -1) {
    throw new Error(`Could not find array in ${registryPath}`)
  }

  // Check if we need a comma before the new entry
  const beforeBracket = content.slice(0, lastBracketIndex).trimEnd()
  const needsComma = beforeBracket.endsWith("}") || beforeBracket.endsWith(",")

  const newContent =
    content.slice(0, lastBracketIndex) +
    (needsComma && !beforeBracket.endsWith(",") ? "," : "") +
    "\n" +
    entry +
    ",\n" +
    content.slice(lastBracketIndex)

  writeFileSync(registryPath, newContent)
  console.log(`  ✓ Updated: ${path.relative(process.cwd(), registryPath)}`)
}

function openInEditor(files: string[]): void {
  for (const file of files) {
    try {
      execSync(`zed "${file}"`, { stdio: "ignore" })
    } catch {
      // Silently fail if zed is not available
    }
  }
}

// Get existing block categories with counts
function getBlockCategoriesWithCounts(): { name: string; count: number }[] {
  const blocksDir = path.join(REGISTRY_PATH, "blocks")
  try {
    return readdirSync(blocksDir, { withFileTypes: true })
      .filter((d) => d.isDirectory() && !d.name.startsWith("_"))
      .map((d) => {
        const categoryDir = path.join(blocksDir, d.name)
        const files = readdirSync(categoryDir).filter((f) => f.endsWith(".tsx"))
        return { name: d.name, count: files.length }
      })
      .sort((a, b) => a.name.localeCompare(b.name))
  } catch {
    return []
  }
}

// Get next block number in a category
function getNextBlockNumber(category: string): number {
  const categoryDir = path.join(REGISTRY_PATH, "blocks", category)
  if (!existsSync(categoryDir)) return 1

  const files = readdirSync(categoryDir)
  const regex = new RegExp(`^${category}-(\\d+)\\.tsx$`)
  const numbers = files
    .map((f) => {
      const match = f.match(regex)
      return match ? parseInt(match[1], 10) : 0
    })
    .filter((n) => n > 0)

  return numbers.length > 0 ? Math.max(...numbers) + 1 : 1
}

// Get all blocks for template selection
function getAllBlocks(): string[] {
  const blocksDir = path.join(REGISTRY_PATH, "blocks")
  const blocks: string[] = []

  try {
    const categories = readdirSync(blocksDir, { withFileTypes: true })
      .filter((d) => d.isDirectory() && !d.name.startsWith("_"))
      .map((d) => d.name)

    for (const cat of categories) {
      const categoryDir = path.join(blocksDir, cat)
      const files = readdirSync(categoryDir).filter((f) => f.endsWith(".tsx"))
      for (const file of files) {
        blocks.push(file.replace(".tsx", ""))
      }
    }
  } catch {
    // Ignore
  }

  return blocks.sort()
}

// ============================================================================
// Templates
// ============================================================================

function getComponentTemplate(name: string): string {
  const pascal = toPascalCase(name)
  return `"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

interface ${pascal}Props extends React.HTMLAttributes<HTMLDivElement> {}

function ${pascal}({ className, ...props }: ${pascal}Props) {
  return <div className={cn("", className)} {...props} />
}

export { ${pascal} }
`
}

function getDemoTemplate(
  name: string,
  type: "component" | "animation"
): string {
  const pascal = toPascalCase(name)
  const importPath =
    type === "animation"
      ? `@/registry/new-york-v4/animations/${name}/${name}`
      : `@/registry/new-york-v4/ui/${name}`

  return `import { ${pascal} } from "${importPath}"

export default function ${pascal}Demo() {
  return (
    <${pascal}>
      Demo content
    </${pascal}>
  )
}
`
}

function getAnimationTemplate(name: string): string {
  const pascal = toPascalCase(name)
  return `"use client"

import * as React from "react"
import { motion, type Variants } from "motion/react"

import { cn } from "@/lib/utils"

interface ${pascal}Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

const variants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

function ${pascal}({ children, className, ...props }: ${pascal}Props) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      className={cn("", className)}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export { ${pascal} }
`
}

function getBlockTemplate(name: string): string {
  const pascal = toPascalCase(name)
  return `import { Button } from "@/registry/new-york-v4/ui/button"

export default function ${pascal}() {
  return (
    <section className="container py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold">Block Title</h2>
        <p className="mt-4 text-muted-foreground">
          Block description goes here.
        </p>
        <Button className="mt-8">Get Started</Button>
      </div>
    </section>
  )
}
`
}

function getDocsTemplate(
  name: string,
  description: string,
  type: "components" | "animations"
): string {
  const pascal = toPascalCase(name)
  const title = toTitleCase(name)

  return `---
title: ${title}
description: ${description}
component: true
---

<ComponentPreview
  name="${name}-demo"
  description="${description}"
/>

## Installation

<CodeTabs>
\`\`\`bash tab="CLI"
npx pitsi@latest add ${name}
\`\`\`
</CodeTabs>

## Usage

\`\`\`tsx
import { ${pascal} } from "@/components/ui/${name}"
\`\`\`

\`\`\`tsx
<${pascal}>Content</${pascal}>
\`\`\`
`
}

// ============================================================================
// Registry Entries
// ============================================================================

function getComponentRegistryEntry(
  name: string,
  description: string,
  dependencies: string[]
): string {
  const depsStr = dependencies.length
    ? dependencies.map((d) => `"${d}"`).join(", ")
    : ""

  return `  {
    name: "${name}",
    type: "registry:ui",
    description: "${description}",
    ${depsStr ? `dependencies: [${depsStr}],` : ""}
    registryDependencies: ["utils"],
    files: [
      {
        path: "ui/${name}.tsx",
        type: "registry:ui",
      },
    ],
    categories: ["core-components"],
    tier: "free",
    readiness: "beta",
  }`
}

function getAnimationRegistryEntry(name: string, description: string): string {
  return `  {
    name: "${name}",
    type: "registry:ui",
    description: "${description}",
    dependencies: ["motion"],
    registryDependencies: ["utils"],
    files: [
      {
        path: "animations/${name}/${name}.tsx",
        type: "registry:ui",
      },
    ],
    categories: ["animations"],
    tier: "free",
    readiness: "beta",
  }`
}

function getBlockRegistryEntry(
  name: string,
  description: string,
  category: string,
  templateSlug?: string
): string {
  const categories = templateSlug
    ? `["${category}", "${templateSlug}"]`
    : `["${category}"]`

  return `  {
    name: "${name}",
    type: "registry:block",
    description: "${description}",
    registryDependencies: ["button"],
    files: [
      {
        path: "blocks/${category}/${name}.tsx",
        type: "registry:block",
      },
    ],
    categories: ${categories},
    tier: "free",
  }`
}

function getExampleRegistryEntry(name: string, category: string): string {
  return `  {
    name: "${name}-demo",
    type: "registry:example",
    registryDependencies: ["${name}"],
    files: [
      {
        path: "examples/${name}-demo.tsx",
        type: "registry:example",
      },
    ],
    categories: ["${category}"],
    readiness: "beta",
  }`
}

// ============================================================================
// Template Config Modification
// ============================================================================

function addBlockToTemplate(
  templateSlug: string,
  blockName: string,
  tint?: string,
  forceTheme?: string
): void {
  const content = readFileSync(TEMPLATE_CONFIG_PATH, "utf-8")

  // Find the template config block
  const templateRegex = new RegExp(
    `"${templateSlug}":\\s*\\{[^}]*blocks:\\s*\\[`,
    "s"
  )
  const match = content.match(templateRegex)

  if (!match) {
    console.log(
      `  ⚠ Could not find template "${templateSlug}" in config. Add block manually.`
    )
    return
  }

  // Build the block config
  let blockConfig = `{ name: "${blockName}"`
  if (tint && tint !== "base") {
    blockConfig += `, tint: "${tint}"`
  }
  if (forceTheme === "forceLight") {
    blockConfig += `, forceLight: true`
  } else if (forceTheme === "forceDark") {
    blockConfig += `, forceDark: true`
  }
  blockConfig += " }"

  // Find the closing ] of the blocks array and insert before it
  const insertPos = match.index! + match[0].length
  const afterMatch = content.slice(insertPos)
  const closingBracketIndex = afterMatch.indexOf("]")

  if (closingBracketIndex === -1) {
    console.log(`  ⚠ Could not find blocks array end. Add block manually.`)
    return
  }

  // Check if there are existing blocks
  const blocksContent = afterMatch.slice(0, closingBracketIndex).trim()
  const needsComma = blocksContent.length > 0 && !blocksContent.endsWith(",")

  const newContent =
    content.slice(0, insertPos + closingBracketIndex) +
    (needsComma ? ",\n      " : "\n      ") +
    blockConfig +
    ",\n    " +
    content.slice(insertPos + closingBracketIndex)

  writeFileSync(TEMPLATE_CONFIG_PATH, newContent)
  console.log(
    `  ✓ Added block to template: ${path.relative(process.cwd(), TEMPLATE_CONFIG_PATH)}`
  )
}

function appendTemplateConfig(
  slug: string,
  displayName: string,
  description: string,
  heroBlock: string,
  blocks: { name: string; tint?: string; forceTheme?: string }[]
): void {
  const content = readFileSync(TEMPLATE_CONFIG_PATH, "utf-8")

  // Build blocks array
  const blocksStr = blocks
    .map((b) => {
      let entry = `{ name: "${b.name}"`
      if (b.tint && b.tint !== "base") entry += `, tint: "${b.tint}"`
      if (b.forceTheme === "forceLight") entry += `, forceLight: true`
      if (b.forceTheme === "forceDark") entry += `, forceDark: true`
      entry += " }"
      return entry
    })
    .join(",\n      ")

  const templateEntry = `
  "${slug}": {
    metadata: {
      slug: "${slug}",
      name: "${displayName}",
      description: "${description}",
      heroBlock: "${heroBlock}",
    },
    blocks: [
      ${blocksStr}
    ],
  },`

  // Find the templateConfigs object and insert before the closing }
  const configsMatch = content.match(
    /const\s+templateConfigs\s*=\s*\{([^]*?)\n\}\s*as\s+const/
  )
  if (!configsMatch) {
    console.log(`  ⚠ Could not find templateConfigs. Add template manually.`)
    return
  }

  const insertPos = configsMatch.index! + configsMatch[0].length - 10 // before "} as const"
  const newContent =
    content.slice(0, insertPos) + templateEntry + content.slice(insertPos)

  writeFileSync(TEMPLATE_CONFIG_PATH, newContent)
  console.log(
    `  ✓ Added template config: ${path.relative(process.cwd(), TEMPLATE_CONFIG_PATH)}`
  )

  // Also add to templatePalettes
  addTemplatePalette(slug)
}

function addTemplatePalette(slug: string): void {
  const content = readFileSync(TEMPLATE_CONFIG_PATH, "utf-8")

  // Find templatePalettes and add the new entry
  const palettesMatch = content.match(/templatePalettes:\s*\{([^}]*)\}/)
  if (!palettesMatch) {
    console.log(`  ⚠ Could not find templatePalettes. Add palette manually.`)
    return
  }

  const insertPos = palettesMatch.index! + palettesMatch[0].length - 1
  const existingPalettes = palettesMatch[1].trim()
  const needsComma = existingPalettes.length > 0 && !existingPalettes.endsWith(",")

  const newContent =
    content.slice(0, insertPos) +
    (needsComma ? "," : "") +
    `\n    "${slug}": "sage"` +
    content.slice(insertPos)

  writeFileSync(TEMPLATE_CONFIG_PATH, newContent)
}

// ============================================================================
// Creators
// ============================================================================

async function createComponent(
  name: string,
  description: string,
  dependencies: string[]
): Promise<string[]> {
  const files: string[] = []

  // Component file
  const componentPath = path.join(REGISTRY_PATH, "ui", `${name}.tsx`)
  createFile(componentPath, getComponentTemplate(name))
  files.push(componentPath)

  // Demo file
  const demoPath = path.join(REGISTRY_PATH, "examples", `${name}-demo.tsx`)
  createFile(demoPath, getDemoTemplate(name, "component"))
  files.push(demoPath)

  // Docs file
  const docsPath = path.join(CONTENT_PATH, "components", `${name}.mdx`)
  createFile(docsPath, getDocsTemplate(name, description, "components"))
  files.push(docsPath)

  // Registry entries
  const uiRegistryPath = path.join(REGISTRY_PATH, "ui", "_registry.ts")
  appendToRegistry(
    uiRegistryPath,
    getComponentRegistryEntry(name, description, dependencies)
  )

  const examplesRegistryPath = path.join(
    REGISTRY_PATH,
    "examples",
    "_registry.ts"
  )
  appendToRegistry(
    examplesRegistryPath,
    getExampleRegistryEntry(name, "core-components")
  )

  return files
}

async function createAnimation(
  name: string,
  description: string
): Promise<string[]> {
  const files: string[] = []

  // Animation file
  const animationPath = path.join(
    REGISTRY_PATH,
    "animations",
    name,
    `${name}.tsx`
  )
  createFile(animationPath, getAnimationTemplate(name))
  files.push(animationPath)

  // Demo file
  const demoPath = path.join(REGISTRY_PATH, "examples", `${name}-demo.tsx`)
  createFile(demoPath, getDemoTemplate(name, "animation"))
  files.push(demoPath)

  // Docs file
  const docsPath = path.join(CONTENT_PATH, "animations", `${name}.mdx`)
  createFile(docsPath, getDocsTemplate(name, description, "animations"))
  files.push(docsPath)

  // Registry entries
  const animationsRegistryPath = path.join(
    REGISTRY_PATH,
    "animations",
    "_registry.ts"
  )
  appendToRegistry(
    animationsRegistryPath,
    getAnimationRegistryEntry(name, description)
  )

  const examplesRegistryPath = path.join(
    REGISTRY_PATH,
    "examples",
    "_registry.ts"
  )
  appendToRegistry(
    examplesRegistryPath,
    getExampleRegistryEntry(name, "animations")
  )

  return files
}

async function createBlock(
  name: string,
  description: string,
  category: string,
  templateSlug?: string,
  tint?: string,
  forceTheme?: string
): Promise<string[]> {
  const files: string[] = []

  // Block file
  const blockPath = path.join(REGISTRY_PATH, "blocks", category, `${name}.tsx`)
  createFile(blockPath, getBlockTemplate(name))
  files.push(blockPath)

  // Registry entry
  const blocksRegistryPath = path.join(REGISTRY_PATH, "blocks", "_registry.ts")
  appendToRegistry(
    blocksRegistryPath,
    getBlockRegistryEntry(name, description, category, templateSlug)
  )

  // Add to template config if template selected
  if (templateSlug) {
    addBlockToTemplate(templateSlug, name, tint, forceTheme)
  }

  return files
}

async function createBlockCategory(categoryName: string): Promise<void> {
  const categoryPath = path.join(REGISTRY_PATH, "blocks", categoryName)
  if (!existsSync(categoryPath)) {
    mkdirSync(categoryPath, { recursive: true })
    console.log(`  ✓ Created: ${path.relative(process.cwd(), categoryPath)}/`)
  } else {
    console.log(`  ⚠ Category already exists: ${categoryName}`)
  }
}

async function createTemplate(
  slug: string,
  displayName: string,
  description: string,
  heroBlock: string,
  blocks: { name: string; tint?: string; forceTheme?: string }[]
): Promise<void> {
  appendTemplateConfig(slug, displayName, description, heroBlock, blocks)
}

// ============================================================================
// Main Flow Handlers
// ============================================================================

async function handleComponent(): Promise<void> {
  const { name } = await prompts({
    type: "text",
    name: "name",
    message: "Name (kebab-case)",
    validate: (value) => {
      if (!value) return "Name is required"
      if (!/^[a-z][a-z0-9-]*$/.test(value)) {
        return "Use kebab-case (e.g., my-component)"
      }
      return true
    },
  })

  if (!name) return

  const { description } = await prompts({
    type: "text",
    name: "description",
    message: "Description",
    initial: "A component for...",
  })

  const { dependencies } = await prompts({
    type: "text",
    name: "dependencies",
    message: "npm dependencies (comma-separated, or leave empty)",
    initial: "",
  })

  const deps = dependencies
    ? dependencies
        .split(",")
        .map((d: string) => d.trim())
        .filter(Boolean)
    : []

  console.log("\n📦 Creating component...\n")
  const files = await createComponent(name, description || "", deps)

  console.log("\n✅ Done!\n")
  console.log("Next steps:")
  console.log("  1. Run: bun run registry:build")
  console.log("  2. Edit the generated files as needed\n")

  openInEditor(files)
}

async function handleAnimation(): Promise<void> {
  const { name } = await prompts({
    type: "text",
    name: "name",
    message: "Name (kebab-case)",
    validate: (value) => {
      if (!value) return "Name is required"
      if (!/^[a-z][a-z0-9-]*$/.test(value)) {
        return "Use kebab-case (e.g., fade-in)"
      }
      return true
    },
  })

  if (!name) return

  const { description } = await prompts({
    type: "text",
    name: "description",
    message: "Description",
    initial: "An animation for...",
  })

  console.log("\n📦 Creating animation...\n")
  const files = await createAnimation(name, description || "")

  console.log("\n✅ Done!\n")
  console.log("Next steps:")
  console.log("  1. Run: bun run registry:build")
  console.log("  2. Edit the generated files as needed\n")

  openInEditor(files)
}

async function handleBlock(): Promise<void> {
  const categories = getBlockCategoriesWithCounts()

  // Step 1: Select category
  const { category, newCategoryName } = await prompts([
    {
      type: "select",
      name: "category",
      message: "Select block category",
      choices: [
        ...categories.map((c) => ({
          title: `${c.name} (${c.count} block${c.count !== 1 ? "s" : ""})`,
          value: c.name,
        })),
        { title: "➕ Create new category...", value: "__new__" },
      ],
    },
    {
      type: (prev) => (prev === "__new__" ? "text" : null),
      name: "newCategoryName",
      message: "New category name (kebab-case)",
      validate: (value) => {
        if (!value) return "Category name is required"
        if (!/^[a-z][a-z0-9-]*$/.test(value)) {
          return "Use kebab-case (e.g., my-category)"
        }
        return true
      },
    },
  ])

  const finalCategory = newCategoryName || category
  if (!finalCategory || finalCategory === "__new__") {
    console.log("\n👋 Cancelled\n")
    return
  }

  // Create category folder if new
  if (newCategoryName) {
    await createBlockCategory(newCategoryName)
  }

  // Step 2: Auto-generate name
  const nextNumber = getNextBlockNumber(finalCategory)
  const blockName = `${finalCategory}-${nextNumber}`
  console.log(`\n  Block name: ${blockName}\n`)

  // Step 3: Select template (optional)
  const { templateSlug } = await prompts({
    type: "select",
    name: "templateSlug",
    message: "Associate with template? (optional)",
    choices: [
      { title: "None (standalone block)", value: "" },
      ...TEMPLATES.map((t) => ({ title: t, value: t })),
    ],
  })

  let tint: string | undefined
  let forceTheme: string | undefined

  // Step 4: Template settings (if template selected)
  if (templateSlug) {
    const settings = await prompts([
      {
        type: "select",
        name: "tint",
        message: "Tint level",
        choices: [
          { title: "base (default)", value: "base" },
          { title: "tinted", value: "tinted" },
          { title: "deep", value: "deep" },
        ],
      },
      {
        type: "select",
        name: "forceTheme",
        message: "Force theme",
        choices: [
          { title: "none (follow template)", value: "" },
          { title: "forceLight", value: "forceLight" },
          { title: "forceDark", value: "forceDark" },
        ],
      },
    ])
    tint = settings.tint
    forceTheme = settings.forceTheme
  }

  // Step 5: Description
  const { description } = await prompts({
    type: "text",
    name: "description",
    message: "Description",
    initial: `A ${finalCategory} section...`,
  })

  console.log("\n📦 Creating block...\n")
  const files = await createBlock(
    blockName,
    description || "",
    finalCategory,
    templateSlug || undefined,
    tint,
    forceTheme
  )

  console.log("\n✅ Done!\n")
  console.log("Next steps:")
  console.log("  1. Run: bun run registry:build")
  console.log("  2. Edit the generated files as needed\n")

  openInEditor(files)
}

async function handleBlockCategory(): Promise<void> {
  const { categoryName } = await prompts({
    type: "text",
    name: "categoryName",
    message: "Category name (kebab-case)",
    validate: (value) => {
      if (!value) return "Category name is required"
      if (!/^[a-z][a-z0-9-]*$/.test(value)) {
        return "Use kebab-case (e.g., my-category)"
      }
      return true
    },
  })

  if (!categoryName) return

  console.log("\n📦 Creating block category...\n")
  await createBlockCategory(categoryName)

  console.log("\n✅ Done!\n")
}

async function handleTemplate(): Promise<void> {
  // Step 1: Template metadata
  const metadata = await prompts([
    {
      type: "text",
      name: "slug",
      message: "Template slug (kebab-case)",
      validate: (value) => {
        if (!value) return "Slug is required"
        if (!/^[a-z][a-z0-9-]*$/.test(value)) {
          return "Use kebab-case (e.g., service-restaurant)"
        }
        if (TEMPLATES.includes(value)) {
          return "Template already exists"
        }
        return true
      },
    },
    {
      type: "text",
      name: "displayName",
      message: "Display name",
      initial: (prev: string) => toTitleCase(prev),
    },
    {
      type: "text",
      name: "description",
      message: "Description",
      initial: "A modern template for...",
    },
  ])

  if (!metadata.slug) return

  // Step 2: Select hero block
  const heroBlocks = getAllBlocks().filter((b) => b.startsWith("hero-"))
  const { heroBlock } = await prompts({
    type: "select",
    name: "heroBlock",
    message: "Select hero block for preview",
    choices: heroBlocks.map((b) => ({ title: b, value: b })),
  })

  if (!heroBlock) return

  // Step 3: Select blocks
  const allBlocks = getAllBlocks()
  const { selectedBlocks } = await prompts({
    type: "multiselect",
    name: "selectedBlocks",
    message: "Select blocks for this template",
    hint: "Space to select, a to toggle all",
    choices: allBlocks.map((b) => ({
      title: b,
      value: b,
      selected: b === heroBlock || b.startsWith("header-") || b.startsWith("footer-"),
    })),
  })

  if (!selectedBlocks || selectedBlocks.length === 0) {
    console.log("\n⚠ No blocks selected\n")
    return
  }

  // Step 4: Configure blocks (simplified - use defaults)
  const blocks = selectedBlocks.map((name: string) => ({
    name,
    tint: undefined,
    forceTheme:
      name.startsWith("header-") || name.startsWith("hero-")
        ? "forceLight"
        : undefined,
  }))

  console.log("\n📦 Creating template...\n")
  await createTemplate(
    metadata.slug,
    metadata.displayName || "",
    metadata.description || "",
    heroBlock,
    blocks
  )

  console.log("\n✅ Done!\n")
  console.log("Next steps:")
  console.log("  1. Run: bun run registry:build")
  console.log("  2. Edit template-config.ts to adjust block order and settings\n")

  openInEditor([TEMPLATE_CONFIG_PATH])
}

// ============================================================================
// Main
// ============================================================================

async function main() {
  console.log("\n🎨 pitsi/ui Creator\n")

  const { type } = await prompts({
    type: "select",
    name: "type",
    message: "What do you want to create?",
    choices: [
      {
        title: "Component",
        value: "component",
        description: "A reusable UI component",
      },
      {
        title: "Animation",
        value: "animation",
        description: "A motion animation component",
      },
      { title: "Block", value: "block", description: "A page section block" },
      {
        title: "Block Category",
        value: "category",
        description: "A new block category folder",
      },
      {
        title: "Template",
        value: "template",
        description: "A full page template",
      },
    ],
    initial: 0,
  })

  if (!type) {
    console.log("\n👋 Cancelled\n")
    process.exit(0)
  }

  switch (type) {
    case "component":
      await handleComponent()
      break
    case "animation":
      await handleAnimation()
      break
    case "block":
      await handleBlock()
      break
    case "category":
      await handleBlockCategory()
      break
    case "template":
      await handleTemplate()
      break
  }
}

main().catch(console.error)
