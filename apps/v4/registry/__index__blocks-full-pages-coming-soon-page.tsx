import * as React from "react"

export const IndexBlocksFullPagesComingSoonPage: Record<
  string,
  Record<string, any>
> = {
  "new-york-v4": {
    "full-pages-coming-soon-page-basic-coming-soon-page": {
      name: "full-pages-coming-soon-page-basic-coming-soon-page",
      description: "A basic coming soon page block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/full-pages/coming-soon-page/basic-coming-soon-page.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/full-pages/coming-soon-page/basic-coming-soon-page.tsx"
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
      readiness: "beta",
    },
    "full-pages-coming-soon-page-circular-countdown-coming-soon-page": {
      name: "full-pages-coming-soon-page-circular-countdown-coming-soon-page",
      description: "A circular countdown coming soon page block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/full-pages/coming-soon-page/circular-countdown-coming-soon-page.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/full-pages/coming-soon-page/circular-countdown-coming-soon-page.tsx"
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
      readiness: "beta",
    },
    "full-pages-coming-soon-page-dark-tailwinds-are-coming-soon": {
      name: "full-pages-coming-soon-page-dark-tailwinds-are-coming-soon",
      description: "A dark tailwinds are coming soon block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/full-pages/coming-soon-page/dark-tailwinds-are-coming-soon.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/full-pages/coming-soon-page/dark-tailwinds-are-coming-soon.tsx"
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
      readiness: "beta",
    },
    "full-pages-coming-soon-page-splitted-coming-soon-page": {
      name: "full-pages-coming-soon-page-splitted-coming-soon-page",
      description: "A splitted coming soon page block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/full-pages/coming-soon-page/splitted-coming-soon-page.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/full-pages/coming-soon-page/splitted-coming-soon-page.tsx"
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
      readiness: "beta",
    },
    "full-pages-coming-soon-page-tailwind-is-coming-soon": {
      name: "full-pages-coming-soon-page-tailwind-is-coming-soon",
      description: "A tailwind is coming soon block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/full-pages/coming-soon-page/tailwind-is-coming-soon.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/full-pages/coming-soon-page/tailwind-is-coming-soon.tsx"
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
      readiness: "beta",
    },
    "full-pages-coming-soon-page-tailwind-is-coming-soon-with-a-gradient-background":
      {
        name: "full-pages-coming-soon-page-tailwind-is-coming-soon-with-a-gradient-background",
        description:
          "A tailwind is coming soon with a gradient background block.",
        type: "registry:block",
        registryDependencies: undefined,
        files: [
          {
            path: "registry/new-york-v4/blocks/full-pages/coming-soon-page/tailwind-is-coming-soon-with-a-gradient-background.tsx",
            type: "registry:block",
            target: "",
          },
        ],
        component: React.lazy(async () => {
          const mod = await import(
            "@/registry/new-york-v4/blocks/full-pages/coming-soon-page/tailwind-is-coming-soon-with-a-gradient-background.tsx"
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
        readiness: "alpha",
      },
  },
}
