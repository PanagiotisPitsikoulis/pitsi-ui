import * as React from "react"

export const IndexBlocksMarketingHowItWorks: Record<
  string,
  Record<string, any>
> = {
  "new-york-v4": {
    "marketing-how-it-works-default-how-it-works": {
      name: "marketing-how-it-works-default-how-it-works",
      description: "A default how it works block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/how-it-works/default-how-it-works.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/how-it-works/default-how-it-works.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["marketing"],
      meta: undefined,
      tier: "free",
    },
    "marketing-how-it-works-horizontal-how-it-works-steps": {
      name: "marketing-how-it-works-horizontal-how-it-works-steps",
      description: "A horizontal how it works steps block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/how-it-works/horizontal-how-it-works-steps.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/how-it-works/horizontal-how-it-works-steps.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["marketing"],
      meta: undefined,
      tier: "free",
    },
    "marketing-how-it-works-how-it-works-cards-with-illustrations": {
      name: "marketing-how-it-works-how-it-works-cards-with-illustrations",
      description: "A how it works cards with illustrations block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/how-it-works/how-it-works-cards-with-illustrations.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/how-it-works/how-it-works-cards-with-illustrations.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["marketing"],
      meta: undefined,
      tier: "free",
    },
    "marketing-how-it-works-how-it-works-cards-with-images": {
      name: "marketing-how-it-works-how-it-works-cards-with-images",
      description: "A how it works cards with images block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/how-it-works/how-it-works-cards-with-images.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/how-it-works/how-it-works-cards-with-images.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["marketing"],
      meta: undefined,
      tier: "free",
    },
    "marketing-how-it-works-how-it-works-in-dark-mode": {
      name: "marketing-how-it-works-how-it-works-in-dark-mode",
      description: "A how it works in dark mode block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/how-it-works/how-it-works-in-dark-mode.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/how-it-works/how-it-works-in-dark-mode.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["marketing"],
      meta: undefined,
      tier: "free",
    },
    "marketing-how-it-works-how-it-works-with-cards": {
      name: "marketing-how-it-works-how-it-works-with-cards",
      description: "A how it works with cards block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/how-it-works/how-it-works-with-cards.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/how-it-works/how-it-works-with-cards.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["marketing"],
      meta: undefined,
      tier: "pro",
    },
    "marketing-how-it-works-how-it-works-with-creative-illustration": {
      name: "marketing-how-it-works-how-it-works-with-creative-illustration",
      description: "A how it works with creative illustration block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/how-it-works/how-it-works-with-creative-illustration.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/how-it-works/how-it-works-with-creative-illustration.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["marketing"],
      meta: undefined,
      tier: "pro",
    },
    "marketing-how-it-works-how-it-works-with-horizontal-progression": {
      name: "marketing-how-it-works-how-it-works-with-horizontal-progression",
      description: "A how it works with horizontal progression block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/how-it-works/how-it-works-with-horizontal-progression.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/how-it-works/how-it-works-with-horizontal-progression.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["marketing"],
      meta: undefined,
      tier: "pro",
    },
    "marketing-how-it-works-how-it-works-with-icons": {
      name: "marketing-how-it-works-how-it-works-with-icons",
      description: "A how it works with icons block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/how-it-works/how-it-works-with-icons.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/how-it-works/how-it-works-with-icons.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["marketing"],
      meta: undefined,
      tier: "pro",
    },
    "marketing-how-it-works-how-it-works-with-illustration": {
      name: "marketing-how-it-works-how-it-works-with-illustration",
      description: "A how it works with illustration block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/how-it-works/how-it-works-with-illustration.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/how-it-works/how-it-works-with-illustration.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["marketing"],
      meta: undefined,
      tier: "pro",
    },
    "marketing-how-it-works-how-it-works-with-the-cta": {
      name: "marketing-how-it-works-how-it-works-with-the-cta",
      description: "A how it works with the cta block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/how-it-works/how-it-works-with-the-cta.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/how-it-works/how-it-works-with-the-cta.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["marketing"],
      meta: undefined,
      tier: "pro",
    },
    "marketing-how-it-works-how-it-works-with-the-grid-layout": {
      name: "marketing-how-it-works-how-it-works-with-the-grid-layout",
      description: "A how it works with the grid layout block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/how-it-works/how-it-works-with-the-grid-layout.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/how-it-works/how-it-works-with-the-grid-layout.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["marketing"],
      meta: undefined,
      tier: "pro",
    },
    "marketing-how-it-works-side-by-side-how-it-works-blocks": {
      name: "marketing-how-it-works-side-by-side-how-it-works-blocks",
      description: "A side by side how it works blocks block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/how-it-works/side-by-side-how-it-works-blocks.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/how-it-works/side-by-side-how-it-works-blocks.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["marketing"],
      meta: undefined,
      tier: "pro",
    },
    "marketing-how-it-works-splitted-how-it-works-blocks": {
      name: "marketing-how-it-works-splitted-how-it-works-blocks",
      description: "A splitted how it works blocks block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/how-it-works/splitted-how-it-works-blocks.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/how-it-works/splitted-how-it-works-blocks.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["marketing"],
      meta: undefined,
      tier: "pro",
    },
    "marketing-how-it-works-vertical-how-it-works-cards": {
      name: "marketing-how-it-works-vertical-how-it-works-cards",
      description: "A vertical how it works cards block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/how-it-works/vertical-how-it-works-cards.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/how-it-works/vertical-how-it-works-cards.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["marketing"],
      meta: undefined,
      tier: "pro",
    },
  },
}
