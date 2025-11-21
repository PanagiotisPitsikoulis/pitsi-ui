import * as React from "react"

export const IndexBlocksFullPagesBlogDetails: Record<
  string,
  Record<string, any>
> = {
  "new-york-v4": {
    "full-pages-blog-details-blog-page-with-full-screen-image-and-two-column-grid":
      {
        name: "full-pages-blog-details-blog-page-with-full-screen-image-and-two-column-grid",
        description:
          "A blog page with full screen image and two column grid block.",
        type: "registry:block",
        registryDependencies: undefined,
        files: [
          {
            path: "registry/new-york-v4/blocks/full-pages/blog-details/blog-page-with-full-screen-image-and-two-column-grid.tsx",
            type: "registry:block",
            target: "",
          },
        ],
        component: React.lazy(async () => {
          const mod = await import(
            "@/registry/new-york-v4/blocks/full-pages/blog-details/blog-page-with-full-screen-image-and-two-column-grid.tsx"
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
    "full-pages-blog-details-blog-page-with-images-and-image-grid": {
      name: "full-pages-blog-details-blog-page-with-images-and-image-grid",
      description: "A blog page with images and image grid block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/full-pages/blog-details/blog-page-with-images-and-image-grid.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/full-pages/blog-details/blog-page-with-images-and-image-grid.tsx"
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
    "full-pages-blog-details-simple-blog-details-page": {
      name: "full-pages-blog-details-simple-blog-details-page",
      description: "A simple blog details page block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/full-pages/blog-details/simple-blog-details-page.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/full-pages/blog-details/simple-blog-details-page.tsx"
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
