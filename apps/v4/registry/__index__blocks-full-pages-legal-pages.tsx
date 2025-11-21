import * as React from "react"

export const IndexBlocksFullPagesLegalPages: Record<
  string,
  Record<string, any>
> = {
  "new-york-v4": {
    "full-pages-legal-pages-legal-page-with-gradient-background-heading": {
      name: "full-pages-legal-pages-legal-page-with-gradient-background-heading",
      description: "A legal page with gradient background heading block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/full-pages/legal-pages/legal-page-with-gradient-background-heading.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/full-pages/legal-pages/legal-page-with-gradient-background-heading.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["full-pages"],
      meta: undefined,
      tier: "free",
    },
    "full-pages-legal-pages-legal-page-with-list-background": {
      name: "full-pages-legal-pages-legal-page-with-list-background",
      description: "A legal page with list background block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/full-pages/legal-pages/legal-page-with-list-background.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/full-pages/legal-pages/legal-page-with-list-background.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["full-pages"],
      meta: undefined,
      tier: "pro",
    },
  },
}
