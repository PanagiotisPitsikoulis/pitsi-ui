import * as fs from "fs"
import * as path from "path"

const ANIMATIONS_DIR = path.join(
  process.cwd(),
  "registry/new-york-v4/animations"
)
const DOCS_DIR = path.join(process.cwd(), "content/docs/animations")

// Convert kebab-case to Title Case
function toTitleCase(str: string): string {
  return str
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
}

// Generate description from name
function generateDescription(name: string): string {
  const titleName = toTitleCase(name)
  return `A ${titleName.toLowerCase()} animation component.`
}

function generateAnimationMdx(animationName: string): string {
  const title = toTitleCase(animationName)
  const description = generateDescription(animationName)

  return `---
title: ${title}
description: ${description}
component: true
---

<ComponentPreview
  name="${animationName}-demo"
  title="${title}"
  description="${description}"
/>

## Installation

<CodeTabs>

<TabsList>
  <TabsTrigger value="cli">CLI</TabsTrigger>
  <TabsTrigger value="manual">Manual</TabsTrigger>
</TabsList>
<TabsContent value="cli">

\`\`\`bash
npx pitsi@latest add ${animationName}
\`\`\`

</TabsContent>

<TabsContent value="manual">

<Steps>

<Step>Copy and paste the following code into your project.</Step>

<ComponentSource name="${animationName}" title="animations/${animationName}/${animationName}.tsx" />

<Step>Update the import paths to match your project setup.</Step>

</Steps>

</TabsContent>

</CodeTabs>

## Usage

\`\`\`tsx
import { ${toTitleCase(animationName).replace(/ /g, "")} } from "@/components/animations/${animationName}"
\`\`\`
`
}

async function main() {
  const animationDirs = fs
    .readdirSync(ANIMATIONS_DIR)
    .filter(
      (item) =>
        fs.statSync(path.join(ANIMATIONS_DIR, item)).isDirectory() &&
        !item.startsWith(".")
    )

  console.log(`Found ${animationDirs.length} animations`)

  // Ensure docs directory exists
  if (!fs.existsSync(DOCS_DIR)) {
    fs.mkdirSync(DOCS_DIR, { recursive: true })
  }

  // Generate MDX files
  for (const animationName of animationDirs) {
    const mdxContent = generateAnimationMdx(animationName)
    const outputPath = path.join(DOCS_DIR, `${animationName}.mdx`)
    fs.writeFileSync(outputPath, mdxContent)
    console.log(`✅ Created ${animationName}.mdx`)
  }

  // Create meta.json for animations section
  const metaJson = {
    title: "Animations",
    pages: animationDirs.sort(),
  }
  fs.writeFileSync(
    path.join(DOCS_DIR, "meta.json"),
    JSON.stringify(metaJson, null, 2)
  )
  console.log(`✅ Created meta.json`)

  console.log(`\n✨ Done! Created ${animationDirs.length} animation docs`)
}

main().catch(console.error)
