// @ts-nocheck
import * as React from "react"

export const IndexHook: Record<string, Record<string, any>> = {
  "new-york-v4": {
    "use-animation-state": {
      name: "use-animation-state",
      description:
        "Hook for managing animation state with mobile detection and scroll-based animations.",
      type: "registry:hook",
      registryDependencies: ["use-mobile"],
      files: [
        {
          path: "registry/new-york-v4/hooks/use-animation-state.tsx",
          type: "registry:hook",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/hooks/use-animation-state.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: undefined,
      meta: undefined,
      tier: undefined,
    },
    "use-colors": {
      name: "use-colors",
      description:
        "Hook for managing color format preferences and last copied color.",
      type: "registry:hook",
      registryDependencies: ["use-mounted"],
      files: [
        {
          path: "registry/new-york-v4/hooks/use-colors.ts",
          type: "registry:hook",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import("@/registry/new-york-v4/hooks/use-colors.ts")
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: undefined,
      meta: undefined,
      tier: undefined,
    },
    "use-config": {
      name: "use-config",
      description: "Hook for managing configuration state.",
      type: "registry:hook",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/hooks/use-config.ts",
          type: "registry:hook",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import("@/registry/new-york-v4/hooks/use-config.ts")
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: undefined,
      meta: undefined,
      tier: undefined,
    },
    "use-copy-to-clipboard": {
      name: "use-copy-to-clipboard",
      description:
        "Hook for copying text to clipboard with optional timeout and callback.",
      type: "registry:hook",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/hooks/use-copy-to-clipboard.ts",
          type: "registry:hook",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/hooks/use-copy-to-clipboard.ts"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: undefined,
      meta: undefined,
      tier: undefined,
    },
    "use-layout": {
      name: "use-layout",
      description:
        "Hook and provider for managing layout state (fixed or full) with localStorage persistence.",
      type: "registry:hook",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/hooks/use-layout.tsx",
          type: "registry:hook",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import("@/registry/new-york-v4/hooks/use-layout.tsx")
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: undefined,
      meta: undefined,
      tier: undefined,
    },
    "use-media-query": {
      name: "use-media-query",
      description: "Hook for detecting media query matches.",
      type: "registry:hook",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/hooks/use-media-query.tsx",
          type: "registry:hook",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/hooks/use-media-query.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: undefined,
      meta: undefined,
      tier: undefined,
    },
    "use-meta-color": {
      name: "use-meta-color",
      description: "Hook for managing meta theme color based on current theme.",
      type: "registry:hook",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/hooks/use-meta-color.ts",
          type: "registry:hook",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/hooks/use-meta-color.ts"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: undefined,
      meta: undefined,
      tier: undefined,
    },
    "use-mobile": {
      name: "use-mobile",
      description: "Hook for detecting mobile devices using media query.",
      type: "registry:hook",
      registryDependencies: ["use-media-query"],
      files: [
        {
          path: "registry/new-york-v4/hooks/use-mobile.ts",
          type: "registry:hook",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import("@/registry/new-york-v4/hooks/use-mobile.ts")
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: undefined,
      meta: undefined,
      tier: undefined,
    },
    "use-mounted": {
      name: "use-mounted",
      description: "Hook for detecting if component is mounted (client-side).",
      type: "registry:hook",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/hooks/use-mounted.ts",
          type: "registry:hook",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import("@/registry/new-york-v4/hooks/use-mounted.ts")
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: undefined,
      meta: undefined,
      tier: undefined,
    },
    "use-mutation-observer": {
      name: "use-mutation-observer",
      description:
        "Hook for observing DOM mutations using MutationObserver API.",
      type: "registry:hook",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/hooks/use-mutation-observer.ts",
          type: "registry:hook",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/hooks/use-mutation-observer.ts"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: undefined,
      meta: undefined,
      tier: undefined,
    },
    "use-tab-observer": {
      name: "use-tab-observer",
      description: "Hook for observing active tab changes in tab components.",
      type: "registry:hook",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/hooks/use-tab-observer.ts",
          type: "registry:hook",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/hooks/use-tab-observer.ts"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: undefined,
      meta: undefined,
      tier: undefined,
    },
    "use-content-pagination": {
      name: "use-content-pagination",
      description:
        "Hook for infinite scroll pagination of content items with automatic loading on scroll.",
      type: "registry:hook",
      registryDependencies: undefined,
      files: [
        {
          path: "registry/new-york-v4/hooks/use-content-pagination.tsx",
          type: "registry:hook",
          target: "",
        },
      ],
      component: React.lazy(async () => {
        const mod = await import(
          "@/registry/new-york-v4/hooks/use-content-pagination.tsx"
        )
        const exportName =
          Object.keys(mod).find(
            (key) =>
              typeof mod[key] === "function" || typeof mod[key] === "object"
          ) || item.name
        return { default: mod.default || mod[exportName] }
      }),
      categories: undefined,
      meta: undefined,
      tier: undefined,
    },
  },
}
