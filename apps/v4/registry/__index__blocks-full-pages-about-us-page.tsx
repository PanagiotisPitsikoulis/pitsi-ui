import * as React from "react"

export const IndexBlocksFullPagesAboutUsPage: Record<
  string,
  Record<string, any>
> = {
  "new-york-v4": {
    "full-pages-about-us-page-about-us-with-hero-section-and-tile-view": {
      name: "full-pages-about-us-page-about-us-with-hero-section-and-tile-view",
      description: "A about us with hero section and tile view block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/full-pages/about-us-page/about-us-with-hero-section-and-tile-view.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/full-pages/about-us-page/about-us-with-hero-section-and-tile-view.tsx"
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
    "full-pages-about-us-page-about-us-with-image-tiles": {
      name: "full-pages-about-us-page-about-us-with-image-tiles",
      description: "A about us with image tiles block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/full-pages/about-us-page/about-us-with-image-tiles.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/full-pages/about-us-page/about-us-with-image-tiles.tsx"
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
    "full-pages-about-us-page-about-us-with-team-and-stats": {
      name: "full-pages-about-us-page-about-us-with-team-and-stats",
      description: "A about us with team and stats block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/full-pages/about-us-page/about-us-with-team-and-stats.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/full-pages/about-us-page/about-us-with-team-and-stats.tsx"
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
    "full-pages-about-us-page-about-us-with-two-column-grid-images-and-description":
      {
        name: "full-pages-about-us-page-about-us-with-two-column-grid-images-and-description",
        description:
          "A about us with two column grid images and description block.",
        type: "registry:block",
        registryDependencies: undefined,
        files: [
          {
            path: "registry/new-york-v4/blocks/full-pages/about-us-page/about-us-with-two-column-grid-images-and-description.tsx",
            type: "registry:block",
            target: "",
          },
        ],
        component: React.lazy(async () => {
          const mod = await import(
            "@/registry/new-york-v4/blocks/full-pages/about-us-page/about-us-with-two-column-grid-images-and-description.tsx"
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
