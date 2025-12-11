import fs from "fs"
import path from "path"
import { u } from "unist-builder"
import { visit } from "unist-util-visit"

import { queryRegistry } from "@/lib/registry"
import { getActiveStyle } from "@/registry/styles"

interface UnistNode {
  type: string
  name?: string
  tagName?: string
  value?: string
  properties?: Record<string, unknown>
  attributes?: {
    name: string
    value: unknown
    type?: string
  }[]
  children?: UnistNode[]
}

export interface UnistTree {
  type: string
  children: UnistNode[]
}

export function rehypeComponent() {
  return async (tree: UnistTree) => {
    const activeStyle = await getActiveStyle()

    
    const nodesToProcess: Array<{
      node: UnistNode
      type: "source" | "preview"
      name?: string
      srcPath?: string
      fileName?: string
    }> = []

    visit(tree, (node: UnistNode) => {
      
      const { value: srcPath } =
        (getNodeAttributeByName(node, "src") as {
          name: string
          value?: string
          type?: string
        }) || {}

      if (node.name === "ComponentSource") {
        const name = getNodeAttributeByName(node, "name")?.value as string
        const fileName = getNodeAttributeByName(node, "fileName")?.value as
          | string
          | undefined

        if (!name && !srcPath) {
          return null
        }

        nodesToProcess.push({
          node,
          type: "source",
          name,
          srcPath,
          fileName,
        })
      }

      if (node.name === "ComponentPreview") {
        const name = getNodeAttributeByName(node, "name")?.value as string

        if (!name) {
          return null
        }

        nodesToProcess.push({
          node,
          type: "preview",
          name,
        })
      }
    })

    
    await Promise.all(
      nodesToProcess.map(async ({ node, type, name, srcPath, fileName }) => {
        try {
          let src: string

          if (srcPath) {
            src = path.join(process.cwd(), srcPath)
          } else if (name) {
            
            const component = (await queryRegistry({
              name,
              style: type === "preview" ? activeStyle.name : undefined,
            })) as {
              files?: Array<{ path?: string; type?: string }>
            } | null

            if (
              !component ||
              !component.files ||
              component.files.length === 0
            ) {
              console.error(`Component not found: ${name}`)
              return
            }

            src = fileName
              ? component.files.find((file: any) => {
                  if (typeof file === "string") {
                    return (
                      file.endsWith(`${fileName}.tsx`) ||
                      file.endsWith(`${fileName}.ts`)
                    )
                  }
                  if (file.path) {
                    return (
                      file.path.endsWith(`${fileName}.tsx`) ||
                      file.path.endsWith(`${fileName}.ts`)
                    )
                  }
                  return false
                })?.path ||
                component.files[0]?.path ||
                ""
              : component.files[0]?.path || ""
          } else {
            return
          }


          if (!src) {
            return
          }


          const filePath = src
          if (!fs.existsSync(filePath)) {
            console.warn(`File not found: ${filePath}`)
            return
          }
          let source = fs.readFileSync(filePath, "utf8")

          
          
          
          source = source.replaceAll(`@/registry/new-york-v4/`, "@/components/")
          source = source.replaceAll("export default", "export")

          
          node.children?.push(
            u("element", {
              tagName: "pre",
              properties: {
                __src__: src,
              },
              children: [
                u("element", {
                  tagName: "code",
                  properties: {
                    className: ["language-tsx"],
                  },
                  children: [
                    {
                      type: "text",
                      value: source,
                    },
                  ],
                }),
              ],
            })
          )
        } catch (error) {
          console.error(error)
        }
      })
    )
  }
}

function getNodeAttributeByName(node: UnistNode, name: string) {
  return node.attributes?.find((attribute) => attribute.name === name)
}
