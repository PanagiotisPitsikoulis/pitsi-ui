import * as React from "react"

export const IndexBlocksECommerceOrderTracking: Record<
  string,
  Record<string, any>
> = {
  "new-york-v4": {
    "e-commerce-order-tracking-default-order-tracking": {
      name: "e-commerce-order-tracking-default-order-tracking",
      description: "A default order tracking block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/order-tracking/default-order-tracking.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/order-tracking/default-order-tracking.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["e-commerce"],
      meta: undefined,
      tier: "free",
    },
    "e-commerce-order-tracking-order-tracking-with-cards": {
      name: "e-commerce-order-tracking-order-tracking-with-cards",
      description: "A order tracking with cards block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/order-tracking/order-tracking-with-cards.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/order-tracking/order-tracking-with-cards.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["e-commerce"],
      meta: undefined,
      tier: "free",
    },
    "e-commerce-order-tracking-order-tracking-with-cta": {
      name: "e-commerce-order-tracking-order-tracking-with-cta",
      description: "A order tracking with cta block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/order-tracking/order-tracking-with-cta.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/order-tracking/order-tracking-with-cta.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["e-commerce"],
      meta: undefined,
      tier: "free",
    },
    "e-commerce-order-tracking-order-tracking-with-horizontal-steps": {
      name: "e-commerce-order-tracking-order-tracking-with-horizontal-steps",
      description: "A order tracking with horizontal steps block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/order-tracking/order-tracking-with-horizontal-steps.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/order-tracking/order-tracking-with-horizontal-steps.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["e-commerce"],
      meta: undefined,
      tier: "pro",
    },
    "e-commerce-order-tracking-order-tracking-with-location-indication": {
      name: "e-commerce-order-tracking-order-tracking-with-location-indication",
      description: "A order tracking with location indication block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/order-tracking/order-tracking-with-location-indication.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/order-tracking/order-tracking-with-location-indication.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["e-commerce"],
      meta: undefined,
      tier: "pro",
    },
    "e-commerce-order-tracking-order-tracking-with-map-indication": {
      name: "e-commerce-order-tracking-order-tracking-with-map-indication",
      description: "A order tracking with map indication block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/order-tracking/order-tracking-with-map-indication.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/order-tracking/order-tracking-with-map-indication.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["e-commerce"],
      meta: undefined,
      tier: "pro",
    },
    "e-commerce-order-tracking-order-tracking-with-progress-indication": {
      name: "e-commerce-order-tracking-order-tracking-with-progress-indication",
      description: "A order tracking with progress indication block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/order-tracking/order-tracking-with-progress-indication.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/order-tracking/order-tracking-with-progress-indication.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["e-commerce"],
      meta: undefined,
      tier: "pro",
    },
    "e-commerce-order-tracking-order-tracking-with-vertical-timeline": {
      name: "e-commerce-order-tracking-order-tracking-with-vertical-timeline",
      description: "A order tracking with vertical timeline block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/order-tracking/order-tracking-with-vertical-timeline.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/order-tracking/order-tracking-with-vertical-timeline.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["e-commerce"],
      meta: undefined,
      tier: "pro",
    },
    "e-commerce-order-tracking-side-by-side-order-tracking": {
      name: "e-commerce-order-tracking-side-by-side-order-tracking",
      description: "A side by side order tracking block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/order-tracking/side-by-side-order-tracking.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/order-tracking/side-by-side-order-tracking.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["e-commerce"],
      meta: undefined,
      tier: "pro",
    },
    "e-commerce-order-tracking-vertical-order-tracking-timeline": {
      name: "e-commerce-order-tracking-vertical-order-tracking-timeline",
      description: "A vertical order tracking timeline block.",
      type: "registry:block",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/blocks/e-commerce/order-tracking/vertical-order-tracking-timeline.tsx",
          type: "registry:block",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/blocks/e-commerce/order-tracking/vertical-order-tracking-timeline.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: ["e-commerce"],
      meta: undefined,
      tier: "pro",
    },
  },
}
