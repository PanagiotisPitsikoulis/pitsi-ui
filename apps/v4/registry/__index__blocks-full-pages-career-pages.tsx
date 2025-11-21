import * as React from "react"

export const IndexBlocksFullPagesCareerPages: Record<
  string,
  Record<string, any>
> = {
  "new-york-v4": {
    "full-pages-career-pages-career-list-and-card-with-hover-effect": {
      name: "full-pages-career-pages-career-list-and-card-with-hover-effect",
      description: "A career list and card with hover effect block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/full-pages/career-pages/career-list-and-card-with-hover-effect.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/full-pages/career-pages/career-list-and-card-with-hover-effect.tsx"
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
    "full-pages-career-pages-career-page-with-creative-image-layout-carousel-slider":
      {
        name: "full-pages-career-pages-career-page-with-creative-image-layout-carousel-slider",
        description:
          "A career page with creative image layout carousel slider block.",
        type: "registry:block",
        registryDependencies: undefined,
        files: [
          {
            path: "registry/new-york-v4/blocks/full-pages/career-pages/career-page-with-creative-image-layout-carousel-slider.tsx",
            type: "registry:block",
            target: "",
          },
        ],
        component: React.lazy(async () => {
          const mod = await import(
            "@/registry/new-york-v4/blocks/full-pages/career-pages/career-page-with-creative-image-layout-carousel-slider.tsx"
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
    "full-pages-career-pages-career-page-with-description-feature-list-icons-horizontal-stats":
      {
        name: "full-pages-career-pages-career-page-with-description-feature-list-icons-horizontal-stats",
        description:
          "A career page with description feature list icons horizontal stats block.",
        type: "registry:block",
        registryDependencies: undefined,
        files: [
          {
            path: "registry/new-york-v4/blocks/full-pages/career-pages/career-page-with-description-feature-list-icons-horizontal-stats.tsx",
            type: "registry:block",
            target: "",
          },
        ],
        component: React.lazy(async () => {
          const mod = await import(
            "@/registry/new-york-v4/blocks/full-pages/career-pages/career-page-with-description-feature-list-icons-horizontal-stats.tsx"
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
    "full-pages-career-pages-career-page-with-three-column-blog-image-feature-list-with-hover":
      {
        name: "full-pages-career-pages-career-page-with-three-column-blog-image-feature-list-with-hover",
        description:
          "A career page with three column blog image feature list with hover block.",
        type: "registry:block",
        registryDependencies: undefined,
        files: [
          {
            path: "registry/new-york-v4/blocks/full-pages/career-pages/career-page-with-three-column-blog-image-feature-list-with-hover.tsx",
            type: "registry:block",
            target: "",
          },
        ],
        component: React.lazy(async () => {
          const mod = await import(
            "@/registry/new-york-v4/blocks/full-pages/career-pages/career-page-with-three-column-blog-image-feature-list-with-hover.tsx"
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
