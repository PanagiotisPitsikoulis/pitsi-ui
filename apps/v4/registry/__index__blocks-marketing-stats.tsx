import * as React from "react"

export const IndexBlocksMarketingStats: Record<string, Record<string, any>> = {
  "new-york-v4": {
    "marketing-stats-a-snapshot-of-our-performance": {
      name: "marketing-stats-a-snapshot-of-our-performance",
      description: "A a snapshot of our performance block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/stats/a-snapshot-of-our-performance.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/stats/a-snapshot-of-our-performance.tsx"
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
    "marketing-stats-a-snapshot-of-our-performance-grid-stats": {
      name: "marketing-stats-a-snapshot-of-our-performance-grid-stats",
      description: "A a snapshot of our performance grid stats block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/stats/a-snapshot-of-our-performance-grid-stats.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/stats/a-snapshot-of-our-performance-grid-stats.tsx"
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
    "marketing-stats-breaking-down-the-stats-that-matter": {
      name: "marketing-stats-breaking-down-the-stats-that-matter",
      description: "A breaking down the stats that matter block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/stats/breaking-down-the-stats-that-matter.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/stats/breaking-down-the-stats-that-matter.tsx"
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
    "marketing-stats-company-total-growth-overview-stats": {
      name: "marketing-stats-company-total-growth-overview-stats",
      description: "A company total growth overview stats block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/stats/company-total-growth-overview-stats.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/stats/company-total-growth-overview-stats.tsx"
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
    "marketing-stats-heading-with-four-stats": {
      name: "marketing-stats-heading-with-four-stats",
      description: "A heading with four stats block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/stats/heading-with-four-stats.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/stats/heading-with-four-stats.tsx"
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
    "marketing-stats-horizontal-stats": {
      name: "marketing-stats-horizontal-stats",
      description: "A horizontal stats block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/stats/horizontal-stats.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/stats/horizontal-stats.tsx"
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
    "marketing-stats-horizontal-stats-with-card-style": {
      name: "marketing-stats-horizontal-stats-with-card-style",
      description: "A horizontal stats with card style block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/stats/horizontal-stats-with-card-style.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/stats/horizontal-stats-with-card-style.tsx"
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
    "marketing-stats-impressive-stats": {
      name: "marketing-stats-impressive-stats",
      description: "A impressive stats block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/stats/impressive-stats.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/stats/impressive-stats.tsx"
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
    "marketing-stats-key-metrics-driving-business-results": {
      name: "marketing-stats-key-metrics-driving-business-results",
      description: "A key metrics driving business results block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/stats/key-metrics-driving-business-results.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/stats/key-metrics-driving-business-results.tsx"
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
    "marketing-stats-key-stats-and-milestones-overview": {
      name: "marketing-stats-key-stats-and-milestones-overview",
      description: "A key stats and milestones overview block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/stats/key-stats-and-milestones-overview.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/stats/key-stats-and-milestones-overview.tsx"
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
    "marketing-stats-measuring-our-success": {
      name: "marketing-stats-measuring-our-success",
      description: "A measuring our success block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/stats/measuring-our-success.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/stats/measuring-our-success.tsx"
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
    "marketing-stats-our-growing-stats": {
      name: "marketing-stats-our-growing-stats",
      description: "A our growing stats block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/stats/our-growing-stats.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/stats/our-growing-stats.tsx"
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
    "marketing-stats-our-growth-in-numbers": {
      name: "marketing-stats-our-growth-in-numbers",
      description: "A our growth in numbers block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/stats/our-growth-in-numbers.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/stats/our-growth-in-numbers.tsx"
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
    "marketing-stats-our-growth-in-numbers-stats": {
      name: "marketing-stats-our-growth-in-numbers-stats",
      description: "A our growth in numbers stats block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/stats/our-growth-in-numbers-stats.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/stats/our-growth-in-numbers-stats.tsx"
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
    "marketing-stats-our-growth-stats-with-numbers": {
      name: "marketing-stats-our-growth-stats-with-numbers",
      description: "A our growth stats with numbers block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/stats/our-growth-stats-with-numbers.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/stats/our-growth-stats-with-numbers.tsx"
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
    "marketing-stats-our-impact-in-numbers": {
      name: "marketing-stats-our-impact-in-numbers",
      description: "A our impact in numbers block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/stats/our-impact-in-numbers.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/stats/our-impact-in-numbers.tsx"
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
    "marketing-stats-our-statistics-stats": {
      name: "marketing-stats-our-statistics-stats",
      description: "A our statistics stats block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/stats/our-statistics-stats.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/stats/our-statistics-stats.tsx"
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
    "marketing-stats-our-success-stats": {
      name: "marketing-stats-our-success-stats",
      description: "A our success stats block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/stats/our-success-stats.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/stats/our-success-stats.tsx"
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
    "marketing-stats-performance-insight-and-analytics": {
      name: "marketing-stats-performance-insight-and-analytics",
      description: "A performance insight and analytics block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/stats/performance-insight-and-analytics.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/stats/performance-insight-and-analytics.tsx"
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
    "marketing-stats-performance-metrics-stats": {
      name: "marketing-stats-performance-metrics-stats",
      description: "A performance metrics stats block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/stats/performance-metrics-stats.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/stats/performance-metrics-stats.tsx"
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
    "marketing-stats-performance-you-can-count-on": {
      name: "marketing-stats-performance-you-can-count-on",
      description: "A performance you can count on block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/stats/performance-you-can-count-on.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/stats/performance-you-can-count-on.tsx"
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
    "marketing-stats-project-stats-and-figma-included": {
      name: "marketing-stats-project-stats-and-figma-included",
      description: "A project stats and figma included block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/stats/project-stats-and-figma-included.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/stats/project-stats-and-figma-included.tsx"
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
    "marketing-stats-see-the-stats-behind-our-success": {
      name: "marketing-stats-see-the-stats-behind-our-success",
      description: "A see the stats behind our success block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/stats/see-the-stats-behind-our-success.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/stats/see-the-stats-behind-our-success.tsx"
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
    "marketing-stats-simple-stats-page": {
      name: "marketing-stats-simple-stats-page",
      description: "A simple stats page block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/stats/simple-stats-page.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/stats/simple-stats-page.tsx"
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
    "marketing-stats-split-stats-with-heading": {
      name: "marketing-stats-split-stats-with-heading",
      description: "A split stats with heading block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/stats/split-stats-with-heading.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/stats/split-stats-with-heading.tsx"
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
    "marketing-stats-split-with-heading": {
      name: "marketing-stats-split-with-heading",
      description: "A split with heading block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/stats/split-with-heading.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/stats/split-with-heading.tsx"
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
    "marketing-stats-stats-card-with-highlight": {
      name: "marketing-stats-stats-card-with-highlight",
      description: "A stats card with highlight block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/stats/stats-card-with-highlight.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/stats/stats-card-with-highlight.tsx"
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
    "marketing-stats-stats-with-background": {
      name: "marketing-stats-stats-with-background",
      description: "A stats with background block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/stats/stats-with-background.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/stats/stats-with-background.tsx"
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
    "marketing-stats-stats-with-border": {
      name: "marketing-stats-stats-with-border",
      description: "A stats with border block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/stats/stats-with-border.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/stats/stats-with-border.tsx"
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
    "marketing-stats-stats-with-border-and-actions": {
      name: "marketing-stats-stats-with-border-and-actions",
      description: "A stats with border and actions block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/stats/stats-with-border-and-actions.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/stats/stats-with-border-and-actions.tsx"
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
    "marketing-stats-stats-with-brand-logos": {
      name: "marketing-stats-stats-with-brand-logos",
      description: "A stats with brand logos block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/stats/stats-with-brand-logos.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/stats/stats-with-brand-logos.tsx"
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
    "marketing-stats-stats-with-card-layout": {
      name: "marketing-stats-stats-with-card-layout",
      description: "A stats with card layout block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/stats/stats-with-card-layout.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/stats/stats-with-card-layout.tsx"
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
    "marketing-stats-stats-with-creative-card-design": {
      name: "marketing-stats-stats-with-creative-card-design",
      description: "A stats with creative card design block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/stats/stats-with-creative-card-design.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/stats/stats-with-creative-card-design.tsx"
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
    "marketing-stats-stats-with-creative-design": {
      name: "marketing-stats-stats-with-creative-design",
      description: "A stats with creative design block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/stats/stats-with-creative-design.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/stats/stats-with-creative-design.tsx"
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
    "marketing-stats-stats-with-custom-colour": {
      name: "marketing-stats-stats-with-custom-colour",
      description: "A stats with custom colour block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/stats/stats-with-custom-colour.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/stats/stats-with-custom-colour.tsx"
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
    "marketing-stats-stats-with-custom-icon": {
      name: "marketing-stats-stats-with-custom-icon",
      description: "A stats with custom icon block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/stats/stats-with-custom-icon.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/stats/stats-with-custom-icon.tsx"
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
    "marketing-stats-stats-with-horizontal-description": {
      name: "marketing-stats-stats-with-horizontal-description",
      description: "A stats with horizontal description block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/stats/stats-with-horizontal-description.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/stats/stats-with-horizontal-description.tsx"
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
    "marketing-stats-stats-with-icon-background": {
      name: "marketing-stats-stats-with-icon-background",
      description: "A stats with icon background block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/stats/stats-with-icon-background.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/stats/stats-with-icon-background.tsx"
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
    "marketing-stats-stats-with-indicators": {
      name: "marketing-stats-stats-with-indicators",
      description: "A stats with indicators block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/stats/stats-with-indicators.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/stats/stats-with-indicators.tsx"
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
    "marketing-stats-tailwind-css-horizontal-stats-section": {
      name: "marketing-stats-tailwind-css-horizontal-stats-section",
      description: "A tailwind css horizontal stats section block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/stats/tailwind-css-horizontal-stats-section.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/stats/tailwind-css-horizontal-stats-section.tsx"
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
    "marketing-stats-tailwind-css-impressive-stats": {
      name: "marketing-stats-tailwind-css-impressive-stats",
      description: "A tailwind css impressive stats block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/stats/tailwind-css-impressive-stats.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/stats/tailwind-css-impressive-stats.tsx"
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
    "marketing-stats-tailwind-css-stats-with-performance": {
      name: "marketing-stats-tailwind-css-stats-with-performance",
      description: "A tailwind css stats with performance block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/stats/tailwind-css-stats-with-performance.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/stats/tailwind-css-stats-with-performance.tsx"
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
    "marketing-stats-tailwind-css-stats-with-stats": {
      name: "marketing-stats-tailwind-css-stats-with-stats",
      description: "A tailwind css stats with stats block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/stats/tailwind-css-stats-with-stats.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/stats/tailwind-css-stats-with-stats.tsx"
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
    "marketing-stats-tailwind-stats-card": {
      name: "marketing-stats-tailwind-stats-card",
      description: "A tailwind stats card block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/stats/tailwind-stats-card.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/stats/tailwind-stats-card.tsx"
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
    "marketing-stats-tailwind-stats-our-journey-in-figures": {
      name: "marketing-stats-tailwind-stats-our-journey-in-figures",
      description: "A tailwind stats our journey in figures block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/stats/tailwind-stats-our-journey-in-figures.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/stats/tailwind-stats-our-journey-in-figures.tsx"
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
    "marketing-stats-tailwind-tracking-growth-success-stats": {
      name: "marketing-stats-tailwind-tracking-growth-success-stats",
      description: "A tailwind tracking growth success stats block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/stats/tailwind-tracking-growth-success-stats.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/stats/tailwind-tracking-growth-success-stats.tsx"
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
    "marketing-stats-the-data-speaks-for-itself-stats": {
      name: "marketing-stats-the-data-speaks-for-itself-stats",
      description: "A the data speaks for itself stats block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/stats/the-data-speaks-for-itself-stats.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/stats/the-data-speaks-for-itself-stats.tsx"
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
    "marketing-stats-vertical-stats": {
      name: "marketing-stats-vertical-stats",
      description: "A vertical stats block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/marketing/stats/vertical-stats.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/marketing/stats/vertical-stats.tsx"
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
