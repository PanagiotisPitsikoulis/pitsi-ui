import fs from "fs"

import { queryRegistry } from "@/lib/registry"
import { type Style } from "@/registry/styles"

export async function processMdxForLLMs(content: string, style: Style["name"]) {
  const componentPreviewRegex =
    /<ComponentPreview[\s\S]*?name="([^"]+)"[\s\S]*?\/>/g

  
  const matches = Array.from(content.matchAll(componentPreviewRegex))

  
  let result = content
  for (const match of matches) {
    const fullMatch = match[0]
    const name = match[1]

    try {
      const component = (await queryRegistry({ name, style })) as {
        files?: Array<{ path?: string }>
      } | null
      if (!component || !component.files) {
        continue
      }

      const src = component.files[0]?.path
      if (!src) {
        continue
      }

      let source = fs.readFileSync(src, "utf8")
      source = source.replaceAll(`@/registry/new-york-v4/`, "@/components/")
      source = source.replaceAll("export default", "export")

      const replacement = `\`\`\`tsx
${source}
\`\`\``

      result = result.replace(fullMatch, replacement)
    } catch (error) {
      console.error(`Error processing ComponentPreview ${name}:`, error)
    }
  }

  return result
}
