import fs from "node:fs/promises"
import path from "node:path"
import * as React from "react"

import { highlightCode } from "@/lib/highlight-code"
import { getRegistryItem } from "@/lib/registry"
import { cn } from "@/lib/utils"
import { CodeCollapsibleWrapper } from "@/components/documentation/code/code-collapsible-wrapper"
import { CopyButton } from "@/components/documentation/code/copy-button"
import { getIconForLanguageExtension } from "@/components/shared/icons"
import { type Style } from "@/registry/styles"

export async function ComponentSource({
  name,
  src,
  title,
  language,
  collapsible = true,
  className,
  styleName = "new-york-v4",
}: React.ComponentProps<"div"> & {
  name?: string
  src?: string
  title?: string
  language?: string
  collapsible?: boolean
  styleName?: Style["name"]
}) {
  try {
    if (!name && !src) {
      return null
    }

    let code: string | undefined

    if (name) {
      const item = await getRegistryItem(name, styleName)
      code = item?.files?.[0]?.content
    }

    if (src) {
      try {
        const file = await fs.readFile(path.join(process.cwd(), src), "utf-8")
        code = file
      } catch (error) {
        console.warn(`Failed to read source file ${src}:`, error)
        // Continue - code will be undefined
      }
    }

    if (!code) {
      return null
    }

    // Fix imports.
    // Replace @/registry/${style}/ with @/components/.
    code = code.replaceAll(`@/registry/${styleName}/`, "@/components/")

    // Replace export default with export.
    code = code.replaceAll("export default", "export")
    code = code.replaceAll("/* eslint-disable react/no-children-prop */\n", "")

    const lang = language ?? title?.split(".").pop() ?? "tsx"
    const highlightedCode = await highlightCode(code, lang)

    if (!collapsible) {
      return (
        <div className={cn("relative", className)}>
          <ComponentCode
            code={code}
            highlightedCode={highlightedCode}
            language={lang}
            title={title}
          />
        </div>
      )
    }

    return (
      <CodeCollapsibleWrapper className={className}>
        <ComponentCode
          code={code}
          highlightedCode={highlightedCode}
          language={lang}
          title={title}
        />
      </CodeCollapsibleWrapper>
    )
  } catch (error) {
    console.warn(`ComponentSource error for ${name || src}:`, error)
    return null
  }
}

function ComponentCode({
  code,
  highlightedCode,
  language,
  title,
}: {
  code: string
  highlightedCode: string
  language: string
  title: string | undefined
}) {
  return (
    <figure data-rehype-pretty-code-figure="" className="[&>pre]:max-h-96">
      {title && (
        <figcaption
          data-rehype-pretty-code-title=""
          className="text-code-foreground [&_svg]:text-code-foreground flex items-center gap-2 [&_svg]:size-4 [&_svg]:opacity-70"
          data-language={language}
        >
          {getIconForLanguageExtension(language)}
          {title}
        </figcaption>
      )}
      <CopyButton value={code} />
      <div dangerouslySetInnerHTML={{ __html: highlightedCode }} />
    </figure>
  )
}
