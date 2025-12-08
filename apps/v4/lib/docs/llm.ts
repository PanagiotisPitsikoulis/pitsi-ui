import { queryRegistry } from "@/lib/registry"
import { type Style } from "@/registry/styles"

async function queryWithRetry(
  name: string,
  style: Style["name"],
  retries = 3
): Promise<{ files?: Array<{ path?: string; content?: string }> } | null> {
  for (let attempt = 0; attempt < retries; attempt++) {
    try {
      const result = await queryRegistry({ name, style })
      return result as { files?: Array<{ path?: string; content?: string }> } | null
    } catch (error) {
      if (attempt === retries - 1) {
        throw error
      }
      // Wait before retrying (exponential backoff)
      await new Promise((resolve) => setTimeout(resolve, 100 * (attempt + 1)))
    }
  }
  return null
}

export async function processMdxForLLMs(content: string, style: Style["name"]) {
  const componentPreviewRegex =
    /<ComponentPreview[\s\S]*?name="([^"]+)"[\s\S]*?\/>/g

  const matches = Array.from(content.matchAll(componentPreviewRegex))

  let result = content
  for (const match of matches) {
    const fullMatch = match[0]
    const name = match[1]

    try {
      const component = await queryWithRetry(name, style)
      if (!component || !component.files) {
        continue
      }

      const file = component.files[0]
      if (!file?.content) {
        continue
      }

      let source = file.content
      source = source.replaceAll(`@/registry/new-york-v4/`, "@/components/")
      source = source.replaceAll("export default", "export")

      const replacement = `\`\`\`tsx
${source}
\`\`\``

      result = result.replace(fullMatch, replacement)
    } catch {
      // Silently skip failed components during build
      continue
    }
  }

  return result
}
