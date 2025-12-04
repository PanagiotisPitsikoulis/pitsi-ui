import {
  defineCollections,
  defineConfig,
  defineDocs,
} from "fumadocs-mdx/config"
import rehypePrettyCode from "rehype-pretty-code"
import { z } from "zod/v4"

import { transformers } from "@/lib/docs/highlight"

export default defineConfig({
  mdxOptions: {
    rehypePlugins: (plugins) => {
      plugins.shift()
      plugins.push([
        rehypePrettyCode as any,
        {
          theme: {
            dark: "github-dark",
            light: "github-light-default",
          },
          transformers,
        },
      ])

      return plugins
    },
  },
})

export const docs = defineDocs({
  dir: "content/docs",
  // TODO: Fix this when we upgrade to zod v4.
  // docs: {
  //   schema: frontmatterSchema.extend({
  //     links: z.optional(
  //       z.object({
  //         doc: z.string().optional(),
  //         api: z.string().optional(),
  //       })
  //     ),
  //   }),
  // },
})

export const blog = defineCollections({
  dir: "content/blog",
  type: "doc",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    icon: z.string().optional(),
    full: z.boolean().optional(),
    date: z.string(),
    author: z.string().optional(),
    category: z.enum(["tutorial", "announcement", "deep-dive", "design"]),
    image: z.string().optional(),
    readTime: z.string().optional(),
  }),
})

